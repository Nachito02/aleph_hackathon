import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const MainSection = () => {

  const navigate = useNavigate()
  return (
    <section className="container grid  place-items-center py-20 md:py-32 gap-10">
      <div className="  lg:text-center space-y-6 w-3/4 ">
        <main className="text-5xl justify:center md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
           INVIERTE
            </span>
           de manera Inteligente
          </h1>
          con
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Invert-IA
            </span>
          </h2>
        </main>

        <p className="text-xl text-center text-muted-foreground ">
         invierte de manera segura con ia, sin necesidad de saber sobre inversiones
        </p>

          <div className="flex flex-col md:flex-row md:space-x-4 justify-center space-y-4 md:space-y-0">
          <Button onClick={() => {navigate('/register')}} className="w-full md:w-1/3  ">Get Started</Button>
        </div>
      </div>

    </section>
  );
};
