import React, { useEffect, useState } from "react";
import { generateUUID } from "../../utils/SimpleFun";


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
  

const DynamicLineChart = ({className, line_color}) => {
    const [chartID, setChartID] = useState(generateUUID())
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        const lineChart = window.echarts.init(document.getElementById(chartID))
        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            };
        }
        let data = [];
        let now = new Date(1997, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let value = Math.random() * 1000;
        for (var i = 0; i < 2000; i++) {
            data.push(randomData());
        }
        let option = {
            title: {
                text: ''
            },
            grid: {
                top: '5%',
                bottom: '5% '
            },
            color: line_color,
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return (
                        date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1]
                    );
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                show: false,
                type: 'time',
                splitLine: {
                show: false
                }
            },
            yAxis: {
                show: false,
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                show: false
                }
            },
            series: [
                {
                name: 'Fake Data',
                type: 'line',
                showSymbol: false,
                data: data
                }
            ]
        };
        lineChart.setOption(option)
        // let chart_interval = setInterval(function () {
        //     for (var i = 0; i < 5; i++) {
        //         data.shift();
        //         data.push(randomData());
        //     }
        //     lineChart.setOption({
        //         series: [
        //         {
        //             data: data
        //         }
        //         ]
        //     });
        // }, 1000);
        // return () => {
        //     clearInterval(chart_interval)
        // }

        const debouncedHandleResize = debounce(function handleResize() {
            console.log('resize')
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            lineChart.resize()
        }, 1000)

        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, [])

    
    return(
        <div id={chartID} className={className}></div>
    )
}

export default React.memo(DynamicLineChart)