import { useEffect, useState } from "react"
import { generateUUID } from "../../utils/SimpleFun"

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

const BarLinechart2 = ({chart_data}) => {
    const [chartID, setChartID] = useState(generateUUID())
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        let bar_line_chart = window.echarts.init(document.getElementById(chartID))
        
        let option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {type: "shadow", textStyle: {color: "#fff"}},
            },
            grid: {left: 40, right: 40, bottom: '10%', top: '10%'},
            xAxis: {
                data: chart_data.xdata,
                axisLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false}
            },
            yAxis: [
                {
                    splitLine: {show: true, color: '#F2F2F2'},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {color: '#C8C8C8', formatter: '{value}%'},
                },
                {
                    type: "value",
                    position: 'right',
                    splitLine: {show: false},
                    axisLine: {show: false},
                    axisTick: {show: false},
                    axisLabel: {color: '#C8C8C8'},
                }
            ],
            series: [
                {
                    name: "Bar 1",
                    type: "bar",
                    stack: "common",
                    barMaxWidth: 24,
                    itemStyle: {color: "#AADFBA"},
                    data: chart_data.bar_data_1,
                },

                {
                    name: "Bar 1",
                    type: "bar",
                    stack: "common",
                    barMaxWidth: 24,
                    itemStyle: {color: "#E69898"},
                    data: chart_data.bar_data_2,
                },
                {
                    name: "Line",
                    type: "line",
                    symbol:'none',
                    label: {show: false},
                    itemStyle: {
                        color: "#000",
                    },
                    data: chart_data.line_data,
                    yAxisIndex: 1
                },
            ]
        } 


        bar_line_chart.setOption(option)
        // update chart when screen width changed
        const debouncedHandleResize = debounce(function handleResize() {
            console.log('resize')
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            bar_line_chart.resize()
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, [])
    return (
        <div>
            {/* <div id={chartID} className="w-full" style={{height: 400}}></div> */}
            <div className="aspect-w-5 aspect-h-2">
                <div id={chartID} className="w-full h-full"></div>
            </div>
            
        </div>
    )
}

export default BarLinechart2