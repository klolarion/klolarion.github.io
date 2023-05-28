const clock = document.querySelector('#clock');


function getClock() {

    const now = new Date();

    const hour = String(now.getHours()).padStart(2,'0');
    const min = String(now.getMinutes()).padStart(2,'0');
    const sec = String(now.getSeconds()).padStart(2,'0');

    clock.innerText = `${hour}:${min}:${sec}`;
}

getClock()
//주기적으로 실행할 (함수, ms)
setInterval(getClock, 1000);

//(실행할함수, ms뒤에 실행)
// setTimeout(sayHello, 2000);
