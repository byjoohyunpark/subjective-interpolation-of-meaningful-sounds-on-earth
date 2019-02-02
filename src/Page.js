import React, { Component } from 'react'
import './Page.css';

function importAll(r) {
  let sounds = {};
  r.keys().map((item) => { sounds[item.replace('./', '')] = r(item); });
  return sounds;
}

const sounds = importAll(require.context('./sound', false, /\.(wav)$/));

export class Page extends Component {

  render() {
    const index = this.props.index;
    const content = this.props.content;
    const page = index != null ? (
      <div className="page">
        <div>{content}</div> 
        <audio src={sounds[index +'.wav']} controls></audio>
      </div>
    ) : (null)

    return (
      <div className="page-wrapper">
        {page}
      </div>
    )

  }
}

export default Page
