let fact = document.getElementById('fact');

let numberInput = document.getElementById('my-num');numberInput.addEventListener('input', getNumber);

function getNumber(){
  let num = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/'+num);

  xhr.onload = function(){
    if(xhr.status == 200 && num != ''){

      let data = xhr.responseText;
      let output = `<h2> Number Fact </h3><br/>
                      <p>${data}</p>`;

      document.getElementById('fact').innerHTML = output;
    }
    if(num == ''){
      document.getElementById('fact').innerHTML = '';

    }
  }

  xhr.send();
}