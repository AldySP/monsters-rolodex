import React from 'react';
import './App.css'

// components
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }

  // handle fetch data
  fetchData = async() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters: monsters }))
  }

  // handle search monster
  handleSearch = (target) => {
    this.setState({ searchTerm: target });
  }

  componentDidMount(){
    this.fetchData();
  }

  render(){
    console.log(this.state, "INI ADALAH STATE");
    
    const { monsters, searchTerm } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBar handleSearch={this.handleSearch}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
