type KeysProps = {
  api_key: string;
  api_host: string;
};

type Airport = {
  alpha2countryCode: string;
  iataCode: string;
  icaoCode: string;
  latitude: number;
  longitude: number;
  name: string;
};

type Airline = {
  alpha3countryCode: string;
  callSign: string;
  iataCode: string;
  icaoCode: string;
  name: string;
};

type AirportJSON = {
  id: number;
  ident: string;
  type: string;
  name: string;
  latitude_deg: string;
  longitude_deg: string;
  elevation_ft: number;
  continent: string;
  iso_country: string;
  iso_region: string;
  municipality: string;
  scheduled_service: string;
  gps_code: string;
  iata_code: string;
  local_code: string;
  home_link: string;
  wikipedia_link: string;
  keywords: string;
};
