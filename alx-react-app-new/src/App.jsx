import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="John Doe" age={30} bio="Software Engineer" />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;



