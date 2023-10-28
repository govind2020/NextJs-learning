console.log("file is loaded starting!")

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
function showPosition(position) {
    console.log(position)

  }
getLocation();