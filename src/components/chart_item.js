import React from 'react';

const ChartItem = props => {
    console.log(props.details);
  return(
    <li className='chart-item'> 
      {props.details.title.label}
    </li>
  )
}

export default ChartItem;
