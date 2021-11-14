import FlashCard from "./FlashCard";
export default function BestSellers() {
  const books = ["Git add", "Git commit", "Git push", "Git fetch", "Git merge"];
  return (
    <div className="max-h-full grid grid-cols-3 gap-14 ">
      {books.map((book) => {
        return <FlashCard title={book} />;
      })}
      <div className="w-25 h-25 bg-gray-500"></div>
    </div>
  );
}
