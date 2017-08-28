/*
* @Author: fs-zhao
* @Date:   2017-08-28 11:11:47
* @Last Modified by:   fs-zhao
* @Last Modified time: 2017-08-28 14:49:19
*/

// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));
