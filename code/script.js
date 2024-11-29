function calculateArea() {
    var radius = document.getElementById("radius").value;
    
    if (radius > 0) {
    
    var area = Math.PI * Math.pow(radius, 2);
    
    document.getElementById("result").textContent = "Area: " + area.toFixed(2);
    } else {
    document.getElementById("result").textContent =
    "Please enter a valid radius greater than 0.";
      }
    }