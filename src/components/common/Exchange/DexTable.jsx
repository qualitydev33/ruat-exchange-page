import { useState } from 'react'
import {
    FaCaretDown,
    FaCaretUp,
    BsStar,
    BsStarFill,
    BsChevronDown
} from '../../icon/IconImage'
import DynamicLineChart from '../DynamicLineChart'

const DexTable = ({table_data}) => {
    
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
                        <div className="w-52 text-left">Name</div>
                        <div className="w-45 text-right">Volume(24h)</div>
                        <div className="text-right w-36">%Mkt Share</div>
                        <div className="text-right w-25">No. Markets</div>
                        <div className="text-right w-24">Type</div>
                        <div className="text-right w-24">Launched</div>
                        <div className="text-center flex-1">Vol.Graph (7d)</div>
                    </div>
                    <div className="flex flex-col
                                    text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className="flex flex-col">
                                        <div className={`px-3 flex items-center w-full h-71px border-b border-c_E8EBF1 dark:border-c_2F2F2F`}>
                                            <div className="flex items-center w-1/12">
                                                <BsStar className={`text-c_6E7582 dark:text-c_707070 cursor-pointer hover:text-c_E5BE3D ${item.watchlist ? 'hidden' : 'block'}`}/>
                                                <BsStarFill className={`text-c_E5BE3D dark:text-c_707070 cursor-pointer ${item.watchlist ? 'block' : 'hidden'}`}/>
                                                <div className="font-semibold
                                                                ml-2 sm:ml-6">{index + 1}</div>
                                            </div>
                                            <div className="flex items-center font-semibold w-52">
                                                <div className="bg-c_E8EBF1 dark:bg-c_4D4D4D rounded-full
                                                                    w-4_5 xl:w-6 
                                                                    h-4_5 xl:h-6"></div>
                                                <div className="ml-1.5 font-semibold">{item.item1}</div>
                                            </div>
                                            <div className="flex flex-col justify-end w-45">
                                                <div className="flex items-center justify-end font-semibold">${Number(item.item2).toLocaleString()}</div>
                                                <div className='flex items-center justify-end'>
                                                    <FaCaretDown className={`${item.item2_1 > 0 ? 'hidden' : 'block text-c_C85151'}`}/>
                                                    <FaCaretUp className={`${item.item2_1 > 0 ? 'block text-c_64A879' : 'hidden'}`}/>
                                                    <span className={`text_semibold ${item.item2_1 > 0 ? 'text-c_64A879' : 'text-c_C85151'}`}>{Math.abs(Number(item.item2_1))}%</span>
                                                </div>
                                            </div>
                                            <div className="text-right font-semibold w-36">{item.item3}%</div>
                                            <div className={`flex items-center justify-end font-semibold w-25`}>
                                                <div>{item.item4}</div>
                                            </div>
                                            <div className={`flex items-center justify-end font-semibold w-24`}>
                                                <div>{item.item5}</div>
                                            </div>
                                            <div className={`flex items-center justify-end font-semibold w-24`}>
                                                <div>{item.item6}</div>
                                            </div>
                                            <div className="flex-1 flex items-center justify-center">
                                                <DynamicLineChart className="flex-1 h-7_5" line_color={'#64A879'}/>
                                                
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



            {/* mobile table */}
            


            
        </div>
    )
} 

export default DexTable