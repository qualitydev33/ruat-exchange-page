import { useState } from 'react'
import GlossaryPart from '../components/common/Learning/GlossaryPart'
const LearningPage = () => {
    let navList = [
        {title: 'Glossary'},
        {title: 'Menu 2'},
        {title: 'Menu 3'},
    ]
    const [activeIdx, setActiveIdx] = useState(0)
    return (
        <>
            <div className="flex flex-col text-sm font-medium text-black dark:text-c_F0F0F0">
                <div className="mt-9 flex items-center justify-center gap-x-7">
                    {navList.map((item, idx) => {
                        return <button key={`nav_${idx}`} className={`h-7_5 px-4_5 flex items-center rounded-full font-semibold ${activeIdx === idx ? 'bg-c_1564C0 text-white' : 'bg-transparent dark:bg-c_2E2E2E text-black dark:text-c_8A8A8A'}`}
                                onClick={() => {setActiveIdx(idx)}}>
                            {item.title}
                        </button>
                    })}
                </div>

                {activeIdx === 0 && <GlossaryPart />}
            </div>
        </>
    )
}

export default LearningPage