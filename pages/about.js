import Link from "next/link";
import Icon from "../components/title"
import Nav from "../components/homeNav"
import Image from "next/image";

export default function About() {
  return (
		<>
			<Icon/>
			<Nav/>

			<h1 className="head">About</h1>
			<h1 className="blog_h">Our Vision</h1>
			<div className="blogText">
					<ul>
						<li>To make eduaction as friendly as possible</li>
						<li>To help students visualize coplex subjects</li>
						<li>To separeate the education system form learning</li>
						<li>To create a  productive society</li>
					</ul>
			</div>
			<h1 className="blog_h">Our Goal</h1>
			<div className="blogText">
					<ul>
						<li>To make eduaction as friendly as possible</li>
						<li>To help students visualize coplex subjects</li>
						<li>To separeate the education system form learning</li>
						<li>To create a  productive society</li>
					</ul>
			</div>
		</>
  );
}
