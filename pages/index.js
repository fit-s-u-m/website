import Link from "next/link";
import Image from 'next/image'
import Icon from "../components/title";
import Nav from "../components/homeNav";
import {Pixelify_Sans} from "next/font/google";

const inter = Pixelify_Sans({ weight: ["400"], subsets: ["latin"],variable:'--font-head' });

export default function Home() {
  return (
    <>
      <Icon />
			<Nav/>

      <div className="main" >
        <p className={`${inter.variable} text-center m-20 text-9xl`}>
          Hello we are Nehemiah we make education fun
        </p>
				<p className="text-9xl text-center"> heloo</p>
      </div>
    </>
  );
}
