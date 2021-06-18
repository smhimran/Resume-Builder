import React, { Component } from "react";
import Resume from "./Resume";
import ResumeGreen from "./ResumeGreen";
import ResumePurple from "./ResumePurple";
import ResumeBlackandWhite from "./ResumeBlackandWhite";
import { connect } from "react-redux";

export class Print extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  render() {
    if (this.props.color === "blue") {
      return (
        <div>
          <Resume />
        </div>
      );
    } else if (this.props.color === "green") {
      return (
        <div>
          <ResumeGreen />
        </div>
      );
    } else if (this.props.color === "purple") {
      return (
        <div>
          <ResumePurple />
        </div>
      );
    } else if (this.props.color === "black") {
      return (
        <div>
          <ResumeBlackandWhite />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  color: state.color,
});

export default connect(mapStateToProps)(Print);
