import { useEffect, useState, ReactNode } from "react";
import { MiniKit } from "@worldcoin/minikit-js";

export default function MiniKitProvider({ children }: { children: ReactNode }) {
    const [statusList, setStatusList] = useState<string[]>([]);

    useEffect(() => {
        MiniKit.install(import.meta.env.VITE_APP_ID);
    }, []);

    const handleClick = () => {
        setStatusList((prev) => [...prev, MiniKit.isInstalled().toString()]);
    };

    return (
        <>
            <button onClick={handleClick}>Eskere</button>
            {statusList.map((status, index) => (
                <h1 key={index}>MiniKit {status}</h1>
            ))}
            {children}
        </>
    );
}
