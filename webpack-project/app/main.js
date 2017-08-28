/*
* @Author: fs-zhao
* @Date:   2017-08-28 11:11:47
* @Last Modified by:   fs-zhao
* @Last Modified time: 2017-08-28 15:23:04
*/

// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用require导入css文件

render(<Greeter />, document.getElementById('root'));
