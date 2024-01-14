let obj = document.getElementsByClassName('button');
let CurrentDisplay = "";
document.querySelector('#display').value = CurrentDisplay;

function update(event){
  let clickedButtonId = event.target.id;
  if(clickedButtonId == '='){
    CurrentDisplay = eval(CurrentDisplay);
  }
  else if(clickedButtonId == 'C'){
    CurrentDisplay = "";
  }
  else if(clickedButtonId == 'clear'){
    CurrentDisplay = CurrentDisplay.slice(0, -1);
  }else {
    if(clickedButtonId == 'fstop'){
      CurrentDisplay += '.'
    }
    else CurrentDisplay += clickedButtonId;
  }
  document.querySelector('#display').value = CurrentDisplay;
}

for(let i = 0;i<obj.length;++i){
  obj[i].addEventListener('click', update);
}