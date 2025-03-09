/**
 * Header Component
 * 
 * A responsive navigation header for the application that includes
 * logo, main navigation, authentication controls, and mobile menu.
 */
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import useAppStore from "@/lib/store";

// Navigation items for the header
const navItems = [
  {
    name: "Features",
    href: "/#features",
  },
  {
    name: "Pricing",
    href: "/#pricing",
  },
  {
    name: "Testimonials",
    href: "/#testimonials",
  },
  {
    name: "FAQ",
    href: "/#faq",
  },
];

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated } = useAppStore();
  
  // Check if we're on the main landing page or in the app
  const isLandingPage = pathname === "/" || pathname.startsWith("/#");
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">SaaS Template</span>
        </Link>

        {/* Desktop Navigation */}
        {isLandingPage && (
          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Right side of header (auth or dashboard link) */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {!isAuthenticated ? (
            <>
              <Link href="/auth/login" className="hidden md:block">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="sm">Sign up</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
            </>
          )}

          {/* Mobile navigation trigger */}
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileNav setMobileNavOpen={setMobileNavOpen} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Mobile navigation component
interface MobileNavProps {
  setMobileNavOpen: (open: boolean) => void;
}

function MobileNav({ setMobileNavOpen }: MobileNavProps) {
  const { isAuthenticated } = useAppStore();
  
  return (
    <div className="flex h-full flex-col justify-between pb-6">
      <div className="px-7">
        <div className="mt-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileNavOpen(false)}
              className="text-lg font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="border-t px-7 pt-6">
        {!isAuthenticated ? (
          <div className="flex flex-col gap-4">
            <Link href="/auth/login" onClick={() => setMobileNavOpen(false)}>
              <Button variant="outline" className="w-full justify-start">
                Log in
              </Button>
            </Link>
            <Link href="/auth/register" onClick={() => setMobileNavOpen(false)}>
              <Button className="w-full justify-start">
                Sign up
              </Button>
            </Link>
          </div>
        ) : (
          <Link href="/dashboard" onClick={() => setMobileNavOpen(false)}>
            <Button className="w-full justify-start">
              Dashboard
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
} 