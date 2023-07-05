import { FaWhatsapp, FaFacebook, FaInstagram, FaPhoneFlip } from 'react-icons/fa6';
import './App.css'

function App() {
  return (
    <>
      <section id='container'>
        <div id='one'>
          <div className="box">
            <div id='logo'>
              <img src="/logo.png" alt="logo" />
              <h1>Wolves Fashion</h1>
            </div>
            <div id='links'>
              <a href="#" id='facebook'><FaFacebook /><p>Facebook</p></a>
              <a href="#" id='whatsapp'><FaWhatsapp /><p>Whatsapp</p></a>
              <a href="#" id='instagram'><FaInstagram /><p>Instagram</p></a>
              <a href="tel:+201227684380" id='tele'><FaPhoneFlip /><p>+20 1227684380</p></a>
            </div>
            <p className='slogan'>With Wolves Fashion, You Will See All That Is New</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
