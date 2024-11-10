import './Spotlight.css'
import Spotlightcarousel from '../Spotlightcarousel/Spotlightcarousel';
import CarouselComponent from '../CarouselComponent/CarouselComponent';

const Spotlight = () =>{
    return(
        <>
        <div className="spotlights">
            <CarouselComponent/>
            {/* <Spotlightcarousel/> */}
        </div>
        </>
    ) 
}

export default Spotlight;