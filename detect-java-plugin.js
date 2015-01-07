/*var L = navigator.plugins.length;

console.log(
  L.toString() + " Plugin(s)<br>" +
  "Name | Filename | description<br>"
);

for(var i = 0; i < L; i++) {
  console.log(
    navigator.plugins[i].name +
    " | " +
    navigator.plugins[i].filename +
    " | " +
    navigator.plugins[i].description +
    " | " +
    navigator.plugins[i].version +
    "\n"
  );
}*/

var javaPresent = detectJavaPlugin();
console.log(javaPresent);

//returns true or false
function detectJavaPlugin(){
  
  var javaPlugin = false;
  var L = navigator.plugins.length;
  var re = /.*java.*tm.*platform/i;
  //var ne = htmlSource.search(re);
  
  console.log(L);

  
  //check if plugin list length > 0
  if (L > 0){
   for(var i = 0; i < L; i++){
     console.log(navigator.plugins[i].name);
     console.log(navigator.plugins[i].name.search(re));
     if (navigator.plugins[i].name.search(re) >= 0){
       javaPlugin = true;
     }
   }
  }
  
  return javaPlugin;
}
/*
Exception: navigator.plugin is undefined
detectJavaPlugin@Scratchpad/1:37:7
@Scratchpad/1:30:19
*/