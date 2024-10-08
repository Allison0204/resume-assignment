import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <div className="ed1">
        <div className="ed1_c1">
          <div>
            <p class="title">{this.props.education.title}</p>
          </div>
        </div>
        <div className="ed1_c2">
          <div>
            <p class="bold">{this.props.education.bsInstitution}</p>
            <p>{this.props.education.bsDegree}</p>
            <p>{this.props.education.bsDates}</p>
            <p>GPA: {this.props.education.bsGpa}</p>
            <p class="bold">{this.props.education.msInstitution}</p>
            <p>{this.props.education.msDegree}</p>
            <p>{this.props.education.msDates}</p>
            <p>GPA: {this.props.education.msGpa}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;