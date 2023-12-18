import { useEffect } from 'react'
import { sortArrayAlphabetically } from '../../../utils/SimpleFun'
import GlossaryCard from "../../ui/GlossaryCard"
import {
    BsBoxArrowUpRight,
} from '../../icon/IconImage'
import SearchInput from '../../ui/SearchInput'


const GlossaryPart = () => {
    let alphabet = Array.from('#ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    let sampleData = [
        {title: '1hr', subtitle: 'Stands for data for the past 1 hour.', heading: 'What Is a "51% Attack"?', detail: <span>A 51% attack refers to a malicious actor (or group acting in concert), controlling over 50% of the total mining power of the blockchain network and disrupting the integrity of the blockchain. Due to the way blockchain functions, consensus is required for transactions to be confirmed or added. A bad actor who controls the majority of the hashing or mining power can theoretically "form the majority" in this consensus mechanism and disrupt the integrity of the blockchain by modifying the order of transactions, preventing transactions from being confirmed, or double spend. The risk of a 51% attack is higher for blockchains with less hashing power, as it is easier for a malicious actor to procure the required majority computing power. The more miners and resources spent mining a blockchain, the safer the blockchain is. The Bitcoin network is recognized as the safest blockchain in existence as it has the largest amount of hashing power mining it. An example of a 51% attack happened in January 2019 on the altcoin Ethereum Classic blockchain.</span>},
        {title: 'Abstract', subtitle: 'Abstract is something that exists in thought as an idea.', heading: 'What Is a "51% Attack"?', detail: <span>A 51% attack refers to a malicious actor (or group acting in concert), controlling over 50% of the total mining power of the blockchain network and disrupting the integrity of the blockchain. Due to the way blockchain functions, consensus is required for transactions to be confirmed or added. A bad actor who controls the majority of the hashing or mining power can theoretically "form the majority" in this consensus mechanism and disrupt the integrity of the blockchain by modifying the order of transactions, preventing transactions from being confirmed, or double spend. The risk of a 51% attack is higher for blockchains with less hashing power, as it is easier for a malicious actor to procure the required majority computing power. The more miners and resources spent mining a blockchain, the safer the blockchain is. The Bitcoin network is recognized as the safest blockchain in existence as it has the largest amount of hashing power mining it. An example of a 51% attack happened in January 2019 on the altcoin Ethereum Classic blockchain.</span>},
        {title: 'Air Gap', subtitle: 'If data cannot be accessed, then it cannot be infected or corrupted — this is the concept of an air gap.', heading: 'What Is a "51% Attack"?', detail: <span>A 51% attack refers to a malicious actor (or group acting in concert), controlling over 50% of the total mining power of the blockchain network and disrupting the integrity of the blockchain. Due to the way blockchain functions, consensus is required for transactions to be confirmed or added. A bad actor who controls the majority of the hashing or mining power can theoretically "form the majority" in this consensus mechanism and disrupt the integrity of the blockchain by modifying the order of transactions, preventing transactions from being confirmed, or double spend. The risk of a 51% attack is higher for blockchains with less hashing power, as it is easier for a malicious actor to procure the required majority computing power. The more miners and resources spent mining a blockchain, the safer the blockchain is. The Bitcoin network is recognized as the safest blockchain in existence as it has the largest amount of hashing power mining it. An example of a 51% attack happened in January 2019 on the altcoin Ethereum Classic blockchain.</span>},
        {title: 'Algorithm', subtitle: 'A process or set of rules to be followed in problem-solving or calculation operations, usually by a computer.', heading: 'What Is a "51% Attack"?', detail: <span>A 51% attack refers to a malicious actor (or group acting in concert), controlling over 50% of the total mining power of the blockchain network and disrupting the integrity of the blockchain. Due to the way blockchain functions, consensus is required for transactions to be confirmed or added. A bad actor who controls the majority of the hashing or mining power can theoretically "form the majority" in this consensus mechanism and disrupt the integrity of the blockchain by modifying the order of transactions, preventing transactions from being confirmed, or double spend. The risk of a 51% attack is higher for blockchains with less hashing power, as it is easier for a malicious actor to procure the required majority computing power. The more miners and resources spent mining a blockchain, the safer the blockchain is. The Bitcoin network is recognized as the safest blockchain in existence as it has the largest amount of hashing power mining it. An example of a 51% attack happened in January 2019 on the altcoin Ethereum Classic blockchain.</span>},
        {title: 'Alphanumeric', subtitle: 'Alphanumeric phrases consist of both letters and numerals, or characters.', heading: 'What Is a "51% Attack"?', detail: <span>A 51% attack refers to a malicious actor (or group acting in concert), controlling over 50% of the total mining power of the blockchain network and disrupting the integrity of the blockchain. Due to the way blockchain functions, consensus is required for transactions to be confirmed or added. A bad actor who controls the majority of the hashing or mining power can theoretically "form the majority" in this consensus mechanism and disrupt the integrity of the blockchain by modifying the order of transactions, preventing transactions from being confirmed, or double spend. The risk of a 51% attack is higher for blockchains with less hashing power, as it is easier for a malicious actor to procure the required majority computing power. The more miners and resources spent mining a blockchain, the safer the blockchain is. The Bitcoin network is recognized as the safest blockchain in existence as it has the largest amount of hashing power mining it. An example of a 51% attack happened in January 2019 on the altcoin Ethereum Classic blockchain.</span>},
        {title: 'All-Time-High (ATH)', subtitle: 'The lowest point (in price, in market capitalization) that a cryptocurrency has been in history. *see All-Time-High (ATH).', heading: 'What Is a "51% Attack"?', detail: <span>A 51% attack refers to a malicious actor (or group acting in concert), controlling over 50% of the total mining power of the blockchain network and disrupting the integrity of the blockchain. Due to the way blockchain functions, consensus is required for transactions to be confirmed or added. A bad actor who controls the majority of the hashing or mining power can theoretically "form the majority" in this consensus mechanism and disrupt the integrity of the blockchain by modifying the order of transactions, preventing transactions from being confirmed, or double spend. The risk of a 51% attack is higher for blockchains with less hashing power, as it is easier for a malicious actor to procure the required majority computing power. The more miners and resources spent mining a blockchain, the safer the blockchain is. The Bitcoin network is recognized as the safest blockchain in existence as it has the largest amount of hashing power mining it. An example of a 51% attack happened in January 2019 on the altcoin Ethereum Classic blockchain.</span>},
        {title: 'Cir Gap', subtitle: 'If data cannot be accessed, then it cannot be infected or corrupted — this is the concept of an air gap.', heading: 'What Is a "51% Attack"?', detail: <span>A 51% attack refers to a malicious actor (or group acting in concert), controlling over 50% of the total mining power of the blockchain network and disrupting the integrity of the blockchain. Due to the way blockchain functions, consensus is required for transactions to be confirmed or added. A bad actor who controls the majority of the hashing or mining power can theoretically "form the majority" in this consensus mechanism and disrupt the integrity of the blockchain by modifying the order of transactions, preventing transactions from being confirmed, or double spend. The risk of a 51% attack is higher for blockchains with less hashing power, as it is easier for a malicious actor to procure the required majority computing power. The more miners and resources spent mining a blockchain, the safer the blockchain is. The Bitcoin network is recognized as the safest blockchain in existence as it has the largest amount of hashing power mining it. An example of a 51% attack happened in January 2019 on the altcoin Ethereum Classic blockchain.</span>},
    ]
    sampleData = sortArrayAlphabetically(sampleData, 'title')
    const btnLi = [
        {title: 'Request', link: ''},
        {title: 'Feedback', link: ''},
        {title: 'Contact US', link: ''},
        {title: 'Donate', link: ''},
    ]

    var sortedData = {}
    alphabet.forEach(item => {sortedData[item] = []})
    sampleData.forEach(item => {
        if (item.title[0].toUpperCase().charCodeAt() < 65 || item.title[0].toUpperCase().charCodeAt() > 90) {
            sortedData['#'].push(item)
        }else {
            sortedData[String(item.title[0]).toUpperCase()].push(item)
        }
    })
    return (
        <>
            <div className="flex flex-col text-sm font-medium">
                <div className='mt-14_5 mb-11 pl-13 pr-15 flex flex-col gap-y-8'>
                    <span className='text-28px font-bold'>Glossary</span>
                    <div className="flex items-center">
                        {/* <input type='text' className="h-9_5 min-w-253px rounded-md bg-white px-4 shadow-card" placeholder="Search" /> */}
                        <SearchInput className="h-9_5" />
                        <div className="flex items-center w-full ml-8">
                            {alphabet.map((item, idx) => {
                                return (
                                    <button key={`alphabet_${idx}`} className="mx-auto">
                                        <span className={`text-xl text-c_6E7582 dark:text-c_8A8A8A`}>{item}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="bg-c_E8EBF1 dark:bg-c_2F2F2F h-px w-full"></div>
                            
                <div className="mt-10_5 pl-13 pr-15 flex flex-col gap-y-4_5">
                    {Object.keys(sortedData).map((item, idx) => {
                        return (
                            <div key={`item_${idx}`} className={`${sortedData[item].length > 0 ? 'flex' : 'hidden'}`}>
                                <div className={`items-start text-54px pt-5 font-bold w-25`}>{item}</div>
                                <div className='flex-1 flex flex-col gap-y-4_5'>
                                    {sortedData[item].length > 0 && sortedData[item].map((item1, idx1) => {
                                        return <div key={`item${idx1}`} className="w-full flex flex-col gap-y-4_5" id={`${item1.title}`}>
                                            <GlossaryCard cardItem={item1} />
                                        </div>
                                    })}
                                </div>
                                
                                
                            </div>
                        )
                    })}
                </div>

                <div className="mt-40 mb-12_5 flex items-center justify-center gap-x-4">
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

export default GlossaryPart