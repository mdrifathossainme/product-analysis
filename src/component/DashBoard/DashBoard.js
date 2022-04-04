import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data=[
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 74245241,
            "revenue": 104010
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 142313455,
            "revenue": 245000
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 97400000,
            "revenue": 670100
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 65000000,
            "revenue": 404050
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 70000456,
            "revenue": 509000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 67000000,
            "revenue": 610000
        }
    ]
    return (
        <div className='mt-10 mx-12'>
             <BarChart width={1230} height={550} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="investment" fill="#82ca9d" />
            </BarChart>

      <AreaChart width={1230} height={550} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis  />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
        </div>
    );
};

export default DashBoard;