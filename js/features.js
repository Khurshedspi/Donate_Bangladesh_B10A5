const blogBtn = document.getElementById('blog-btn');

blogBtn.addEventListener('click', function(){
    window.location.href = '../blog.html';
})


const donationContainer = document.getElementById('donation-container');
const historyContainer = document.getElementById('history-container');
const historyBtn = document.getElementById('history-container-btn');

document.getElementById('donation-container-btn')
.addEventListener('click', function(){
    donationContainer.classList.remove('hidden');
    document.getElementById('donation-container-btn').classList.add('bg-[#B4F461]');
    document.getElementById('history-container-btn').classList.remove('bg-[#B4F461]');
    historyContainer.classList.add('hidden');
});

document.getElementById('history-container-btn')
.addEventListener('click', function(){
historyContainer.classList.remove('hidden');
donationContainer.classList.add('hidden');
    document.getElementById('donation-container-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-container-btn').classList.add('bg-[#B4F461]');


})