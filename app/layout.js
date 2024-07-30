import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FYI - Finding You & I",
  description: "FYI: Finding You and I is a mental health awareness platform dedicated to raising awareness, reducing stigma, and providing accessible resources. We offer a comprehensive library of articles, expert insights, and community forums where individuals can connect, share experiences, and support each other on their mental health journeys. Our mission is to foster understanding and create a supportive environment for everyone seeking mental well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta  name="simpledcver"  content="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJmeWlvcmcuaW4iLCJleHAiOjE3MjI5MDI0MDB9.G6F63ixjm0nzYlfVhSHcs6jxPuyJquiVSQeOa0invlw"/>
      </head>
      <body className={inter.className+ ' overflow-x-clip'}>
      <div className="flex flex-col min-h-screen">
      <header className="">
        <Navbar/>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="">
        <Footer/>
      </footer>
    </div>
      </body>
    </html>
  );
}
