import React from 'react';
import members from './members.js';

function MemberHandler(props) {
  return (
      <div>
      <input type="radio" name="gender" value={members[props.index]}/>
      {members[props.index]}
      </div>
  );
}

export default MemberHandler;
