export default function FlashCard(props) {
  return (
    <div className="flex flex-col w-25 h-25 m-10 rounded-sm bg-green-300">
      <span className="align-middle justify-center text-xl font-code font-semibold">
        {props.title}
      </span>
    </div>
  );
}
