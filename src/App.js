import React,{ Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

  constructor()
  {
    super();
    this.state={
     monsters:[],
     searchFiled:""

    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
 .then(response=>response.json())
 .then(user=> this.setState({monsters: user}));

}

  render(){

    const {monsters,searchFiled}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchFiled.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={e=>this.setState({searchFiled:e.target.value})}>
        
        </SearchBox>
        
        <CardList monsters={filteredMonsters}>
         
          </CardList>
     
      </div>
    )
  }
}

export default App;
