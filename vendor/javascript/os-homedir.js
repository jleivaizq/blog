// os-homedir@1.0.2 downloaded from https://ga.jspm.io/npm:os-homedir@1.0.2/index.js

import r from"os";import o from"process";var e={};var l=o;var n=r;function homedir(){var r=l.env;var o=r.HOME;var e=r.LOGNAME||r.USER||r.LNAME||r.USERNAME;return"win32"===l.platform?r.USERPROFILE||r.HOMEDRIVE+r.HOMEPATH||o||null:"darwin"===l.platform?o||(e?"/Users/"+e:null):"linux"===l.platform?o||(0===l.getuid()?"/root":e?"/home/"+e:null):o||null}e="function"===typeof n.homedir?n.homedir:homedir;var t=e;export default t;

