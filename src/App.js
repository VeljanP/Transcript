/*import React from 'react';
import './App.css';
//import { Authentication } from "./Authentication"; // Import the Authentication component
import RecordingScreen from './RecordingScreen';
import SignInScreen from './SignInScreen';

function App() {
    return (
    <div class ='App'>
      <SignInScreen />
      <RecordingScreen />
    </div>
  );
}

export default App;*/


/*
import React from 'react';
import './App.css';
//import { Authentication } from "./Authentication"; // Import the Authentication component
import RecordingScreen from './RecordingScreen';
import SignInScreen from './SignInScreen';

function App() {
 const [transcription, setTranscription] = useState('');  // State to hold the transcribed text

  // Mock function to simulate transcription (replace this with the real transcription)
  const handleTranscription = () => {
    const mockTranscript = 'This is a sample transcription of the audio.';
    setTranscription(mockTranscript);
  };

  // Function to download the transcription as a .txt file
  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([transcription], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'transcription.txt';
    document.body.appendChild(element); // Append to the document
    element.click(); // Trigger the download
    document.body.removeChild(element); // Cleanup
  };

  return (
    <div>
      <SignInScreen />
      <RecordingScreen />
    </div>
  );
}

export default App;

*/



import React, { useState } from 'react';
import './App.css';
import RecordingScreen from './RecordingScreen';
import SignInScreen from './SignInScreen';

function App() {
  // State to track whether the user is authenticated (logged in or registered)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to simulate login or registration
  const handleLogin = () => {
    setIsAuthenticated(true); // Set authentication to true when the user successfully logs in
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        // Show the RecordingScreen if the user is authenticated
        <RecordingScreen />
      ) : (
        // Otherwise, show the SignInScreen
        <SignInScreen onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
