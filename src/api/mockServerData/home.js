// 存储首页数据，图表相关
import Mock from "mockjs";

// 图表数据
let List = []

export default {
    getStatisticalData: () => {
        // Mock.Random.float 产生随机数100到8000之间，保留小数，最小0位，最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    虎猫: Mock.Random.float(100, 8000, 0, 0),
                    奶猫: Mock.Random.float(100, 8000, 0, 0),
                    黄猫: Mock.Random.float(100, 8000, 0, 0),
                    白猫: Mock.Random.float(100, 8000, 0, 0),
                    黑猫: Mock.Random.float(100, 8000, 0, 0),
                    花猫: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼状图
                videoData: [
                    {
                        name: '橘猫1号',
                        value: 30
                    },
                    {
                        name: '橘猫2号',
                        value: 10
                    },
                    {
                        name: '橘猫3号',
                        value: 40
                    },
                    {
                        name: '橘猫4号',
                        value: 60
                    },
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: 13,
                        active: 140
                    },
                    {
                        date: '周二',
                        new: 28,
                        active: 66
                    },
                    {
                        date: '周三',
                        new: 37,
                        active: 100
                    },
                    {
                        date: '周四',
                        new: 50,
                        active: 10
                    },
                    {
                        date: '周五',
                        new: 20,
                        active: 99
                    },
                ],
                // 折线图
                orderData: {
                    date: ['20231001', '20231002', '20231003', '20231004', '20231005', '20231006', '20231007'],
                    data: List
                },
                // 首页左侧表格信息
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '橘猫',
                        address: '北京市第二大街333号',
                    },
                    {
                        date: '2016-05-04',
                        name: '狸花猫',
                        address: '北京市第二大街111号',
                    },
                    {
                        date: '2016-05-01',
                        name: '牛奶猫',
                        address: '北京市第二大街222号',
                    },
                    {
                        date: '2016-05-03',
                        name: '蓝猫',
                        address: '北京市第二大街777号',
                    },
                    {
                        date: '2016-05-03',
                        name: '红猫',
                        address: '北京市第二大街999号',
                    },
                ]
            }
        }
    }
}