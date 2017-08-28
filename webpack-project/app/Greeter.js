/*
* @Author: fs-zhao
* @Date:   2017-08-28 11:11:28
* @Last Modified by:   fs-zhao
* @Last Modified time: 2017-08-28 15:32:51
*/

// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };

import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>//添加类名
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
