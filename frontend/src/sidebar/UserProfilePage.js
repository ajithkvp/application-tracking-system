import React, { Component } from 'react';
import $ from 'jquery';

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [],
      workExperience: [],
      skills: 'React, JavaScript, HTML, CSS',
      achievements: 'Completed a major project on XYZ',
    };
  }

  /*setter = () => {
    this.setState({
      education: this.props.profileJson.profileDetails.education,
      workExperience: this.props.profileJson.profileDetails.workExperience,
      skills: this.props.profileJson.profileDetails.skills,
      education: this.props.profileJson.profileDetails.education
    })
  }*/

  renderEducation = async() => {
    return this.state.education.map((edu, index) => (
      <div key={index}>
        <h4>Education {index + 1}</h4>
        <p>College Name: {edu.collegeName}</p>
        <p>Degree: {edu.degree}</p>
        <p>Major: {edu.major}</p>
        <p>GPA: {edu.gpa}</p>
      </div>
    ));
  }

  renderWorkExperience() {
    return this.state.workExperience.map((experience, index) => (
      <div key={index}>
        <h4>Work Experience {index + 1}</h4>
        <p>Company Name: {experience.collegeName}</p>
        <p>Degree: {experience.degree}</p>
      </div>
    ));
  }

  handleSubmit = () => {
    this.props.side()
}

  render () {

    return (
      <div>
        <h1>User Profile</h1>

        <div>
          <h3>Education</h3>
          {this.renderEducation()}
        </div>

        <div>
          <h3>Work Experience</h3>
          {this.renderWorkExperience()}
        </div>

        <div>
          <h3>Skills</h3>
          <p>{this.state.skills}</p>
        </div>

        <div>
          <h3>Achievements</h3>
          <p>{this.state.achievements}</p>
        </div>
        <div style={{ marginTop: "2rem", marginleft: "1rem", marginRight: "1rem", alignItems: 'center'}}>
                <button type="button" onClick={this.handleSubmit}>
                                    Login Page
                                </button>
                </div>
      </div>
      
    );
  }
}

export default UserProfilePage;