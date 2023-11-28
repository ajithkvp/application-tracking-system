import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import '../static/Sidebar.css'
export default class Sidebar extends Component {
  render () {
    return (
      <div className='left-nav' style={{ width: '250px'}}>
        <div className='left-nav-item'>
          <div onClick={() => this.props.switchPage('ApplicationPage')}>
            <i className='fas fa-columns left-nav-icon' />
            
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', alignContent: 'center' }}>
  Application Page
</span>

          </div>
          <div onClick={() => this.props.switchPage('SearchPage')}>
            <i className='fas fa-search left-nav-icon' />
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', alignContent: 'center' }}>
  Search Page
</span>

          </div>
          <div onClick={() => this.props.switchPage('ManageResumePage')}>
            <i className="fas fa-folder left-nav-icon"></i>
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', alignContent: 'center' }}>
  Resume Manage Page
</span>

          </div>
          <div onClick={() => this.props.switchPage('BuildResumePage')}>
            <i className="fas fa-file left-nav-icon"></i>
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', alignContent: 'center' }}>
  Resume Building Page
</span>

          </div>
          <div onClick={() => this.props.switchPage('CoverLetterGenerator')}>
            <i className='fas fa-user left-nav-icon' />
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', textAlign: 'right' }}>
  Cover Letter Generator Page
</span>
          </div>
          <div onClick={() => this.props.switchPage('QuizPage')}>
            <i className='fas fa-user left-nav-icon' />
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', textAlign: 'right' }}>
  Quiz Page
</span>
          </div>
          <div onClick={() => this.props.switchPage('SummaryPage')}>
            <i className='fas fa-user left-nav-icon' />
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', textAlign: 'right' }}>
  Summary Page
</span>
          </div>
          <div onClick={() => this.props.switchPage('UserProfileCreatePage')}>
            <i className='fas fa-user left-nav-icon' />
            <span style={{ fontFamily: 'Palatino, serif', fontWeight: 'bold', fontSize: 25, textDecoration: 'underline', color: 'black', textAlign: 'right' }}>
  User Profile Page
</span>
          </div>
        </div>
      </div>
    )
  }
}
  