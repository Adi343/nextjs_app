import FlashCard from "./FlashCard";
import { GetServerSideProps } from "next";
export default function CardHolder(props) {
  const data = props.data;
  const questions = data.data;
  console.log(`questions are ${JSON.stringify(questions)}`);
  console.log(`props are ${JSON.stringify(props)}`);
  return (
    <div className=" grid grid-cols-3 gap-14 ">
      {console.log(`props are ${JSON.stringify(props)}`)}
      {questions.map((q) => {
        return (
          <FlashCard key={q.Question} question={q.Question} answer={q.Answer} />
        );
      })}
    </div>
  );
}
