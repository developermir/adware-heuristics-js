/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

console.log(document.documentElement.innerHTML);
var htmlSource = document.documentElement.innerHTML;

/*var re = /ahrefs.*toolbar/i;
var ne = htmlSource.search(re);*/

console.log(detectAhrefsToolbar(htmlSource));
console.log(detectYontooExtension(htmlSource));


function detectAhrefsToolbar(htmlText){
  
  var extensionPresent = false;
  var ne = 0;
  var re = /ahrefs.*toolbar/i;
  ne = htmlText.search(re);
  
  if (ne >= 0){
    extensionPresent = true;
  }
  
  return extensionPresent;
}

function detectYontooExtension(htmlText){
  
  var extensionPresent = false;
  var ne = 0;
  var re = /[yontoo|buzzdock|freeven|frameddisplay]/i;
  ne = htmlText.search(re);
  
  if (ne >= 0){
    extensionPresent = true;
  }
  
  return extensionPresent;
  
  
}