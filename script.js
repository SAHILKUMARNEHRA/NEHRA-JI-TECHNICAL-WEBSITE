// My YouTube API stuff, I got these from Google Cloud Console
const myChannelId = 'UClhrUInDxdoVIjiIPrjZ5QA'; // My channel ID, I found this on YouTube
const myApiKey = 'AIzaSyAIiutIafmCdSo6BVNKt-ggfJJjjykpS-s'; // My API key, I got this after enabling YouTube Data API v3

// API key for news
const newsApiKey = 'c3d12fdda17f4952ab61a85147436301'; // I need to get this from NewsAPI.org

// Function to get my latest 3 videos for the "Latest Videos" section
function getLatestVideos() {
    // I’m using fetch to get videos from YouTube API
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${myApiKey}&channelId=${myChannelId}&part=snippet,id&order=date&maxResults=3`)
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            // Get the container where I want to show the videos
            let videoRow = document.getElementById('latestVideos');
            videoRow.innerHTML = ''; // Clear it first

            // Loop through the videos and add them
            data.items.forEach(video => {
                let videoId = video.id.videoId;
                // Add the iframe for each video
                videoRow.innerHTML += `
                    <iframe width="30%" height="200" 
                        src="https://www.youtube.com/embed/${videoId}" 
                        frameborder="0" 
                        allowfullscreen>
                    </iframe>
                `;
            });
        })
        .catch(error => {
            console.log('Oops, something went wrong with latest videos:', error);
        });
}

// Function to get my recent videos for the "Recent Videos" section
function getRecentVideos() {
    // Same API call, but I want 6 videos this time
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${myApiKey}&channelId=${myChannelId}&part=snippet,id&order=date&maxResults=6`)
        .then(response => response.json())
        .then(data => {
            let grid = document.querySelector('.grid-container');
            grid.innerHTML = ''; // Clear the grid first

            // Loop through the videos and add them with titles
            data.items.forEach(video => {
                let videoId = video.id.videoId;
                let videoTitle = video.snippet.title;
                grid.innerHTML += `
                    <div class="video-card">
                        <iframe width="100%" height="200" 
                            src="https://www.youtube.com/embed/${videoId}" 
                            frameborder="0" 
                            allowfullscreen>
                        </iframe>
                        <h3>${videoTitle}</h3>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.log('Error loading recent videos:', error);
        });
}

// Function to get the latest tech news and launches
function getTechNews() {
    // I’m using NewsAPI to get tech news in English
    fetch(`https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${newsApiKey}`)
        .then(response => response.json())
        .then(data => {
            let newsContainer = document.getElementById('techNews');
            newsContainer.innerHTML = ''; // Clear it first

            // I only want to show 5 news articles
            let articles = data.articles.slice(0, 5);

            // Loop through each article and add it to the page
            articles.forEach(article => {
                let title = article.title;
                let description = article.description || 'No description available'; // Some articles don’t have a description
                let url = article.url;

                // Add the news directly in English
                newsContainer.innerHTML += `
                    <div class="news-item">
                        <h3>${title}</h3>
                        <p>${description}</p>
                        <a href="${url}" target="_blank">Read Full Article</a>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.log('Error fetching tech news:', error);
            let newsContainer = document.getElementById('techNews');
            newsContainer.innerHTML = '<p>Sorry, I couldn’t load the news right now. Please try again later!</p>';
        });
}

// Function to recommend smartphones based on budget
function recommendPhones(budget) {
    // I made a list of phones in smartphones.js, let’s use that
    let allPhones = [];
    // I need to combine all the phones from different categories
    for (let category in smartphones) {
        allPhones = allPhones.concat(smartphones[category]);
    }

    // Find phones within 5000 of the budget
    let matchingPhones = allPhones.filter(phone => {
        return phone.price <= budget && phone.price >= (budget - 5000);
    });

    // Sort by price, highest first
    matchingPhones.sort((a, b) => b.price - a.price);

    // I only want to show the top 3
    let topPhones = matchingPhones.slice(0, 3);

    // Show the results
    let resultsDiv = document.getElementById('recommendationResults');
    resultsDiv.innerHTML = '<h3>Recommended Smartphones</h3>';

    if (topPhones.length === 0) {
        resultsDiv.innerHTML += '<p>No phones found in this budget. Try a different budget!</p>';
    } else {
        let list = document.createElement('ul');
        topPhones.forEach(phone => {
            let item = document.createElement('li');
            item.textContent = `${phone.brand} ${phone.model} - ₹${phone.price}`;
            list.appendChild(item);
        });
        resultsDiv.appendChild(list);
    }
}

// Smooth scrolling for my navigation links
let links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        let sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle the contact form submission
let contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // I’ll add form submission logic later, maybe send an email
    alert('Thanks for your message! I’ll get back to you soon.');
});

// Handle the budget form for smartphone recommendation
let budgetForm = document.getElementById('budgetForm');
budgetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let budget = parseInt(document.getElementById('budget').value);
    if (budget > 0) {
        recommendPhones(budget);
    } else {
        alert('Please enter a valid budget!');
    }
});

// Load everything when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    getLatestVideos(); // Load my latest videos
    getRecentVideos(); // Load my recent videos
    getTechNews(); // Load the latest tech news in English
});