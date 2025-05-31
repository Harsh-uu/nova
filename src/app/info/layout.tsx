import { Poppins } from "next/font/google";
import "../globals.css";
import { FooterSection } from "@/components/footer/footer-section";
import { InfoNav } from "@/components/hero/navbar";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function InfoPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <InfoNav />
      <main className={`flex-grow ${poppins.className}`}>{children}</main>
      <FooterSection bgColor="#ffc6d9" />
    </>
  );
}
