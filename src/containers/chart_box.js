import React, {Component} from 'react';
import ChartList from '../components/chart_list'

class ChartBox extends Component {
  constructor(props) {
    super(props)
    this.state = {songs: []}
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(response => response.json())
      .then(json => this.setState({songs: json}))
      .catch(error => console.log(error));
  }

  render() {
    return(
      <div className='chart-box'>
        <ChartList chart={this.state.songs} />
      </div>
    )
  }
}
