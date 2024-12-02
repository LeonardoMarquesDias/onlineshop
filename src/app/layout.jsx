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
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16804390453">
      </script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-16804390453');
      </script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
