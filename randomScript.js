window.onload = function run() {
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      document.getElementById("randomFact").innerHTML = "Many of our members don't actually code.";
      break;
    case 1:
      document.getElementById("randomFact").innerHTML = "RRHS Code Club is not sponsored by Pepsi.";
      break;
    case 2:
      document.getElementById("randomFact").innerHTML = "Rust and its Cargo compiler will one day be the savior of humanity.";
      break;
  }
}
