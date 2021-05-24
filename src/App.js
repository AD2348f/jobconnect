import './App.css';
import Offer from './components/offers';
import useApi, { useState } from './hooks/useApi';
import OfferList from './components/singleoffer';
import Jobadds from './components/offer_news'

function App() {


  return (
    <div className="App">
      <header className="App__Header">        
        <h3>header</h3>
        <img></img>
        <nav>
          <ul className="App__Navigation">
            <li>Für Arbeitgeber</li>
            <li>Vorgemerkt</li>
            <li>Mein Profil</li>
          </ul>
        </nav>
      </header>
      <main className="App__Main">
        {/* Sidebar links */}
        <div className="App__Sidebar-links">
          <div>Seiten Feld 1</div>
          <div>Seiten Feld 2</div>
          <div>Seiten Feld 3</div>
        </div>
        {/* Suchfeld */}
        <div className="App__Mittelteil">
          <div className="App__Suchfelder-wrapper">
          <form className="App__Searchfield" action="">
            <input type="text"></input>
            <input type="text"></input>
            <button>Suchen</button>
          </form>
          </div>
          
          {/* Stellenangebote */}
          <div className="App__Stellenangebote">
          <div><Jobadds /></div>
          <div>Beispiel Feld 2</div>
          <div>Beispiel Feld 3</div>
          </div>
        </div>
      </main>
      <footer className="App__Footer">
        <div>Über uns</div>
        <div>AGB / Datenschutz</div>  
        <div>Social Media</div>
      </footer>
    </div>
  );
}

export default App;


