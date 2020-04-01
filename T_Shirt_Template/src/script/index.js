import '../style/sass/main.scss';
import Glide from '@glidejs/glide';


const conf =  {
  type: 'carousel',
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

let glideOne = new Glide('.glide--One').mount();
let glideTwo = new Glide('.glide--Two', conf ).mount();
let glideThree = new Glide('.glide--Three', conf ).mount();

