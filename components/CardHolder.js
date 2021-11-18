import FlashCard from "./FlashCard";
export default function BestSellers() {
  const books = ["Git add", "Git commit", "Git push", "Git fetch", "Git merge"];
  return (
    <div className=" grid grid-cols-3 gap-14 ">
      {books.map((book) => {
        return <FlashCard title={book} />;
      })}
    </div>
  );
}
