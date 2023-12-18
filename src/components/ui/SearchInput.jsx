import {
    BsSearch
} from '../icon/IconImage'
const SearchInput = ({className}) => {
    return (
        <>
            <div className="relative">
                <input type="text" className={`pl-9 h-7_5 items-center rounded-md border dark:placeholder-c_8A8A8A border-c_E8EBF1 dark:border-c_4D4D4D bg-white dark:bg-transparent ${className}`} placeholder="Search" />
                <div className='absolute top-0 left-0 h-full flex flex-col'>
                    <BsSearch className='my-auto mx-2.5 text-c_6E7582' />
                </div>
            </div>
        </>
    )
}

export default SearchInput