import CodeInput from "./CodeInput";
export default function FlashCard(props) {
  return (
    <div className="flex flex-col w-25 h-25 m-10 rounded-lg bg-green-300">
      <span className="align-middle justify-center text-xl font-code font-semibold">
        {props.title}
      </span>
      <span className="align-middle justify-center text-sm font-code font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vel
        ligula eget iaculis. In diam odio, commodo lobortis est vel, lacinia
        venenatis ante. In vel mattis tellus, vel egestas purus.
      </span>

      <CodeInput />
    </div>
  );
}
