import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rio API  |  畅连全球AI智能",
  description: "Rio API为您提供一站式 AI 大模型接入解决方案，国内网络直连全球两百+顶尖 AI 大模型，无需订阅，注册即用。畅连全球AI智能",
  keywords: "AI API 代理, 大模型 API, LLM API, API 网关, API 中转, ChatGPT API, Grok API, Claude API, DeepSeek API, OpenAI API, xAI API, Anthropic API, 稳定 AI 代理, 多模型 API, 统一 API 接口, AI 开发, 人工智能 API, 大模型接入, AI 应用, API 服务, AI Agent",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
