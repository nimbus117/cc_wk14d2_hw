import React from 'react';
import ChartItem from '../components/chart_item'

const ChartList = props => {
  console.log(props.chart)
  let chart;
  if (props.chart.entry) {
    chart = props.chart.entry.map(item => {
      return <ChartItem title={item['im:name'].label} artist={item['im:artist'].label} key={item.id.attributes['im:id']} />;
    })
  }
  else if (props.chart.results) {
    chart = props.chart.results.map(item => <ChartItem title={item.name} artist={item.artistName} key={item.id} />)
  }

  if (chart === null) {return null}
  else {return <div className='chart-list'><ol>{chart}</ol></div>}
}

export default ChartList;
