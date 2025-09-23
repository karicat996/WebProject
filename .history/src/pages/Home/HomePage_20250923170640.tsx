
import CalendarComponent from '../Calendar/CalendarPage';
import WishCard from '../Calendar/WishCard';
import './HomePage.less';
import TopNav from '../../layouts/TopNav/TopNav';
import Bottom from '../../layouts/bottomNav/bottom';
import CarouselPage from '../../layouts/Carousel/CarouselPage';
export const Home = () => {
  return (
    <>
    <div className="container">

    <div className="header-container">
    <TopNav/>
    </div>
    <div className="core-container">
      
    <div className="left-container">
      <WishCard />
    </div>

    <div className="middle-container">

    <div className="middle-on-container">
      <CarouselPage/>
    </div>
    <div className="middle-under-container">
      <CalendarComponent/>
      
    </div>
    </div>

    <div className="right-container">
      右边
    </div>
    </div>

    <div className="footer-container">
      <Bottom/>
    </div>

    </div>
   
  </>
  
  )
}

export default Home