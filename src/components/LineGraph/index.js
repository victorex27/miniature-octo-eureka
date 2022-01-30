import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceLine,
} from 'recharts';
import './LineGraph.scss';

const LineGraph = (props) => {
  const { data } = props;
  const referenceLine = data.map(({ name }, index) => (
    <ReferenceLine key={index} x={name} stroke='#eee' />
  ));
  return (
    <div className='LineGraph'>
      <div className='header'>
        <div>
          <span>User Inflow Statistics</span>
          <br />
          <span> Nov - July </span>
        </div>
        <div>
          <span className='header__color header__color-purple'></span>
          <span className='header__type'>Agents</span> <br />
          <span className='header__color'></span>
          <span className='header__count'>475 273</span>
        </div>
        <div>
          <span className='header__color header__color-success'></span>
          <span className='header__type '>Users</span>
          <br />
          <span className='header__color'></span>
          <span className='header__count'>782 396</span>
        </div>
      </div>
      <ResponsiveContainer width='90%' height={200} fill='#fff'>
        <LineChart width='50%' height={100} data={data} fill='#fff'>
          {referenceLine}

          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            fill='#B9B9B9'
          />
          <YAxis
            domain={[0, 100]}
            axisLine={false}
            tickCount={5}
            tickLine={false}
          />
          <Line
            type='monotone'
            dataKey='pv'
            stroke='#4BDE97'
            dot={false}
            strokeWidth={2}
          />
          <Line
            type='monotone'
            dataKey='uv'
            stroke='#5F2EEA'
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
