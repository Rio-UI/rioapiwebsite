import Image from 'next/image'

export default function UserProfiles() {
  const profiles = [
    {
      title: '专业探索者',
      description: '高强度使用众多AI模型，为专业场景寻求最佳解决方案',
      subtitle: '我们提供最新最顶尖的 AI 模型 ✊',
      avatar: 'https://framerusercontent.com/images/1l9uctlRcn1kpOaZo9AD7d3Loi4.png?scale-down-to=512',
    },
    {
      title: '效率工具控',
      description: '善于使用定制化 AI Agent 工具，提升创作与开发效率',
      subtitle: '我们提供更便捷的 AI 使用体验 👍',
      avatar: 'https://framerusercontent.com/images/zCHHOuAM5b8cnJmo5eavD4YD0g.png?scale-down-to=512',
    },
    {
      title: '精明价值派',
      description: '兼顾专业AI能力与高性价比，追求预算内效益最大化',
      subtitle: '我们提供更经济实惠的 AI 服务 💰',
      avatar: 'https://framerusercontent.com/images/LVCeoraZzpZo07UheCJkfke95ek.png?scale-down-to=512',
    }
  ]

  return (
    <section className="w-full px-6 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          以下用户的理想产品
        </h2>

        {/* Profiles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div key={profile.title} className="text-center">
              {/* Avatar */}
              <div className={`w-40 h-20 rounded-full flex items-center justify-center mx-auto overflow-hidden`}>
                <Image
                  src={profile.avatar}
                  alt={profile.title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>

              {/* Profile content */}
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">
                {profile.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {profile.description}
              </p>
              <p className="text-lg text-blue-600 font-semibold bg-blue-50 inline-block px-4 py-2 rounded-lg">
                {profile.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
