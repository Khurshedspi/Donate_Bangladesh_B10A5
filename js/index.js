// for noakhali card start
document.getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const myBalance = getInnerTextAndParseFloat("my-total-balance");
    const noakhaliCardBalance = getInnerTextAndParseFloat("noakhali-card-balance");
    const noakhaliInputValue = getValueAndParsefloat("noakhali-input-field");
    const noakhaliCardTitle = getInnerText('noakhali-card-title');
    const historyContainer = document.getElementById('history-container');

    if (isNaN(parseFloat(noakhaliInputValue))) {
      alert("Please type Right Amount 🖋️");
    } else if (noakhaliInputValue < 0) {
      alert("Please Type Right Amount 🖋️");
    } else if (myBalance < noakhaliInputValue) {
      alert("Your account does not have sufficient balance😥");
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
    div.innerHTML = `
    
    <h1 class ="font-bold text-xl">${noakhaliInputValue} Taka is Donated For ${noakhaliCardTitle}</h1>
    <p>Date: ${new Date()} </p>
    `

    historyContainer.insertBefore(div, historyContainer.firstChild);
    
   

  });

//   noakhali card end 
