import Link from "next/link";
import Image from 'next/image'
import Icon from "../components/title";
import Nav from "../components/homeNav";
import {Pixelify_Sans} from "next/font/google";

const inter = Pixelify_Sans({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Icon />
			<Nav/>

      <div className="main" >
        <p className={inter.className} id= "mainText">
          Hello we are Nehemiah we make education fun
        </p>
      </div>
			<div className="main">
				<p>test</p>
			</div>
    </>
  );
}
