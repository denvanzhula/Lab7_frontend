document.body.innerHTML = '<p> Задайте питання </p><input type="text"></input><div class="bl1" id="answerButton"></div><p id="answerContainer"></p>';


var ball1 = document.getElementById('answerButton');
var answers = ['Так', 'Ні', 'Можливо'];
  ball1.addEventListener("click", function(){
  var answer = answers[Math.floor(Math.random() * answers.length)];
      document.getElementById('answerContainer').innerHTML = answer;}
  );
