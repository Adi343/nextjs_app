import Head from "next/head";
import Link from "next/link";
import BestSellers from "../components/BestSellers.js";
export default function Home() {
  return (
    <div className="flex flex-col   min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row ">
        <span className="flex-1 text-red font-display">Book Store</span>
        <ul className="flex flex-row m-1 text-primary">
          <li>About</li>
          <li>Pricing</li>
          <Link href={`/signup`}>Sign Up</Link>
        </ul>
      </div>
      <BestSellers />
    </div>
  );
}
