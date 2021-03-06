import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      upOrIn: 'In'
    }
  }

  toggleScreen = (e) => {
    e.target.classList.contains('In') ? this.setState({ upOrIn: 'Up' }) : this.setState({ upOrIn: 'In' })
  }

  
  render() {
    const { loggedInUser, newUser } = this.props;
    const { user } = this.state;

    const sign = this.state.upOrIn === 'Up' ? <SignIn /> : <SignUp />
    const homeView = loggedInUser || newUser ? 
      <div><p className='welcome-line'>Give your customers an easier way to make reservations.</p><h1>Welcome, {loggedInUser.restaurant_name || newUser.restaurant_name}</h1></div> 
      : <div>{sign}<button onClick={this.toggleScreen} className={this.state.upOrIn}>Sign {this.state.upOrIn}</button></div>

    return (
      <div>
        <div className='form-area'>
          <div className='screen'>
            {homeView}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  loggedInUser: store.loggedInUser
})

export default connect(mapStateToProps)(Home);