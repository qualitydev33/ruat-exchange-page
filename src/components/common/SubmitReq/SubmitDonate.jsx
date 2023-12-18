import {useState} from 'react'
import {
    EtherSvg,
    BitCoinImg,
    QRImg
} from '../../icon/IconImage'
import DonateCard from '../../ui/DonateCard'
import SelectInput from '../../ui/SelectInput'

const SubmitDonate = () => {
    const cryptoList = [
        {title: 'BitCoin', value: 'bitcoin', networkImg: <EtherSvg />, symbolImg: BitCoinImg, qrImg: QRImg, address: '1C6FyFBjD3jLp92BdWLSJsxdkJyPT9dA1C'},
        {title: 'Ethereum', value: 'erc20', networkImg: <EtherSvg />, symbolImg: BitCoinImg, qrImg: QRImg, address: '1C6FyFBjD3jLp92BdWLSJsxdkJyPT9dA1C'},
        {title: 'Binance Smart Chain', value: 'bsc', networkImg: <EtherSvg />, symbolImg: BitCoinImg, qrImg: QRImg, address: '1C6FyFBjD3jLp92BdWLSJsxdkJyPT9dA1C'},
        {title: 'Binance Chain', value: 'bep20', networkImg: <EtherSvg />, symbolImg: BitCoinImg, qrImg: QRImg, address: '1C6FyFBjD3jLp92BdWLSJsxdkJyPT9dA1C'},
        {title: 'Solana', value: 'sol', networkImg: <EtherSvg />, symbolImg: BitCoinImg, qrImg: QRImg, address: '1C6FyFBjD3jLp92BdWLSJsxdkJyPT9dA1C'},
        {title: 'Avalanche', value: 'avax', networkImg: <EtherSvg />, symbolImg: BitCoinImg, qrImg: QRImg, address: '1C6FyFBjD3jLp92BdWLSJsxdkJyPT9dA1C'},
    ]
    const [currentCrypto, setCurrentCrypto] = useState(cryptoList[0]) 
    const updateCryptoHandler = (e) => {
        var result = cryptoList.filter(item => item.title === e)
        setCurrentCrypto(result[0])
    }
    return (
        <>
            <div className="pl-13 pr-9 mt-15 flex flex-col text-sm font-medium text-black dark:text-c_F0F0F0">
                <span className='text-28px font-bold'>Donate</span>
                <span className="mt-2.5">You can donate by scanning respective QR code.</span>
                <div className="mt-12 flex">
                    <div className="w-45">
                        <span className=" font-semibold">Select Crypto<span className="text-c_C85151 ml-1">*</span></span>
                    </div>
                    <div className="flex-1 flex flex-col gap-y-4">
                        {/* <select name="" id="" className='h-7_5 px-3 max-w-md rounded text-xs font-medium border border-transparent dark:border-c_4D4D4D bg-white dark:bg-transparent shadow-card dark:shadow-none'
                            onChange={(e) => {updateCryptoHandler(e)}}>
                            {cryptoList.map((item, idx) => {
                                return (
                                    <option key={`option_${idx}`} value={item.value}>{item.title}</option>
                                )
                            })}
                        </select> */}
                        <SelectInput className="h-7_5 px-3 max-w-md rounded text-xs font-medium border border-transparent dark:border-c_4D4D4D bg-white dark:bg-transparent shadow-card dark:shadow-none"
                            option_board_class="bg-white dark:bg-c_2E2E2E top-11 z-10 border border-transparent dark:border-c_4D4D4D"
                            option_li={cryptoList} 
                            default_option={cryptoList[0]}
                            returnVal={updateCryptoHandler}
                        />
                        <DonateCard cryptoInfo={currentCrypto} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitDonate