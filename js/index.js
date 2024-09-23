// for noakhali card start
document.getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const myBalance = getInnerTextToNumber("my-total-balance");

    const noakhaliCardBalance = getInnerTextToNumber("noakhali-card-balance");

    const noakhaliInputValue = getInputValueToNumber("noakhali-input-field");

    if (isNaN(parseFloat(noakhaliInputValue))) {
      alert("Please type Right Amount 🖋️");
    } else if (noakhaliInputValue < 0) {
      alert("Please Type Right Amount2 🖋️");
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
  });

//   noakhali card end 
