import React from 'react'
import logo from './logo.svg'
import './App.css';
import { TabsImpl, MainMenu } from './components'



function App() {

  return (
    <div className="App">
      <header>
        <MainMenu />
      </header>
      <body>
        <TabsImpl />
      </body>
    </div>
  );
}

export default App;
