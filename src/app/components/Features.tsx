import Image from 'next/image'

export default function Features() {
  const features = [
    {
      title: '一个 API 调用所有 AI',
      description: '覆盖 ChatGPT、Claude、Gemini、Grok、DeepSeek 等所有热门大模型',
      imageUrl: '/Frame1.png'
    },
    {
      title: '国内直连，国内支付',
      description: 'CN2高速线路，国内网络直连所有模型，支持支付宝和微信直接充值，支持开票',
      imageUrl: '/Frame2.png'
    },
    {
      title: '企业级可靠承诺',
      description: '100%使用官方企业高速渠道，超高并发不限速，智能负载均衡算法',
      imageUrl: '/Frame3.png'
    },
    {
      title: '性价比最高的 API 源头',
      description: '充值1元人民币＝1美元，相同的品质，更低的价格。提供详细的请求消耗统计，价格透明，无隐性消费',
      imageUrl: '/Frame4.png'
    },
    {
      title: '按量付费，无订阅费',
      description: '可随时根据实际使用量付费，充多少用多少，1元起充，余额不过期，灵活高效，无订阅费',
      imageUrl: '/Frame5.png'
    }
  ]

  return (
    <section className="w-full px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          全新的 AI 使用体验
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl border border-[#E4EBF2] shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
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

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {features.slice(3, 5).map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl border border-[#E4EBF2] shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center">
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
        </div>
      </div>
    </section>
  )
}
