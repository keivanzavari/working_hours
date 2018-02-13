import React from 'react';
import members from './members.js';

function Button(props) {
    // receive onClick and value from props
    // onClick use the function and in button square place the value
    return (
      <div>
        <h3>Please enter your 4 digit ID number</h3>

      </div>
      // alert('you clicked on '+ this.props.value.toString())
      /*
      <div>
      <input type="text" name="lastname" value={props.value}/>
      <br /><br />
      <button className="button" onClick={props.onClick}>Enter</button>
      <br /><br />
      <form onSubmit={props.handleSubmit}>
        <label>
          Name:
          <input type="text" value={props.value} onChange={props.handleChange} />
        </label>
        <input type="submit" value="Enter" />
      </form>
    </div>
      */
    );
  // }
}

function MemberHandler(props) {

  return (
      <div>
      <input type="radio" name="gender" value={members[props.index]}/>
      {members[props.index]}
      </div>
  );
}

export default MemberHandler;
