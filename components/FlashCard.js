import { useState } from "react";
import CodeInput from "./CodeInput";
export default function FlashCard(props) {
  const [cardClicked, setCardClicked] = useState(false);
  const click = function () {
    setCardClicked(!cardClicked);
  };
  console.log(`props are ${JSON.stringify(props)}`);
  return (
    <div
      className={`flex flex-col w-25 h-50 m-10 rounded-lg p-3  ${
        cardClicked ? `bg-blue-300 animate-bounce duration-100` : `bg-black`
      }`}
    >
      {!cardClicked && (
        <span className="align-middle justify-center text-sm font-code font-medium text-justify text-blue-600">
          {props.question}
        </span>
      )}
      {cardClicked && <span className="text-red-800">{props.answer}</span>}

      {/* <CodeInput /> */}
      <button
        className={`w-10 rounded-md   ${
          cardClicked ? `bg-blue-600` : `bg-red-400`
        }`}
        onClick={click}
      >
        Show
      </button>
    </div>
  );
}
