import React, { Component } from 'react';
import './AddInput.css';
import * as wordService from './../../services/wordService';
class AddInput extends Component{
  constructor(props){
    super(props);
    this.data = props.list;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    let word = {
      en: document.getElementById("enw").value.toLowerCase(),
      mn: document.getElementById("mnw").value.toLowerCase(),
      jp: document.getElementById("jpw").value.toLowerCase()
    }
    if(document.getElementById("enw").value && document.getElementById("mnw").value && document.getElementById("jpw").value) {
      this.props.updateList(word);
      wordService.saveWord(word);
      
      document.getElementById("enw").value = "";
      document.getElementById("mnw").value = "";
      document.getElementById("jpw").value = "";
    }
  }

  render() {
    return (
      <div className="input-row">
        <input id="enw" className="wordinput" type="text" placeholder="English"></input>   
        <input id="mnw" className="wordinput" type="text" placeholder="Mongolian"></input>   
        <input id="jpw" className="wordinput" type="text" placeholder="Japanese"></input>   
        <button className="addBtn" onClick={this.handleClick}>Add Word</button>
      </div>
    );
  }
}

export default AddInput;