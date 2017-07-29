function chickenize(){
  val = document.getElementById('input').value;
  output = ''
  for(var i=0; i < val.length; i++){
    ascii = charToAscii(val[i])
    output += pushes(ascii);
    output += newline();
    output += bbq();
    output += newline();
    if (i != 0) {
      output += add();
      output += newline();
    }
  }
  document.getElementById('output').innerHTML = output;
}

function copyText(){
  document.getElementById('output').select()
  document.execCommand('copy');
  document.getElementById('copied').style.display = 'inline';
  setTimeout(function(){
    document.getElementById('copied').style.display = 'none';
  }, 5000)
}
function newline(){
  return '\n';
}
function charToAscii(c){
  return c.charCodeAt(0);
}

/*
Chars the topmost group of chickens into the corresponding ASCII code. ASCII stands for American Standard Chicken for Information Interchange.
*/
function bbq() {
  stack = ''
  for(i = 0; i < 9; i++){
    stack += 'chicken ';
  }
  return stack.trim();
}

/*
Causes the two topmost groups to multiply. This instruction also works arithmetically, but it ought to work in a way that makes more sense for chickens in future versions.
*/
function rooster(){
  chickens = ''
  for(i = 0; i < 4; i++){
    chickens += 'chicken ';
  }
  return chickens.trim();
}

/*
Adds the two topmost groups of chickens.
*/
function add(){
  chickens = ''
  for(i = 0; i < 2; i++){
    chickens += 'chicken ';
  }
  return chickens.trim();
}

/*
Pushes n-10 chickens onto the stack.
*/
function pushes(asciiCode){
  stackLevel = asciiCode + 10;
  chicken = '';
  for(i=0;i<stackLevel;i++){
    chicken += 'chicken ';
  }
  return chicken.trim();  
}