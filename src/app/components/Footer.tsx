import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="w-full mx-auto">
        <div className="bg-black rounded-none px-0 py-16 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            现在注册，就赠送 0.2 美元余额
          </h2>
          <div className="flex justify-center gap-4 mb-16">
            <Link 
              href="https://api.riiio.chat/workspace"
              target="_blank"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              开始使用
            </Link>
            <Link 
              href="https://api.riiio.chat"
              target="_blank"
              className="border border-gray-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              使用文档
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-8">
            © 2025 Rio AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
