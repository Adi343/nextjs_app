import FlashCard from "./FlashCard";
export default function BestSellers() {
  const books = [
    {
      question: "What is the command to add untracked files?",
      answer: "Git add"
    },
    {
      question: "What is the command to add commit?",
      answer: "Git commit"
    },
    {
      question: "What is the command to push branch?",
      answer: "Git push"
    },
    {
      question: "What is the command to get changes?",
      answer: "Git fetch"
    },
    {
      question: "What is the command to merge changes",
      answer: "Git merge"
    }
  ];
  return (
    <div className=" grid grid-cols-3 gap-14 ">
      {books.map((book) => {
        return <FlashCard question={book.question} answer={book.answer} />;
      })}
    </div>
  );
}
