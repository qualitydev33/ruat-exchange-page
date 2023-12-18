import { useEffect, useState, } from 'react'
import * as echarts from 'echarts'
import axios from 'axios';
import {
    BsFullscreen,
    BsDownload,
    BsFillShareFill,
} from '../../icon/IconImage'
import { groupBy, sumSpecialFieldOfArray } from '../../../utils/SimpleFun';
import SelectInput from '../../ui/SelectInput';

const Treemap = ({}) => {
    const cryptoRankBaseUrl = "https://api.cryptorank.io/v0";
    const cryptoRankApiKey = "efe181c5b7db42c49a09011ee82065bcae81a2266bda3f7f5c752afe52c2";
    const rateValLi = [-15, -10, -5, 0, 5, 10, 15];
    const optionObject = {
        top: [
            {title: 'All', value: 'all'},
            {title: 'Top 10', value: 10},
            {title: 'Top 100', value: 100},
            {title: 'Top 500', value: 500},
            {title: 'Top 1000', value: 1000},
            {title: 'Coins', value: 'coins'},
            {title: 'Tokens', value: 'tokens'},
        ],
        performance:  [
            {title: '1d performance', value: '24H'},
            {title: '1w performance', value: '7D'},
            {title: '1m performance', value: '30D'},
            {title: '3m performance', value: '3M'},
            {title: '6m performance', value: '6M'},
            {title: '1y performance', value: '1Y'},
            {title: 'YTD performance', value: 'YTD'},
        ],
        volume: [
            {title: 'By market cap', value: 'marketCap'},
            {title: 'By volume', value: 'volume24h'},
            {title: 'By category', value: 'category'},
        ],
        
        option1: [
            {title: 'Option 1', value: ''},
            {title: 'Option 2', value: ''},
            {title: 'Option 3', value: ''},
        ],
        option2: [
            {title: 'Option 1', value: ''},
            {title: 'Option 2', value: ''},
            {title: 'Option 3', value: ''},
        ]
    }
    
    const updateSelectHandler = (val, name) => {
        var result = optionObject[name].filter(item => item.title == val)
        setOption({...option, [name]: result[0]})
    }

    const [chart, setChart] = useState(null);
    const [option, setOption] = useState({top: optionObject.top[0], performance: optionObject.performance[0], volume: optionObject.volume[0]})
    

    const tooltipFormat = (params, subcoinLi) => {
        let result = subcoinLi.reduce((prevVal, currentVal) => {
            var price = Number(Math.floor(currentVal["price"] ? currentVal["price"]["USD"] * 100 : 0) / 100)
            var histPrice = currentVal['histPrices'] ? (currentVal['histPrices'][option.performance.value] ? currentVal['histPrices'][option.performance.value]['USD'] : 1000000000) : 1000000000
            var rate = price / histPrice < 1 ? (price == 0 ? 0 : 1 - price / histPrice) * (-100) : (price / histPrice - 1) * 100
            rate = Math.floor(rate * 100) / 100
            return prevVal + '<div class="mt-5 flex items-center text-xs font-semibold"><span class="text-c_A6A6A6">' + currentVal.symbol + '</span><span class="mx-auto">$' + price.toLocaleString() + '</span><span class="text-c_' + colorCheck(rate) +'">' + rate.toString() + '%</span></div>'
        }, '')
        let str = `<div class="flex flex-col w-63 py-5 px-2 text-c_6E7582 dark:bg-c_2E2E2E">
                        <span class='uppercase font-bold text-sm text-black dark:text-white'>${String(params.name).split(",")[1]}</span>
                        <div class='w-full mt-3'>
                            <div class='rounded-lg py-1.5 px-2.5 flex flex-col text-white bg-c_${colorCheck(params.value[2])}'>
                                <div class='flex items-center flex-wrap text-xl font-bold w-full'>
                                    <div class='break-all textellipsis_2'>${String(params.name).split(",")[2]}</div>
                                    <div class='mx-auto px-2'>$${Number(params.value[1]).toLocaleString()}</div>
                                    <div class=''>${params.value[2]}%</div>
                                </div>
                                <span class=' text-xs'>${String(params.name).split(",")[0]}</span>
                            </div>
                        </div>
                        ${result}
                    </div>`
        return str
    }
    const colorCheck = (num) => {
        if (num <= -15) return 'AA2121'
        else if (num <= -10 && num > -15) return 'C84040' 
        else if (num < 0 && num > -10) return 'ED7171'
        else if (num == 0) return 'BCC3CF'
        else if (num > 0 && num < 10) return '7EC17E'
        else if (num < 15 && num >= 10) return '518651'
        else return '215E2C' 
    }

    const getMapData = async () => {
        const globalPromise = axios.get(`${cryptoRankBaseUrl}/global?api_key=${cryptoRankApiKey}`)
        const coinPromise = axios.get(`${cryptoRankBaseUrl}/coins?api_key=${cryptoRankApiKey}`)

        let [results, globals] = await Promise.all([coinPromise, globalPromise])
        let coinList
        if (option.top.value === 'all') {
            coinList = results.data.data    
        }else if (option.top.value === 'coins') {
            coinList = results.data.data.filter(item => item.type === 'coin')
            
        }else if (option.top.value === 'tokens') {
            coinList = results.data.data.filter(item => item.type === 'token')
        }
        else { 
            coinList = results.data.data.slice(0, option.top.value)
        }
        let coinCategorize = groupBy(coinList, 'category')
        coinList.map((item) => {
            let subcoinLi = coinCategorize[item.category].slice(0, 5)
            item.name = `${item.name},${item.category},${item.symbol}`
            var price = Math.floor(item['price'] ? item['price']['USD'] * 100 : 0) / 100
            var histPrice = item['histPrices'] ? (item['histPrices'][option.performance.value] ? item['histPrices'][option.performance.value]['USD'] : 1000000000) : 1000000000
            var rate = price / histPrice < 1 ? (price == 0 ? 0 : 1 - price / histPrice) * (-100) : (price / histPrice - 1) * 100
            rate = Math.floor(rate * 100) / 100
            item.value = [option.volume.value === 'category' ? 20 : item[option.volume.value], price, rate]
            item.label = {
                show: true,
                align: 'center',
                position: 'inside',
                color: '#fff',
                formatter: function (params) {
                    let arr = [
                        `{name|${String(params.name).split(',')[0]}}`,
                        `{percent|${params.value[2]}%}`,
                        `{price| $${Number(params.value[1]).toLocaleString()}}`
                    ];
                    return arr.join('\n');
                },
                rich: {
                    name: {
                        fontSize: 52,
                        fontWeight: 500
                    },
                    percent: {
                        fontSize: 30,
                        fontWeight: 500,
                    },
                    price: {
                        fontSize: 18,
                        fontWeight: 500,
                    }
                }
            }
            item.itemStyle = {
                borderColor: '#000',
                borderWidth: 0.5,
                color: `#${colorCheck(rate)}`
            }
            item.tooltip = {
                borderColor: '#000',
                padding: 0,
                formatter: (params) => tooltipFormat(params, subcoinLi)
            }
        })
        
        console.log(coinCategorize)
        let data = [];
        Object.keys(coinCategorize).map((item) => {
            let top5SubItem = coinCategorize[item].slice(0, 5)
            data.push(
                {
                    name: item,
                    value: sumSpecialFieldOfArray(coinCategorize[item], 'marketCap'),
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    label: {
                        show: true,
                        fontSize: 30,
                    },
                    upperLabel: {
                        show: true,
                        color: '#fff',
                        fontSize: 15,
                        fontWeight: 'bold',
                    },
        
                    itemStyle: {
                        borderColor: '#000',
                        borderWidth: 1,
                        color: 'transparent'
                    },
                    tooltip: {
                        borderColor: '#000',
                        borderWidth: 1,
                    },
                    children: coinCategorize[item]
                }
            )
        })
        return data
    }

    const initMap = async() => {
        if (chart) {
            var data = await getMapData()
            chart.setOption(
                ({
                    tooltip: {},
                    series: [
                        {
                            type: 'treemap',
                            top: 'top',
                            left: 'left',
                            bottom: '0%',
                            right: '0%',
                            data: data
                        }
                    ]
                }),
                true
            );
        }
        
    }

    const reloadMap = async() => {
        if (chart) {
            var data = await getMapData()
            var chartOption = chart.getOption()
            chartOption.series[0].data = data
            chart.setOption(chartOption)
        }
    }
    

    useEffect(async () => {
        var chartDom = document.getElementById('heatmap');
        var myChart = echarts.init(chartDom);
        setChart(myChart)
        await initMap()
    }, [chart])
    useEffect(async () => {
        await reloadMap()
    }, [option])
    
    return (
        <>
            <div className="mt-6_5 lg:mt-10 grid gap-5 bg-white dark:bg-transparent lg:dark:bg-c_2E2E2E shadow-card dark:shadow-none rounded-md text-xs font-medium
                            grid-cols-2 md:grid-cols-3 lg:grid-cols-5
                            p-0 lg:p-7">
                {Object.keys(optionObject).map((item, idx) => {
                    return (
                        <SelectInput key={`item_${idx}`} className="h-7_5 px-3.5 w-full border border-transparent dark:border-c_4D4D4D rounded-lg bg-white dark:bg-transparent shadow-card dark:shadow-none"
                            name={item}
                            option_board_class="bg-white dark:bg-c_2E2E2E top-11 z-10"
                            option_li={optionObject[item]} 
                            default_option={optionObject[item][0]}
                            returnVal={(val) => updateSelectHandler(val, item)}
                        />
                    )
                })}
            </div>
            <div className='mb-6 mt-4 lg:mt-8 flex flex-row gap-6'>
                <button className='ml-auto'>
                    <BsFullscreen className='stroke-1 text-sm' />
                </button>
                <button>
                    <BsDownload className='stroke-1 text-sm' />
                </button>
                <button>
                    <BsFillShareFill className='stroke-0.5 text-sm' />
                </button>
            </div>
            <div className="w-full aspect-w-5 aspect-h-7 lg:aspect-w-13 lg:aspect-h-6">
                <div className="w-full h-full">
                    <div className='w-full h-full'>
                        <div id="heatmap" className='w-full h-full dark:bg-c_2E2E2E'></div>
                    </div>
                </div>
            </div>
            <div className='mt-9_5 lg:mt-5 flex gap-0.5'>
                <span className='text-sm font-semibold ml-auto mr-2.5'>PRICE</span>
                {rateValLi.map((item, idx) => {
                    return (
                        <div className={`h-5 w-9_5 flex items-center justify-center text-white text-xs font-semibold bg-c_${colorCheck(item)}`} 
                        key={`rate_${idx}`}>{item}%</div>
                    )
                })}
            </div>
            
        </>
    );
}

export default Treemap