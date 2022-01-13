import React from 'react';
import SummaryCard from '../../components/SummaryCard';
import './MainDiv.scss';
import Vector1 from '../../img/vector1.svg';
import Vector2 from '../../img/vector2.svg';
import Vector3 from '../../img/vector3.svg';
import Vector4 from '../../img/vector4.svg';
import UpTrend from '../../img/icon-trending-up.svg';
import DownTrend from '../../img/icon-trending-down.svg';

const MainDiv = (props) => {
  return (
    <div className='MainDiv'>
      <div className='group1'>
        <SummaryCard
          name='Pending Requests'
          amount='1478 286'
          percentage='4.07'
          time='last month'
          isTrendDirectionUp={true}
          trendIcon={UpTrend}
          icon={Vector1}
        />
        <SummaryCard
          name='Approved Requests'
          amount='478 520'
          percentage='0.24'
          time='last month'
          isTrendDirectionUp={true}
          trendIcon={UpTrend}
          icon={Vector2}
        />
        <SummaryCard
          name='Total Agents'
          amount='154 872'
          percentage='1.64'
          time='last month'
          isTrendDirectionUp={false}
          trendIcon={DownTrend}
          icon={Vector3}
        />
        <SummaryCard
          name='Total Users'
          amount='167'
          percentage='4.07'
          time='0.00'
          isTrendDirectionUp={true}
          trendIcon={UpTrend}
          icon={Vector4}
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MainDiv;
