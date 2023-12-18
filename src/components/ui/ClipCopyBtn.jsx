import {useState} from 'react'
import ReactTooltip from "react-tooltip";
import {
    MdContentCopy
} from '../icon/IconImage'

const ClipCopyBtn = ({className, content}) => {

    const [tooltipContent, setTooltipContent] = useState('Copy to clipboard')
    const clipCopyHandler = () => {
        navigator.clipboard.writeText(content)
        setTooltipContent('Copied!')
        setTimeout(() => {
            setTooltipContent('Copy to clipboard')
        }, 2000);
    }

    

    return (
        <>
            <button className={className} onClick={clipCopyHandler} data-tip data-for="clipcopy">
                <MdContentCopy />
            </button>
            <ReactTooltip id="clipcopy" type="info" effect="solid">
                <span>{tooltipContent}</span>
            </ReactTooltip>
        </>
    )
}

export default ClipCopyBtn