//declearing value for easy and future use
let buttons = document.querySelectorAll('.button');
let result = document.querySelectorAll('#result');
let w = result[0];
let s = result[1];






// writting type history value
function history(){
  return w.innerText;
}
// print history value
function print(num){
  w.innerText = num ;
}
//calculate value
function output(){
  return s.innerText;
}

//write value
function printoutput(num){
  if (num===''){
  s.innerText = num;
  }else{
  s.innerText = number(num);
  }
}
//changeing number to en quate form
function number(num){
  let n = num;
  let value = n.toLocaleString("en");
  return value;
}
//chabge back value from actual number removing '' && , replace string to number
function reversenumber(num){
  return number(num.replace(/,/g,''));
}
for(let i=0;i < buttons.length ; i++){
  buttons[i].addEventListener('click',show)
}
//the actual logic for this calculator
  function show()
  {   // if value is not number then 
      let write = reversenumber(output());
      let value = this.textContent;
     if(value == '+'||value=='-'||value=='C'||value=='B'||value=='%'|| value=='*'||value=='/'||value=='='){
        if(value=='C'){//clear all 
          print('');
          printoutput('');
        }else if (value=='B') //if backspace
        {
          if (write.toString())//write has some value
          {
            write= write.substr(0,write.length-1);
            printoutput(write);
          }else{ }//else if not have value then do nothing
        }else//if value is only obraters 
        {
          let outputs = output();
          let historys = history();
          if(outputs!='')//if value is not nullthen
          {
            outputs = reversenumber(outputs);
            historys =historys+ outputs;
              if(value=='=')
            {//if click = button then
              let results = eval(historys);
              printoutput(results);
              print('');
            }else{//value is opretoes then
              historys += value;
              print(historys);
              printoutput('');
            }
          }
        }
        //if the value is number then
    }else{
        write+=value;
        printoutput(write);
    }
  }


 