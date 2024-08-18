import React from 'react';
import Header from './Header';
import MainContent from '../alx-react-app/MainContent';
import Footer from './Footer';
import WelcomeMessage from './WelcomeMessage';
import UserProfile from './UserProfile';

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




