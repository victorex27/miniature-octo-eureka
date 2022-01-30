import React from 'react';
import SummaryCard from '../../components/SummaryCard';
import Vector1 from '../../img/vector1.svg';
import Vector2 from '../../img/vector2.svg';
import Vector3 from '../../img/vector3.svg';
import Vector4 from '../../img/vector4.svg';
import UpTrend from '../../img/icon-trending-up.svg';
import DownTrend from '../../img/icon-trending-down.svg';
import Table from '../../components/Table';
import './MainDiv.scss';
import LineGraph from '../../components/LineGraph';
import BarGraph from '../../components/BarGraph';

const userList = [
  {
    img: './michael.png',
    name: 'Michael Olu',
    email: 'michael@mail.com',
    type: 'New Agent',
    status: 'Pending',
    date: '23/04/18',
  },
  {
    img: './chioma.png',
    name: 'Chioma James',
    email: 'alexa@mail.com',
    type: 'Account Deactivation',
    status: 'Pending',
    date: '23/12/20',
  },
  {
    img: './boluwatife.png',
    name: 'Boluwatife Ade',
    email: 'laure@mail.com',
    type: 'New User',
    status: 'Active',
    date: '13/04/19',
  },
  {
    img: './miriam.png',
    name: 'Miriam Eric',
    email: 'miriam@mail.com',
    type: 'Email Auth',
    status: 'Active',
    date: '03/04/21',
  },
];

const MainDiv = (props) => {
  return (
    <div className='MainDiv'>
      <div className='group1'>
        <SummaryCard
          name='Pending Requests'
          amount='1478 286'
          percentage='4.07'
          time='Last Month'
          isTrendDirectionUp={true}
          trendIcon={UpTrend}
          icon={Vector1}
        />
        <SummaryCard
          name='Approved Requests'
          amount='478 520'
          percentage='0.24'
          time='Last Month'
          isTrendDirectionUp={true}
          trendIcon={UpTrend}
          icon={Vector2}
        />
        <SummaryCard
          name='Total Agents'
          amount='154 872'
          percentage='1.64'
          time='Last Month'
          isTrendDirectionUp={false}
          trendIcon={DownTrend}
          icon={Vector3}
        />
        <SummaryCard
          name='Total Users'
          amount='167'
          percentage='0.00'
          time='Last Month'
          isTrendDirectionUp={true}
          trendIcon={UpTrend}
          icon={Vector4}
        />
      </div>
      <div className='subdiv'>
        <div className='line-graph'>
          <LineGraph />
        </div>
        <div className='bargraph'>
          <BarGraph />
        </div>
        <div className='users'>
          <Table users={userList} title='Recent Requests' />
        </div>
      </div>
    </div>
  );
};

export default MainDiv;
