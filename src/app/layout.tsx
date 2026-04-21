import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Klyro - Nền tảng học tiếng Trung trực tuyến",
  description: "Klyro cung cấp lộ trình cá nhân hóa, hệ thống bài giảng sinh động, thẻ từ vựng flashcard thông minh và luyện thi HSK sát thực tế. Bắt đầu hành trình chinh phục tiếng Trung dễ dàng hơn bao giờ hết.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
