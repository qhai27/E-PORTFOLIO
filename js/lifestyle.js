// Tab Functionality
const setupTabs = () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
};

// Poll Functionality
const setupPoll = () => {
    const pollSubmit = document.querySelector('.poll-submit');
    const pollResults = document.querySelector('.poll-results');
    const resultBars = document.querySelector('.result-bars');
    
    if (!pollSubmit) return;
    
    pollSubmit.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="tech-poll"]:checked');
        
        if (!selectedOption) {
            alert('Please select an option before voting!');
            return;
        }
        
        // In a real app, you would send this to a server
        // For demo purposes, we'll use localStorage
        let pollData = JSON.parse(localStorage.getItem('techPoll')) || {
            'react-native': 0,
            'python': 0,
            'cloud': 0
        };
        
        pollData[selectedOption.value]++;
        localStorage.setItem('techPoll', JSON.stringify(pollData));
        
        // Display results
        displayPollResults(pollData);
    });
    
    // Check if there are existing results to display
    const existingPollData = JSON.parse(localStorage.getItem('techPoll'));
    if (existingPollData) {
        displayPollResults(existingPollData);
    }
};

const displayPollResults = (pollData) => {
    const pollResults = document.querySelector('.poll-results');
    const resultBars = document.querySelector('.result-bars');
    const totalVotes = Object.values(pollData).reduce((sum, val) => sum + val, 0);
    
    if (totalVotes === 0) return;
    
    resultBars.innerHTML = '';
    
    for (const [option, votes] of Object.entries(pollData)) {
        const percentage = Math.round((votes / totalVotes) * 100);
        
        const resultBar = document.createElement('div');
        resultBar.className = 'result-bar';
        resultBar.innerHTML = `
            <div class="result-label">${formatOptionName(option)}</div>
            <div class="result-progress">
                <div class="result-fill" style="width: ${percentage}%"></div>
            </div>
            <div class="result-percentage">${percentage}%</div>
        `;
        
        resultBars.appendChild(resultBar);
    }
    
    pollResults.style.display = 'block';
};

const formatOptionName = (option) => {
    const names = {
        'react-native': 'React Native',
        'python': 'Python',
        'cloud': 'Cloud Computing'
    };
    return names[option] || option;
};

// Initialize Lifestyle Page
document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    setupPoll();
});