import React, { Component } from 'react';

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

  componentDidMount= ()=>{
    $.ajax({
      url: 'http://localhost:5000/users/profile',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      },
      xhrFields: {
        responseType: 'blob'
        },
  credentials: 'include',
      success: (message, textStatus, response) => {
        console.log(JSON.stringify(response))
        let profileJson = response.user_details
        this.setState({
          education: profileJson.profileDetails.education,
          workExperience: profileJson.profileDetails.workExperience,
          skills: profileJson.profileDetails.skills,
          education: profileJson.profileDetails.education
        })
        console.log(response.getResponseHeader('x-fileName'))
        this.setState({ fileName: response.getResponseHeader('x-fileName')});
        this.setState({ resumeDownloadContent: message});
      }
  })
  }

  renderEducation() {
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

  render() {
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
