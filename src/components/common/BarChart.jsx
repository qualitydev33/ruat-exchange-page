import React, { useContext, useEffect, useState } from "react"
import {
    BsCalendarEvent
} from '../icon/IconImage'
import { generateUUID } from "../../utils/SimpleFun"
import { ThemeContext } from "../contexts/ThemeContext"


function debounce(fn, ms) {
    let timer
    return () => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}


const BarChart = ({chart_data}) => {

    let date_option_li = [
        {title: '7d', value: '7d'},
        {title: '30d', value: '30d'},
        {title: '60d', value: '60d'},
        {title: '90d', value: '90d'},
        {title: '1yr', value: '1yr'},
        {title: 'All', value: 'all'},
        
    ]

    const [chartID, setChartID] = useState(generateUUID())
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [enableDateOption, setEnableDateOption] = useState([true, new Array(date_option_li.length - 1).fill(false)])
    const [enableDatePicker, setEnableDatePicker] = useState(false)

    const {theme, setTheme} = useContext(ThemeContext)

    const updateChartByDateHandler = (index) => {
        let new_array = new Array(date_option_li.length).fill(false)
        new_array[index] = true
        setEnableDateOption(new_array)
        setEnableDatePicker(false)
    }

    const chooseDatePickerHandler = () => {
        let new_array = new Array(date_option_li.length).fill(false)
        setEnableDateOption(new_array)
        setEnableDatePicker(true)
    }

    useEffect(() => {
        const bar_chart = window.echarts.init(document.getElementById(chartID))
        let x_data = []
        let y_data = []
        for (let index = 0; index < chart_data.length; index++) {
            x_data.push(chart_data[index].x_data)
            y_data.push(chart_data[index].y_data)
        }
        let yMax = 500;
        let dataShadow = [];
        for (let i = 0; i < y_data.length; i++) {
            dataShadow.push(yMax);
        }
        let option = {
            xAxis: {
                data: x_data,
                axisLabel: {
                    inside: false,
                    color: '#BCC3CF'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#F2F2F2'
                    }
                },
                splitLine: {
                    itemStyle: {
                        color: '#F2F2F2'
                    }
                },
                z: 10
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#C8C8C8'
                }
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [
                {
                    type: 'bar',
                    // showBackground: true,
                    itemStyle: {
                        // color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        //     { offset: 0, color: '#83bff6' },
                        //     { offset: 0.5, color: '#188df0' },
                        //     { offset: 1, color: '#188df0' }
                        // ])
                        color: `${theme === 'dark' ? '#0fc9f2' : '#7EAFE8'}`
                    },
                    emphasis: {
                        itemStyle: {
                            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#2378f7' },
                                { offset: 0.7, color: '#2378f7' },
                                { offset: 1, color: '#83bff6' }
                            ])
                        }
                    },
                    data: y_data
                }
            ]
        };
        // Enable data zoom when user click bar.
        const zoomSize = 6;
        bar_chart.on('click', function (params) {
            console.log(x_data[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            bar_chart.dispatchAction({
                type: 'dataZoom',
                startValue: x_data[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue:
                x_data[Math.min(params.dataIndex + zoomSize / 2, y_data.length - 1)]
            });
        });

        bar_chart.setOption(option)

        // update chart when screen width changed
        const debouncedHandleResize = debounce(function handleResize() {
            console.log('resize')
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            bar_chart.resize()
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, [])

    return (
        <div className="flex flex-col">
            <div id={chartID} className="w-full" style={{height: 500}}></div>
            <div className="flex flex-col">
                <div className="flex items-center gap-y-2 flex-wrap
                                mr-auto sm:mr-5
                                ml-auto
                                gap-x-1 sm:gap-x-2">
                    {date_option_li.map((item, index) => {
                        return (
                            <button key={`date_option_${index}`} 
                                className={`flex items-center justify-center rounded-full font-semibold px-4 ${enableDateOption[index] === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'text-black dark:text-white'}
                                            cursor-pointer transform hover:scale-105 ease-out duration-700
                                            h-7_5
                                            text-xs sm:text-sm`}
                                onClick={() => {updateChartByDateHandler(index)}}>{item.title}</button>
                        )
                    })}
                    <button className={`flex items-center justify-center rounded-full font-semibold ${enableDatePicker === true ? 'bg-c_1564C0 dark:bg-dark_0fc9f2 text-white' : 'text-black dark:text-white'}
                                    transform hover:scale-105 ease-out duration-700
                                    text-xs sm:text-sm
                                    px-1 sm:px-4
                                    h-6_5 sm:h-7_5`}
                        onClick={() => {chooseDatePickerHandler()}}>
                        <BsCalendarEvent className="stroke-1" />
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default React.memo(BarChart)