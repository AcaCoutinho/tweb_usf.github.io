var i = 0;
var imagens = [];
var time = 3000;

imagens[0] = 'moimenta/moimenta.jpg'
imagens[1] = 'moimenta/moimenta2.jpg'
imagens[2] = 'moimenta/moimenta3.jpg'

function slideshow() {
  slides[i].classList.add("fade-out-slide");
}

function MudaImg(){
    document.slide.src = imagens[i];

    if(i < imagens.length - 1){
    i++
    }else{
    i = 0;
    }


  setTimeout("MudaImg()",time)
}

  window.onload = MudaImg;