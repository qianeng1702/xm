function $A(t){return document.getElementById(t)}function getStyleAtt(t,e){var n=!1;return navigator.userAgent.indexOf("MSIE")>-1&&(n=!0),n?t.currentStyle[e]:window.getComputedStyle(t)[e]}function addEvent(t,e,n,r){navigator.userAgent.indexOf("MSIE")>-1?t.attachEvent("on"+e,n):t.addEventListener(e,n,r)}