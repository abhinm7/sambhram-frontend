import './Spotlight.css'
import Spotlightcarousel from '../Spotlightcarousel/Spotlightcarousel';
import CarouselComponent from '../CarouselComponent/CarouselComponent';

const Spotlight = () =>{
    return(
        <>
        <div className="spotlights">
            {/* <Spotlightcarousel/> */}
            <CarouselComponent/>
        </div>
        </>
    ) 
}

export default Spotlight;