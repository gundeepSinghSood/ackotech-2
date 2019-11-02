import React, {Component} from 'react';
import styles from './Form.style';
import withStyles from '../../../lib/withStyles';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  
  render() { 
    const {className} = this.props;
    return ( 
      <form className={`form ${className}`} name="theForm" action="/signup" method="POST">
      <h1>How Can We Help?</h1>
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
          <textarea name="msg"></textarea>
        </div>
        <input type="submit" className="btn btn-primary" value="Submit"/>
      </form>
     )
  }
}

export default withStyles(Form, styles);

export { Form as FormVanilla };