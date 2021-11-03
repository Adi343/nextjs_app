import Link from "next/link";
export default function signup() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <span>Let's get started</span>
      <form className="flex flex-col bg-gray-300 p-1 m-2">
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button type="submit" className="bg-blue-600">
          <span className="text-white">Sign Up</span>
        </button>
      </form>
      <Link href={`/signin`}>
        <a className="underline">Sign Up with social accounts</a>
      </Link>
    </div>
  );
}
