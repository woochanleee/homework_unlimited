const slider = document.querySelector('.items');
let isDown = false;
let startY;
let scrollTop;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startY = e.pageY - slider.offsetTop;
        scrollTop = slider.scrollTop;
        console.log('mousedown');
        console.log('e.pageY ', e.pageY);
        console.log('slider.offsetTop ', slider.offsetTop);
        console.log('slider.scrollTop ', slider.scrollTop);
        console.log('----------');
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - slider.offsetTop;
        const walk = (y - startY) * 3; //scroll-fast
        slider.scrollTop = scrollTop - walk;   
        console.log('mousemove');
        console.log('e.pageY', e.pageY);
        console.log('slider.offsetTop', slider.offsetTop);
        console.log('Y', y);
        console.log('startY', startY);
        console.log('walk', walk);
        console.log('scrollTop', scrollTop);
        console.log('-----------');
    });