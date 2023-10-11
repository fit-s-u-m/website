import Icon from "../../components/title";
import Nav from "../../components/homeNav";
import { Indie_Flower } from "next/font/google";
const pF = Indie_Flower({ weight: "400", subsets: ["latin"] });

export default function Trig() {
  return (
    <>
      <Icon />
      <Nav />
      <h1 class="head">Trigonometry</h1>
      <div className={`${pF.className} blogText`}>
        <h2 className="underline text-3xl my-5">Intro</h2>
        <p >Trigonometry is an old subject.</p>

        <p >
          Trigonometry is a branch of mathematics concerned
          with relationships between  <span className="highlight"> angles</span>  and <span className="highlight">ratios</span>  of lengths. The field
          emerged in the Hellenistic world during the <span className="highlight">3rd century BC </span> from
          applications of geometry to astronomical studies.
					
        </p>
				<p className="underline my-2 ">
					And so why do we learn this old science (field) ?
				</p>
      </div>
    </>
  );
}
