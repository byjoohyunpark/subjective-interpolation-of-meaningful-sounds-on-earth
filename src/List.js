import React, { Component } from "react";
import "./List.css";

export class List extends Component {
  state = {
    activeIndex: null
  };

  clickHandler(index) {
    this.setState({ activeIndex: index });
  }

  render() {
    const list = this.props.list;
    const showContent = this.props.showContent;

    const Title = props => (
      <div
        className={`${props.clicked ? "on" : "off"}`}
        onClick={props.onClick}
      >
        {props.content.content1}&emsp;✕&emsp;{props.content.content2}
      </div>
    );

    const content1 = list.map(content => {
      while (content.id <= 15) {
        return (
          <div className="content" key={content.id}>
            <form
              onClick={() => {
                showContent(content.id, content.content);
              }}
            >
              <Title
                clicked={content.id === this.state.activeIndex}
                onClick={() => this.clickHandler(content.id)}
                content={content}
              />
            </form>
          </div>
        );
      }
    });

    const content2 = list.map(content => {
      while (content.id > 15 && content.id <= 30) {
        return (
          <div className="content" key={content.id}>
            <form
              onClick={() => {
                showContent(content.id, content.content);
              }}
            >
              <Title
                clicked={content.id === this.state.activeIndex}
                onClick={() => this.clickHandler(content.id)}
                content={content}
              />
            </form>
          </div>
        );
      }
    });

    return (
      <div className="list">
        <div className="content-wrapper" group="1">
          {content1}
        </div>
        <div className="content-wrapper" group="2">
          {content2}
        </div>
      </div>
    );
  }
}

export default List;
