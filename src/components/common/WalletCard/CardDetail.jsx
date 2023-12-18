import {
    BsChevronRight,
    FaStar,
    FaRegStar,
    AiFillAndroid,
    AiFillApple,
    AiOutlineGlobal,
    AiFillWindows,
    FaLinux,
    CardTypeSvg1
} from '../../icon/IconImage'
import SearchInput from '../../ui/SearchInput'


const CardDetail = () => {
    let cryptoList = new Array(22).fill('Eth')
    return (
        <>
            <div className="flex flex-col text-sm font-medium pt-11 text-black dark:text-c_F0F0F0">
                <div className="flex items-center gap-x-2 text-c_6E7582 dark:text-c_8A8A8A">
                    <span>Wallets & Cards</span>
                    <BsChevronRight />
                    <span>All Cards</span>
                    <BsChevronRight />
                    <span className=' text-black dark:text-c_F0F0F0'>TRASTRA</span>
                </div>


                <div className='mt-8 bg-white dark:bg-c_2E2E2E shadow-card dark:shadow-none rounded-lg pt-8 w-full'>
                    <div className='pl-7 pr-12 flex items-center'>
                        <div className='w-14_5 h-14_5 rounded-full p-2 border border-c_E8EBF1 dark:border-c_4D4D4D flex'>
                            <img className='w-full m-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/TRASTRA_LOGO.png/799px-TRASTRA_LOGO.png" alt="" />
                        </div>
                        <span className='ml-4_5 text-28px font-bold uppercase'>Trastra</span>
                        <div className='ml-auto flex flex-col'>
                            <div className='flex items-center gap-x-2 text-26px'>
                                <FaStar className="text-c_E5BE3D" />
                                <FaStar className="text-c_E5BE3D" />
                                <FaStar className="text-c_E5BE3D" />
                                <FaStar className="text-c_E5BE3D" />
                                <FaRegStar className='stroke-0.5 text-c_707070' />
                            </div>
                            <span className='text-c_6E7582 dark:text-c_8A8A8A text-center mt-2.5'>4.02 / 134 votes</span>
                        </div>
                    </div>
                    <div className='w-full h-px mt-8 bg-c_E8EBF1 dark:bg-c_4D4D4D'></div>
                    <div className={`bg-white dark:bg-c_2E2E2E
                                text-sm rounded-b-lg`}>
                        <div className='flex items-start py-5 pl-7 pr-6'>
                            <div className='flex flex-col gap-y-4'>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className='w-2 h-full bg-c_E8EBF1 rounded-t-full rounded-b-full'></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Issuance Fee</span>
                                        <span className=' text-sm font-semibold'>€9.00</span>
                                    </div>
                                </div>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className='w-2 h-full bg-c_E8EBF1 rounded-t-full rounded-b-full'></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Spending Fee</span>
                                        <span className=' text-sm font-semibold'>0.00%</span>
                                    </div>
                                </div>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className='w-2 h-full bg-c_E8EBF1 rounded-t-full rounded-b-full'></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Cash back</span>
                                        <span className=' text-sm font-semibold'>2.00 - 20.00%</span>
                                    </div>
                                </div>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className='w-2 h-full bg-c_C85151 rounded-t-full rounded-b-full'></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Wire</span>
                                        <span className=' text-sm font-semibold'>Low</span>
                                    </div>
                                </div>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className={`w-2 h-full rounded-t-full rounded-b-full bg-c_64A879`}></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Paypal</span>
                                        <span className=' text-sm font-semibold'>Yes</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4 mx-auto'>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className='w-2 h-full bg-c_E8EBF1 rounded-t-full rounded-b-full'></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>ATM Fee</span>
                                        <span className=' text-sm font-semibold'>€2.25</span>
                                    </div>
                                </div>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className='w-2 h-full bg-c_E8EBF1 rounded-t-full rounded-b-full'></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Monthly Fee</span>
                                        <span className=' text-sm font-semibold'>€1.25</span>
                                    </div>
                                </div>
                                
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className={`w-2 h-full bg-c_E8EBF1 rounded-t-full rounded-b-full`}></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Minimum Deposit</span>
                                        <span className=' text-sm font-semibold'>0</span>
                                    </div>
                                </div>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className={`w-2 h-full rounded-t-full rounded-b-full bg-c_64A879`}></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>Credit</span>
                                        <span className=' text-sm font-semibold'>Yes</span>
                                    </div>
                                </div>
                                <div className='flex items-center h-7_5 gap-x-2.5'>
                                    <div className={`w-2 h-full rounded-t-full rounded-b-full bg-c_C85151`}></div>
                                    <div className='flex flex-col'>
                                        <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A'>US Allowed</span>
                                        <span className=' text-sm font-semibold'>'No'</span>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col w-40 justify-center mr-12'>
                                <span className='text-xs text-c_6E7582 dark:text-c_8A8A8A text-center'>Card Type</span>
                                <div className='flex items-center justify-center'>
                                    <CardTypeSvg1 className="w-16_5" />
                                </div>
                                <button className='mt-6 w-full h-6_5 flex items-center justify-center text-xs text-white bg-c_1564C0 rounded-full'>Visit Official Website</button>
                            </div>
                        </div>

                        <div className='bg-c_E8EBF1 h-px w-full dark:bg-c_4D4D4D'></div>

                        <div className='pt-5_5 pb-7 pl-7 pr-6 flex flex-col '>
                            <div className='flex items-center gap-x-4'>
                                <span className='font-semibold'>SUPPORTED CRYPTOS (23)</span>
                                <SearchInput />
                            </div>
                            <div className='mt-5 flex flex-wrap items-center gap-4'>
                                {cryptoList.map((item, idx) => {
                                    return <div key={`crypto_${idx}`} className={`h-7_5 px-4 flex items-center font-semibold uppercase rounded-full shadow-card dark:shadow-none dark:bg-c_4D4D4D`}>{item}</div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='mt-13 mb-24 px-6 flex flex-col font-semibold'>
                    <span className='text-22px font-semibold'>TRASTRA Review</span>
                    <span className='mt-5_5'>A common argument for regular money (also known as fiat currency) as opposed to cryptocurrency is that you can’t use cryptocurrency to buy groceries and other everyday items. Well, through the use of a cryptocurrency debit card, you can. This is a review of TRASTRA, one of the crypto debit cards out there.</span>
                    <div className='mt-5_5 flex flex-col'>
                        <span className='text-22px'>General information</span>
                        <span className='mt-3'>TRASTRA is a very interesting new card that we at Cryptowisser.com are very excited about. At the moment, it is only available to people from the European Economic Area, so if you're from the EEA (or not from the EEA but still interested), this review will be very exciting to you.<br /><br /> TRASTRA seems to focus a lot on simplicity. It is a VISA-card, meaning that you can use the card at any point of payment that accepts VISA. This is of course a great advantage, seeing that VISA is the most widely accepted card in the world (alongside MasterCard).<br /><br /> You can deposit funds to the card in many different ways. For instance, wire transfers and SEPA transfers (for countries in the SEPA-zone) is no problem at all.</span>
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <span className='text-22px'>Referral Program</span>
                        <span className='mt-3'>TRASTRA also offers an attractive referral program. The terms are quite simple, you invite friends, and when your friends order cards or exchange cryptos etc, you are rewarded. You get 5 EUR for a TRASTRA Payment Card activation by each friend you invite, and you receive 0.20% of the total volume of your friends' exchanges.</span>
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <span className='text-22px'>Supported Cryptos</span>
                        <span className='mt-3'>The card has support for six of the biggest cryptocurrencies: Bitcoin, Bitcoin Cash, Ethereum, Litecoin, Ripple and USD Coin.</span>
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <span className='text-22px'>TRASTRA Fees</span>
                        <span className='mt-3'>TRASTRA’s fees are very competitive. There are of course fees involved in using it, but these are not deterrent to using it at all.<br /><br /> There is a low monthly fee, only EUR 1.25 a month. There is an issuance fee set to EUR 9.00. This is slightly below the global industry average crypto debit card issuance fee which is arguably around USD 15.00.<br /><br /> Over then to ATM-fees. Balance inquiries will set you back EUR 0.35 and a PIN-change will cost you EUR 0.40. The actual withdrawal fees are EUR 2.25 if you withdraw EUR or withdraw from inside the EEA. On the other hand, if you withdraw another fiat currency than EUR or withdraw from somewhere outside the EEA, you will have to pay EUR 2.25 + 3% of the withdrawn amount. Fixed fees like this may become disadvantageous in countries where the normal ATM-machines only allow smaller amounts of withdrawals (EUR 20 for instance). In such scenarios, in order to withdraw a larger amount you need to withdraw several times, thus triggering the fixed fee each time. You can usually avoid this by just going to a local bank at the relevant place. Local banks normally permit higher withdrawals.<br /><br /> Furthermore, the most important fee of them all, is the commission on spending. TRASTRA doesn't have a spending commission at all for online and offline purchases in EUR. This is a very competitive feature for this card and it is actually quite unusual. For non-EUR card purchases, there is a spending fee amounting to 3.00% of the transaction value. So, clearly a more beneficial offering when it comes to EUR-purchases.<br /><br /> There are no maximum or minimum deposit limits at all.</span>
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <span className='text-22px'>TRASTRA Security</span>
                        <span className='mt-3'>TRASTRA also seems to take security very seriously. Among other things, the card is protected by VISA identity check, you can enable two factor authentication, there's anti-fraud protection and device authorisation requirements. What else could you possibly need?</span>
                    </div>
                    <div className='mt-8 flex flex-col'>
                        <span className='text-22px'>Concluding remarks</span>
                        <span className='mt-3'>We have a great feeling about the TRASTRA Payment card. You can order one here.<br /><br /> If this is the cryptocurrency debit card for you, congratulations. But if not, check out one of the other cards in our crypto debit card list.<br /><br /> Good luck!</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDetail