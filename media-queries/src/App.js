import React from 'react';
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor () {
    super()

    this.dropdown = React.createRef()
  }

  
toggleMenu = () => {
    console.log(this.dropdown.current)
    let {current} = this.dropdown

    if(current.classList.contains('show-animation')) {
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    } else {
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
    }
  }
  
  

  render() { 
  return (
      <div className='body'>

        <nav className='header'>
          <div className='logo'>Start Bootstrap</div>
          <div id='nav-bar'>
            <button className='button'>SERVICES</button>
            <button className='button'>PORTFOLIO</button>
            <button className='button'>ABOUT</button>
            <button className='button'>TEAM</button>
            <button className='button'>CONTACT</button>
          </div>

          <div id='menu-hamburger-icon'>
            <button onClick={this.toggleMenu} id='menu-button'>MENU<i  className='fas fa-bars' ></i></button>
          </div>

        </nav>

        <div className='dropdown-menu' ref={this.dropdown}>
            <button className='dropdown-button'>SERVICES</button>
            <button className='dropdown-button'>PORTFOLIO</button>
            <button className='dropdown-button'>ABOUT</button>
            <button className='dropdown-button'>TEAM</button>
            <button className='dropdown-button'>CONTACT</button>
        </div>

        <div className='main-body'>
          <h3 id='greeting'>Welcome To Our Studio!</h3>
          <h1 id='introduction'>IT'S NICE TO <br id='line-break'/>MEET <br id='line-break-two'/>YOU</h1>
          <button id='information-button'>TELL ME MORE</button>
        </div>
      </div>
    );
  }  
}

export default App;

