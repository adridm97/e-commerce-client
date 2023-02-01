import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>Estamos en el cliente de next</h1>
      </div>
    </>
  );
}
