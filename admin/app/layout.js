import { Inter } from "next/font/google";
import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Codini Admin Dashboard",
  description: "hi",
};

export default function RootLayout({ children }) {
  return (
    < lang="en">
      <body className={inter.className}>{children}</body>
    </>
  );
}
