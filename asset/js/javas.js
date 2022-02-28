var aboutBtns = document.querySelectorAll('.js-about-btn');
alert('abc');
var modal = document.querySelector('.modal-js')
function show(){
    modal.classList.add('open');
}
function dissapear(){
    modal.classList.remove('open');
}
for(const aboutBtn of aboutBtns){
    aboutBtn.addEventListener('click',show);
}