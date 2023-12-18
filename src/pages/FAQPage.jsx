import FaqCard from "../components/ui/FaqCard"
import {
    BsBoxArrowUpRight
} from '../components/icon/IconImage'

const FAQPage = () => {
    const btnLi = [
        {title: 'Request', link: ''},
        {title: 'Feedback', link: ''},
        {title: 'Contact US', link: ''},
        {title: 'Donate', link: ''},
    ]
    let faqList = [
        {title: 'How are the prices calculated for the various cryptocurrencies?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
        {title: 'What is "Market Capitalization" and how is it calculated?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
        {title: 'Why is the Circulating Supply used in determining the market capitalization instead of Total Supply?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
        {title: 'What is the difference between a "Coin" and a "Token" on the site?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
        {title: 'What is the criteria for a cryptocurrency or exchange to be listed on CoinMarketCap?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
        {title: 'Why are markets with no fees excluded from the price average and total trading volume?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
        {title: 'Why I no longer see the affiliate links for Exchanges on CoinMarketCap?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
        {title: 'How do I purchase cryptocurrency?', detail: "We've found that Circulating Supply is a much better metric for determining the market capitalization. Coins that are locked, reserved, or not able to be sold on the public market are coins that can't affect the price and thus should not be allowed to affect the market capitalization as well. The method of using the Circulating Supply is analogous to the method of using public float for determining the market capitalization of companies in traditional investing."},
    ]
    return (
        <>
            <div className="flex flex-col pl-13 pr-17_5 py-11 text-sm font-medium text-black dark:text-c_F0F0F0">
                <span className="text-28px font-bold">Frequently Asked Questions</span>
                <div className="mt-8 flex flex-col gap-y-4_5">
                    {faqList.map((item, idx) => {
                        return <div key={`faq_${idx}`}>
                            <FaqCard quesItem={item} />
                        </div>
                    })}
                </div>
                <div className="mt-14 flex items-center justify-center gap-x-4">
                    {btnLi.map((item, idx) => {
                        return <button key={`btn_${idx}`} className="h-9_5 px-3.5 flex items-center rounded-lg border-2 border-transparent dark:border-c_1564C0 shadow-card dark:shadow-none">
                            <span className='font-semibold'>{item.title}</span>
                            <BsBoxArrowUpRight className='text-c_1564C0 dark:text-c_F0F0F0 ml-2.5 stroke-1' />
                        </button>
                    })}
                </div>
            </div>
        </>
    )
}

export default FAQPage