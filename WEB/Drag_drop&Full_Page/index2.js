const section = document.querySelectorAll('.section ');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let index = 0;
const animationDuration = 1000;
let lastTime = 0;

var dragScroll = (ev) => {
    ev.preventDefault();
    
    if (ev.dataTransfer.getData("text") === 'prev') {
        if (index <= 0)
            return;
        index--;
        section.forEach((section, i) => {
            console.log(i);
            if (i === index) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        })
    } else if (ev.dataTransfer.getData("text") === 'next') {
        if (index >= 3) // 페이지 4개까진 다음창으로 갈수있는데 그다음으로 넘어가려면 리턴해줌
            return;
        index++;
        section.forEach((section, i) => {
            if (i === index) {
                section.scrollIntoView({ behavior: 'smooth' });
            }

        })
    }
}

nextBtn.addEventListener('click', () => {
    if (index >= 3) // 페이지 4개까진 다음창으로 갈수있는데 그다음으로 넘어가려면 리턴해줌
        return;
    index++;
    section.forEach((section , i) => {
        if (i === index) {
            section.scrollIntoView({behavior : 'smooth'});
        }
        
    })
});

prevBtn.addEventListener('click', () => {
    if (index <= 0)
        return;
    index--;
    section.forEach((section, i) => {
        if (i === index) {
            section.scrollIntoView({behavior:'smooth'});
        }
    })
});

window.addEventListener('wheel', (e) => {
    const delta = e.wheelDelta;
    const currentTime = new Date().getTime();

    if (currentTime - lastTime < animationDuration) {
        e.preventDefault();
        return;
    }

    if (delta < 0) {
        const nextBtnClick = new Event('click');
        nextBtn.dispatchEvent(nextBtnClick);

    } else if (delta > 0) {
        const prevBtnClick = new Event('click');
        prevBtn.dispatchEvent(prevBtnClick);
    }
    lastTime = currentTime;
})