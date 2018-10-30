import React from 'react';

const ChartItem = props => {
  return(
    <li className='chart-item'> 
      {props.title} ({props.artist})
    </li>
  )
}

export default ChartItem;
