import { useState } from 'react';
import './App.css';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect } from 'react';

function App() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 300,
        height: 300,
      },
      fps: 60,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);

    }

  },[]
  );

  return (
    <>
      <div className='App'>
        <h1> Qr Code Scanning </h1>
        { scanResult
        ? <div> Success: <a href={"http://"+scanResult}>{scanResult}</a></div>
        : <div id="reader"></div>
       }
      </div>
    </>
  );
}

export default App;
