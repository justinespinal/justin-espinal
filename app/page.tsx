import Link from "next/link";
export default function Home() {
  return (
    <div>
      <main className="flex justify-center items-center h-screen">
        <Link 
          href="/home"
          className="border rounded-md p-2 font-extrabold started"
        >
            Get Started
        </Link>
      </main>
    </div>
  );
}
