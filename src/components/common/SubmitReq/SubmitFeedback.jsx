import {
    BsPlusLg,
    BsXLg
} from '../../icon/IconImage'

const SubmitFeedback = () => {
    return (
        <>
            <div className="pl-13 pr-9 mt-15 flex flex-col text-sm font-medium text-black dark:text-c_F0F0F0">
                <span className='text-28px font-bold'>Submit a feedback</span>
                <span className="mt-4 text-black dark:text-c_8A8A8A">For any queries, please complete this form</span>
                <div className="mt-12 flex flex-col gap-y-10">
                    <div className="flex items-center w-full max-w-2xl">
                        <div className="w-44">
                            <span className="font-semibold">Name<span className="ml-1 text-c_C85151">*</span></span>
                        </div>
                        <div className="flex-1 flex items-end">
                            <input type="text" className="h-7_5 px-3 w-full text-xs rounded border dark:placeholder-c_8A8A8A border-transparent dark:border-c_4D4D4D bg-white dark:bg-transparent shadow-card dark:shadow-none" placeholder="Type title" />
                            <span className="ml-2.5 text-xs text-c_BCC3CF dark:text-c_8A8A8A w-14">50/50</span>
                        </div>
                    </div>
                    <div className="flex items-center w-full max-w-2xl">
                        <div className="w-44">
                            <span className="font-semibold">Email ID<span className="ml-1 text-c_C85151">*</span></span>
                        </div>
                        <div className="flex-1 flex items-end">
                            <input type="text" className="h-7_5 px-3 w-full text-xs rounded border border-transparent dark:border-c_4D4D4D bg-white dark:bg-transparent shadow-card dark:shadow-none" />
                            <span className="ml-2.5 text-xs invisible w-14">50/50</span>
                        </div>
                    </div>
                    <div className="flex items-center w-full max-w-2xl">
                        <div className="w-44">
                            <span className="font-semibold">Regarding<span className="ml-1 text-c_C85151">*</span></span>
                        </div>
                        <div className="flex-1 flex items-end">
                            <input type="text" className="h-7_5 px-3 w-full text-xs rounded border border-transparent dark:border-c_4D4D4D bg-white dark:bg-transparent shadow-card dark:shadow-none" />
                            <span className="ml-2.5 text-xs invisible w-14">50/50</span>
                        </div>
                    </div>
                    <div className="flex w-full max-w-2xl">
                        <div className="w-44">
                            <span className="font-semibold">Feedback<span className="ml-1 text-c_C85151">*</span></span>
                        </div>
                        <div className="flex-1 flex items-end">
                            <textarea className="p-3 w-full text-xs rounded border dark:placeholder-c_8A8A8A border-transparent dark:border-c_4D4D4D bg-white dark:bg-transparent shadow-card dark:shadow-none" rows={10} placeholder="Type here" />
                            <span className="ml-2.5 text-xs text-c_BCC3CF dark:text-c_8A8A8A w-14">500/500</span>
                        </div>
                    </div>
                    <div className="flex w-full max-w-2xl">
                        <div className="w-44 flex flex-col">
                            <span className="font-semibold">Attachment</span>
                            <span className='text-11px text-c_6E7582 dark:text-c_8A8A8A'>Maximum file size: 5M</span>
                        </div>
                        <div className="flex-1 flex items-end">
                            <div className='flex flex-wrap gap-4'>
                                <div className='w-30 h-30 bg-c_E8EBF1 dark:bg-c_2E2E2E flex flex-col rounded-lg'>
                                    <BsPlusLg className='m-auto text-xl stroke-1 text-c_D0D7E9 dark:text-c_4D4D4D' />
                                </div>
                                <div className='relative w-30 h-30 rounded-lg flex flex-col bg-white dark:bg-c_2E2E2E shadow-card dark:shadow-none'>
                                    <span className='m-auto text-xs text-c_6E7582 dark:text-c_F0F0F0'>ABC.pdf</span>
                                    <button className='absolute top-2 right-2 text-c_D0D7E9 dark:text-c_4D4D4D'>
                                        <BsXLg />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full max-w-2xl'>
                        <div className='w-44'></div>
                        <div className='flex-1'>
                            <button className='h-7_5 px-6 flex items-center rounded-full text-white bg-c_1564C0'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubmitFeedback