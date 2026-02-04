import { clsx } from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/constants/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatButtons } from "@/components/layout/float-buttons";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
      <div className={clsx("relative min-h-screen", fontSans.variable)}>
        <Navbar />
        <main className="w-full">{children}</main>
        <Footer />
        <FloatButtons />
      </div>
    </Providers>
  );
}
