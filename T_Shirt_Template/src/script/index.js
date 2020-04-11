import '../style/sass/main.scss';
import Glide from '@glidejs/glide';


const conf =  {
  type: 'slider',
  startAt: 0,
  perView: 3,
  breakpoints: {
    768: {
      perView: 2
    },
    576: {
      perView: 1
    }
  }
}


let glideOne = check('.glide--One') && new Glide('.glide--One',{autoplay: 4000}).mount();
let glideTwo = check('.glide--Two') && new Glide('.glide--Two', conf ).mount();
let glideThree = check('.glide--Three') && new Glide('.glide--Three', conf ).mount();

function check(name){
  return document.querySelector(name)
}
