import FlashCard from "./FlashCard";
export default function BestSellers() {
  const books = ["Book1", "Book2", "Book3", "Book4", "Book5"];
  return (
    <div className="h-64 grid grid-cols-3 gap-14 ">
      {books.map((book) => {
        return <FlashCard title={book} />;
      })}
    </div>
  );
}
