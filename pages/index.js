import Head from "next/head";
import Header from "../components/Header.js";
import CardHolder from "../components/CardHolder.js";
import FlashCard from "../components/FlashCard.js";
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Flash Cards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <div className="flex flex-col   min-h-screen min-w-full text-center  bg-gray-800">
        <Header />
        {/* <h2 className="text-center text-3xl text-green-300">Git</h2> */}
        <CardHolder data={props.data} />
        {/* <div className="w-25 h-25 bg-red-800"></div> */}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(`getServerSideProps running`);
  const response = (await fetch("http://localhost:8000/questions")) || [];
  const data = (await response.json()) || [];
  console.log(`getServerSideProps data is ${data}`);
  return { props: { data } };
}
