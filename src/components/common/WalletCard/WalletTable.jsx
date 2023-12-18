import { useState } from 'react'
import {
    BsChevronExpand,
    BsChevronContract,
    BsCheck2,
    BsX,
    BsChevronDown,
    FaStar,
    FaRegStar,
    AiFillAndroid,
    AiFillApple,
    AiOutlineGlobal,
    AiFillWindows,
    FaLinux,
} from '../../icon/IconImage'
import SearchInput from '../../ui/SearchInput'

const WalletTable = ({table_data}) => {
    
    let cryptoList = new Array(22).fill('Eth')
    const [enableExpand, setEnableExpand] = useState(new Array(table_data.length).fill(false))
    

    return (
        <div className="text-black dark:text-white text-sm font-medium">

            <div className="mt-11 mb-6 ml-6">
                <button className="h-6_5 px-4 flex items-center rounded-full bg-c_1564C0 text-white text-xs font-semibold">All Wallets</button>
            </div>

            <div className="w-full h-px bg-c_E8EBF1 dark:bg-c_2F2F2F"></div>
            {/* table part */}
            <div className="overflow-x-auto w-full">
                <div className="text-black dark:text-white" style={{width: 1104 + 'px'}}>
                    <div className="flex items-center text-center pl-7 pr-6 w-full font-semibold py-4
                                    text-9px xl:text-xs">
                        <div className="w-51 text-left">Name</div>
                        <div className="w-20 text-center">Cryptos</div>
                        <div className="w-20 text-center">Security</div>
                        <div className="w-20">Anonymity</div>
                        <div className="w-20">Ease to use</div>
                        <div className="w-20">Buy/Sell</div>
                        <div className="w-20">Vouchers</div>
                        <div className='w-20'>Debit card</div>
                        <div className='w-20'>Platforms</div>
                        <div className='flex-1 text-center'>User Score</div>
                        <div className='w-10'></div>
                    </div>
                    <div className="flex flex-col
                                    text-sm">
                        {table_data.map((item, index) => {
                            return <div key={`data_${index}`} className={`flex flex-col`}>
                                        <div className={`pl-7 pr-6 flex items-center rounded-t-lg w-full h-71px ${enableExpand[index] ? 'bg-white dark:bg-c_2E2E2E' : enableExpand[index + 1] ? '' : 'border-b border-c_E8EBF1 dark:border-c_2F2F2F'}`}>
                                            
                                            <div className="flex items-center font-semibold w-51">
                                                <div className="bg-c_E8EBF1 dark:bg-c_4D4D4D rounded-full
                                                                    w-4_5 xl:w-6 
                                                                    h-4_5 xl:h-6"></div>
                                                <div className="ml-1.5 font-semibold">{item.item1}</div>
                                            </div>
                                            <div className="flex items-center justify-center w-20">
                                                <div className='w-10 h-6 flex justify-center items-center rounded-full border border-c_1564C0 text-c_1564C0 dark:text-c_F0F0F0 bg-transparent'>23</div>
                                            </div>
                                            <div className="flex items-center justify-center w-20">
                                                <div className={`w-11 h-4 rounded-full ${item.item3 ? 'bg-c_64A879' : 'bg-c_C85151'}`}></div>
                                            </div>
                                            <div className={`flex items-center justify-center w-20`}>
                                                <div className={`w-11 h-4 rounded-full ${item.item4 ? 'bg-c_64A879' : 'bg-c_C85151'}`}></div>
                                            </div>
                                            <div className="flex items-center justify-center w-20">
                                                <div className={`w-11 h-4 rounded-full ${item.item5 ? 'bg-c_64A879' : 'bg-c_C85151'}`}></div>
                                            </div>
                                            <div className={`flex items-center justify-center w-20`}>
                                                {item.item6 && <div className='h-5 w-5 rounded-full bg-c_64A879 flex justify-center items-center'>
                                                    <BsCheck2 className=' stroke-1 text-white' />
                                                </div>}
                                                {!item.item6 && <div className='h-5 w-5 rounded-full bg-c_C85151 flex justify-center items-center'>
                                                    <BsX className='stroke-1 text-white' />
                                                </div>}
                                            </div>
                                            <div className={`flex items-center justify-center w-20`}>
                                                {item.item7 && <div className='h-5 w-5 rounded-full bg-c_64A879 flex justify-center items-center'>
                                                    <BsCheck2 className=' stroke-1 text-white' />
                                                </div>}
                                                {!item.item7 && <div className='h-5 w-5 rounded-full bg-c_C85151 flex justify-center items-center'>
                                                    <BsX className='stroke-1 text-white' />
                                                </div>}
                                            </div>
                                            <div className={`flex items-center justify-center w-20`}>
                                                {item.item8 && <div className='h-5 w-5 rounded-full bg-c_64A879 flex justify-center items-center'>
                                                    <BsCheck2 className=' stroke-1 text-white' />
                                                </div>}
                                                {!item.item8 && <div className='h-5 w-5 rounded-full bg-c_C85151 flex justify-center items-center'>
                                                    <BsX className='stroke-1 text-white' />
                                                </div>}
                                            </div>
                                            <div className="flex items-center justify-center w-20">
                                                <div className='w-10 h-6 flex justify-center items-center rounded-full border border-c_1564C0 text-c_1564C0 dark:text-c_F0F0F0 bg-transparent'>{item.item9}</div>
                                            </div>
                                            <div className='flex flex-col flex-1'>
                                                <div className='flex items-center gap-x-1.5 mx-auto text-lg'>
                                                    <FaStar className='text-c_E5BE3D' />
                                                    <FaStar className='text-c_E5BE3D' />
                                                    <FaStar className='text-c_E5BE3D' />
                                                    <FaStar className='text-c_E5BE3D' />
                                                    <FaRegStar className='stroke-0.5 text-c_707070' />
                                                </div>
                                                <span className='mt-2 text-c_6E7582 text-11px text-center dark:text-c_8A8A8A'>4.02 / 134 votes</span>
                                            </div>
                                            <div className="w-10">
                                                <div className={`w-5 h-5 rounded-full flex flex-col ${enableExpand[index] ? 'bg-c_1564C0' : 'bg-white border border-c_1564C0'}`}>
                                                    <div className="mx-auto my-auto cursor-pointer" 
                                                        onClick={() => {
                                                            const array_var = [...enableExpand]
                                                            array_var[index] = !enableExpand[index]
                                                            setEnableExpand(array_var)
                                                        }}>
                                                        {!enableExpand[index] && <BsChevronExpand className={`text-c_1564C0 dark:text-dark_0fc9f2`}/>}
                                                        {enableExpand[index] && <BsChevronContract className={`text-white`}/>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={`${enableExpand[index] ? 'block': 'hidden'}
                                                        bg-white dark:bg-c_2E2E2E
                                                        text-sm rounded-b-lg border-t border-c_E8EBF1 dark:border-c_4D4D4D`}>
                                            <div className='flex py-5 pl-7 pr-6'>
                                                <div className='flex flex-col gap-y-4'>
                                                    <div className='flex items-center h-7_5 gap-x-2.5'>
                                                        <div className='w-2 h-full bg-c_64A879 rounded-t-full rounded-b-full'></div>
                                                        <div className='flex flex-col'>
                                                            <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Security</span>
                                                            <span className=' text-sm font-semibold'>You Fully control your private keys</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center h-7_5 gap-x-2.5'>
                                                        <div className='w-2 h-full bg-c_C85151 rounded-t-full rounded-b-full'></div>
                                                        <div className='flex flex-col'>
                                                            <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Anonymity</span>
                                                            <span className=' text-sm font-semibold'>Low</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center h-7_5 gap-x-2.5'>
                                                        <div className='w-2 h-full bg-c_64A879 rounded-t-full rounded-b-full'></div>
                                                        <div className='flex flex-col'>
                                                            <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Ease of use</span>
                                                            <span className=' text-sm font-semibold'>Ease</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col gap-y-4 mx-auto'>
                                                    <div className='flex items-center h-7_5 gap-x-2.5'>
                                                        <div className='w-2 h-full bg-c_64A879 rounded-t-full rounded-b-full'></div>
                                                        <div className='flex flex-col'>
                                                            <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Buy/Sell</span>
                                                            <span className=' text-sm font-semibold'>Yes</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center h-7_5 gap-x-2.5'>
                                                        <div className='w-2 h-full bg-c_C85151 rounded-t-full rounded-b-full'></div>
                                                        <div className='flex flex-col'>
                                                            <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Vouchers</span>
                                                            <span className=' text-sm font-semibold'>No</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center h-7_5 gap-x-2.5'>
                                                        <div className='w-2 h-full bg-c_64A879 rounded-t-full rounded-b-full'></div>
                                                        <div className='flex flex-col'>
                                                            <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Debit card</span>
                                                            <span className=' text-sm font-semibold'>Yes</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='flex flex-col w-40 justify-center mr-12'>
                                                    <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A text-center'>Platforms</span>
                                                    <div className='mt-5 flex items-center text-c_BCC3CF dark:text-c_8A8A8A text-2xl'>
                                                        <AiFillApple className='mr-auto' />
                                                        <AiFillAndroid className='mx-auto' />
                                                        <AiOutlineGlobal className='mx-auto' />
                                                        <AiFillWindows className='mx-auto' />
                                                        <FaLinux className='ml-auto' />
                                                    </div>
                                                    <button className='mt-auto w-full h-6_5 flex items-center justify-center text-xs text-white bg-c_1564C0 rounded-full'>Visit Official Website</button>
                                                </div>
                                            </div>

                                            <div className='bg-c_E8EBF1 dark:bg-c_4D4D4D h-px w-full'></div>

                                            <div className='pt-5_5 pb-7 pl-7 pr-6 flex flex-col '>
                                                <div className='flex items-center gap-x-4'>
                                                    <span className='font-semibold'>SUPPORTED CRYPTOS (23)</span>
                                                    <SearchInput />
                                                </div>
                                                <div className='mt-5 flex flex-wrap items-center gap-4'>
                                                    {cryptoList.map((item, idx) => {
                                                        return <div key={`crypto_${idx}`} className={`h-7_5 px-4 flex items-center font-semibold uppercase rounded-full bg-transparent dark:bg-c_4D4D4D shadow-card dark:shadow-none`}>{item}</div>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>

            <div className="relative mt-9 h-7 items-center mb-13
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

export default WalletTable