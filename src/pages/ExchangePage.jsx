import { useState } from 'react'
import DerivativeTable from '../components/common/Exchange/DerivativeTable'
import DexTable from '../components/common/Exchange/DexTable'
import LendingTable from '../components/common/Exchange/LendingTable'
import SpotTable from '../components/common/Exchange/SpotTable'
import {
    BsStarFill
} from '../components/icon/IconImage'

const ExchangePage  = () => {

    const submenu_li = [
        {title: 'Spot', link: '/exchanges/spot'},
        {title: 'Derivatives', link: '/exchanges/derivatives'},
        {title: 'Dex', link: '/exchanges/dex'},
        {title: 'Lending', link: '/exchanges/lending'},
    ]

    const spot_data = [
        {item1: "Binance", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "Coinbase Exchange", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: true},
        {item1: "FTX", item2: 9.9, item3: 16209272231, item3_1: 1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "Kraken", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "KuCoin", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "Huobi Global", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "Bitfinex", item2: 9.9, item3: 16209272231, item3_1: 1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "Gate.io", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "Binance.US", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: false},
        {item1: "Gemini", item2: 9.9, item3: 16209272231, item3_1: -1.24, item4: 801, item5: 1610, item6: 498, watchlist: true},
    ]

    const derivatives_data = [
        {item1: "Binance", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "Coinbase Exchange", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: true},
        {item1: "FTX", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "Kraken", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "KuCoin", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "Huobi Global", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "Bitfinex", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "Gate.io", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "Binance.US", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: false},
        {item1: "Gemini", item2: 16209272231, item2_1: 1.24, item3: 0.02, item4: 0.04, item5: 15518536619, item6: 180, item7: "Jul 2017", watchlist: true},
    ]

    const dex_data = [
        {item1: "Balancer (V2) (Polygon)", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "Uniswap (V3)", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: true},
        {item1: "PancakeSwap (V2)", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "dYdX", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "SpookySwap", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "ApolloX DEX", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "Uniswap (V2)", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "Sushiswap", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "linch Exchange", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: false},
        {item1: "Trader Joe", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "swap", item6: "Jul 2017", watchlist: true},
    ]

    const lending_data = [
        {item1: "Aave", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
        {item1: "Compound", item2: 16209272231, item2_1: -1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: true},
        {item1: "Venus", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
        {item1: "Aave", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
        {item1: "Compound", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
        {item1: "Venus", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
        {item1: "Aave", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
        {item1: "Compound", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
        {item1: "Venus", item2: 16209272231, item2_1: 1.24, item3: 0.1667, item4: 650, item5: "Jul 2017", watchlist: false},
    ]

    const [submenuIdx, setSubmenuIdx] = useState(0)
    const [enableWatchlist, setEnableWatchlist] = useState([true, false, false, false])
    const [activeWatchlist, setActiveWatchlist] = useState([false, false, false, false])
    const [spotData, setSpotData] = useState(spot_data)
    const [derivativesData, setDerivativesData] = useState(derivatives_data)
    const [dexData, setDexData] = useState(dex_data)
    const [lendingData, setLendingData] = useState(lending_data)

    const changeMenuHandler = (idx) => {
        var arrayVar = new Array(submenu_li.length).fill(false)
        arrayVar[idx] = true
        // setEnableWatchlist(false)
        setEnableWatchlist(arrayVar)
        setSubmenuIdx(idx)
    }

    const showWatchlistHandler = (idx) => {
        var arrayVar = activeWatchlist
        arrayVar[idx] = !activeWatchlist[idx]
        setActiveWatchlist(arrayVar)
        // setEnableWatchlist(arrayVar)
        if (activeWatchlist[idx]) {
            if (submenuIdx === 0) {
                var arrayVar = spotData.filter((item, idx) => item.watchlist === true)
                setSpotData(arrayVar)
            }
            if (submenuIdx === 1) {
                var arrayVar = derivativesData.filter((item, idx) => item.watchlist === true)
                setDerivativesData(arrayVar)
            }
            if (submenuIdx === 2) {
                var arrayVar = dexData.filter((item, idx) => item.watchlist === true)
                setDexData(arrayVar)
            }
            if (submenuIdx === 3) {
                var arrayVar = lendingData.filter((item, idx) => item.watchlist === true)
                setLendingData(arrayVar)
            }
        }else {
            if (submenuIdx === 0) {
                setSpotData(spot_data)
            }
            if (submenuIdx === 1) {
                setDerivativesData(derivatives_data)
            }
            if (submenuIdx === 2) {
                setDexData(dex_data)
            }
            if (submenuIdx === 3) {
                setLendingData(lending_data)
            }
        }
        
    }

    return (
        <>
            <div className="flex flex-col px-6 py-8 text-black dark:text-c_F0F0F0">
                <div className="text-22px font-semibold">Top Cryptocurrency {submenuIdx === 0 ? 'Spot Exchanges' : submenuIdx === 1 ? 'Derivatives Exchanges' : submenuIdx === 2 ? 'Decentralized Exchanges' : submenuIdx === 3 ? 'Lending Exchanges' : 'Watchlist'}</div>
                <div className={`mt-2 text-sm max-w-2xl font-medium text-c_6E7582 dark:text-c_8A8A8A ${submenuIdx === 0 ? 'block' : 'hidden'}`}>
                    Altsome ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported.<span className="text-c_1564C0 ml-2 font-semibold cursor-pointer">Read More</span>
                </div>
                <div className={`mt-2 text-sm max-w-2xl font-medium text-c_6E7582 dark:text-c_8A8A8A ${submenuIdx === 1 ? 'block' : 'hidden'}`}>Altsome ranks the top cryptocurrency derivatives exchanges based on trading volumes.</div>
                <div className={`mt-2 text-sm max-w-2xl font-medium text-c_6E7582 dark:text-c_8A8A8A ${submenuIdx === 2 ? 'block' : 'hidden'}`}>Altsome ranks the top decentralized exchanges based on trading volumes, market share of DeFi markets.</div>
                <div className={`mt-2 text-sm max-w-2xl font-medium text-c_6E7582 dark:text-c_8A8A8A ${submenuIdx === 3 ? 'block' : 'hidden'}`}>Altsome ranks the top cryptocurrency lending exchanges based on trading volumes.</div>
                <div className="mt-8 flex items-center">
                    {enableWatchlist.map((item, idx) => {
                        return <div key={`item_${idx}`}>
                            <button className={`h-7 mr-6 px-3 justify-center items-center rounded-md shadow-card dark:shadow-none
                                        ${enableWatchlist[idx] ? 'flex' : 'hidden'}
                                        ${activeWatchlist[idx] ? 'bg-c_1564C0 text-white dark:bg-c_1564C0' : 'bg-white dark:bg-c_2E2E2E text-c_6E7582 dark:text-c_8A8A8A'}`}
                                onClick={() => {showWatchlistHandler(idx)}}>
                                <BsStarFill className={`text-xs`} />
                                <span className={`ml-2 text-xs font-semibold`}>Watchlist</span>
                            </button>
                        </div>
                    })}
                    {submenu_li.map((item, idx) => {
                        return <div key={`item_${idx}`}>
                                    <button className={`h-7 mr-6 px-6 text-xs font-semibold rounded-full shadow-card dark:shadow-none ${submenuIdx === idx ? 'bg-c_1564C0 text-white' : 'bg-white dark:bg-c_2E2E2E text-c_6E7582 dark:text-c_8A8A8A'}`}
                                        onClick={() => {changeMenuHandler(idx)}}>{item.title}</button>
                                </div>
                    })}
                </div>

                <div className='mt-7 bg-c_E8EBF1 dark:bg-c_2F2F2F h-px w-full'></div>

                {submenuIdx === 0 && <SpotTable table_data={spotData} />}
                {submenuIdx === 1 && <DerivativeTable table_data={derivativesData} />}
                {submenuIdx === 2 && <DexTable table_data={dexData} />}
                {submenuIdx === 3 && <LendingTable table_data={lendingData} />}
                
                
            </div>
        </>
    )
}

export default ExchangePage