import Image from 'next/image'

export default function Features() {
  const features = [
    {
      title: '一个 API 调用所有 AI',
      description: '覆盖 ChatGPT、 Claude、Gemini、Grok、DeepSeek 等热门 AI',
      imageUrl: '/Frame1.png'
    },
    {
      title: '企业级可靠表现',
      description: '100%使用官方企业高速渠道，超高并发不限速，国内网络直连',
      imageUrl: '/Frame2.png'
    },
    {
      title: '按量付费，无订阅费',
      description: '充多少用多少，价格透明，消耗记录可查',
      imageUrl: '/Frame3.png'
    },
    {
      title: '支付更方便',
      description: '支持支付宝和微信支付，充值更方便',
      imageUrl: '/Frame4.png'
    },
    {
      title: '轻松接入超多应用',
      description: '内含文档和视频教程，轻松接入各类应用',
      imageUrl: '/Frame5.png'
    }
  ]

  return (
    <section className="w-full px-6 py-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          全新的 AI 使用体验
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {features.slice(0, 2).map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl border border-[#E4EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    width={450}
                    height={156}
                    className="object-contain w-full h-full"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <h3 className="text-lg px-4 font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 px-4 pt-2 pb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.slice(2, 5).map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl border border-[#E4EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-full h-40 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.title}
                    width={300}
                    height={156}
                    className="object-contain w-full h-full"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
              <h3 className="text-lg px-4 font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 px-4 pt-2 pb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
