export default function FlashCard(props) {
  return (
    <div className="w-15 h-25 m-10 bg-green-300">
      <span>1</span>
      {props.title}
    </div>
  );
}
