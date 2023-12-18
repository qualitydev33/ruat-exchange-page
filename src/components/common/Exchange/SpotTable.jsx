import { useState } from 'react'
import {
    FaCaretDown,
    FaCaretUp,
    BsChevronExpand,
    BsStar,
    BsStarFill,
    BsChevronDown
} from '../../icon/IconImage'
import DynamicLineChart from '../DynamicLineChart'

const SpotTable = ({table_data}) => {
    
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))



    return (
        <div className="text-black dark:text-white">


            {/* table part */}
            <div className="overflow-x-auto w-full">
                <div className="text-black dark:text-white" style={{width: 1104 + 'px'}}>
                    <div className="flex items-center px-3 w-full font-bold py-4
                                    text-9px xl:text-xs">
                        <div className="flex items-center w-1/12">
                            <BsStar className="text-c_6E7582 dark:text-dark_0fc9f2 invisible"/>
                            <div className="ml-6">#</div>
                            <FaCaretUp className="ml-1"/>
                        </div>
                        <div className="w-44 text-left">Name</div>
                        <div className="w-36 pl-5 text-right">Exchange Score</div>
                        <div className="text-right w-36">Volume(24h)</div>
                        <div className="text-right w-28">Avg.Liquidity</div>
                        <div className="text-right w-24"># Markets</div>
                        <div className="text-right w-20"># Coins</div>
                        <div className="text-center flex-1">Volume Graph (7d)</div>
                    </div>
                    <div className="flex flex-col
                                    text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className={`flex flex-col`}>
                                        <div className={`px-3 flex items-center rounded-t-lg w-full h-71px ${enableExpand[index] ? 'bg-white dark:bg-c_2E2E2E' : enableExpand[index + 1] ? '' : 'border-b border-c_E8EBF1 dark:border-c_2F2F2F'}`}>
                                            <div className="flex items-center w-1/12">
                                                <BsStar className={`text-c_6E7582 dark:text-c_707070 cursor-pointer hover:text-c_E5BE3D ${item.watchlist ? 'hidden' : 'block'}`}/>
                                                <BsStarFill className={`text-c_E5BE3D dark:text-c_707070 cursor-pointer ${item.watchlist ? 'block' : 'hidden'}`}/>
                                                <div className="font-semibold
                                                                ml-2 sm:ml-6">{index + 1}</div>
                                            </div>
                                            <div className="flex items-center font-semibold w-44">
                                                <div className="bg-c_E8EBF1 dark:bg-c_4D4D4D rounded-full
                                                                    w-4_5 xl:w-6 
                                                                    h-4_5 xl:h-6"></div>
                                                <div className="ml-1.5 font-semibold">{item.item1}</div>
                                            </div>
                                            <div className="flex items-center justify-end w-36">
                                                <div className="px-2.5 h-5_5 flex items-center rounded-md font-medium bg-c_64A879 text-white">{item.item2}</div>
                                            </div>
                                            <div className="text-right font-semibold w-36">
                                                <div>${Number(item.item3).toLocaleString()}</div>
                                                <div className='flex items-center justify-end'>
                                                    <FaCaretDown className={`${item.item3_1 > 0 ? 'hidden' : 'block text-c_C85151'}`}/>
                                                    <FaCaretUp className={`${item.item3_1 > 0 ? 'block text-c_64A879' : 'hidden'}`}/>
                                                    <span className={`${item.item3_1 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>{Math.abs(Number(item.item3_1))}%</span>
                                                </div>
                                            </div>
                                            <div className={`flex items-center justify-end font-semibold w-28`}>
                                                <div>{item.item4}</div>
                                            </div>
                                            <div className={`flex items-center justify-end font-semibold w-24`}>
                                                <div>{item.item5}</div>
                                            </div>
                                            <div className={`flex items-center justify-end font-semibold w-20`}>
                                                <div>{item.item6}</div>
                                            </div>
                                            <div className="flex-1 flex items-center justify-center">
                                                <DynamicLineChart className="flex-1 h-7_5" line_color={'#64A879'}/>
                                                <div className={`w-5 h-5 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0' : 'bg-white border border-c_1564C0'}`}>
                                                    <div className="mx-auto my-auto cursor-pointer" 
                                                        onClick={() => {
                                                            const array_var = [...enableExpand]
                                                            array_var[index] = !enableExpand[index]
                                                            setEnableExpand(array_var)
                                                        }}>
                                                        <BsChevronExpand className={`${enableExpand[index] ? 'text-white' : 'text-c_1564C0 dark:text-dark_0fc9f2'}`}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={`px-3 ${enableExpand[index] ? 'block': 'hidden'}
                                                        bg-white dark:bg-c_2E2E2E
                                                        text-sm rounded-b-lg
                                                        pb-4`}>
                                            <div className="flex items-center w-full h-9_5">
                                                <div className="flex items-center w-1/12 h-full"></div>
                                                <div className="w-44 h-full flex items-center border-b border-c_E8EBF1 dark:border-c_4D4D4D text-c_6E7582 dark:text-c_8A8A8A">Weekly Visits</div>
                                                <div className="w-36 h-full flex items-center justify-end font-semibold border-b border-c_E8EBF1 dark:border-c_4D4D4D text-black dark:text-c_F0F0F0">{Number(35512543).toLocaleString()}</div>
                                            </div>

                                            <div className="mt-2 flex items-start w-full">
                                                <div className="flex items-center w-1/12 h-full"></div>
                                                <div className="w-44 h-full flex items-center text-c_6E7582 dark:text-c_8A8A8A">Fiat Supported</div>
                                                <div className="w-36 h-full flex flex-col items-start font-semibold">
                                                    <div className='ml-auto text-black dark:text-c_F0F0F0'>AED, ARS, AUD</div>
                                                    <div className='ml-auto text-c_1564C0 text-xs'>and +43 more</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="relative mt-9 h-7 items-center
                            hidden sm:flex">
                <div className="text-xs font-semibold text-c_6E7582 dark:text-c_8A8A8A">Showing 1 - 30 out of 433</div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                    <button className="px-3.5 h-full flex items-center justify-center rounded-full text-sm font-semibold transform hover:scale-110 ease-out duration-700 
                                     border-2 text-c_1564C0 dark:text-c_F0F0F0 bg-white dark:bg-transparent shadow-card dark:shadow-none border-transparent dark:border-c_1564C0">
                        <span>Load More</span>
                        <BsChevronDown className="ml-1 stroke-1"/>
                    </button>
                </div>
            </div>


        </div>
    )
} 

export default SpotTable