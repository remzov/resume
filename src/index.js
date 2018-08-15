require.context('./img', true);
require.context('./fonts', true);
require.context('./', true, /\w*\.html$/);

import './scss/main.scss';
import 'bootstrap';
import './js/main.js';
