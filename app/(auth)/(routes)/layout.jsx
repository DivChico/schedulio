import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "schedulio",
  description: "create schedule using ai",
};

export default function RootLayout({ children }) {
  return (
    <div className=" flex items-center justify-center h-full">{children}</div>
  );
}
