import React from 'react';
import ChartItem from '../components/chart_item'

const ChartList = props => {
  console.log(props)
  const chart = props.chart.map(item => <ChartItem details={item} key={item.id.attributes['im:id']} />);
  return(
    <div className='chart-list'><ol>{chart}</ol></div>
  )
}

export default ChartList;
