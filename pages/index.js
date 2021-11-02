import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col  min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row ">
        <span className="flex-1">Product Name</span>
        <ul className="flex flex-row m-1">
          <li>About</li>
          <li>Pricing</li>
          <Link href={`/signup`}>Sign Up</Link>
        </ul>
        {console.log(process.env)}
      </div>
    </div>
  );
}
