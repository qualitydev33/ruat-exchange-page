import { useState } from 'react'
import {
    BsChevronExpand,
    BsChevronContract
} from '../icon/IconImage'

const GlossaryCard = ({cardItem}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <div className="w-full py-5 bg-white dark:bg-c_2E2E2E shadow-card dark:shadow-none rounded-xl">
                <div className="px-5 flex items-center">
                    <span className="text-2xl font-semibold">{cardItem.title}</span>
                    <button className={`ml-auto w-5 h-5 rounded-full border border-c_1564C0 flex justify-center items-center ${isOpen ? 'text-white bg-c_1564C0' : 'text-c_1564C0 dark:bg-c_F0F0F0'}`}
                        onClick={() => {setIsOpen(!isOpen)}}>
                        {!isOpen && <BsChevronExpand />}
                        {isOpen && <BsChevronContract />}
                    </button>
                </div>
                <div className='px-5 mt-2.5 text-lg font-medium'>{cardItem.subtitle}</div>
                <div className={`bg-c_E8EBF1 dark:bg-c_4D4D4D h-px w-full mt-5 mb-5_5 ${isOpen ? 'flex' : ' hidden'}`}></div>
                <div className={`px-5 flex-col text-sm font-medium mt-3 pr-17_5 ${isOpen ? 'flex' : ' hidden'} transition-all duration-500 delay-300 ease-in-out`}>
                    <span className='text-2xl font-semibold'>{cardItem.heading}</span>
                    <span className='text-lg font-medium mt-2.5'>{cardItem.detail}</span>
                </div>
                
            </div>
        </>
    )
}

export default GlossaryCard