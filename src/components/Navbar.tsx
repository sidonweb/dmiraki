import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleNavigation = (path: string) => {
    if (path.startsWith("#")) {
      // For anchor links, scroll to the element
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For other routes, navigate
      navigate(path);
    }
    setIsOpen(false); // Close the sheet if open
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur dark:border-b-slate-700">
      <NavigationMenu className=" mx-6 mt-5">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              onClick={() => navigate("/")}
              className="ml-2 font-bold text-xl flex cursor-pointer"
            >
              <LogoIcon />
              DMiraki
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">DMiraki</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <button
                      key={label}
                      onClick={() => handleNavigation(href)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </button>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    onClick={() => handleNavigation("#contactus")}
                    className={`w-[110px] border ${buttonVariants({
                      variant: "ghost",
                    })}`}
                  >
                    <ArrowTopRightIcon className="mr-2 w-5 h-5" />
                    Get in Touch
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map(({ href, label }: RouteProps) => (
              <button
                key={label}
                onClick={() => handleNavigation(href)}
                className={`text-[17px] ${buttonVariants({
                  variant: "link",
                })}`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              onClick={() => handleNavigation("#contactus")}

              className={`border ${buttonVariants({ variant: "ghost" })}`}
            >
              <ArrowTopRightIcon className="mr-2 w-5 h-5" />
              Get in Touch
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
