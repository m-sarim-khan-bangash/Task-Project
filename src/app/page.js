import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-5xl font-bold text-white">Welcome!</h1>
      <div className="mt-4">
        <Link href="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4">
            Register
          </button>
        </Link>
        <Link href="/dashboard">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ml-4">
            Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
