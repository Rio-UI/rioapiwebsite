import Image from 'next/image'
import Link from 'next/link'

export default function AppsIntegration() {
  const apps = [
    {
      name: 'Cherry Studio',
      description: '支持接入各种AI的桌面软件，支持导入和导出，支持Window和Mac等平台',
      icon: 'https://framerusercontent.com/images/yB4Jja2Kos9jXZbANNnxJNS84Ow.png',
      url: 'https://riodocs.super.site/%e6%8e%a5%e5%85%a5-cherry-studio'
    },
    {
      name: 'GPT Playground',
      description: '支持gpt-image-1等在网页调试，搭配Rio API更适合处理新用户',
      icon: 'https://framerusercontent.com/images/x621iNElFH2mdVrqq6F5pkjNCI.png',
      url: 'https://riodocs.super.site/%e6%8e%a5%e5%85%a5-gpt-playground'
    },
    {
      name: '沉浸式翻译',
      description: '新的辅助功能翻译器，是入门级为切推动网站的翻译功能',
      icon: 'https://framerusercontent.com/images/ttVhSPSwQAfBpG01S8yc6Pcp7o.png',
      url: 'https://riodocs.super.site/%e6%8e%a5%e5%85%a5%e6%b2%89%e6%b5%b8%e5%bc%8f%e7%bf%bb%e8%af%91'
    },
    {
      name: 'Pot 新译',
      description: '软件台智能化程序中针对OCR软件API的中间编程语言库',
      icon: 'https://framerusercontent.com/images/AcSwttcjBPDe4EqAqZlsB0oxRCw.png',
      url: 'https://riodocs.super.site/%e6%8e%a5%e5%85%a5-pot'
    },
    {
      name: 'Cursor',
      description: 'AI智能代码助手，支持输入几个字，代码AI接起智能编程和AI调试',
      icon: 'https://framerusercontent.com/images/vAz2RLZbnrMF6c316DxViQPgfX8.png',
      url: 'https://riodocs.super.site/%e6%8e%a5%e5%85%a5-cursor'
    },
    {
      name: '思源笔记',
      description: '知识管理在云数据中，笔记本，输入笔记数据库AI相关模版配置',
      icon: 'https://framerusercontent.com/images/3qgmtSxPI4qtAjdH5RH1VobMH6I.png',
      url: 'https://riodocs.super.site/%e6%8e%a5%e5%85%a5%e6%80%9d%e6%ba%90%e7%ac%94%e8%ae%b0'
    }
  ]

  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          支持接入各类 App
        </h2>
        <p className="text-center text-gray-600 mb-16">
        仅列举部分App，设置 API 就能使用 AI 功能
        </p>

        {/* Apps grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <Link 
              key={app.name} 
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[#E4EBF2]"
            >
              {/* App icon */}
              <div className="w-12 h-12 rounded-lg mb-4 overflow-hidden">
                <Image
                  src={app.icon}
                  alt={app.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* App content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {app.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {app.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
