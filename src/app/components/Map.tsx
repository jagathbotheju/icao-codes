import { ReactBingmaps } from "react-bingmaps";

interface Props {
  lat: string;
  long: string;
}

const Map = ({ lat, long }: Props) => {
  return (
    <div className="w-[40%] h-[400px] flex flex-1 rounded-md">
      <ReactBingmaps
        bingmapKey="ApQRSJvei-xe9ELezt_Rb2DkxnJEn8Goka0bm7oDojm0zTyiVd5g7-VzMzIruDH1"
        center={[Number(`${lat}`), Number(`${long}`)]}
        disableStreetside={true}
        navigationBarMode={"compact"}
        pushPins={[
          {
            location: [Number(`${lat}`) ?? 0, Number(`${long}`) ?? 0],
            option: { color: "red" },
          },
        ]}
      ></ReactBingmaps>
    </div>
  );
};

export default Map;
