// Main application logic
document.addEventListener('DOMContentLoaded', () => {
    console.log('Mini App loaded successfully!');

    // Get elements
    const actionBtn = document.getElementById('actionBtn');
    const output = document.getElementById('output');

    // Button click handler
    actionBtn.addEventListener('click', () => {
        handleButtonClick();
    });

    // Main function
    function handleButtonClick() {
        const messages = [
            'Hello! Welcome to the Mini App! 👋',
            'Great job! You clicked the button! 🎉',
            'This app is working perfectly! ✨',
            'Keep exploring and building! 🚀',
            'You\'re doing amazing! 💪'
        ];

        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        output.textContent = randomMessage;
        output.classList.add('show');

        // Add some animation
        actionBtn.textContent = 'Click Again!';
        
        setTimeout(() => {
            output.classList.remove('show');
        }, 3000);
    }

    // Additional functionality can be added here
    initializeApp();
});

// Initialize app
function initializeApp() {
    console.log('App initialized at:', new Date().toLocaleString());
    
    // Add any initialization logic here
    setupEventListeners();
}

// Setup additional event listeners
function setupEventListeners() {
    // Example: Log when user scrolls
    window.addEventListener('scroll', () => {
        // Add scroll-based functionality here
    });

    // Example: Handle window resize
    window.addEventListener('resize', () => {
        console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
    });
}

// Utility functions
const utils = {
    // Format date
    formatDate: (date) => {
        return new Date(date).toLocaleDateString();
    },

    // Generate random color
    randomColor: () => {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    },

    // Capitalize string
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { utils };
}
