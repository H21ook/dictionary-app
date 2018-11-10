import React, { Component } from 'react';
import './ListWord.css';

class ListWord extends Component {
  
  createTable() {
    for(let i = 0; i < this.props.list.length; i++) {
      for(let j = 0; j < this.props.list.length - 1; j++) {
        let temp;
        if(this.props.list[j].en.localeCompare(this.props.list[j + 1].en) > 0) {
          temp = this.props.list[j];
          this.props.list[j] = this.props.list[j + 1];
          this.props.list[j + 1] = temp;
        }
      }
    }

    let rows = this.props.list.map((item, index) => {
      return <tr key={index} className="t-row">
          <td key={index+1} className="t-col">{index+1}</td>
          <td key={item.en} className="t-col">{item.en}</td>
          <td key={item.mn} className="t-col">{item.mn}</td>
          <td key={item.jp} className="t-col">{item.jp}</td>
        </tr>
    });
    return rows;
  }
  render() {
    return (
      <div>
        <table className="t">
          <tbody>
            <tr>
              <th className="t-col t-head">#</th>
              <th className="t-col t-head">EN</th>
              <th className="t-col t-head">MN</th>
              <th className="t-col t-head">JP</th>
            </tr>
            {this.createTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListWord;
