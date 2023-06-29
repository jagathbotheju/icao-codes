import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div
      className={`w-full py-4 px-10 z-10 bg-gray-700 text-amber-600 ${orbitron.className}`}
    >
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl tracking-wide">AVIATION CODES</h1>
      </div>
    </div>
  );
};

export default Navbar;
