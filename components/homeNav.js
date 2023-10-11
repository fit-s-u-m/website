import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <Head>
      <nav>
        <Image className="logo" src="/img/brand.png" width={50} height={50} alt="brand logo" />
				<ul className="nav">
					<li>
        <Link href="/">Home</Link>
					</li>

					<li>
        <Link href="/blogs"> Blogs</Link>
					</li>

					<li>
        <Link href="/about"> About </Link>
					</li>

					<li>
        <Link href="/contacts"> Contacts</Link>
					</li>

				</ul>
      </nav>
    </Head>
  );
}
