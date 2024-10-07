const datasets = require('./datasets');
/**
 * Extracts the product or website name from a window/tab title string.
 *
 * @param {string} title - The raw window/tab title string.
 * @returns {string} - The extracted product or website name.
 */
/**
 * Extracts the product or website name from a window/tab title string.
 *
 * @param {string} title - The raw window/tab title string.
 * @returns {string|boolean} - The extracted product or website name, or false if no match is found.
 */
function extractProductName(title) {
    // Define common delimiters that separate different parts of the title
    const delimiters = [' - ', ' | ', ' – ', ' — ', ': ', ' ΓÇô ', ' ΓÇó '];

    // Split the title by all delimiters iteratively
    let segments = [title];
    delimiters.forEach(delim => {
        segments = segments.flatMap(segment =>
            segment.includes(delim) ? segment.split(delim) : [segment]
        );
    });

    // Trim whitespace and remove empty segments
    segments = segments.map(seg => seg.trim()).filter(seg => seg.length > 0);

    // Define known browser suffixes to exclude from product names
    const browserSuffixes = [
        'Google Chrome', 'Mozilla Firefox', 'Safari',
        'Microsoft Edge', 'Opera', 'Brave'
    ];
    segments = segments.filter(seg => !browserSuffixes.includes(seg));

    // Define a prioritized list of known product/website names
    const knownProducts = datasets.products;
    // Attempt to find a known product in the segments
    for (let seg of segments) {
        for (let product of knownProducts) {
            // Case-insensitive comparison
            if (seg.toLowerCase() === product.toLowerCase()) {
                return product;  // Return the matching product name
            }
        }
    }

    // If no match is found, return false
    return false;
}

module.exports = { extractProductName };

/**
 * Adds unique user data to the datasets and categorizes it.
 *
 * @param {string} userData - The data provided by the user.
 */
