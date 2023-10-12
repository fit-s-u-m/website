import Link from "next/link";
import Image from 'next/image'
import Icon from "../components/title";
import Nav from "../components/homeNav";
import {Pixelify_Sans} from "next/font/google";

const inter = Pixelify_Sans({ weight: ["400"], subsets: ["latin"],variable:'--font-head' ,display: 'swap'});

// TODO: do this and that
export default function Home() {
  return (
    <>
      <Icon />
			<Nav/>

      <div className="main" >
        <p className={`${inter.variable} text-center m-20 text-6xl`}>
          Hello we are Nehemiah we make education fun
        </p>
      </div>
    </>
  );
}
function sayHello(params) {
}
