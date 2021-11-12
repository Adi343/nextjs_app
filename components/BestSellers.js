import BookCard from "./BookCard";
export default function BestSellers() {
  const books = ["Book1", "Book2", "Book3", "Book4", "Book5"];
  return (
    <div className="bg-primary flex flex-col h-40">
      <span>Best Sellers</span>
      <div className="flex flex-row ">
        {books.map((book) => {
          return <h3>{book}</h3>;
        })}
        {books.map((book) => {
          return <BookCard title={book} />;
        })}
      </div>
    </div>
  );
}
