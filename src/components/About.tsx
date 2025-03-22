import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import { ChartLine } from 'lucide-react';


export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-trasparen border rounded-lg py-12">
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
                InvestIA{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              estamos revolucionando el mundo de las finanzas con una plataforma segura, rápida e innovadora. Nuestro banco utiliza lo último en tecnología blockchain, permitiéndote iniciar sesión de manera rápida y segura con Worldcoin, sin complicaciones.
              </p><p className="text-xl text-muted-foreground mt-4">
Gracias a la tecnología de zkSync, todas tus transacciones son completamente cifradas, garantizando la máxima seguridad y privacidad. Además, con la inteligencia artificial integrada en nuestra plataforma, tus inversiones se gestionan automáticamente, optimizando tu rendimiento y tomando decisiones informadas al instante.
</p><p className="text-xl text-muted-foreground mt-4">
Únete a nosotros y lleva tus finanzas al siguiente nivel, con la combinación perfecta de seguridad, innovación y automatización.
</p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
