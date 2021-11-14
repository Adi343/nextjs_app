import Head from "next/head";
import Header from "../components/Header.js";
import CardHolder from "../components/CardHolder.js";
import FlashCard from "../components/FlashCard.js";
export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col   min-h-screen min-w-full text-center py-2 bg-blue-800">
        <h2 className="text-center text-3xl">Git</h2>
        <CardHolder />
        <div className="w-25 h-25 bg-red-800"></div>
      </div>
    </>
  );
}
