import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import useAuthStore from "@/store/authStore";
import { Button } from "./ui/button";
import { MiniKit, } from "@worldcoin/minikit-js";
import Wallet from "./Wallet";
import { reputationABI } from './reputationABI'
export default function Dashboard() {
    const { user } = useAuthStore();

    const { toast } = useToast();

    interface WalletAuthInput {
        nonce: string
        expirationTime?: Date
        statement?: string
        requestId?: string
        notBefore?: Date
    }

    const signInWithWallet = async () => {
        const res = await fetch(`https://399s13b8-3000.brs.devtunnels.ms/nonce`)
MiniKit.pro
        const { nonce } = await res.json()

        const { commandPayload: generateMessageResult, finalPayload } = MiniKit.commands.walletAuth({
            nonce: nonce,
            requestId: '0', // Optional
            expirationTime: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
            notBefore: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
            statement: 'This is my statement and here is a link https://worldcoin.com/apps',

        })

        toast({
            title: MiniKit.user?.walletAddress,
            description: generateMessageResult.message
        })
    }



    const sendTransaction = async () => {
        if (!MiniKit.isInstalled()) {
            return;
        }

        const deadline = Math.floor((Date.now() + 30 * 60 * 1000) / 1000).toString()

        const { commandPayload, finalPayload } = await MiniKit.commandsAsync.sendTransaction({
            transaction: [
                {
                    address: '0x238B9E331AC2E2671469e2212978a858E83d85D3',
                    abi: reputationABI,
                    functionName: 'rateUser',
                    args: ["0x1d962ed359b87d66b96158c4d3fc28428ab9e3cf2fe4fcced5b9c0ed05106dfb", "5"],
                },
            ],

        })
    }




    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">

                <Wallet />

                <Button onClick={signInWithWallet}>Conectar Wallet</Button>
                <Button onClick={sendTransaction}>Send Transaction</Button>

                {/* Balance y Datos del Usuario */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Balance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-semibold">${user?.balance ?? "0.00"}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Usuario</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-xl">{user?.username ?? "Desconocido"}</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Últimas Transacciones</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {user?.transactions?.length > 0 ? (
                                <ul className="space-y-2">
                                    {user.transactions.map((tx: any, index: any) => (
                                        <li key={index} className="flex justify-between border-b py-2">
                                            <span>{tx.description}</span>
                                            <span className={tx.amount >= 0 ? "text-green-500" : "text-red-500"}>
                                                {tx.amount >= 0 ? "+" : "-"}${Math.abs(tx.amount)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500">No hay transacciones recientes.</p>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
