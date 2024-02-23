const header = document.getElementsByTagName('header');
const startedBtn = document.getElementById('startedBtn');
const boxTitle = document.getElementById('boxTitle');
const mletters = document.getElementsByTagName('g');

   
window.addEventListener('scroll', function(){

    
    if(this.window.scrollY >= boxTitle.offsetHeight){
       
            header[0].style.background = 'white';
            startedBtn.classList.add('buttonGreen');
        
    }else{
        header[0].style.background = '#ffc017';
        startedBtn.classList.remove('buttonGreen');
    }
})