import { useState } from 'react'
import {
    BsChevronExpand,
    BsChevronContract
} from '../icon/IconImage'

const FaqCard = ({quesItem}) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <>
            <div className="w-full p-5 bg-white dark:bg-c_2E2E2E shadow-card dark:shadow-none rounded-xl">
                <div className="flex items-center">
                    <span className="text-xl font-semibold">{quesItem.title}</span>
                    <button className={`ml-auto w-5 h-5 rounded-full border border-c_1564C0 flex justify-center items-center ${isOpen ? 'text-white bg-c_1564C0' : 'text-c_1564C0 dark:bg-c_F0F0F0'}`}
                        onClick={() => {setIsOpen(!isOpen)}}>
                        {!isOpen && <BsChevronExpand />}
                        {isOpen && <BsChevronContract />}
                    </button>
                </div>
                <div className={`text-sm font-medium mt-3 pr-17_5 ${isOpen ? 'flex' : ' hidden'} transition-all duration-500 delay-300 ease-in-out`}>{quesItem.detail}</div>
                
            </div>
        </>
    )
}

export default FaqCard