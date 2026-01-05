import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-xl font-bold">Ebubechukwu Chiemeka</h1>

      <ul className="flex gap-4 text-sm flex-wrap">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}