import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { ChartLine } from 'lucide-react';

import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid  place-items-center py-20 md:py-32 gap-10">
      <div className="  lg:text-start space-y-6 w-2/4 ">
        <main className="text-5xl justify:center md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
           INVIERTE
            </span>{" "}
           de manera Inteligente
          </h1>{" "}
          con{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Invert-IA
            </span>
          
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
         invierte de manera segura con ia, sin necesidad de saber sobre inversiones
        </p>

          <div className="flex flex-col md:flex-row md:space-x-4 justify-center space-y-4 md:space-y-0">
          <Button className="w-full md:w-1/3  ">Get Started</Button>

          {/* <a  
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a> */}
        </div>
      </div>
{/* 
      {/* Hero cards sections */}
        {/* <div className="z-10">
          <HeroCards />
        </div>

        {/* Shadow effect 
        <div className="shadow"></div>*/}
    </section>
  );
};
export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-red-400 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/ia.jpg"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-dark-50 flex flex-col justify-between">
            <div className="pb-50">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
