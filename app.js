//mainSliderMechanism
function mainSlider() {
    //slider
    var carouselSlider = document.getElementById('carouselSlider'), carouselImages = document.querySelectorAll('#carouselSlider img');
    
    //background
    var backgroundSlider = document.getElementById('backgroundSlider'), backgroundImages = document.querySelectorAll('#backgroundSlider img');

    //btns
    var btnPrev = document.querySelector('#btnPrev'), btnNext = document.querySelector('#btnNext');

    //counter, currentSizes, transitionType 
    var counter = 1, currentCarouselSize = document.getElementById('carouselContainer').clientWidth, currentBackgroundSize = document.getElementById('backgroundContainer').clientWidth, transitionType = "transform 0.2s ease-in-out";
    
    //main
    carouselSlider.style.transform = 'translateX(' + (-currentCarouselSize * counter) + 'px';
    backgroundSlider.style.transform = 'translateX(' + (-currentBackgroundSize * counter) + 'px';

    //btnListeners
    btnNext.addEventListener('click', () =>{
        if(counter >= carouselImages.length - 1) return;
        counter++;
        carouselSlider.style.transition = transitionType;
        carouselSlider.style.transform = 'translateX(' + (-currentCarouselSize * counter) + 'px';
        backgroundSlider.style.transition = transitionType;
        backgroundSlider.style.transform = 'translateX(' + (-currentBackgroundSize * counter) + 'px';
    });

    btnPrev.addEventListener('click',()=>{
        if(counter <= 0) return;
        counter--;
        carouselSlider.style.transition = transitionType;
        carouselSlider.style.transform = 'translateX(' + (-currentCarouselSize * counter) + 'px';
        backgroundSlider.style.transition = transitionType;
        backgroundSlider.style.transform = 'translateX(' + (-currentBackgroundSize * counter) + 'px';
    });

    //sliderLoop
    carouselSlider.addEventListener('transitionend', ()=>{
        if(carouselImages[counter].id === 'lastClone'){
            counter = carouselImages.length - 2;
            carouselSlider.style.transition = 'none';
            carouselSlider.style.transform = 'translateX(' + (-currentCarouselSize * counter) + 'px';
            backgroundSlider.style.transition = 'none';
            backgroundSlider.style.transform = 'translateX(' + (-currentBackgroundSize * counter) + 'px'; 
        }
        if(carouselImages[counter].id === 'firstClone'){
            counter = carouselImages.length - counter;
            carouselSlider.style.transition = 'none';
            carouselSlider.style.transform = 'translateX(' + (-currentCarouselSize * counter) + 'px';
            backgroundSlider.style.transition = 'none';
            backgroundSlider.style.transform = 'translateX(' + (-currentBackgroundSize * counter) + 'px';
        }
    }); 

}

//adjustingSize
function reScale() {
    //elements
    var cC = document.getElementById('carouselContainer'), cS = document.getElementById('carouselSlider'), bC = document.getElementById('backgroundContainer'), bS = document.getElementById('backgroundSlider');
    
    if(window.innerHeight < window.innerWidth){
        var nH = window.innerHeight;
        cC.style.width = nH * 0.7+"px"; cS.style.height = nH * 0.7+"px"; bC.style.width = nH * 0.9+"px"; bS.style.height = nH * 0.9+"px";
    }
    else{
        var nW = window.innerWidth;
        cC.style.width = nW * 0.7+"px"; cS.style.height = nW * 0.7+"px"; bC.style.width = nW * 0.9+"px"; bS.style.height = nW * 0.9+"px";
    }

    cC.style.top = (window.innerHeight - cC.clientWidth)/2+"px";
    cC.style.left = (window.innerWidth - cC.clientWidth)/2+"px";
    bC.style.top = (window.innerHeight - bC.clientWidth)/2+"px";
    bC.style.left = (window.innerWidth - bC.clientWidth)/2+"px";
            
}