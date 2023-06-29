"use client";

import { useEffect, useState } from "react";
import OptionSelection from "./OptionSelection";
import axios from "axios";
import { toast } from "react-toastify";
import Airport from "./Airport";
import Image from "next/image";
import Airline from "./Airline";
import getAirport from "../utils/useAirport";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { PuffLoader } from "react-spinners";

const searchOptions = ["AIRPORT", "AIRLINE"];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState(searchOptions[0]);
  const [keys, setKeys] = useState<KeysProps>();
  const [mounted, setMounted] = useState(false);
  const [airport, setAirport] = useState<AirportJSON | null>(null);
  const [airline, setAirline] = useState<Airline | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) return toast.error("Please provide Search Term");
    const headers = {
      "X-RapidAPI-Key": keys?.api_key,
      "X-RapidAPI-Host": keys?.api_host,
    };

    if (option === "AIRPORT") {
      setLoading(true);
      const airport = getAirport(searchTerm);
      if (airport) {
        setAirport(airport);
        setAirline(null);
        setLoading(false);
      } else {
        setLoading(false);
        return toast.error("Location Not Found");
      }
    }

    if (option === "AIRLINE") {
      setLoading(true);
      axios
        .get(
          `https://aviation-reference-data.p.rapidapi.com/airline/${searchTerm.toUpperCase()}`,
          {
            headers,
          }
        )
        .then((res) => {
          const data = res.data;
          setAirline(data);
          setAirport(null);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          return toast.error("Location Not Found");
        });
    }
  };

  useEffect(() => {
    if (!mounted) setMounted(true);
    axios.get("/api/keys").then((res) => {
      const keys: KeysProps = res.data;
      setKeys(keys);
    });
  }, [mounted]);

  return (
    <div className="w-full flex flex-col h-full">
      <div className="relative w-full h-full">
        <div className="absolute inset-0">
          <Image
            className="object-cover"
            fill
            alt="background"
            src="/images/plane-1.jpg"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full h-[350px] flex justify-center items-end"
        >
          <div className="flex flex-row gap-2 mb-10 w-[60%] items-center justify-center z-10">
            {/* options */}
            <OptionSelection
              option={option}
              setOption={setOption}
              searchOptions={searchOptions}
            />

            <div className="w-full flex justify-between items-center relative">
              <input
                type="text"
                value={searchTerm.toUpperCase()}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search ICAO / IATA"
                className="px-4 py-2 w-full outline-none rounded-md font-semibold border"
              />
              {searchTerm && (
                <AiOutlineCloseCircle
                  onClick={() => {
                    setSearchTerm("");
                    setAirline(null);
                    setAirport(null);
                  }}
                  className="absolute right-2 cursor-pointer"
                  size={20}
                />
              )}
            </div>

            {/* search */}
            <button
              type="submit"
              className="bg-white border rounded-md py-2 px-4 font-semibold"
            >
              SEARCH
            </button>
          </div>
        </form>
      </div>

      {loading ? (
        <>
          <div className="h-full w-full flex items-center justify-center mt-10">
            <PuffLoader size={45} className="text-amber-500" />
          </div>
        </>
      ) : (
        <>
          <div className="h-full w-full">
            {airport && <Airport airport={airport} />}
            {airline && <Airline airline={airline} />}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
