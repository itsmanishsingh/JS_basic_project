const form = document.querySelector('form');

// If the height and weight is taken before the form "Submit" event listner then it will take the default values which is 0 ,

// In order to avoid the default value as zero we use form submit event listener 
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height === "" || height<0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    
    else if(weight === "" || weight<0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else{
      const bmi= (weight/((height*height)/10000)).toFixed(2);
      var text;
      if(bmi <18.6){
         text = `Under Weight`;
      }else if(bmi<24.9 && bmi>18.6){
         text = `Normal Weight`;
      }else{
         text = Overweight;
      }
      results.innerHTML = `<span>${bmi}</br> ${text} </span> .`;
    }

})