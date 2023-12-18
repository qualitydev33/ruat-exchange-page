import {useState, useEffect} from 'react'
import SubmitContactus from '../components/common/SubmitReq/SubmitContactus'
import SubmitDonate from '../components/common/SubmitReq/SubmitDonate'
import SubmitFeedback from '../components/common/SubmitReq/SubmitFeedback'

import SubmitReq from '../components/common/SubmitReq/SubmitReq'


const SubmitRequestPage = () => {
    const navLi = [
        {title: 'Submit Request'},
        {title: 'Feedback'},
        {title: 'Donate'},
        {title: 'Contact Us'}
    ]
    
    
    
    const [activeNavIdx, setActiveNavIdx] = useState(0)
    
    

    

    
    return (
        <>
            <div className="flex flex-col py-11 text-sm font-medium text-black dark:text-c_F0F0F0">
                <div className="flex justify-center items-center gap-6">
                    {navLi.map((item, idx) => {
                        return (
                            <button key={`nav_${idx}`} className={`h-7_5 px-4_5 rounded-full font-semibold ${activeNavIdx === idx ? 'bg-c_1564C0 text-white' : 'bg-transparent dark:bg-c_2E2E2E text-black dark:text-c_8A8A8A'}`}
                            onClick={() => {setActiveNavIdx(idx)}}>{item.title}</button>
                        )
                    })}
                </div>
                {activeNavIdx === 0 && <SubmitReq />}
                {activeNavIdx === 1 && <SubmitFeedback />}
                {activeNavIdx === 2 && <SubmitDonate />}
                {activeNavIdx === 3 && <SubmitContactus />}

            </div>
        </>
    )
}

export default SubmitRequestPage