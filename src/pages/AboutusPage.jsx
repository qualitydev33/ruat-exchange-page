import {
    AboutusImg1,
    AboutusImg2,
    AboutusImg3
} from '../components/icon/IconImage'
import CustomSlider from '../components/ui/CustomSlider'

const RenderSlider = () => {
    var renderEle = [0, 1, 2].map((item, idx) => {
        return <div key={`item_${idx}`} className="keen-slider__slide">
            <div className='flex flex-col gap-y-7'>
                {[0, 1, 2, 3].map((item, idx) => {
                    return <div key={`item_${idx}`} className='flex items-center gap-x-7'>
                        <div className='w-35 h-28'>
                            <img className='w-full h-full rounded-lg' src={AboutusImg3} alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-lg font-bold'>NAME GOES HERE</span>
                            <span className='text-sm font-medium'>Designation</span>
                        </div>
                    </div>
                })}
                
            </div>
        </div>
    })
    return <CustomSlider renderEle={renderEle} />
}

const AboutusPage = () => {

    return (
        <>
            <div className="flex flex-col text-black dark:text-c_F0F0F0">
                <div className="mt-15 flex items-center font-bold
                                 text-4xl lg:text-70px
                                 pl-5 lg:pl-17_5">
                    <span className="max-w-lg leading-tight">KNOW US EVEN BETTER</span>
                    <div className="ml-auto bg-c_1564C0 w-15 h-30 rounded-l-full"></div>
                </div>
                <div className="mt-9 flex gap-x-8">
                    <div className="w-0 lg:w-1/2"></div>
                    <div className="w-full lg:w-1/2 pr-12_5">
                        <span className="text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    </div>
                </div>
                <div className="relative flex mt-15 gap-x-8">
                    <div className='w-1/2'>
                        <img className='w-full rounded-r-3xl' src={AboutusImg1} alt="" />
                    </div>
                    <div className='w-1/2'>
                        <img className='mt-18 rounded-l-3xl' src={AboutusImg2} alt="" />
                    </div>
                    <div className="absolute -top-32 left-0 bg-c_1564C0 w-31_5 h-63 rounded-r-full"></div>
                </div>
                <div className='mt-16'>
                    <div className='flex items-center'>
                        <div className='ml-17_5 max-w-lg leading-tight text-70px font-bold'>WHAT WE DO WHY WE DO</div>
                        <div className='ml-auto bg-c_E8EBF1 w-31_5 h-63 rounded-l-full z-10 relative'></div>
                    </div>
                    
                    <div className='flex gap-x-8'>
                        <div className='w-1/2 relative'>
                            <div className='w-full aspect-w-1 aspect-h-1'>
                                <img className='w-full h-full rounded-r-3xl' src={AboutusImg3} alt="" />
                            </div>
                        </div>
                        <div className='w-1/2 pt-7 pr-12_5 flex flex-col gap-y-7 text-sm font-medium'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>                        
                    </div>
                    <div className='-mt-44 bg-c_E8EBF1 w-175px h-87_5 rounded-r-full z-10 relative'></div>
                </div>

                <div className='mt-15'>
                    <div className='flex gap-x-8'>
                        <div className='w-1/2 pl-17_5'>
                            <div className='max-w-lg font-bold text-70px leading-tight uppercase'>what we believe in</div>
                            <div className='mt-5 flex flex-col gap-y-7 text-sm font-medium'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='w-full aspect-w-1 aspect-h-1'>
                                <img className='w-full h-full rounded-l-3xl' src={AboutusImg3} alt="" />
                            </div>
                            
                        </div>
                    </div>
                    <div className='-mt-44 ml-auto bg-c_1564C0 w-175px h-87_5 rounded-l-full z-10 relative'></div>
                </div>

                <div className='flex flex-col mb-15'>
                    <div className=' text-70px leading-tight font-bold uppercase text-center'>meet the team</div>
                    <div className='text-center text-sm font-medium'>A team of 15 ambitious individuals fired up by shared values, vision and mission.</div>
                    <div className='mt-15 flex gap-x-8'>
                        <div className='relative w-1/2 flex flex-col'>
                            <div className='w-full aspect-w-1 aspect-h-1'>
                                <img className='w-full h-full rounded-r-3xl' src={AboutusImg3} alt="" />
                            </div>
                            <div className='mt-4 flex items-center justify-center gap-x-4'>
                                <span className='text-lg font-semibold'>NAME GOES HERE</span>
                                <span className='text-sm font-medium'>Designation</span>
                            </div>
                            <div className='absolute bottom-0 left-0 rounded-r-full w-85px h-42_5 bg-c_1564C0'></div>
                        </div>
                        <div className='w-1/2 pr-8'>
                            {RenderSlider()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutusPage