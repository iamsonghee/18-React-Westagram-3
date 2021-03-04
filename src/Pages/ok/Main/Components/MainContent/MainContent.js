import React, { Component } from "react";
import StoryList from "./StoryList";
import Feed from "./Feed/Feed";
import MainRight from "./MainRight";
import FeedData from "../data/FeedData";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    FeedData: FeedData,
  };
  render() {
    return (
      <div className="main-content">
        <div className="content-wrap">
          <StoryList userData={this.props.userData}></StoryList>
          {this.state.FeedData.map(feed => (
            <Feed key={feed.id} data={feed}></Feed>
          ))}
        </div>
        <div className="scroll-trigger">
          <div className="load-spinning"></div>
        </div>
        <MainRight userData={this.props.userData}></MainRight>
      </div>
    );
  }
}

export default MainContent;
