import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    return (
      <div className="we1">
        <div className="we1_c1">
          <div>
            <p class="title">{this.props.workExperience.title}</p>
          </div>
        </div>
        <div className="we1_c2">
          <div>
            <p class="bold">{this.props.workExperience.job1}</p>
            <p>{this.props.workExperience.job1Content}</p>
            <p class="bold">{this.props.workExperience.job2}</p>
            <p>{this.props.workExperience.job2Content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkExperience;