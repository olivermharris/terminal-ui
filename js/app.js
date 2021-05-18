function bootup() {
    const loadbar = document.getElementById('loadbar');
    const status = document.getElementById('status');
    const main = document.getElementById('main');
    const link_container = document.getElementById('link_container');

    let interval = setInterval(() => {
        loadbar.append("#");
    }, 100);
    setTimeout(() => { 
        clearInterval(interval);
        status.innerHTML = 'ONLINE';
        status.classList.add('term-col');
        loadbar.classList.add ("hidden");
        main.classList.remove ("hidden");
        link_container.classList.remove ("hidden");
        main.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
       
        let body = document.getElementById('body');
        body.classList.add('uiShift');

        let links = link_container.children;
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            link.classList.add('animate__animated', 'animate__fadeIn', `animate__delay-${i<=3 ? i+2 : 5}s`);
        }

    }, 3000); 
}

var showText = function (target, message, index, interval) {   
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

document.addEventListener('DOMContentLoaded', () => {
    bootup();
});