function addUniqueData(userData) {
    // Normalize the input by trimming and converting to lowercase
    const normalizedData = userData.trim().toLowerCase();

    // Check if the data is already in the products list
    const exists = datasets.products.some(product => product.toLowerCase() === normalizedData);

    if (!exists) {
        // Categorize the data (enhanced categorization logic)
        let category;

        // Enhanced categorization logic
        if (normalizedData.includes('shop') || normalizedData.includes('buy') || normalizedData.includes('store')) {
            category = 'E-commerce';
        } else if (normalizedData.includes('news') || normalizedData.includes('update') || normalizedData.includes('headline')) {
            category = 'News';
        } else if (normalizedData.includes('social') || normalizedData.includes('connect') || normalizedData.includes('network')) {
            category = 'Social Media';
        } else if (normalizedData.includes('watch') || normalizedData.includes('video')) {
            category = 'Streaming Services';
        } else if (normalizedData.includes('learn') || normalizedData.includes('course') || normalizedData.includes('education')) {
            category = 'Online Education';
        } else if (normalizedData.includes('music') || normalizedData.includes('listen')) {
            category = 'Music Streaming';
        } else if (normalizedData.includes('forum') || normalizedData.includes('discussion') || normalizedData.includes('help')) {
            category = 'Community/Support';
        } else if (normalizedData.includes('job') || normalizedData.includes('career') || normalizedData.includes('work')) {
            category = 'Job Search';
        } else if (normalizedData.includes('recipe') || normalizedData.includes('cook') || normalizedData.includes('food')) {
            category = 'Food & Cooking';
        } else if (normalizedData.includes('fitness') || normalizedData.includes('workout') || normalizedData.includes('health')) {
            category = 'Health & Fitness';
        } else if (normalizedData.includes('travel') || normalizedData.includes('trip') || normalizedData.includes('holiday')) {
            category = 'Travel';
        } else if (normalizedData.includes('finance') || normalizedData.includes('money') || normalizedData.includes('invest')) {
            category = 'Finance';
        } else if (normalizedData.includes('sports') || normalizedData.includes('game') || normalizedData.includes('team')) {
            category = 'Sports';
        } else if (normalizedData.includes('movie') || normalizedData.includes('film') || normalizedData.includes('cinema')) {
            category = 'Movies';
        } else if (normalizedData.includes('book') || normalizedData.includes('read') || normalizedData.includes('literature')) {
            category = 'Books';
        } else if (normalizedData.includes('tech') || normalizedData.includes('technology') || normalizedData.includes('gadget')) {
            category = 'Technology';
        } else if (normalizedData.includes('photo') || normalizedData.includes('image') || normalizedData.includes('picture')) {
            category = 'Photography';
        } else if (normalizedData.includes('design') || normalizedData.includes('create') || normalizedData.includes('art')) {
            category = 'Design & Art';
        } else if (normalizedData.includes('environment') || normalizedData.includes('eco') || normalizedData.includes('sustainability')) {
            category = 'Environment';
        } else if (normalizedData.includes('politics') || normalizedData.includes('government') || normalizedData.includes('election')) {
            category = 'Politics';
        } else if (normalizedData.includes('science') || normalizedData.includes('research') || normalizedData.includes('study')) {
            category = 'Science';
        } else if (normalizedData.includes('history') || normalizedData.includes('past') || normalizedData.includes('event')) {
            category = 'History';
        } else if (normalizedData.includes('fashion') || normalizedData.includes('style') || normalizedData.includes('clothing')) {
            category = 'Fashion';
        } else if (normalizedData.includes('gamer') || normalizedData.includes('gaming') || normalizedData.includes('console')) {
            category = 'Gaming';
        } else if (normalizedData.includes('property') || normalizedData.includes('real estate') || normalizedData.includes('house')) {
            category = 'Real Estate';
        } else if (normalizedData.includes('beauty') || normalizedData.includes('skincare') || normalizedData.includes('makeup')) {
            category = 'Beauty & Personal Care';
        } else if (normalizedData.includes('automobile') || normalizedData.includes('car') || normalizedData.includes('vehicle')) {
            category = 'Automotive';
        } else if (normalizedData.includes('pet') || normalizedData.includes('animal') || normalizedData.includes('dog') || normalizedData.includes('cat')) {
            category = 'Pets';
        } else if (normalizedData.includes('crypto') || normalizedData.includes('blockchain') || normalizedData.includes('bitcoin')) {
            category = 'Cryptocurrency';
        } else if (normalizedData.includes('newsletters') || normalizedData.includes('subscription') || normalizedData.includes('email')) {
            category = 'Email & Newsletters';
        } else if (normalizedData.includes('climate') || normalizedData.includes('weather') || normalizedData.includes('temperature')) {
            category = 'Weather & Climate';
        } else if (normalizedData.includes('relationship') || normalizedData.includes('love') || normalizedData.includes('dating')) {
            category = 'Relationships';
        } else if (normalizedData.includes('children') || normalizedData.includes('parenting') || normalizedData.includes('baby')) {
            category = 'Parenting & Kids';
        } else if (normalizedData.includes('charity') || normalizedData.includes('donate') || normalizedData.includes('volunteer')) {
            category = 'Charity & Volunteering';
        } else if (normalizedData.includes('event') || normalizedData.includes('party') || normalizedData.includes('celebration')) {
            category = 'Events';
        } else if (normalizedData.includes('fitness') || normalizedData.includes('exercise') || normalizedData.includes('health')) {
            category = 'Fitness & Wellness';
        } else if (normalizedData.includes('insurance') || normalizedData.includes('coverage') || normalizedData.includes('policy')) {
            category = 'Insurance';
        } else if (normalizedData.includes('credit') || normalizedData.includes('loan') || normalizedData.includes('debt')) {
            category = 'Credit & Loans';
        } else if (normalizedData.includes('investment') || normalizedData.includes('portfolio') || normalizedData.includes('fund')) {
            category = 'Investments';
        } else if (normalizedData.includes('conference') || normalizedData.includes('seminar') || normalizedData.includes('meeting')) {
            category = 'Conferences & Seminars';
        } else if (normalizedData.includes('podcast') || normalizedData.includes('broadcast') || normalizedData.includes('audio')) {
            category = 'Podcasts';
        } else if (normalizedData.includes('business') || normalizedData.includes('startup') || normalizedData.includes('company')) {
            category = 'Business';
        } else if (normalizedData.includes('networking') || normalizedData.includes('connect') || normalizedData.includes('collaborate')) {
            category = 'Networking';
        } else if (normalizedData.includes('lifestyle') || normalizedData.includes('living') || normalizedData.includes('style')) {
            category = 'Lifestyle';
        } else if (normalizedData.includes('art') || normalizedData.includes('gallery') || normalizedData.includes('exhibit')) {
            category = 'Art & Exhibitions';
        } else if (normalizedData.includes('spirituality') || normalizedData.includes('religion') || normalizedData.includes('faith')) {
            category = 'Spirituality';
        } else if (normalizedData.includes('tutorial') || normalizedData.includes('guide') || normalizedData.includes('how to')) {
            category = 'Tutorials & Guides';
        } else if (normalizedData.includes('language') || normalizedData.includes('learn') || normalizedData.includes('speak')) {
            category = 'Language Learning';
        } else if (normalizedData.includes('subscription') || normalizedData.includes('service') || normalizedData.includes('member')) {
            category = 'Subscriptions';
        } else if (normalizedData.includes('savings') || normalizedData.includes('account') || normalizedData.includes('interest')) {
            category = 'Savings & Accounts';
        } else if (normalizedData.includes('travel') || normalizedData.includes('explore') || normalizedData.includes('journey')) {
            category = 'Travel & Adventure';
        } else if (normalizedData.includes('interview') || normalizedData.includes('resume') || normalizedData.includes('cv')) {
            category = 'Job Applications';
        } else if (normalizedData.includes('apps') || normalizedData.includes('software') || normalizedData.includes('application')) {
            category = 'Software & Apps';
        } else if (normalizedData.includes('vlog') || normalizedData.includes('blog') || normalizedData.includes('post')) {
            category = 'Vlogs & Blogs';
        } else if (normalizedData.includes('charity') || normalizedData.includes('give back') || normalizedData.includes('help others')) {
            category = 'Charity & Giving';
        } else if (normalizedData.includes('health') || normalizedData.includes('diet') || normalizedData.includes('nutrition')) {
            category = 'Health & Nutrition';
        } else {
            category = 'General'; // Default category
        }

        console.log(`Added new product: ${userData} categorized as ${category}`);
    } else {
        console.log(`${userData} already exists in the dataset.`);
    }
}

module.exports = { extractProductName, addUniqueData };
