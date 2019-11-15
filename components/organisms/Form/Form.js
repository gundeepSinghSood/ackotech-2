import React, {Component} from 'react';
import styles from './Form.style';
import withStyles from '../../../lib/withStyles';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSuccess: false,
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const data = {
        name: name,   
        email: email,  
        message: message
    };
    fetch('/send',{
        method: "POST", 
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => {
        if (data.msg === 'success'){
            this.setState({isSuccess: true});
            this.resetForm()
        }
      })
  }
  
  resetForm(){
    document.getElementById('contact-form').reset();
  }
  
  
  render() { 
    const {className} = this.props;
    return ( 
      <form id="contact-form" className={`form ${className}`} name="theForm" onSubmit={this.handleSubmit}>
        {this.state.isSuccess
          ? <h1>Thank you <br/>we will contact you soon</h1>
          : <><h1>How Can We Help?</h1>
            <div className="field half">
              <label htmlFor="surname">First name</label>
              <input type="text" id="surname"/>
            </div>
            <div className="field half last">
              <label htmlFor="name">last name</label>
              <input type="text" id="name"/>
            </div>
            <div className="field tnb">
              <label htmlFor="email">Email address</label>
              <input type="email" id="email"/>
            </div>
            <div className="field tnb">
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="message"></textarea>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit"/></>
        }
      </form>
     )
  }
}

export default withStyles(Form, styles);

export { Form as FormVanilla };