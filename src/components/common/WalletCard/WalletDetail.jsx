import {
    BsChevronRight,
    FaStar,
    FaRegStar,
    AiFillAndroid,
    AiFillApple,
    AiOutlineGlobal,
    AiFillWindows,
    FaLinux,
} from '../../icon/IconImage'

import SearchInput from '../../ui/SearchInput'

const WalletDetail = () => {
    let cryptoList = new Array(22).fill('Eth')
    return <>
        <div className="flex flex-col text-sm font-medium pt-11 text-black dark:text-c_F0F0F0">
            <div className="flex items-center gap-x-2 text-c_6E7582 dark:text-c_8A8A8A">
                <span>Wallets & Cards</span>
                <BsChevronRight />
                <span>All Wallets</span>
                <BsChevronRight />
                <span className=' text-black dark:text-c_F0F0F0'>Nexo Wallet</span>
            </div>

            <div className='mt-8 bg-white dark:bg-c_2E2E2E rounded-lg pt-8 pb-12_5 w-full shadow-card dark:shadow-none'>
                <div className='pl-7 pr-12 flex items-center'>
                    <div className='w-14_5 h-14_5 rounded-full p-2 border border-c_E8EBF1 dark:border-c_4D4D4D flex'>
                        <img className='w-full m-auto' src="https://cryptologos.cc/logos/nexo-nexo-logo.png?v=018" alt="" />
                    </div>
                    <span className='ml-4_5 text-28px font-bold'>Nexo Wallet </span>
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
                    <div className='flex py-6 pl-7 pr-6'>
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
                            <div className='mt-5 flex items-center text-c_BCC3CF text-2xl'>
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

                    <div className='pt-5_5 pl-7 pr-6 flex flex-col '>
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

            <div className='mt-13 mb-10 px-6 flex flex-col font-semibold'>
                <span className='text-22px font-semibold'>Nexo Wallet Review</span>
                <span className='mt-5_5'>Nexo, based in London, United Kingdom, first went online back in 2017, offering customers cold wallets for storing cryptocurrency, debit cards, NFT lending desk, quick consumer loans, as well as unbeatable crypto interest rates. <br /><br /> The company operates as a cryptocurrency interest account and lending platform to clients the world over. Nexo is revered within the crypto community for its unrivalled APY rates, which range between 6% and 17% depending on the digital asset in question.<br /><br /> With some 22 cryptocurrencies to choose from, each with its own APY rate, customers are spoilt for choice. To name a few, Nexo users will have access to coins like BTC, ETH, LTC, BCH, SOL, EOS, XLM, and XRP.</span>
                <div>

                </div>
                <span className='mt-6_5'>While Nexo isn’t the only platform offering cryptocurrency interest paid out daily, there are few that can match upwards of 12% for popular fiat currencies such as USD, EUR, and GBP. The quality of the service has led to Nexo experiencing excellent growth and boasting over three million users worldwide.<br /><br /> Nexo is proud of its growth and proudly displays the fact it has over $12 billion in assets under management. As one of the largest crypto interest account services in the world, customers can quickly and securely invest in a selection of the most prominent cryptocurrencies, while reaping the benefits of excellent interest rates.</span>
                <span className='mt-5_5'>Some key features on this portal are</span>
                <div className='mt-6_5 flex flex-col gap-y-2'>
                    {Array(5).fill(true).map((item, idx) => {
                        return <div key={`item_${idx}`} className="flex items-center gap-x-3.5">
                            <span className='w-2 h-2 rounded-full bg-c_1564C0'></span>
                            <span>Very high crypto earn rates - up to 17%</span>
                        </div>
                    })}
                </div>
                
                <div className='mt-12 flex flex-col'>
                    <span className='text-22px'>Is Nexo Easy to Use?</span>
                    <span className='mt-3'>The website and mobile app are easy to use and offer a broad range of great features. Nexo has made crypto investment a bite-sized experience, stripping things back and making it easy for the customer to enjoy the fruits of investing in digital assets. The platform is well suited for long-term investors and is well-positioned to become the industry leader in the DeFi space for lending and borrowing digital currencies. A straightforward sign-up process and first-rate customer support have helped to build a fast-growing community of users.</span>
                </div>

                <div className='mt-9_5 flex flex-col'>
                    <span className='text-22px'>Does Nexo Offer a Mobile App?</span>
                    <span className='mt-3'>Manage your crypto on the go and with peace of mind via the Nexo mobile app. The user experience through the app mimics that of the desktop platform, with seamless navigation through a range of excellent features. The Nexo mobile app allows customers to manage their card and credit line, as well as trade currency with just a few taps of the screen. Nexo users will be supported with military-grade safety features, which include 2-factor authentication, 256-bit encryption and 24/7 fraud monitoring services. The app is available as a free download for both iOS and Android users.</span>
                </div>

                <div className='mt-9_5 flex flex-col'>
                    <span className='text-22px'>Does Nexo Have Fees?</span>
                    <span className='mt-3'>Platforms like Nexo operate differently than out and out trading platforms like Binance. As such, Nexo charges a spread estimated at around 2% on transactions. Nexo charges gas fees on crypto withdrawals; to carry out the withdrawal and to add the transaction to the blockchain. Beyond that, the only other fees are associated with withdrawals, but they are based on a tier system (mentioned below) based on the amount of NEXO tokens held in the account in question. The loyalty tier below accounts for how many free withdrawals are allowed per month:</span>
                    <div className='mt-3 flex flex-col gap-y-2'>
                        {Array(4).fill(true).map((item, idx) => {
                            return <div key={`item_${idx}`} className="flex items-center gap-x-3.5">
                                <span className='w-2 h-2 rounded-full bg-c_1564C0'></span>
                                <span>Basic -1 per month</span>
                            </div>
                        })}
                    </div>
                    <span className='mt-3'>Sadly, when it comes to fees, there is no definitive answer, as Nexo doesn’t disclose their spread. Nexo does allow users to avoid extra fees or penalties on crypto-backed loans.</span>
                    <div className='pt-8 pb-12'>
                    </div>
                </div>

                <div className='mt-9_5 flex flex-col'>
                    <span className='text-22px'>What Coins Does Nexo Support?</span>
                    <span className='mt-3'>Nexo backs all the major cryptocurrencies, including popular emerging currencies. The full list of currencies looks like this: Bitcoin (BTC), Ethereum (ETH), Tether (USDT), NEXO token (NEXO), Polkadot (DOT), Avalanche (AVAX), Polygon (MATIC), Solana (SOL), Cardano (ADA), Ripple (XRP), Bitcoin Cash (BCH), Litecoin (LTC), EOS (EOS), Stellar (XLM), Chainlink (Link), Tron (TRX), PAX Gold (PAXG), Luna (LUNA), Uniswap (UNI), Dogecoin (DOGE), USD Coin (USDC), and Dai (DAI).</span>
                </div>

                <div className='mt-12 flex flex-col'>
                    <span className='text-22px'>Does it store NFTs, Crypto Art, and Collectibles?</span>
                    <span className='mt-3'>Although the focus of Nexo is on crypto interest accounts and the buying and selling of cryptocurrencies, the platform does offer an NFT Lending Desk. The product allows users to borrow up to 20% of the value of your This Bored-Ape Club or CryptoPunks NFT without selling it. Users will be able to take out NFT-backed ETH or stablecoins, as well as the provision of a dedicated account manager to fully utilize the platform.</span>
                </div>
                <div className='mt-5 flex flex-col'>
                    <span className='text-22px'>Is Nexo Anonymous?</span>
                    <span className='mt-3'>Nexo has established itself as one of the premium crypto interest account platforms around. This means that all customers will be asked to complete the compulsory identify verification process on the Nexo platform. The KYC process is simple, fully automated and takes just a matter of minutes. Customers will be asked to produce a high-quality photo from a government-issued document, as well as provide some basic personal information.</span>
                </div>
                <div className='mt-9_5 flex flex-col'>
                    <span className='text-22px'>Does Nexo have an Affiliate program?</span>
                    <span className='mt-3'>The Nexo Loyalty Program is designed to give customers ease of use and flexibility when managing digital assets, as well as giving customers unified credit line discounts, earn bonuses, dividends, and free crypto withdrawals. The loyalty program is designed with a four-tier system and the aim is to try and encourage users to buy into the value of the Nexo platform through the purchase of its native token NEXO. It breaks down like this:</span>
                    <div className='mt-3 flex flex-col gap-y-2'>
                        {Array(4).fill(true).map((item, idx) => {
                            return <div key={`item_${idx}`} className="flex items-center gap-x-3.5">
                                <span className='w-2 h-2 rounded-full bg-c_1564C0'></span>
                                <span>Base: No NEXO Tokens are needed</span>
                            </div>
                        })}
                    </div>
                    <span className='mt-6'>Nexo also offers a great referral program, which rewards customers with $10 in BTC per friend. To qualify for the earn crypto together bonus, new customers who top up $100 or more in assets will be given $10 in BTC, as well as the existing customer who shared the link.</span>
                </div>
                <div className='mt-9_5 flex flex-col'>
                    <span className='text-22px'>Is Nexo Safe?</span>
                    <span className='mt-3'>Nexo scores highly when it comes to security on the platform. There have been no major issues regarding security breaches and customers have complete control over their accounts. With an immaculate record of customer satisfaction and security, Nexo is one of the most reliable platforms in operation.</span>
                </div>
                <div className='mt-9 flex flex-col'>
                    <span className='text-22px'>Deposit Methods</span>
                    <span className='mt-3'>Customers will have the choice of 18 different cryptocurrencies they can buy directly with their card. Visa and Maestro are accepted, with instant execution of digital assets to the user’s account. The minimum transaction limit is $50 and the maximum is $5000—customers can buy up to $10,000 per month. Nexo will guarantee that the price you see at the point of purchase, is the price you’ll receive. All crypto deposits made directly to your Nexo account are free. Nexo does not charge for any transfer between Nexo accounts.</span>
                </div>

            </div>

        </div>
    </>
}
export default WalletDetail