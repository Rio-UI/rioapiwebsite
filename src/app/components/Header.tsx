'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 transition-colors duration-200 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Rio API"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-xl font-semibold text-gray-900">Rio API</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            首页
          </Link>
          <Link href="https://api.riiio.chat/pricing" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
            模型列表
          </Link>
          <Link href="https://riodocs.super.site/getting-started" target="_blank" className="text-gray-600 hover:text-gray-900 transition-colors">
            使用文档
          </Link>
          <Link 
            href="https://api.riiio.chat/workspace" 
            target="_blank"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            开始使用
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-64 opacity-100 mt-4 bg-white rounded-lg shadow-lg' : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col space-y-4 py-4 px-4">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            首页
          </Link>
          <Link
            href="https://api.riiio.chat/pricing"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            模型列表
          </Link>
          <Link
            href="https://riodocs.super.site/getting-started"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            使用文档
          </Link>
          <Link
            href="https://api.riiio.chat/workspace"
            target="_blank"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-left"
            onClick={() => setIsMenuOpen(false)}
          >
            开始使用
          </Link>
        </nav>
      </div>
    </header>
  )
}
