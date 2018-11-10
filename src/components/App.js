import React, { Component } from 'react';
import './App.css';

import Header from './header-comp/Header';
import Search from './search-comp/Search';
import ListWord from './list-comp/ListWord';
import AddInput from './addInput-comp/AddInput';
import database from './../database/firebase';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {list: this.props.list};
    
    this.updateList = this.updateList.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  componentDidMount () {
    const itemsRef = database.ref('words');
    itemsRef.once('value').then(snapshot => {
      let data = snapshot.val();
      if(data !== null) {
        this.list = Object.values(data);
        this.setState({list: this.list});
      }
    });
  } 
  
  updateList(listItem){
    let updatedList = this.state.list;
    updatedList.push(listItem);
    this.setState({list: updatedList});
  }

  filterList(list){
    let updatedList = list;
    this.setState({filteredList: updatedList});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Search list={this.state.list} filterList={this.filterList}/>
        <AddInput updateList={this.updateList}/>
        <ListWord list={this.state.filteredList ? this.state.filteredList : this.state.list }/>
      </div>
    );
  }
}

export default App;
