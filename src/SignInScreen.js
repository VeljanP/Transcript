/*import React, { useState } from 'react';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here, like sending the data to the server or API.
    console.log('Sign-In:', { email, password });
    };

    return (
        <div style={styles.container}>
        <h1>SEMOS Transcript App</h1>

        <form style={styles.form} onSubmit={handleSignIn}>
        <div style={styles.inputGroup}>
        <label>Email:</label>
        <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
        />
        </div>

        <div style={styles.inputGroup}>
        <label>Password:</label>
        <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
        />
        </div>

        <button type="submit" style={styles.button}>Sign In</button>

        <div style={styles.links}>
        <a href="#" style={styles.link}>Register</a>
        <a href="#" style={styles.link}>Forgot Password?</a>
        </div>
        </form>
    </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#2a3a5b',
    },
    inputGroup: {
        marginBottom: '15px',
        marginRight: '20px'
    },
    input: {
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '15px',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
        
    },
    link: {
        fontSize: '16px',
        textDecoration: 'none',
        color: '#007bff',
    },
};

export default SignInScreen;

*/

import React, { useState } from 'react';

const SignInScreen = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
    // Handle sign-in logic here, like sending the data to the server or API.
        console.log('Sign-In:', { email, password });

    // Simulate successful login and call the onLogin function passed from App.js
        onLogin(); // This will notify App.js to switch to the RecordingScreen
    };

    return (
        <div style={styles.container}>
            <h1>SEMOS Transcript App</h1>

        <form style={styles.form} onSubmit={handleSignIn}>
        <div style={styles.inputGroup}>
            <label>Email:</label>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
            />
        </div>

        <div style={styles.inputGroup}>
            <label>Password:</label>
            <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
            />
        </div>

        <button type="submit" style={styles.button}>Sign In</button>

        <div style={styles.links}>
            <a href="#" style={styles.link}>Register</a>
            <a href="#" style={styles.link}>Forgot Password?</a>
        </div>
        </form>
    </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '30px',
        borderRadius: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        backgroundColor: '#2a3a5b',
    },
    inputGroup: {
        marginBottom: '15px',
        marginRight: '20px'
    },
    input: {
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '15px',
    },
    links: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px',
        
    },
    link: {
        fontSize: '16px',
        textDecoration: 'none',
        color: '#007bff',
    },
};

export default SignInScreen;