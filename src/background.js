import loadsh from 'loadsh';
import {getSHA} from  './uitils'

console.log(getSHA(loadsh.join(['Hello', 'World'])))