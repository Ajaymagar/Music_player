
window.addEventListener('load',()=>{
    const sound = document.querySelectorAll('.sound');  
    const pads = document.querySelectorAll('.pads div')
    const visual = document.querySelector('.visual')
    const color = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#6860d3',
        '#60b2d3'





    ]
    pads.forEach((pad , index)=>{
        pad.addEventListener('click',function(){
            sound[index].currentTime = 0;
            sound[index].play();
            createBubble(index)
        });
    });

    const createBubble = (index) =>{
         const bubble =document.createElement('div')
         visual.appendChild(bubble);
         bubble.style.backgroundColor = color[index]
         bubble.style.animation = 'jump 1s ease'
         bubble.addEventListener('animationend',()=>{
             visual.removeChild(this);
         })
    }

});
