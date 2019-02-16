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
    const page = index != null ? (
      <div className="page">

        <div className="content-name">
          <p>&nbsp;</p>
          <p id="caption">A</p>
          <p id="caption">B</p>
        </div>

        <div className="original">
          <p>Original</p>
          <audio src={sounds[index + '1.wav']} controls></audio><br />
          <audio src={sounds[index + '2.wav']} controls></audio>
        </div>

        <div className="representation">
          <p>Representation</p>
          <audio src={sounds[index + '3.wav']} controls></audio><br />
          <audio src={sounds[index + '4.wav']} controls></audio>
        </div>

        <div className="interpolation">
          <p>interpolation</p>
          <audio src={sounds[index + '5.wav']} controls></audio>
        </div>

      </div>
    ) : (
        <div className="intro">Click on the list to view details of:<br /><br />
          A&emsp;✕&emsp;B <br /><br /> 
          <i>Implemented with <a href="https://magenta.tensorflow.org/nsynth" target="_blank"  rel="noopener noreferrer">NSynth(Neural Audio Synthesis)</a></i></div>
      )

    return (
      <div className="page-wrapper">
        {page}
      </div>
    )

  }
}

export default Page
