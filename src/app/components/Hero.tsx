import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full px-6 py-48 text-center bg-white relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 pointer-events-none select-none"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* White Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/50 to-white pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          畅连全球 <span className="text-blue-600">AI</span> 智能
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          一站式接入全球近 300 个 AI 模型，无需订阅，注册即用
        </p>

        {/* CTA Button */}
        <Link 
          href="https://api.riiio.chat/workspace"
          target="_blank"
          className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors inline-block"
        >
          开始使用
        </Link>
      </div>
    </section>
  )
}
