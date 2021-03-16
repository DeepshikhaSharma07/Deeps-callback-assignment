function greet( name,myFunction) {
  let text='Welcome to Callback site!'+"<br>"
  document.getElementById("root").innerHTML=text;
setTimeout(() => {
  text= myFunction(name);
  document.getElementById("root").innerHTML+=text;
}, 3000);  

}

// callback function
function sayName(name) {
  let text = 'Hello' + ' ' + name;
  return text;
  
}


document.getElementById("btn").addEventListener(
greet('Deepshikha',sayName));
