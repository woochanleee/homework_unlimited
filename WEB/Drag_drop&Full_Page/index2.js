const section = document.querySelectorAll('.section');

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



/* ------------------------------------------ */
const slider = document.getElementById('body');
let isDown = false;
let startY;
let scrollTop;
let walk;
slider.addEventListener('mousedown', (e) => {
    if (index === 3)
        return;
    slider.style.overflow = "scroll";
    isDown = true;
    startY = e.pageY - slider.offsetTop;
    scrollTop = slider.scrollTop;
    console.log('mousedown');
    console.log('e.pageY ', e.pageY);
    console.log('slider.offsetTop ', slider.offsetTop);
    console.log('slider.scrollTop ', slider.scrollTop);
    console.log('----------');
});
slider.addEventListener('mouseleave', () => {
    if (walk > 0) {
        if (walk >= 400) {
            if (index <= 0)
                return;
            index--;
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            })
        } else {
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            })
        }
    } else {
        if (walk <= -370) {
            if (index >= 3) // 페이지 4개까진 다음창으로 갈수있는데 그다음으로 넘어가려면 리턴해줌
                return;
            index++;
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }

            })
        } else {
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            })
        }

    }
    isDown = false;
    slider.style.overflow = "hidden";
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.overflow = "hidden";

    if ( walk > 0){
        if (walk >= 400) {
            if (index <= 0)
                return;
            index--;
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            })
        } else {
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            })
        }
    } else {
        if (walk <= -370) {
            if (index >= 3) // 페이지 4개까진 다음창으로 갈수있는데 그다음으로 넘어가려면 리턴해줌
                return;
            index++;
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
    
            })
        } else {
            section.forEach((section, i) => {
                if (i === index) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            })  
        }

    }

});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - slider.offsetTop;
    walk = (y - startY) * 1; //scroll-fast
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









// [].forEach.call(slider, (slider) => {
//     slider.addEventListener('mousedown', (e) => {
//         isDown = true;
//         startX = e.pageY - slider.offsetTop;
//         scrollLeft = slider.scrollTop;
//     });
// });

// [].forEach.call(slider, (slider) => {
//     slider.addEventListener('mouseup', () => {
//         isDown = false;
//     });
// });

// [].forEach.call(slider, (slider) => {
//     slider.addEventListener('mouseleave', () => {
//         isDown = false;
//     });
// });

// [].forEach.call(slider, (slider) => {
//     slider.addEventListener('mousemove', (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const y = e.pageY - slider.offsetTop;
//         const walk = (y - startY) * 3; //scroll-fast
//         slider.scrollTop = scrollTop - walk;   
//     });
// });