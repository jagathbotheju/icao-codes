import airportsJSON from "../data/airports.json";

const getAirport = (searchTerm: string) => {
  const data = airportsJSON as AirportJSON[];

  if (searchTerm.length === 3) {
    console.log(searchTerm);
    const iata = data.find(
      (location: AirportJSON) => location.iata_code === searchTerm.toUpperCase()
    );
    if (iata) return iata;
  } else if (searchTerm.length === 4) {
    const icao = data.find(
      (location: AirportJSON) => location.ident === searchTerm.toUpperCase()
    );
    if (icao) return icao;
  } else {
    return null;
  }

  return null;
};

export default getAirport;
