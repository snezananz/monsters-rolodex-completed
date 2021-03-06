import React, { Component } from 'react';
import './App.css';

import { CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // this method is called when component output is rendered in the DOM
  componentDidMount(){
    // fetch some data
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
      //.then(e => console.log('state:', this.state))
      ;
  }

  handleClick = () =>{
    this.setState((prevState, prevProps) => {
      return { counter: prevState.counter + 1}
    },
    () => console.log('After setState', this.state.counter))
  }

  render(){

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange = {e => {
          //console.log(this); //THIS points to App component, not SearchBox
          return this.setState({searchField: e.target.value})}
        } />

        <CardList monsters={filteredMonsters} />        
      </div>)
  }
}

export default App;

