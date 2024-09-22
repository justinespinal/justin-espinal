import type { Metadata } from "next";
import "./ui/global.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio for Justin Espinal, Software Engineer at Bloomberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= "antialiased"
      >
        {children}
      </body>
    </html>
  );
}
