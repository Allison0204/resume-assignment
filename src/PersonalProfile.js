import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
    return (
      <div className="pp1">
        <div className="pp1_c1">
          <div>
            <p class="title">{this.props.profile.title}</p>
          </div>
        </div>
        <div className="pp1_c2">
          <div>
            <p>{this.props.profile.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalProfile;