import Map from "./Map";
import Link from "next/link";
const lookup = require("country-code-lookup");

interface AirportProps {
  airport: AirportJSON;
}

const Airport = ({ airport }: AirportProps) => {
  const country_response = lookup.byIso(airport.iso_country);

  return (
    <div className="flex flex-col md:flex-row mt-5 md:px-10 md:items-center h-full">
      <div className="flex pt-5 px-10 flex-1 flex-col gap-y-6">
        {/* basic info */}
        <div className="grid grid-cols-6 grid-flow-row">
          <h2 className="font-bold text-2xl col-span-2 justify-self-start">
            ICAO CODE
          </h2>
          <h2 className="text-amber-500 font-bold text-2xl col-span-4 justify-self-start">
            {airport?.ident}
          </h2>
          <h2 className="font-bold text-2xl col-span-2 justify-self-start">
            IATA CODE
          </h2>
          <h2 className="text-amber-500 font-bold text-2xl col-span-4">
            {airport?.iata_code}
          </h2>
          <h2 className="font-bold text-2xl col-span-2 justify-self-start">
            NAME
          </h2>
          <h2 className="text-amber-500 font-bold text-2xl col-span-4">
            {airport?.name}
          </h2>
          <h2 className="font-bold text-2xl col-span-2 justify-self-start">
            COUNTRY
          </h2>
          <h2 className="text-amber-500 font-bold text-2xl col-span-4">
            {country_response.country}
          </h2>
        </div>

        {/* additional info */}
        <div className="grid grid-cols-4 grid-flow-row">
          <p className="font-semibold text-base">Latitude</p>
          <p className="text-sm text-amber-500 col-span-3 font-semibold">
            {airport.latitude_deg}
          </p>

          <p className="font-semibold text-base">Longitude</p>
          <p className="text-sm text-amber-500 col-span-3 font-semibold">
            {airport.longitude_deg}
          </p>

          <p className="font-semibold text-base">Elevation</p>
          <p className="text-sm text-amber-500 col-span-3 font-semibold">
            {`${airport.elevation_ft} ft`}
          </p>

          {airport.home_link && <p className="font-semibold text-base">web</p>}
          {airport.home_link && (
            <Link
              href={airport.home_link}
              className="col-span-3"
              target="_blank"
            >
              <p className="text-sm text-amber-500 truncate font-semibold">
                {airport.home_link}{" "}
              </p>
            </Link>
          )}

          {airport.wikipedia_link && (
            <p className="font-semibold text-base">wiki</p>
          )}
          {airport.wikipedia_link && (
            <Link
              href={airport.wikipedia_link}
              className="col-span-3"
              target="_blank"
            >
              <p className="text-sm text-amber-500 truncate font-semibold">
                {airport.wikipedia_link}
              </p>
            </Link>
          )}
        </div>
      </div>

      {/* map */}
      <div className="pt-5 px-10 flex flex-1">
        <Map lat={airport?.latitude_deg} long={airport?.longitude_deg} />
      </div>
    </div>
  );
};

export default Airport;
