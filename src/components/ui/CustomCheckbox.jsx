import { useState } from 'react'
import {
    BsCheck2
} from '../icon/IconImage'
const CustomCheckbox = ({defaultVal, className, name}) => {
    const [checked, setChecked] = useState(defaultVal)
    return (
        <>
            <div className={`${className} w-5 h-5 mt-3 flex justify-center items-center cursor-pointer rounded border dark:border-c_4D4D4D`}
                onClick={() => {setChecked(!checked)}}>
                {checked && <BsCheck2 className='stroke-0.5' />}
                <input type='checkbox' className='mt-3 mb-2.5 dark:bg-transparent hidden' name={name} value={checked}/>
            </div>
        </>
    )
}

export default CustomCheckbox