import { Route, Routes } from "react-router-dom"
import { useContext, useState } from 'react'
import {
    BsGlobe2,
    BsCurrencyDollar,
    Logo,
    BsList,
    BsX
} from '../icon/IconImage'
import SelectInput from '../ui/SelectInput'
import ThemeToggle from '../ui/ThemeToggle/ThemeToggle'
import { ThemeContext } from "../contexts/ThemeContext"
import ScrollUpBtn from "../ui/ScrollUpBtn"
import SignInModal from "./SignInModal"
import SignUpModal from "./SignUpModal"


import ExchangePage from "../../pages/ExchangePage"
import { LEFT_NAV } from "../constant"
import AboutusPage from "../../pages/AboutusPage"
import TermsOfUsePage from "../../pages/TermsOfUsePage"
import PolicyPage from "../../pages/PolicyPage"
import DisclaimerPage from "../../pages/DisclaimerPage"
import SubmitRequestPage from "../../pages/SubmitRequestPage"
import FAQPage from "../../pages/FAQPage"
import LearningPage from "../../pages/LearningPage"
import WalletCardPage from "../../pages/WalletCardPage"
import HeatmapPage from "../../pages/HeatmapPage"


const MainBoard = () => {
    
    let language_li = ['English', 'Hindi', 'Russian']
    let currency_li = ['USD', 'Rupee', 'Ruble']

    const {theme} = useContext(ThemeContext)
    const [enableMobileMenu, setEnableMobileMenu] = useState(false)
    const [language, setLanguage] = useState(language_li[0])
    const [currency, setCurrency] = useState(currency_li[0])
    const [enableSignInModal, setEnableSignInModal] = useState(false)
    const [eanbleSignUpModal, setEnableSignUpModal] = useState(false)


    const closeMobileMenuHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableMobileMenu(false)
    }
    const openMobileMenuHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        setEnableMobileMenu(true)
    }

    const openSignInModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        if (eanbleSignUpModal) {
            setEnableSignUpModal(false)
        }
        setEnableSignInModal(true)
    }

    const closeSignInModalHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableSignInModal(false)
    }

    const openSignUpModalHandler = () => {
        document.querySelector('body').style.overflow = 'hidden'
        if (enableSignInModal) {
            setEnableSignInModal(false)
        }
        setEnableSignUpModal(true)
    }
    
    const closeSignUpModalHandler = () => {
        document.querySelector('body').style.overflow = 'auto'
        setEnableSignUpModal(false)
    }

    return (
        <div className="flex-1 w-0 max-w-6xl mr-auto">
            <div className={`w-full 
                            bg-c_F8F9FB dark:bg-c_232323 sm:bg-c_F8F9FB sm:dark:bg-c_232323
                             rounded-none sm:rounded-3xl
                             pb-20 sm:pb-0
                             mb-0 sm:mb-10`}>
                <div className="items-center pb-6
                                pt-3 sm:pt-6
                                block sm:flex">
                    <div className="flex items-center
                                    px-5 sm:px-6
                                    ml-0 sm:ml-auto
                                    mb-3 sm:mb-0">
                        <div className="flex items-center">
                            <BsGlobe2 className="text-c_1564C0 dark:text-c_F0F0F0 ml-1" />
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-c_F0F0F0 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-5 z-10"
                                    option_li={language_li} 
                                    default_option={language_li[0]}
                                    returnVal={setLanguage}
                                />
                            </div>
                        </div>
                        <div className="flex items-center
                                        ml-auto sm:ml-8
                                        mr-auto sm:mr-0">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center p-0.5
                                            bg-c_1564C0 dark:bg-c_F0F0F0">
                                <BsCurrencyDollar className="text-white dark:text-black"/>
                            </div>
                            <div className="ml-3">
                                <SelectInput 
                                    className="text-xs text-c_2A7BD9 dark:text-c_F0F0F0 font-semibold w-16"
                                    option_board_class="bg-c_F8F9FB dark:bg-gray-900 top-5 z-10"
                                    option_li={currency_li} 
                                    default_option={currency_li[0]}
                                    returnVal={setCurrency}
                                />
                            </div>
                        </div>
                        <div className="ml-0 sm:ml-10">
                            <ThemeToggle />
                        </div>
                    </div>
                    <div className="h-0.5 w-full
                                    block sm:hidden
                                  bg-c_E8EBF1"></div>
                    <div className="flex items-center
                                    px-5 sm:px-6
                                    mt-5 sm:mt-0">
                        <div className="rounded-full w-7 h-7 items-center justify-center text-xl cursor-pointer font-bold text-white bg-c_1564C0 flex sm:hidden">
                            <BsList className="stroke-1" onClick={() => {openMobileMenuHandler()}}/>
                        </div>
                        <div className="block sm:hidden pl-4">
                            <Logo color={`#1564c0`} className=""/>
                        </div>
                        <button className="h-7_5 w-20 flex items-center justify-center text-sm rounded-l-full rounded-r-full transform hover:scale-110 ease-out duration-700
                                            ml-auto sm:ml-0
                                            bg-c_1564C0 text-white"
                                onClick={() => {openSignInModalHandler()}}>Sign In</button>
                    </div>
                </div>

                <div className="h-0.5 w-full
                                bg-c_E8EBF1 dark:bg-c_2F2F2F"></div>

                <div className="w-full flex flex-col">
                    <Routes>
                        <Route path="/exchanges" exact element={<ExchangePage />}></Route>
                        <Route path="/about_us" exact element={<AboutusPage />}></Route>
                        <Route path="/terms_of_use" exact element={<TermsOfUsePage />}></Route>
                        <Route path="/policy" exact element={<PolicyPage />}></Route>
                        <Route path="/disclaimer" exact element={<DisclaimerPage />}></Route>
                        <Route path="/submit_request" exact element={<SubmitRequestPage />}></Route>
                        <Route path="/faq" exact element={<FAQPage />}></Route>
                        <Route path="/learning" exact element={<LearningPage />}></Route>
                        <Route path="/wallet_card" exact element={<WalletCardPage />}></Route>
                        <Route path="/heatmaps" exact element={<HeatmapPage />}></Route>
                    </Routes>
                </div>
            </div>

            <ScrollUpBtn />

            {/* mobile menu */}
            {enableMobileMenu &&
                <div className="fixed top-0 left-0 w-full h-screen bg-c_1564C0 dark:bg-gray-900 text-white">
                    <div className="w-full h-full relative p-10">
                        <div className="flex items-center">
                            <div className="text-lg font-semibold">MENUS</div>
                            <div className="ml-auto text-4xl text-c_1564C0 w-7 h-7 rounded-full bg-white flex items-center justify-center">
                                <BsX className="stroke-0.5" onClick={() => {closeMobileMenuHandler()}}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-10 mt-10">
                            {LEFT_NAV.map((item, index) => {
                                return <div key={`leftside_${index}`} 
                                            className="flex items-center text-sm font-medium
                                                       cursor-pointer transform hover:scale-105 ease-out duration-700" 
                                            onClick={() => {closeMobileMenuHandler()}}>
                                            <div className="w-6 h-6 rounded-full bg-white mr-4"></div>
                                            <div className="">{item.title}</div>
                                        </div>
                            })}
                        </div>
                    </div>
                </div>
            }

            {/* signin modal */}
            {enableSignInModal && <SignInModal cancelSignInModalHandler={closeSignInModalHandler} openSignUpModalHandler={openSignUpModalHandler} />}

            {/* signup modal */}
            {eanbleSignUpModal && <SignUpModal cancelSignUpModalHandler={closeSignUpModalHandler} openSignInModalHandler={openSignInModalHandler}/>}
        </div>
    )
}

export default MainBoard