'use strict';


let mark=0;
let userName=prompt('what is your name?');
userName=userName.toLowerCase();
let userAge=prompt('what is your age?');
alert('welcome to our website '+ userName + ' your age is ' + userAge +' we hope for you to live untle 100 year');

alert('we are going to ask you 7 questions about me Just Just let\'s play a guessing game to give you some excitement');
function question1(){

  let city=prompt('Do you expect that I am from the city of Jerash?' , 'y/n  or yes/no' );
  city=city.toLowerCase();
  if(city==='yes' || city==='y'){
    alert('your answer is correct');
    mark++;
  }
  else if(city==='no'|| city==='n'){
    alert('your answer is wrong: i am from jerash');
  }
  else{

    alert('you have to submit answer');

  }

}
question1();
function question2(){

  let statue=prompt('Do you expect that I live now in the city of Jerash, or not?' ,'y/n  or yes/no');
  statue=statue.toLowerCase();
  if(statue==='yes' || statue==='y'){

    alert('your answer is wrong :  i live in amman' );
  }
  else if(statue==='no'|| statue==='n'){
    alert('your answer is correct');
    mark++;
  }
  else{

    alert('you have to submit answer pleas');

  }
}
question2 ();
function question3 (){


  let team=prompt('Do you expect that I am the eldest in my brothers?' ,'y/n  or yes/no');
  team=team.toLowerCase();
  if(team==='yes' || team==='y'){
    alert('your answer is correct');
    mark++;

  }
  else if(team==='no'|| team==='n'){
    alert('your answer is wrong : In fact, I am the eldest of my brother');
  }
  else{

    alert('you have to submit answer');

  }
}
question3 ();
function question4(){
  let continent=prompt('Do you think that I am a millionaire?','y/n  or yes/no');
  continent=continent.toLowerCase();

  if(continent==='yes' || continent==='y'){

    alert('your answer is wrong : i am not millionaire but i hope to become a millionare');

  }
  else if(continent==='no'|| continent==='n'){
    alert('your answer is correct');
    mark++;
  }
  else{

    alert('you have to submit answer');

  }
}
question4 ();
function question5(){


  let wonder=prompt('Is my major in software engineering?' ,'y/n  or yes/no');
  wonder=wonder.toLowerCase();
  switch(wonder){
  case 'yes':
  case 'y':
    alert('your answer is correct') ;
    mark++;

    break;
  case 'no':
  case 'n':
    alert('your answer is worng : my major is software engineering');

    break;

  default:
    alert('you have to submit answer');


  }
}
question5 ();
function question6(){

  let myAge=prompt('Can you guess what my age is?');

  for(let i=1;i<=4;i++){
    myAge=parseInt(myAge);

    if(myAge===22){
      alert('your answer is correct');
      mark++;

      break;
    }
    else if (myAge<15){
      alert('your guess is too low you have only 4 chances including this one');
      myAge=prompt('Can you guess what my age is?');
    }
    else if (myAge>=15){
      alert('your guess is too high have only 4 chances including this one');
      myAge=prompt('Can you guess what my age is?');
    }
    else{
      alert('pleas your guess should in number have only 4 chances including this one');
      myAge=prompt('Can you guess what my age is?');
    }
  }

  alert('my age is 22');
}
question6 ();
function question7(){
  let things=['money','travel','hang out','sleep','play football'];

  for(let i=1;i<=6;i++){
    let mood=prompt('Can you guess what things makes me happy you have only 6 chances?');
    mood=mood.toLowerCase();
    for(let j=0;j<things.length;j++){

      if(mood===things[j]){
        alert('your anwser is correct');
        mark++;
        i=7;

        break;


      }

    }
    if (i===6){
      alert('i am sorry you could not guess');

    }
  }




  alert('things that make me happy sleep,travel,hang out ,paly footbal,money');
}
question7 ();

alert('thank you to visit our website  ' + userName);


switch (mark) {
case 0:
  alert('Your final mark is : '+ mark );
  break;
case 1:
  alert('Your final mark is : '+ mark );
  break;
case 2:
  alert('Your final mark is : '+ mark );
  break;
case 3:
  alert('Your final mark is : '+ mark );
  break;
case 4:
  alert('Your final mark is : '+ mark );
  break;
case 5:
  alert('Your final mark is : '+ mark );
  break;
case 6:
  alert('Your final mark is : '+ mark );
  break;
case 7:
  alert('Your final mark is : '+ mark );
  break;
}
