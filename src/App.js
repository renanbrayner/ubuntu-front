import React from 'react';

import Routes from './routes';

import GlobalStyle from './styles/globals';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
