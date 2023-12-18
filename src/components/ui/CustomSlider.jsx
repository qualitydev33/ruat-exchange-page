import { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import {
    BsChevronLeft,
    BsChevronRight
} from '../icon/IconImage'


const ArrowLeft = ({onClick, disabled}) => {
    return (
        <button onClick={onClick} className={`my-auto rounded-full border w-7 h-7 flex justify-center items-center ${disabled ? 'border-c_BCC3CF text-c_BCC3CF' : 'border-c_1564C0 text-c_1564C0'}`}>
          <BsChevronLeft />
        </button>
    )
}
  
const ArrowRight = ({onClick, disabled}) => {
    return (
        <button onClick={onClick} className={`my-auto ml-auto rounded-full border w-7 h-7 flex justify-center items-center ${disabled ? 'border-c_BCC3CF text-c_BCC3CF' : 'border-c_1564C0 text-c_1564C0'}`} >
            <BsChevronRight />
        </button>
    )
}
  

const CustomSlider = ({renderEle}) => {
    const [slideIdx, setSlideIdx] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            // alert(slider.track.details.rel)
            setSlideIdx(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <>
            <div className='relative'>
                <div ref={sliderRef} className="keen-slider px-13">
                    {renderEle}
                </div>
                {loaded && instanceRef.current && (
                <>
                    <div className='absolute top-0 left-0 h-full flex flex-col'>
                        <ArrowLeft 
                            onClick={(e) => e.stopPropagation() || instanceRef.current.prev()}
                            disabled={slideIdx === 0 }
                        />
                    </div>
                    <div className='absolute top-0 right-0 h-full flex flex-col'>
                        <ArrowRight
                            onClick={(e) => e.stopPropagation() || instanceRef.current.next()}
                            disabled={slideIdx === instanceRef.current.track.details.slides.length - 1}
                        />
                    </div>
                </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className='mt-6 w-full flex flex-col'>
                    <div className="flex mx-auto gap-x-3">
                        {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current.moveToIdx(idx)
                                    }}
                                    className={`w-2.5 h-2.5 rounded-full ${slideIdx === idx ? "active bg-c_1564C0" : "bg-c_E8EBF1 dark:bg-c_4D4D4D"}`}
                                ></button>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default CustomSlider