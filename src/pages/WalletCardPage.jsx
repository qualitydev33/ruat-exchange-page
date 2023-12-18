import { useState } from "react"
import CardDetail from "../components/common/WalletCard/CardDetail"
import CardTable from "../components/common/WalletCard/CardTable"
import WalletDetail from "../components/common/WalletCard/WalletDetail"
import WalletTable from "../components/common/WalletCard/WalletTable"

const WalletCardPage = () => {
    const wallet_table_data = new Array(5).fill({item1: "Trezor Wallet", item2: 23, item3: true, item4: false, item5: true, item6: true, item7: false, item8: true, item9: 5})
    const card_table_data = new Array(5).fill({item1: "Trastra", item2: 23, item3: true, item4: '0.00%', item5: '2.00 - 20.00%', item6: true, item7: false, item8: true, item9: true})
    const [enableWalletTable, setEnableWalletTable] = useState(true)
    return (
        <>
            <div className="flex flex-col text-sm font-medium px-6 text-black dark:text-c_F0F0F0">
                <div className="mt-9 flex items-center justify-center gap-x-7">
                    <button className={`h-7_5 px-5 flex items-center rounded-full font-semibold ${enableWalletTable ? 'bg-c_1564C0 text-white' : 'text-black dark:text-c_8A8A8A bg-transparent dark:bg-c_2E2E2E'}`} onClick={() => setEnableWalletTable(true)}>Wallets</button>
                    <button className={`h-7_5 px-5 flex items-center rounded-full font-semibold ${!enableWalletTable ? 'bg-c_1564C0 text-white' : 'text-black dark:text-c_8A8A8A bg-transparent dark:bg-c_2E2E2E'}`} onClick={() => setEnableWalletTable(false)}>Cards</button>
                </div>

                
                {enableWalletTable && 
                    <div className="flex flex-col">
                        <WalletTable table_data={wallet_table_data} />
                        <WalletDetail />
                    </div>
                }
                {!enableWalletTable &&
                    <div className="flex flex-col">
                        <CardTable table_data={card_table_data} />
                        <CardDetail />
                    </div>
                }
                

                
            </div>
        </>
    )
}

export default WalletCardPage