/*var matrix = []
  for ( var i=0, i<9, i++) {
    matrix[i] = new Array(9);
  }
*/

window.onload = generate;

let letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]


function generate() {
var i;
for (i = 0; i < 20; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column1").appendChild(li);
}

var i;
for (i = 0; i < 20; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column2").appendChild(li);
}

var i;
for (i = 0; i < 20; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column3").appendChild(li);
}

var i;
for (i = 0; i < 9; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column4").appendChild(li);
}
 var li = document.createElement('li');
 li.innerHTML = "T";
 document.getElementById("column4").appendChild(li);
var i;
for (i = 0; i < 10; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column4").appendChild(li);
}

var i;
for (i = 0; i < 9; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column5").appendChild(li);
}
 var li = document.createElement('li');
 li.innerHTML = "E";
 document.getElementById("column5").appendChild(li);
var i;
for (i = 0; i < 10; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column5").appendChild(li);
}

var i;
for (i = 0; i < 9; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column6").appendChild(li);
}
var li = document.createElement('li');
 li.innerHTML = "T";
 document.getElementById("column6").appendChild(li);
var i;
for (i = 0; i < 10; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column6").appendChild(li);
}

var i;
for (i = 0; i < 9; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column7").appendChild(li);
}
 var li = document.createElement('li');
 li.innerHTML = "R";
 document.getElementById("column7").appendChild(li);
var i;
for (i = 0; i < 10; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column7").appendChild(li);
}
var i;
for (i = 0; i < 9; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column8").appendChild(li);
}
 var li = document.createElement('li');
 li.innerHTML = "I";
 document.getElementById("column8").appendChild(li);
var i;
for (i = 0; i < 10; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column8").appendChild(li);
}

var i;
for (i = 0; i < 9; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column9").appendChild(li);
}
 var li = document.createElement('li');
 li.innerHTML = "S";
 document.getElementById("column9").appendChild(li);
var i;
for (i = 0; i < 10; i++)
{
  letter = letters[Math.floor(Math.random() * letters.length)]; 
 var li = document.createElement('li');
 li.innerHTML = letter;
 document.getElementById("column9").appendChild(li);
}
}
