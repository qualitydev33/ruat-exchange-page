import {
    BsBoxArrowUpRight,
} from '../components/icon/IconImage'

const DisclaimerPage = () => {
    const btnLi = [
        {title: 'Request', link: ''},
        {title: 'Feedback', link: ''},
        {title: 'Contact US', link: ''},
        {title: 'Donate', link: ''},
    ]
    return (
        <>
            <div className="flex flex-col gap-y-9 pl-13 pr-16 py-11 text-sm font-medium text-black dark:text-c_F0F0F0">
                <span className="text-28px font-bold">Disclaimer</span>
                <div className="">
                    <span className="text-xl font-bold">No Investment Advice</span>
                    <p className="mt-2">The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. CoinMarketCap does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.</p>
                </div>
                <div className="">
                    <span className="text-xl font-bold">Accuracy Information</span>
                    <p className="mt-2">CoinMarketCap will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. CoinMarketCap provides all information as is. You understand that you are using any and all information available here at your own risk.</p>
                </div>
                <div className="">
                    <span className="text-xl font-bold">Non Endorsement</span>
                    <p className="mt-2">The appearance of third party advertisements and hyperlinks on CoinMarketCap does not constitute an endorsement, guarantee, warranty, or recommendation by CoinMarketCap. Do conduct your own due diligence before deciding to use any third party services.</p>
                </div>
                <div className="">
                    <span className="text-xl font-bold">Affiliate Disclosure</span>
                    <p className="mt-2">CoinMarketCap may receive compensation for affiliate links. This compensation may be in the form of money or services and could exist without any action from a site visitor. Should you perform activities in relation to an affiliate link, it is understood that some form of compensation might be made to CoinMarketCap. For example, if you click on an affiliate link, and sign up and trade on an exchange, CoinMarketCap may receive compensation. Each affiliate link is clearly marked with an icon next to it.</p>
                </div>
                
                <div className="mt-14 flex items-center justify-center gap-x-4">
                    {btnLi.map((item, idx) => {
                        return <button key={`btn_${idx}`} className="h-9_5 px-3.5 flex items-center rounded-lg border border-transparent dark:border-c_1564C0 shadow-card dark:shadow-none">
                            <span className='font-semibold'>{item.title}</span>
                            <BsBoxArrowUpRight className='text-c_1564C0 dark:text-c_F0F0F0 ml-2.5 stroke-1' />
                        </button>
                    })}
                </div>
            </div>
        </>
    )
}

export default DisclaimerPage