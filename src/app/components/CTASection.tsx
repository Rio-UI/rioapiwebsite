import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="w-full px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl px-20 py-12 text-white relative overflow-hidden text-center">
          <div className="relative z-10 flex flex-col items-center">
            {/* Content */}
            <h2 className="text-3xl md:text-3xl font-bold mb-8">
              现在注册就送 0.2 美元余额
            </h2>

            {/* CTA Button */}
            <Link 
              href="https://api.riiio.chat/workspace"
              target="_blank"
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block"
            >
              立即注册
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
