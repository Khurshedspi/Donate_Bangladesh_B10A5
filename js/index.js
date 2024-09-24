// for noakhali card start
document.getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const myBalance = getInnerTextAndParseFloat("my-total-balance");
    const noakhaliCardBalance = getInnerTextAndParseFloat("noakhali-card-balance");
    const noakhaliInputValue = getValueAndParsefloat("noakhali-input-field");
    const noakhaliCardTitle = getInnerText('noakhali-card-title');
    const historyContainer = document.getElementById('history-container');
   
 

    if (isNaN((noakhaliInputValue))) {
      alert("Please type Right Amount 🖋️");
      return;
    
    }
    else if(noakhaliInputValue === 0){
      alert("Please type Right Amount 🖋️");
      return;
    }
  
    else if (noakhaliInputValue < 0) {
      alert("Please Type Right Amount 🖋️");
      return;
    } else if (myBalance < noakhaliInputValue) {
      alert("Your account does not have sufficient balance😥");
      return;
    } else {
      const myCurrentBalance = myBalance - noakhaliInputValue;
      document.getElementById('my-total-balance').innerText = myCurrentBalance;
      const noakhaliNewCardBalance = noakhaliInputValue + noakhaliCardBalance;
     document.getElementById('noakhali-card-balance').innerText = noakhaliNewCardBalance;

      document.getElementById("my_modal_1").showModal();
      document.getElementById('noakhali-input-field').value = '';
    }

    const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('p-6');
    div.classList.add('rounded');
    div.classList.add('mt-5');
    div.innerHTML = `
    
    <h1 class ="font-bold text-xl">${noakhaliInputValue} Taka is Donated For ${noakhaliCardTitle}</h1>
    <p>Date: ${new Date()} </p>
    `

    historyContainer.insertBefore(div, historyContainer.firstChild);
    
   

  });

//   noakhali card end 


// feni card start
document.getElementById('feni-donate-btn')
.addEventListener('click', function(){
    const myBalance = getInnerTextAndParseFloat("my-total-balance");
    const feniCardBalance = getInnerTextAndParseFloat("feni-card-balance");
    const feniInputValue = getValueAndParsefloat("feni-input-field");
    const feniCardTitle = getInnerText('feni-card-title');
    const historyContainer = document.getElementById('history-container');

    if (isNaN((feniInputValue))) {
        alert("Please type Right Amount 🖋️");
        return;
      }
      else if(feniInputValue === 0){
        alert("Please type Right Amount 🖋️");
        return;
      }
      else if (feniInputValue < 0) {
        alert("Please Type Right Amount 🖋️");
        return;
      } else if (myBalance < feniInputValue) {
        alert("Your account does not have sufficient balance😥");
        return;
      } else {
        const myCurrentBalance = myBalance - feniInputValue;
        document.getElementById('my-total-balance').innerText = myCurrentBalance;
        const feniNewCardBalance = feniInputValue + feniCardBalance;
       document.getElementById('feni-card-balance').innerText = feniNewCardBalance;
  
        document.getElementById("my_modal_2").showModal();
        document.getElementById('feni-input-field').value = '';
      }

      const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('p-6');
    div.classList.add('rounded');
    div.classList.add('mt-5');
    div.innerHTML = `
    
    <h1 class ="font-bold text-xl">${feniInputValue} Taka is Donated For ${feniCardTitle}</h1>
    <p>Date: ${new Date()} </p>
    `

    historyContainer.insertBefore(div, historyContainer.firstChild);
  
})

// feni card end 


// quota protest start
document.getElementById('quota-donate-btn')
.addEventListener('click',function(){
    const myBalance = getInnerTextAndParseFloat("my-total-balance");
    const quotaCardBalance = getInnerTextAndParseFloat("quota-card-balance");
    const quotaInputValue = getValueAndParsefloat("quota-input-field");
    const quotaCardTitle = getInnerText('quota-card-title');
    const historyContainer = document.getElementById('history-container');

    if (isNaN((quotaInputValue))) {
        alert("Please type Right Amount 🖋️");
        return;
      } 
      else if(quotaInputValue === 0){
        alert("Please type Right Amount 🖋️");
        return;
      }
      else if (quotaInputValue < 0) {
        alert("Please Type Right Amount 🖋️");
        return;
      } else if (myBalance < quotaInputValue) {
        alert("Your account does not have sufficient balance😥");
        return;
        
      } else {
        const myCurrentBalance = myBalance - quotaInputValue;
        document.getElementById('my-total-balance').innerText = myCurrentBalance;
        const quotaNewCardBalance = quotaInputValue + quotaCardBalance;
       document.getElementById('quota-card-balance').innerText = quotaNewCardBalance;
  
        document.getElementById("my_modal_3").showModal();
        document.getElementById('quota-input-field').value = '';
      }

      const div = document.createElement('div');
    div.classList.add('border');
    div.classList.add('p-6');
    div.classList.add('rounded');
    div.classList.add('mt-5');
    div.innerHTML = `
    
    <h1 class ="font-bold text-xl">${quotaInputValue} Taka is Donated For ${quotaCardTitle}</h1>
    <p>Date: ${new Date()} </p>
    `

    historyContainer.insertBefore(div, historyContainer.firstChild);
})


// quota protest start
