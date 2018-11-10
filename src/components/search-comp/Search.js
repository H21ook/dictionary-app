import React, { Component } from 'react';
import iconSearch from './search.svg';
import './Search.css';

class Search extends Component{
  constructor(props){
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let search = e.target.value;

    let rows = this.props.list.filter((listItem) => {
      return listItem.en.indexOf(search.toLowerCase()) !== -1 || 
        listItem.mn.indexOf(search.toLowerCase()) !== -1 || 
        listItem.jp.indexOf(search.toLowerCase()) !== -1
    });
    
    this.props.filterList(rows);
  }

  render() {
    return (
      <div className="search">
        <img className="search-icon" src={iconSearch} alt="search"/>
        <input className="searchBar" type="text" onChange={this.handleChange} placeholder="Search"></input>   
      </div>
    );
  }
}
export default Search;