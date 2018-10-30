import React from 'react';

const ChartSelector = (props) => {
  const options = props.charts.map((c, i) => {
    return <option value={c.url} key={i}>{c.name}</option>;
  })

  function handleChange(evt) {
    props.onChartSelected(evt.target.value)
  }
  return (
    <select id="chart-selector" defaultValue="default" onChange={handleChange}>
    <option disabled value="default">Choose a chart...</option>
    {options}
    </select>
  )
}

export default ChartSelector;
