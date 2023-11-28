import 'bootstrap/dist/css/bootstrap.min.css'
import './static/App.css';

import React from 'react';
import Sidebar from './sidebar/Sidebar'
import ApplicationPage from './application/ApplicationPage'
import SearchPage from './search/SearchPage'
import LoginPage from './login/LoginPage'
import ManageResumePage from './resume/ManageResumePage'
import BuildResumePage from './resume/BuildResumePage'
<<<<<<< HEAD
import CreateUserProfilePage from './login/CreateProfilePage';
import UserProfilePage from './sidebar/UserProfilePage';
import MoreInfoPage from './login/MoreInfoPage';
import QuizPage from './login/quiz';
=======
import Summary from './application/summary/Summary';
>>>>>>> remotes/origin/aivaya-feature

export default class App extends React.Component {
  constructor(props){
    super(props)
    let mapRouter = {
      'SearchPage': <SearchPage/>,
      'ApplicationPage' : <ApplicationPage/>,
      'LoginPage': <LoginPage/>,
      'ManageResumePage': <ManageResumePage/>,
      'BuildResumePage': <BuildResumePage/>,
<<<<<<< HEAD
      'UserProfileCreatePage': <CreateUserProfilePage/>,
      'UserProfilePage': <UserProfilePage/>,
      'MoreInfoPage': <MoreInfoPage/>,
      'QuizPage': <QuizPage/>
=======
      'SummaryPage': <Summary/>

>>>>>>> remotes/origin/aivaya-feature
    }
    this.state ={
      currentPage: <CreateUserProfilePage/>,
      mapRouter: mapRouter,
      sidebar: false,
      display: "My applications",
      currPageName : "LoginPage",
      finalProfile: {}
    }
    this.sidebarHandler = this.sidebarHandler.bind(this);
  };

  componentDidMount() {
    if(localStorage.getItem('token')) {
      this.sidebarHandler()
    }
  }

  sidebarHandler = () => {
    this.setState({
      currentPage: this.state.mapRouter['ApplicationPage'],
      sidebar: true
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({
      sidebar:false
    })
  }

  switchPage(pageName){
    this.setState({
      currentPage: this.state.mapRouter[pageName]
    })
  }

  switchToQuiz=()=>{
    this.setState({
      currPageName: "QuizPage",
      display: "Let's take a quick quiz"
    })
  }

  switchToProfile=(quizJson)=>{
    let newJson = {}
    newJson["quiz"] = quizJson
    this.setState({
      currPageName: "CreateProfilePage",
      display: "We would love to get to know you better",
      finalProfile: newJson
    })
  }

  switchToMoreInfo=(profileDetails)=>{
    let newJson = this.state.finalProfile
    newJson["profileDetails"] = profileDetails
    this.setState({
      currPageName: "MoreInfoPage",
      display: "Where do you aspire to be",
      finalProfile: newJson
    })
  }

  switchtoProfilePage=(targetJSON)=>{
    let newJson = this.state.finalProfile
    newJson["targetDetails"] = targetJSON
    this.setState({
      currPageName: "UserProfilePage",
      display: "Review the data entered",
      finalProfile: newJson
  })
  console.log(JSON.stringify(newJson))
  }

  switchtoLogin=()=>{
    this.setState({
      currPageName: "LoginPage",
      display: "My applications"
  })
  }

  render() {
    var app;
    // console.log(this.state.sidebar)
    if(this.state.sidebar){
      app = (<div className="main-page">
        <Sidebar switchPage={this.switchPage.bind(this)}/>
        <div className="main">
          <div className="content">
            <div className="">

              <h1 className="text-center">My applications</h1>
              {/* <span className="btn-icon ">
                <button className="btn btn-danger btn-icon"><i className="fas fa-plus"></i>&nbsp;New</button>
              </span> */}
            </div>
            {this.state.currentPage}
            <button style={{position: 'absolute',
                         top: '2vh',
                         left:'90vw'}}
                    onClick={this.handleLogout}>Logout

            </button>
          </div>
        </div>
      </div>
      )
    }
    else{
      app = (<div className="main-page">
      <div className="main">
        <div className="content">
          <h1 className="text-center" style={{padding: 0.4 + 'em'}}>{this.state.display}</h1>
          <div className="">
            {/* <span className="btn-icon ">
              <button className="btn btn-danger btn-icon"><i className="fas fa-plus"></i>&nbsp;New</button>
            </span> */}
          </div>
          <div style={{display: this.state.currPageName === 'LoginPage'? "block" : "none"}}>
            <LoginPage  side={this.sidebarHandler} signupSw = {this.switchToQuiz}/>
          </div>
          <div style={{display: this.state.currPageName === 'QuizPage'? "block" : "none"}}>
            <QuizPage side={this.switchToProfile}/>
          </div>
          <div style={{display: this.state.currPageName === 'CreateProfilePage'? "block" : "none"}}>
            <CreateUserProfilePage side={this.switchToMoreInfo}/>
          </div>
          <div style={{display: this.state.currPageName === 'MoreInfoPage'? "block" : "none"}}>
            <MoreInfoPage side={this.switchtoProfilePage}/>
          </div>
          <div style={{display: this.state.currPageName === 'UserProfilePage'? "block" : "none"}}>
            <UserProfilePage side={this.switchtoLogin}/>
          </div>
          
        </div>
      </div>
    </div>
    )
    }
    return app;
  }
}

