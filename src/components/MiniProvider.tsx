import { useEffect, useState, ReactNode } from "react";
import { ISuccessResult, MiniKit, VerificationLevel, VerifyCommandInput } from "@worldcoin/minikit-js";


const verifyPayload: VerifyCommandInput = {
    action: 'login-action', // This is your action ID from the Developer Portal
    verification_level: VerificationLevel.Device, // Orb | Device
}
export default function MiniKitProvider({ children }: { children: ReactNode }) {
    const [statusList, setStatusList] = useState<string[]>([]);

    useEffect(() => {
        MiniKit.install(import.meta.env.VITE_APP_ID);
    }, []);

    const handleClick = () => {
        setStatusList((prev) => [...prev, MiniKit.isInstalled().toString()]);
    };

   const [error, setError] = useState(null);

    const handleVerify = async () => {
       try {
        if (!MiniKit.isInstalled()) {
            return
        }
        // World App will open a drawer prompting the user to confirm the operation, promise is resolved once user confirms or cancels
        const {finalPayload} = await MiniKit.commandsAsync.verify(verifyPayload)
            if (finalPayload.status === 'error') {
                // setError(finalPayload.error_code)
                return console.log('Error payload', finalPayload)
            }
    
            // Verify the proof in the backend
            const verifyResponse = await fetch('https://399s13b8-3000.brs.devtunnels.ms/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                payload: finalPayload as ISuccessResult, // Parses only the fields we need to verify
                action: 'voting-action',
              
            }),
        })
    
        // TODO: Handle Success!
        const verifyResponseJson = await verifyResponse.json()
        if (verifyResponseJson.status === 200) {
            console.log('Verification success!')
        }
       } catch (error: any) {
        console.log(error)
        setError(error.message)
       }
    }

    return (
        <>
            {error && <h1>{error}</h1>}
            <button onClick={handleClick}>Eskere</button>
            <button onClick={handleVerify}>Verify</button>

            {statusList.map((status, index) => (
                <h1 key={index}>MiniKit {status}</h1>
            ))}
            {children}
        </>
    );
}
