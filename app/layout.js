import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

// clerk
import { ClerkProvider } from '@clerk/nextjs'

const inter = Roboto({ subsets: ["latin"], weight: '700' });

export const metadata = {
  title: "couses",
  description: "Ecommerce cource",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
