function t(t){n(t,"start");var i={},s=t.languageData||{},d=!1;for(var o in t)if(o!=s&&t.hasOwnProperty(o))for(var u=i[o]=[],p=t[o],l=0;l<p.length;l++){var g=p[l];u.push(new e(g,t)),(g.indent||g.dedent)&&(d=!0)}return{name:s.name,startState:function(){return{state:"start",pending:null,indent:d?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,indent:t.indent&&t.indent.slice(0)};return t.stack&&(n.stack=t.stack.slice(0)),n},token:a(i),indent:r(i,s),languageData:s}}function n(t,n){if(!t.hasOwnProperty(n))throw new Error("Undefined state "+n+" in simple mode")}function e(t,e){(t.next||t.push)&&n(e,t.next||t.push),this.regex=function(t){if(!t)return/(?:)/;var n="";return t instanceof RegExp?(t.ignoreCase&&(n="i"),t=t.source):t=String(t),new RegExp("^(?:"+t+")",n)}(t.regex),this.token=function(t){if(!t)return null;if(t.apply)return t;if("string"==typeof t)return t.replace(/\./g," ");for(var n=[],e=0;e<t.length;e++)n.push(t[e]&&t[e].replace(/\./g," "));return n}(t.token),this.data=t}function a(t){return function(n,e){if(e.pending){var a=e.pending.shift();return 0==e.pending.length&&(e.pending=null),n.pos+=a.text.length,a.token}for(var r=t[e.state],i=0;i<r.length;i++){var s=r[i],d=(!s.data.sol||n.sol())&&n.match(s.regex);if(d){s.data.next?e.state=s.data.next:s.data.push?((e.stack||(e.stack=[])).push(e.state),e.state=s.data.push):s.data.pop&&e.stack&&e.stack.length&&(e.state=e.stack.pop()),s.data.indent&&e.indent.push(n.indentation()+n.indentUnit),s.data.dedent&&e.indent.pop();var o=s.token;if(o&&o.apply&&(o=o(d)),d.length>2&&s.token&&"string"!=typeof s.token){e.pending=[];for(var u=2;u<d.length;u++)d[u]&&e.pending.push({text:d[u],token:s.token[u-1]});return n.backUp(d[0].length-(d[1]?d[1].length:0)),o[0]}return o&&o.join?o[0]:o}}return n.next(),null}}function r(t,n){return function(e,a){if(null==e.indent||n.dontIndentStates&&n.doneIndentState.indexOf(e.state)>-1)return null;var r=e.indent.length-1,i=t[e.state];t:for(;;){for(var s=0;s<i.length;s++){var d=i[s];if(d.data.dedent&&!1!==d.data.dedentIfLineStart){var o=d.regex.exec(a);if(o&&o[0]){r--,(d.next||d.push)&&(i=t[d.next||d.push]),a=a.slice(o[0].length);continue t}}}break}return r<0?0:e.indent[r]}}export{t as s};