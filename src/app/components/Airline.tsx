import { getName } from "country-list";
const lookup = require("country-code-lookup");

interface AirlineProps {
  airline: Airline;
}

const Airline = ({ airline }: AirlineProps) => {
  const country_response = lookup.byIso(airline.alpha3countryCode);

  return (
    <div className="flex mt-10 px-40 items-center h-full mx-auto">
      <div className="flex justify-center gap-x-5">
        <div className="text-right flex flex-col gap-y-4">
          <h2 className="font-bold text-2xl">ICAO CODE</h2>
          <h2 className="font-bold text-2xl">IATA CODE</h2>
          <h2 className="font-bold text-2xl">NAME</h2>
          <h2 className="font-bold text-2xl">COUNTRY</h2>
        </div>

        <div className="text-left gap-y-4 flex flex-col h-full">
          <h2 className="text-amber-500 font-bold text-2xl">
            {airline?.icaoCode}
          </h2>
          <h2 className="text-amber-500 font-bold text-2xl">
            {airline?.iataCode}
          </h2>
          <h2 className="text-amber-500 font-bold text-2xl">{airline?.name}</h2>
          <h2 className="text-amber-500 font-bold text-2xl">
            {country_response.country}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Airline;
