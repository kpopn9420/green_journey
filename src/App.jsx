import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSlider from './components/HeaderSlider';
import SDGProgress from './components/SDGProgress';
import SDGPointCard from './components/SDGPointCard';
import SDGTaskCards from './components/SDGTaskCards';
import PhotoUpload from './components/PhotoUpload';
import ContactFooter from './components/ContactFooter';
import SidebarNav from './components/SidebarNav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-light min-vh-100 position-relative">
      <div id="slider">
        <HeaderSlider />
      </div>
      <div className="container px-2">
        <div id="progress">
          <SDGProgress />
        </div>
        <div id="pointcard">
          <SDGPointCard />
        </div>
        <div id="taskcards">
          <SDGTaskCards />
        </div>
        <div id="photoupload">
          <PhotoUpload />
        </div>
      </div>
      <div id="contact">
        <ContactFooter />
      </div>
      <SidebarNav />
    </div>
  )
}

export default App
