import { useState } from "react";
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

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "./Icons";
import { LogIn } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Link } from "react-router-dom";
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Inversiones",
  },
  {
    href: "#testimonials",
    label: "Ganancias",
  },

];

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to="/"
            >
              <LogoIcon />
              Invert IA
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
        

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
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
                  <SheetTitle className="font-bold text-xl">
                    InvestIA
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">

                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/register"
              className={`border ${buttonVariants({ variant: "secondary" })}`}

            >register
              <CircleUserRound className="mr-2 w-5 h-5 flex items-center gap-4" />

            </Link>

            <Link
              to="/login"
              className={`border ${buttonVariants({ variant: "secondary" })}`}

            >login
              <LogIn className="mr-2 w-5 h-5" />

            </Link>

           
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
