import React from 'react';
import './SummaryCard.scss';

const SummaryCard = (props) => {
  const { name, amount, percentage, time, icon, trendIcon, isTrendDirectionUp } = props;

  const trenClass= isTrendDirectionUp ? 'orange':'red-orange';
  return (
    <div className='SummaryCard'>
      <div className='Icon'>
        <div>
          <img src={icon} alt='Card Logo' />
        </div>
      </div>
      <div>
        <span className='main-text'>{amount}</span>
        <span className='secondary-text'>{name}</span>
        <div className='tertiary-text'>
          <span>
            <img src={trendIcon} alt='Trend Direction' />
          </span>
          <span className={ trenClass+' percentage' }>{percentage}%</span>
          <span className='time'>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
