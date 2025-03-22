import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ISuccessResult, IVerifyResponse, MiniAppVerifyActionErrorPayload, MiniKit, VerificationLevel, VerifyCommandInput } from "@worldcoin/minikit-js";
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    userName: "",
  });

  const { toast } = useToast();

  const verifyPayload: VerifyCommandInput = {
    action: 'register-action', // This is your action ID from the Developer Portal
    verification_level: VerificationLevel.Device, // Orb | Device
  }

  const [handleVerifyResponse, setHandleVerifyResponse] = useState<
    MiniAppVerifyActionErrorPayload | IVerifyResponse | null
  >(null);

  const handleVerify = useCallback(async () => {
    if (!MiniKit.isInstalled()) {
      console.warn("Tried to invoke 'verify', but MiniKit is not installed.");
      return null;
    }
    const { finalPayload } = await MiniKit.commandsAsync.verify(verifyPayload);
    // no need to verify if command errored
    if (finalPayload.status === "error") {
      console.log("Command error");
      console.log(finalPayload);

      setHandleVerifyResponse(finalPayload);
      return finalPayload;
    }

    // Verify the proof in the backend
    const verifyResponse = await axios.post(
      "https://399s13b8-3000.brs.devtunnels.ms/verify",
      {
        payload: finalPayload as ISuccessResult, // Parses only the fields we need to verify
        action: verifyPayload.action,
        signal: verifyPayload.signal, // Optional
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // TODO: Handle Success!
    const verifyResponseJson = verifyResponse;



    if (verifyResponse.status === 200) {
      console.log("Verification success!");
      console.log(finalPayload);
    }

    setHandleVerifyResponse(verifyResponseJson.data);
    return verifyResponseJson;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar el submit del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí podrías iniciar el proceso de verificación con World ID
    toast({
      title: "Registro iniciado",
      description: "Por favor, verifica tu identidad con World ID",
    });
    const result: any = await handleVerify();

    if (result.status === 200) {
      toast({
        title: "Verificación exitosa",
        description: "Tu identidad ha sido verificada con éxito",
      })
     const response = await axios.post("https://399s13b8-3000.brs.devtunnels.ms/user", {
        userName: form.userName,
        worldId: result.data.payload.nullifier_hash,
      })

     if(response.status === 201){
      toast({
        title: "Registro exitoso",
        description: "Tu cuenta ha sido creada con éxito",
      })
    }
    if(response.status === 400){
      toast({
        title: "Error",
        description: "UserName ya registrado",
      })
    }

  };

  return (
    <section className="container flex flex-col items-center  bg-slate-100 h-screen py-20 md:py-32 gap-10">
      {handleVerifyResponse && (
        <div>
          <p>{JSON.stringify(handleVerifyResponse)}</p>
        </div>
      )}
     <div className="text-center space-y-6">
  <main className="text-5xl md:text-6xl font-bold">
    <h1 className="inline">
      <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
        Registrarse
      </span>
    </h1>
  </main>

  <p className="text-xl text-muted-foreground md:w-10/12 mx-auto">
    Crea tu cuenta y verifica tu identidad con World ID.
  </p>
</div>

<div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <Label htmlFor="username">Nombre de usuario</Label>
      <Input
        id="username"
        type="text"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Tu nombre de usuario"
        required
      />
    </div>

    <Button className="w-full" type="submit">
      Verificar con World ID
    </Button>
  </form>
</div>

    </section>
  );
}
}
