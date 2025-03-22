
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <section className="container  bg-slate-100 flex flex-col items-center py-20 md:py-32 gap-10 h-screen">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Iniciar sesión
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground aling:center md:w-10/12 mx-auto text-center lg:mx-0">
          Accede a tu cuenta con tus credenciales.
        </p>
      </div>
<div className="">
<Button className="w-full justify-evenly" type="submit">
  <div className="flex items-center gap-2"><img src="/worldcoin.png" alt="" className="w-7" />continue with sing in with Worldcoin</div>
  </Button>
 </div>
      {/*<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="tucorreo@example.com" required />
          </div>

          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" placeholder="********" required />
          </div>

          <Button className="w-full" type="submit">Iniciar sesión</Button>
        </form>
      </div> */}
    </section>
  );
}
