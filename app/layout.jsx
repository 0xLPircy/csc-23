import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";
import { Kodchasan } from "next/font/google";
import { Inter } from "next/font/google";

const interFont = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const interFontClass = interFont.variable;

// const kodchasan = Kodchasan({
//   subsets: ["latin"],
//   weight: "400",
// });

export const metadata = {
  title: "CSC MUJ",
  description: "Cyber Space Club, Manipal University Jaipur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#000000]">
        <main className={interFont.className}>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
