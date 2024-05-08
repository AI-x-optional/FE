"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white p-5 border-b border-gray-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" className="no-underline">
            <img src="/Logo.png" alt="Logo" className="h-8" />
          </Link>
          <nav className="flex gap-8">
            <Link href="/bootcamp" className={`text-gray-800 no-underline px-2 py-1 rounded ${pathname === '/bootcamp' ? 'bg-gray-100' : 'bg-white'}`}>부트캠프 정보</Link>
            <Link href="/community" className={`text-gray-800 no-underline px-2 py-1 rounded ${pathname === '/community' ? 'bg-gray-100' : 'bg-white'}`}>커뮤니티</Link>
            <Link href="/qna" className={`text-gray-800 no-underline px-2 py-1 rounded ${pathname === '/qna' ? 'bg-gray-100' : 'bg-white'}`}>QnA</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center rounded-full border border-gray-300 overflow-hidden">
            <span className="pl-3 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input type="text" placeholder="Search" className="py-2 px-4 w-full focus:outline-none" />
          </div>
          <Link href="/" className="text-2xl text-gray-800 no-underline">🔔</Link>
          <Link href="/" className="text-2xl text-gray-800 no-underline">👤</Link>
        </div>
      </div>
    </header>
  );
}
