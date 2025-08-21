// Configuration for Tunnel Site Tracking
const CONFIG = {
    // Change this to your backend server URL
    BACKEND_URL: 'https://dreambetx.cc/api', // Use 127.0.0.1 instead of localhost
    
    // Telegram channel URL
    TELEGRAM_URL: 'https://t.me/Dream_Crash_bot',
    
    // API endpoints
    API_ENDPOINTS: {
        TRACK_CLICK: '/api/tunnel-site/track-click',
        GET_STATS: '/api/tunnel-site/stats',
        GET_CLICK_COUNT: '/api/tunnel-site/click-count'
    },
    
    // Update interval for statistics (in milliseconds)
    STATS_UPDATE_INTERVAL: 30000, // 30 seconds
    
    // Animation delays
    ANIMATION_DELAYS: {
        STAT_CARD_1: 0.1,
        STAT_CARD_2: 0.2,
        STAT_CARD_3: 0.3
    }
};

// Helper function to get full API URL
function getApiUrl(endpoint) {
    return CONFIG.BACKEND_URL + endpoint;
}

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
    window.getApiUrl = getApiUrl;
}
