import Icon from "../../components/title";
import Nav from "../../components/homeNav";
import Image from "next/image";
import { Indie_Flower } from "next/font/google";
import {lazy} from "react";
const pF = Indie_Flower({ weight: "400", subsets: ["latin"] });

export default function Trig() {
  return (
    <>
      <Icon />
      <Nav />
      <h1 className="head">Trigonometry</h1>
      <div className={`${pF.className} blogText`}>
        <h2 className="underline text-3xl my-5">Intro</h2>
        <p>Trigonometry is an old subject.</p>

        <p className="m-4">
          Trigonometry is a branch of mathematics concerned with relationships
          between <span className="highlight"> angles</span> and{" "}
          <span className="highlight">ratios</span> of lengths. The field
          emerged in the Hellenistic world during the{" "}
          <span className="highlight">3rd century BC </span> from applications
          of geometry to astronomical studies.
        </p>

        <p className="underline my-2  italic">
          And so why do we learn this old science (field)?
        </p>

        <ul className="list-disc mx-5">
          <li>
            <p className="text-lime-600 my-5 underline">
              Trig helps to navigate our way
            </p>
            <p>
              Any kind of navigation <span className="highlight">Airplane</span>
              , <span className="highlight">Ships </span> they use trigonometry
              alot.This is mainly because our coordinate system is based on it
              <Image
                src="/trig/coordinate.png"
                width={600}
                height={600}
                alt="coordinate system and trigonometry"
                className="my-5"
								loading="lazy"
              />
            </p>
            <p>x = r*cos(theta) y = r*sin(theta)</p>
          </li>

          <li>
            <p className="text-lime-600 my-5 underline">
              Trig helps to understand waves
            </p>
            <Image
              src="/trig/waves.jpg"
              width={600}
              height={600}
              alt="waves"
              className="my-5"
							loading="lazy"
            />
            <p>I mean any kind of wave water, light, sound(music), etc...</p>
            <p>
              So to understand and analyse waves mathematically we need to
              express them as sinusoidal trigonometric function. we will see
              this more in detail
            </p>
          </li>

          <li>
            <p className="text-lime-600 my-5 underline">
              Calculate the height of things
            </p>
            <Image
              src="/trig/mountain.png"
              width={600}
              height={600}
              alt="Calculate mountain height"
              className="my-5"
							loading="lazy"
            />
            <p>
              You can calculate the height of the mountain by measuring the
              distance <span className="highlight">a & b</span> and also the
              angles <span className="highlight"> alpha and beta </span>
              by using trigonometry
            </p>
          </li>

          <li>
            <p className="text-lime-600 m-5 underline">
              Ancient way of calculating radius of earth
            </p>
            <Image
              src="/trig/radius-of-earth.jpg"
              width={600}
              height={600}
              alt="Calculate radius of earth"
              className="my-5"
							loading="lazy"
            />
            <p>
              This method was very simple yet accurate, requiring just four
              measurements in all to be taken and then applying a trigonometric
              equation to arrive at the solution.
            </p>
          </li>
        </ul>

				<p className="my-10 mx-3 underline highlight text-2xl">Lets learn this very usefull concept</p>
				<p>
					Trigonometry consists of six function  
				</p>
				<div className="mx-3">
					<ol className="list-decimal mx-7">
						<li>sin</li>
						<li>cosin</li>
						<li> tan</li>
					and their resprocals
						<li>csecant</li>
						<li>secan</li>
						<li>cotanget</li>
					</ol>
				</div>



      </div>
    </>
  );
}
