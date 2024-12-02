import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Online-Shop",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NN97G94W"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    </html>
  );
}
