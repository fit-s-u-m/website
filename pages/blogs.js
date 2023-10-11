import Icon from "../components/title";
import Nav from "../components/homeNav";
import Link from "next/link";
import { Indie_Flower } from "next/font/google";
import Image from "next/image";
const pF = Indie_Flower({ weight: "400", subsets: ["latin"] });

export default function Blog() {
  return (
    <>
      <Icon />
			<Nav/>

      <div id="blog_b">
        <h1 className="head">Blog</h1>

        <div className={`${pF.className} blogText`}>

          <div id="maths">
            <h1 className="blog_h"> Maths</h1>
							<ol type="1">
								<li>
									<h2>Trigonometry</h2>
									<Link href="/maths/trig">
									<Image src="/img/trig.png" width={100} height={100} alt="shpere Trigonometry wittern on it"/>
									</Link>
								</li>
								<li>
									<h2>Complex num</h2>
								</li>
							</ol>
						</div>

          <div id="physics">
            <h1 className="blog_h"> Physics</h1>
							<ol type="1">
								<li>
									<h2></h2>
								</li>
								<li>
									<h2> </h2>
								</li>
							</ol>
						</div>

          <div id="programming">
            <h1 className="blog_h"> Programming</h1>
							<ol type="1">
								<li>
									<h2>functional programming</h2>
								</li>
								<li>
									<h2>haskell</h2>
								</li>
							</ol>
						</div>

          <div id="history">
            <h1 className="blog_h"> History</h1>
							<ol type="1">
								<li>
									<h2></h2>
								</li>
								<li>
									<h2></h2>
								</li>
							</ol>
						</div>

        </div>
      </div>
    </>
  );
}
