const form = document.querySelector('form')
// if the variable is defined here it will give empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", function (e) {
    e.preventDefault()  // to stop the values from going to server

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = 'Please give valid height'
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = 'Please give valid weight'
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi}</span> <span>Under Weight</span>`
    }else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>${bmi}</span> <span>Normal Range</span>`
    }else if(bmi > 24.9){
        results.innerHTML = `<span>${bmi}</span> <span>Overweight</span>`
    }
  }
}); 
