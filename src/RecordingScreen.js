/*import { useState } from "react";
import "./RecordingScreen.css"; // Import the CSS file
import { startTranscription, stopTranscription } from "./SpeechService"; // Import necessary functions

function RecordingScreen() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState("");
    const [recognizer, setRecognizer] = useState(null);

    const handleRecord = () => {
        if (isRecording) {
            console.log("Already recording...");
            return;
        }

        console.log("Starting transcription...");
        const newRecognizer = startTranscription((text) => {
            console.log("Text recognized:", text);
            if (!transcription.endsWith(text)) {
                setTranscription((prev) => prev + " " + text.trim());
            }
        });

        setRecognizer(newRecognizer);
        setIsRecording(true);
    };

    const handleStop = () => {
        if (recognizer) {
            console.log("Stopping transcription...");
            stopTranscription(recognizer);
            setIsRecording(false);
            setRecognizer(null);
        } else {
            console.log("No active recognition session.");
        }
    };

    // Function to download the transcription as a .txt file
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([transcription], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "transcription.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="container">
            <h1 className="title">Transcript</h1>
            <button className="button" onClick={isRecording ? handleStop : handleRecord}>
                {isRecording ? "Stop" : "Record"}
            </button>
            <p className="transcription">{transcription}</p>
            
            {/* Only show the download button if there is some transcription /}
            {transcription && (
                <button className="saveButton" onClick={downloadTxtFile}>
                    Download Transcription as .txt
                </button>
            )}
        </div>
    );
}

export default RecordingScreen;   */

/*
import React, { useRef, useState } from "react"; // Ensure useRef is imported
import "./RecordingScreen.css";
import { startTranscription, stopTranscription } from "./SpeechService";

function RecordingScreen() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState("");
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);
    const recognizerRef = useRef(null); // Ref to store the recognizer instance

    const handleRecord = () => {
        if (isRecording) {
            console.log("Already recording...");
            return;
        }

        // Start transcription and store recognizer instance in a ref
        recognizerRef.current = startTranscription((text) => {
            setTranscription((prev) => prev + " " + text.trim());
        });

        // Start audio recording
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunks.current = [];
            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunks.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        });
    };

    const handleStop = async () => {
        if (!isRecording) return;

        // Stop transcription using the recognizer stored in the ref
        if (recognizerRef.current) {
            await stopTranscription(recognizerRef.current);
        }

        // Stop audio recording
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }

        setIsRecording(false);
    };

    const handleDownloadTranscription = () => {
        const blob = new Blob([transcription], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transcription.txt";
        a.click();
    };

    const handleDownloadAudio = () => {
        if (audioURL) {
            const a = document.createElement("a");
            a.href = audioURL;
            a.download = "recorded_audio.wav";
            a.click();
        }
    };
    return (
        <div className="container">
            <h1 className="title">Transcript</h1>
            <button className="button" onClick={isRecording ? handleStop : handleRecord}>
                {isRecording ? "Stop" : "Record"}
            </button>
            <p className="transcription">{transcription}</p>

            <div className="download-buttons">
                <button onClick={handleDownloadTranscription}>Download Transcript</button>
                {audioURL && (
                    <>
                        <audio controls src={audioURL} />
                        <button onClick={handleDownloadAudio}>Download Audio</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default RecordingScreen; */
import React, { useRef, useState } from "react";
import "./RecordingScreen.css";
import { startTranscription, stopTranscription } from "./SpeechService";

function RecordingScreen() {
    const [isRecording, setIsRecording] = useState(false);
    const [transcription, setTranscription] = useState("");
    const [audioURL, setAudioURL] = useState(null);
    const mediaRecorderRef = useRef(null);
    const audioChunks = useRef([]);
    const recognizerRef = useRef(null);

    const handleRecord = () => {
        if (isRecording) {
            console.log("Already recording...");
            return;
        }

        recognizerRef.current = startTranscription((text) => {
            setTranscription((prev) => prev + " " + text.trim());
        });

        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunks.current = [];
            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunks.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
                const url = URL.createObjectURL(audioBlob);
                setAudioURL(url);
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        });
    };

    const handleStop = async () => {
        if (!isRecording) return;

        if (recognizerRef.current) {
            await stopTranscription(recognizerRef.current);
        }

        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
        }

        setIsRecording(false);
    };

    const handleDownloadTranscription = () => {
        const blob = new Blob([transcription], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transcription.txt";
        a.click();
    };

    const handleDownloadAudio = () => {
        if (audioURL) {
            const a = document.createElement("a");
            a.href = audioURL;
            a.download = "recorded_audio.wav";
            a.click();
        }
    };

    return (
        <div className="recording-container">
            <div className="left-section">
                <button className="record-button" onClick={isRecording ? handleStop : handleRecord}>
                    {isRecording ? "Stop Recording" : "Start Recording"}
                </button>
                {audioURL && (
                    <>
                        <audio controls src={audioURL} className="audio-player" />
                        <button onClick={handleDownloadAudio} className="download-button">
                            Download Audio
                        </button>
                    </>
                )}
            </div>
            <div className="right-section">
                <div className="transcription-box">
                    <p>{transcription || "Your transcriptions will appear here..."}</p>
                </div>
                <button onClick={handleDownloadTranscription} className="download-button">
                    Download Transcription
                </button>
            </div>
        </div>
    );
}

export default RecordingScreen;
