import React from 'react';

const ChartItem = props => {
  const item = props.details;
  return(
    <li className='chart-item'> 
      {item['im:name'].label} ({item['im:artist'].label})
    </li>
  )
}

export default ChartItem;
