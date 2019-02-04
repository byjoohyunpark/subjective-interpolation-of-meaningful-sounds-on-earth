import React, { Component } from 'react';
import './App.css';
import List from './List';
import Page from './Page';
import SubjectiveList from './SubjectiveList.json';


export class App extends Component {
  state = {
    list: SubjectiveList,
    index: null
    // content: null
  }

  showContent = (id, content) => {
    console.log(id);
    this.setState({ index: id, content: content });
  }


  render() {
    return (
      <div>
        <h2>Subjective Interpolation of Meaningful Sounds on the Earth</h2>
        <List list={this.state.list} showContent={this.showContent} />
        <Page index={this.state.index} />
        <p className="author">by Joohyun Park</p>
      </div>
    )
  }
}

export default App


