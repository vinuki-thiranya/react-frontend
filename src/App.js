import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiData, setApiData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This will be updated with your Azure API URL later
    fetch('/api/WeatherForecast')
      .then(response => response.json())
      .then(data => {
        setApiData(JSON.stringify(data));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Frontend Deployed on Azure</h1>
        {loading ? (
          <p>Loading data from API...</p>
        ) : (
          <div>
            <h2>Data from .NET API:</h2>
            <pre>{apiData}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;