import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
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
            <div className='blackfield-main'><p>User show page</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default User
