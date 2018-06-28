import React, { Component } from 'react'
import ReactDOM from "react-dom";
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import Jumbotron from './components/hero/jumbotron';
import style from './index.css';

import GoogleCalendarCards from './components/calendar/googleCalendarCards'

import 'react-big-calendar/lib/css/react-big-calendar.css'


class About extends React.Component{
  render(){
    return(
      <div className={style.infoArea}>
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-7 align-self-center">
            <h2>About us</h2>
              <p>STACRO är en ideell förening som startades i början av 2018. Föreningen ska verka för att knyta samman medlemmar som utövar acroyoga i Stockholmsområdet. För att bl.a. följa diskussioner, se kommande jam, festivaler och utbildningar, besök gärna FB-gruppen: STACRO Stockholm Acroyoga Förening
              </p>
            </div>
            <div className="col-12 col-md-5">
            <img src={require('./images/acromelchim.jpg')}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


class Page extends React.Component{

  render(){
    return(
      <div>
        <Jumbotron />
        <About />
        <GoogleCalendarCards/>
      </div>
    )
  }
}



ReactDOM.render(<Page />, document.getElementById("index"));

