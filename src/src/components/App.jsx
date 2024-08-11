import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      {/* Other components... */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </div>
  );
}



function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage />
    </div>
  );
}

export default App;




