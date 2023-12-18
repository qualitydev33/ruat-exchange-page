import {
    BsSearch
} from '../components/icon/IconImage'
import Treemap from "../components/common/Heatmap/Treemap"

const HeatmapPage = () => {
    
    return (
        <>
            <div className="flex flex-col px-6 pb-32 text-black dark:text-white
                            pt-7_5 lg:pt-11">
                <div className="flex flex-wrap gap-y-2.5 items-center justify-between">
                    <span className="text-lg lg:text-22px font-semibold">Cryptocurrency Market State Visualization</span>
                    <div className="relative min-w-253px flex-1 max-w-440px">
                        <input type="text" className="pl-9 h-9_5 w-full placeholder-c_BCC3CF text-sm items-center rounded-lg border dark:placeholder-c_8A8A8A border-c_E8EBF1 dark:border-c_4D4D4D bg-white dark:bg-transparent" placeholder="Search for Coins, Contracts, IDO/IEO/ICOs, Exchanges" />
                        <div className='absolute top-0 left-0 h-full flex flex-col'>
                            <BsSearch className='my-auto mx-2.5 text-c_BCC3CF' />
                        </div>
                    </div>
                </div>
                

                <div className="">
                    <Treemap />
                </div>

            </div>
        </>
    )
}
export default HeatmapPage