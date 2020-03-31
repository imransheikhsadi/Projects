import '../style/sass/main.scss';
import Glide from '@glidejs/glide';
import OnScreen from '../vendors/js/on_screen';



let glideOne = new Glide('.glide--One').mount();
let onScreen = new OnScreen([
    {
        element: '.header',
        callback: {
            in: (element)=>{element.style.position = 'fixed'},
            out: (element)=>{element.style.position = 'static'}
        }
    }
])

