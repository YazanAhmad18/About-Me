'use strict'; 



let userName=prompt('what is your name?');
userName=userName.toLowerCase();
// console.log('what is your name?')
// console.log(userName)
let userAge=prompt('what is your age?');
alert('welcome to our website '+     userName       + ' your age is ' +      userAge      +' we hope for you to live untle 100 year'); 

alert('we are going to ask you 5 questions about general information in order to have fun');

let city=prompt('Is Amman the capital of Jordan?' , 'y/n  or yes/no' );
// console.log('Is Amman the capital of Jordan?')
city=city.toLowerCase();
// console.log(city);
if(city==='yes' || city==='y'){
    alert('your answer is correct');

}else{

alert('your answer is worng')

}

let statue=prompt('Is the statue of freedom located in New York?' ,'y/n  or yes/no');
// console.log('Is the statue of freedom located in New York?')
statue=statue.toLowerCase();
// console.log(statue);
if(statue==='yes' || statue==='y'){
    alert('your answer is correct');

}else{

alert('your answer is worng')

}

let team=prompt('Did Brazil win the World Cup 5 times?' ,'y/n  or yes/no');
// console.log('Did Brazil win the World Cup 5 times?');
team=team.toLowerCase();
// console.log(team);
if(team==='yes' || team==='y'){
    alert('your answer is correct');

}else{

alert('your answer is worng')

}

let continent=prompt('Is the number of continents of the world 7?','y/n  or yes/no');
// console.log('Is the number of continents of the world 7?');
continent=continent.toLowerCase();
// console.log(continent);

if(continent==='yes' || continent==='y'){
    alert('your answer is correct');

}else{

alert('your answer is worng')

}

let wonder=prompt("Is Petra located in Jordan?" ,'y/n  or yes/no');
// console.log("Is Petra located in Jordan?");
wonder=wonder.toLowerCase();
// console.log(wonder);
switch(wonder){
case 'yes':
case 'y':
  alert('your answer is correct')  ;
  break;
  case 'no':
      case 'n':
          alert('your answer is worng');
          break;

          default:
              alert('you have to submit answer');


}

alert('thank you to visit our website  ' + userName);


