import React from 'react';
import style from './jumbotron.css'

class Jumbotron extends React.Component{
    render(){
      return(
        <div>
          <div className={style.test}>
          <div className={style.heroText}>
            <h1 className={style.title}>Fly with us</h1>
            <p className={style.title}>Stockholm Acroyoga Society</p>
           </div>
          </div>
        </div>
        
      )
    }
  }

export default Jumbotron;