import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Password Manager",
  description: "Create and Add Your Own Password",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </head>
      <body className={inter.className}>{children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
