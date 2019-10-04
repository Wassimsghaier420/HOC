import React, { Component } from 'react';
import './App.css';
import Logo1 from './historyx.jpg';

import Logo from './trainspotting.jpg';
import MovieList from './MovieList';

import Logo3 from './shawshank.jpg';
import Logo4 from './fightclub.jpg';
import logo5 from './drive.jpg';
const tablist = [{ id: 'inception', rating: '5', image: Logo, title: 'Trainspotting ' }, { id: 'inception', rating: '1', image: Logo1, title: ' American History X' },
{ id: 'inception', rating: '4', image: Logo3, title: ' Shawshank Redemption ' },
{ id: 'inception', rating: '4', image: Logo4, title: 'Fight Club ' },
{ id: 'inception', rating: '3', image: logo5, title: ' Drive ' }]
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: tablist
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 3000)
  }




  render() {

    return (
      <div className='App'>
        <MovieList loading={this.state.isLoading} movies={tablist} />
      </div>
    );
  }
}

export default App;
