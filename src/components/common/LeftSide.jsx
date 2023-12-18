import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { 
    Logo
} from "../icon/IconImage"
import { ThemeContext } from '../contexts/ThemeContext'
import { LEFT_NAV } from "../constant"

const LeftSide = ({className}) => {
    const {theme, setTheme} = useContext(ThemeContext)
    const [enableMenu, setEnableMenu] = useState([true, new Array(LEFT_NAV.length - 1).fill(false)])
    const navigate = useNavigate()

    const menuHandler = (index) => {
        let new_array = new Array(LEFT_NAV.length).fill(false)
        new_array[index] = true
        setEnableMenu(new_array)
        navigate(LEFT_NAV[index].link, {replace: false})
    }

    return (
        <>
            <div className={`flex flex-col w-52 ${className}`}>
                <div className="mt-7_5">
                    <Logo color={`#1564c0`} className=""/>
                </div>
                <div className="flex flex-col mt-7_5">
                    {LEFT_NAV.map((item, index) => {
                        return <div key={`menu_${index}`} 
                                    className={`font-semibold flex items-center mt-7_5 text-sm cursor-pointer ${window.location.pathname === LEFT_NAV[index].link ? 'text-c_1564C0 dark:text-white' : 'text-black dark:text-c_8A8A8A'}`}
                                    onClick={() => {menuHandler(index)}}>
                                    <div className="w-6 h-6 rounded-full bg-c_E8EBF1 dark:bg-c_8A8A8A"></div>
                                    <div className="ml-2 transform hover:scale-110 ease-out duration-700">{item.title}</div>
                                </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default LeftSide