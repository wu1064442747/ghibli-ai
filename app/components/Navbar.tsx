'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-800">Ghibli AI</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/generate"
              className={`${
                isActive('/generate')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Generate Image
            </Link>
            <Link
              href="/characters"
              className={`${
                isActive('/characters')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Create Character
            </Link>
            <Link
              href="/resources"
              className={`${
                isActive('/resources')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Resources
            </Link>
            <Link
              href="/prompts"
              className={`${
                isActive('/prompts')
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-blue-600'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              Prompts
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 