import React from 'react';
import members from './members.js';

export default class MemberHandler {
  // <div>
  // <input type="radio" name="gender" value={members[props.index]}/>
  // {members[props.index]}
  // </div>

  constructor() {
    this.id = "0";
    this.name = "";
  }

  isMember(id) {
    // the only search method is indexOf from javascript
    // if the dataset grows this would need to be improved
    const idx = members["id"].indexOf(id);
    if (idx === -1) {
      return false;
    } else {
      this.name = members["name"][idx];
      return true;
    }

  }
}
