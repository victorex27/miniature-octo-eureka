import React from 'react';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceLine,
  BarChart,
  Bar,
} from 'recharts';
import './BarGraph.scss';


const BarGraph = (props) => {
  const { data } = props;
  const referenceLine = [0, 200, 400, 600, 800, 1000].map((num, index) => (
    <ReferenceLine key={index} y={num} stroke='#fff' strokeDasharray='1 1' />
  ));
  return (
    <div className='BarGraph'>
      <ResponsiveContainer width='90%' height={200} fill='#fff'>
        <BarChart
          width={10}
          height={100}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          fill='#fff'
        >
          {referenceLine}

          <XAxis
            dataKey='name'
            axisLine={false}
            tickLine={false}
            fill='#B9B9B9'
          />
          <YAxis
            domain={[0, 1000]}
            axisLine={false}
            tickCount={5}
            tickLine={false}
          />

          <Bar dataKey='pv' fill='#fff' barSize={3} />
        </BarChart>
      </ResponsiveContainer>
      <div className='detail'>
        <span className='detail__title'>New Users</span> <br />
        <span className='detail__prefix'>(+23%)</span>
        <span className='detail__time'>&nbsp; than last week</span>
      </div>
    </div>
  );
};

export default BarGraph;
