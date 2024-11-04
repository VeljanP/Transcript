import * as speechSdk from "microsoft-cognitiveservices-speech-sdk"; // Use ES6 import

const subscriptionKey = "6acd6627da7e41499496184cb1537c25"; // Ensure this is kept secret in production
const serviceRegion = "westeurope"; // Set to your service region

export function startTranscription(onTranscription) {
    const audioConfig = speechSdk.AudioConfig.fromDefaultMicrophoneInput();
    const speechConfig = speechSdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
    
    // Set the recognition language to Macedonian
    speechConfig.speechRecognitionLanguage = "mk-MK"; // Language code for Macedonian
    const recognizer = new speechSdk.SpeechRecognizer(speechConfig, audioConfig);
    recognizer.recognized = (s, e) => {
        if (e.result.reason === speechSdk.ResultReason.RecognizedSpeech) {
            console.log("Recognized speech:", e.result.text); // Log the recognized text
            onTranscription(e.result.text);
        } else {
        console.log("Speech recognition failed:", e.result);
        }
    };
    recognizer.startContinuousRecognitionAsync(
        () => {
            console.log("Recognition started");
        },
        (err) => {
            console.error("Error starting recognition:", err);
        }
    );
    return recognizer; // Return the recognizer instance
}
export function stopTranscription(recognizer) {
    if (recognizer) {
        recognizer.stopContinuousRecognitionAsync(() => {
            console.log("Recognition stopped");
        });
    }
}
