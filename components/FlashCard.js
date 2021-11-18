import { useState } from "react";
import CodeInput from "./CodeInput";
export default function FlashCard(props) {
  const [cardClicked, setCardClicked] = useState(false);
  const click = function () {
    setCardClicked(true);
    alert(cardClicked);
  };
  return (
    <div
      className={`flex flex-col w-25 h-25 m-10 rounded-lg bg-black transform skew-y-3 ${
        cardClicked && `animate-bounce`
      }`}
    >
      <span
        className={`align-middle justify-center text-xl font-code font-semibold text-green-300 `}
      >
        {props.title}
      </span>
      <span className="align-middle justify-center text-sm font-code font-medium text-justify text-blue-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vel
        ligula eget iaculis. In diam odio, commodo lobortis est vel, lacinia
        venenatis ante. In vel mattis tellus, vel egestas purus.
      </span>

      {/* <CodeInput /> */}
      <button className="bg-red-400" onClick={click}>
        Show
      </button>
    </div>
  );
}
