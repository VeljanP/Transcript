import { useState } from "react";
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
            
            {/* Only show the download button if there is some transcription */}
            {transcription && (
                <button className="saveButton" onClick={downloadTxtFile}>
                    Download Transcription as .txt
                </button>
            )}
        </div>
    );
}

export default RecordingScreen;
