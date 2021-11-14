import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row bg-gray-500">
      <span className="flex-1 ">Flash Cards</span>
      <ul className="flex flex-row m-1 text-primary">
        <li>About</li>
        <Link href={`/signup`}>Sign Up</Link>
      </ul>
    </div>
  );
}
