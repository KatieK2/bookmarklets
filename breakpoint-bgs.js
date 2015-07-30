javascript:(function(){
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "@media only screen and (max-width: 800px) { body { background-color: teal !important; } }" +
    "@media only screen and (max-width: 540px) { body { background-color: magenta !important; } } " +
    "@media screen and (min-width:1300px) { body { background-color: orange !important; } }";
  document.body.appendChild(css);
})();
