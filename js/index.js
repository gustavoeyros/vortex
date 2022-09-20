jQuery(document).ready(function($){
    //deixar a navbar fixada
    window.onscroll = function(){
        if(window.pageYOffset > 140){
            $('#header').addClass('active')
        } else{
            $('#header').removeClass('active')
        }
    }
})

document.getElementById('vid').play();