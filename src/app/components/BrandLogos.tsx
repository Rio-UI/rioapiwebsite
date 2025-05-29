import Image from 'next/image'

export default function BrandLogos() {
  const logos = [
    { src: '/claude.png', alt: 'Claude' },
    { src: '/Gemini.png', alt: 'Gemini' },
    { src: '/Openai.png', alt: 'OpenAI' },
    { src: '/grok.png', alt: 'Grok' },
    { src: '/suno.png', alt: 'Suno' },
    { src: '/DeepSeek.png', alt: 'DeepSeek' },
    { src: '/midjourney.png', alt: 'midjourney' },
    { src: '/luma.png', alt: 'luma' },
    { src: '/Meta.png', alt: 'Meta' },
    { src: '/Qwen.png', alt: 'Qwen' },
  ]

  return (
    <section className="w-full px-6 py-8 overflow-hidden">
      <div className="flex items-center justify-center space-x-12 animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={logo.alt} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        ))}

        {/* Duplicate set for seamless scrolling */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${logo.alt}`} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
