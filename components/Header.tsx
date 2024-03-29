import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col xs:flex-row justify-between items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/" className="flex space-x-2">
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          RoomRevamp
        </h1>
      </Link>
    </header>
  );
}