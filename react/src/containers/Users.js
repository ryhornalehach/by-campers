import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {


    return(
      <div>
        <div className="row">
          <div className="col s12">
            <div className='blackfield-main'><p>Users list</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Users
