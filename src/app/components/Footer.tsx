import { Dancing_Script, Caveat } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: "400" });

const Footer = () => {
  return (
    <div className={`px-5 flex justify-end`}>
      <p className={`text-sm tracking-widest font-bold ${dancing.className}`}>
        Jagath
      </p>
    </div>
  );
};

export default Footer;
