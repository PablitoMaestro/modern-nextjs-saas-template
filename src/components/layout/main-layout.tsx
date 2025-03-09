/**
 * Main Layout Component
 * 
 * A layout component that wraps page content with a header and footer.
 * This provides consistent navigation and branding across pages.
 */
import { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function MainLayout({
  children,
  showFooter = true,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full mx-auto">
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
} 