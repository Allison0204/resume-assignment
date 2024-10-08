import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="ks1">
        <div className="ks1_c1">
          <div>
            <p class="title">{this.props.keySkills.title}</p>
          </div>
        </div>
        <div className="ks1_c2">
          <div>
            <p>{this.props.keySkills.content1}</p>
            <p>{this.props.keySkills.content1}</p>
            <p>{this.props.keySkills.content1}</p>
          </div>
          <div>
            <p>{this.props.keySkills.content1}</p>
            <p>{this.props.keySkills.content1}</p>
            <p>{this.props.keySkills.content1}</p>
          </div>
          <div>
            <p>{this.props.keySkills.content1}</p>
            <p>{this.props.keySkills.content1}</p>
            <p>{this.props.keySkills.content1}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;