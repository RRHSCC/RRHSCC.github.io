 function cricketCheck() {
    let total = 0;
    let cricketScore = 0;
  if (document.getElementById('leg6').checked) {
    cricketScore++;
    total++
  } else if (document.getElementById('leg2').checked) {
   total++
  }
  if (document.getElementById('ant2').checked) {
    cricketScore++;
    total++
  } else if (document.getElementById('ant0').checked) {
   total++
  }
  if (document.getElementById('eatyes').checked) {
   cricketScore++;
    total++
  } else if (document.getElementById('eatno').checked) {
   total++
  }
  // add if statement here
  if (document.getElementById('coldno').checked) {
   cricketScore++;
    total++
  } else if (document.getElementById('coldyes').checked) {
   total++
  }
   var li = document.createElement('li');
      li.innerHTML = (Math.floor((cricketScore/total)* 100) + "% cricket!");
     document.getElementById("results").appendChild(li);

     quiz.style.display = "none";
}
