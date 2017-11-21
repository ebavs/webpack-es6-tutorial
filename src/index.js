import $ from 'jquery';

import 'bootstrap';
import './style.scss';

import viewCollection from './views';
import Controller from './controller';

const c = new Controller($, viewCollection);
c.start();
