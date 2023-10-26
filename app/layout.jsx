import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./globals.css";
import { Montserrat } from '@next/font/google';

const MontserratFont = Montserrat({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});



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
        <main className={MontserratFont.className}>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

export const MontserratFontClass = MontserratFont.variable;
