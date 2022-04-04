import React from "react";

function backTop() {
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topButton").style.display = "block";
    }else {
    document.getElementById("topButton").style.display = "none";
    }
  }
  function topFunction() {
    window.history.pushState("", "", '/');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  return (
    <button onClick={(e) => topFunction(e)} id="topButton" title="Wróć do góry">Wróć do góry</button>
  );
}

export default backTop;