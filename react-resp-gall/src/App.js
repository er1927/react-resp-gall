import { Header, Footer } from "./components";
import "./css/style.css"
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <div>
      <Header />
        <div class="swiper">
            <div class="swiper-wrapper">
                        {/* Slides */}
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
                        {/* <!-- If we need pagination --> */}
            <div class="swiper-pagination"></div>
                        {/* <!-- If we need navigation buttons --> */}
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
                        {/* <!-- If we need scrollbar --> */}
            <div class="swiper-scrollbar"></div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
