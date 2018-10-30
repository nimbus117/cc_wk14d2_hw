import React, {Component} from 'react';
import ChartList from '../components/chart_list'
import ChartSelector from '../components/chart_selector'

class ChartBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      type: [ 
        {name: 'songs', url: 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'},
        {name: 'books', url: 'https://rss.itunes.apple.com/api/v1/gb/books/top-free/all/20/non-explicit.json'},
      ]
    }
    this.handleTypeSelect = this.handleTypeSelect.bind(this);
  }

  request(url) {
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({list: json.feed}))
      .catch(error => console.log(error));
   }

  handleTypeSelect(url) {
    this.request(url)
  }

  render() {
    return(
      <div className='chart-box'>
        <ChartSelector charts={this.state.type} onChartSelected={this.handleTypeSelect} />
        <ChartList chart={this.state.list} />
      </div>
    )
  }
}

export default ChartBox;
