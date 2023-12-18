import ClipCopyBtn from './ClipCopyBtn'

const DonateCard = ({cryptoInfo}) => {
    const addressCopyHandler = () => {
        navigator.clipboard.writeText(cryptoInfo.address)
    }
    return (
        <> 
            <div className="flex flex-col w-full max-w-713px text-black dark:text-c_F0F0F0">
                <div className="flex flex-col w-full aspect-w-8 aspect-h-3 bg-white dark:bg-c_2E2E2E rounded-lg shadow-card dark:shadow-none">
                    <div className="w-full h-full flex">
                        <div className="px-5 py-6 h-full flex flex-col items-center justify-center w-3/8 border-r border-c_E8EBF1 dark:border-c_4D4D4D">
                            <div className="relative w-full h-full flex flex-col justify-center items-center">
                                {cryptoInfo.networkImg}
                                <span className="absolute uppercase text-54px font-bold">{cryptoInfo.value}</span>
                            </div>
                        </div>

                        <div className="flex-1 px-15 pt-11 pb-10 flex flex-col">
                            <div className=" flex items-center gap-x-20">
                                <div className=" w-32">
                                    <img src={cryptoInfo.symbolImg} alt="" />
                                </div>
                                <div className="w-32 bg-white">
                                    <img className=" w-full" src={cryptoInfo.qrImg} alt="" />
                                </div>
                            </div>
                            <div className="mt-auto flex items-center justify-between px-2">
                                <span className='text_overflow_one_line'>{cryptoInfo.address}</span>
                                <ClipCopyBtn className='text-xl text-c_1564C0' content={cryptoInfo.address} />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DonateCard