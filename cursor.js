let mouse = document.querySelector('.cursor1');

window.addEventListener('pointermove', function curs(e){
mouse.style.top = e.pageY + 'px';
mouse.style.left = e.pageX + 'px';
});

let mousee = document.querySelector('.cursor2');

window.addEventListener('pointermove', function purs(e){
    mousee.style.top = e.pageY + 'px';
    mousee.style.left = e.pageX + 'px';
});

window.addEventListener('mousedown', function clck(){
    mousee.classList.add('hide');
    mouse.classList.add('clk')
});

window.addEventListener('mouseup', function gayu(){
    mousee.classList.remove('hide');
    mouse.classList.remove('clk');
});


let links = document.querySelectorAll('.pewpew');

links.forEach( link => {

link.addEventListener('pointerover', ()=>{
    mouse.classList.add('groww');
    mousee.classList.add('hide');
});

link.addEventListener('pointerout', () => {
    mouse.classList.remove('groww');
    mousee.classList.remove('hide');
});

});