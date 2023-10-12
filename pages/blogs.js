import Icon from "../components/title";
import Nav from "../components/homeNav";
import Link from "next/link";
import Image from "next/image";
import { Indie_Flower } from "next/font/google";
const pF = Indie_Flower({ weight: "400", subsets: ["latin"],variable:'--font-blog' });

export default function Blog() {
  return (
    <>
      <Icon />
			<Nav/>

      <div id="blog_b">
        <h1 className="head">Blog</h1>

        <div className= "mx-10 text-2xl">

          <div className="my-14">
            <h1 className="blog_h "> Maths</h1>
							<ol className="list-decimal m-5 ">
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

          <div className="my-14">
            <h1 className="blog_h"> Physics</h1>
							<ol className="list-decimal m-5">
								<li>
									<h2></h2>
								</li>
								<li>
									<h2> </h2>
								</li>
							</ol>
						</div>

          <div className="my-14">
            <h1 className="blog_h"> Programming</h1>
							<ol className="list-decimal m-5">
								<li>
									<h2>functional programming</h2>
								</li>
								<li>
									<h2>haskell</h2>
								</li>
							</ol>
						</div>

          <div className="my-14">
            <h1 className="blog_h"> History</h1>
							<ol className="list-decimal mx-5">
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
