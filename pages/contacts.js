import Link from "next/link";
import Icon from "../components/title"
import Image  from "next/image";
import Nav from "../components/homeNav"

export default function Contact (){
	return (
     <>
			 <Icon/>
			 <Nav/>
			 <h1 className="head">Contact</h1>
			 <div className="blogText">
				 <ul >
					 <li>Email: haveaquesion12@gmail.com</li>
					 <li>Telegram: @fitsum6</li>
					 <li>Phone:+251955343711</li>
				 </ul>
			 </div>

		</>
	)
}
