let userData = {
    bodyType: '',
    season: '',
    measurements: {},
    selectedOutfit: {
        top: '',
        bottom: '',
        dress: '',
        occasion: 'office'
    }
};
const bodyTypeData = {
    hourglass: {
        name: "Hourglass",
        description: "Well-balanced proportions with defined waist. Your bust and hips are nearly equal with a smaller waist."
    },
    pear: {
        name: "Pear",
        description: "Your hips are wider than your bust and shoulders. You carry weight in your lower body."
    },
    apple: {
        name: "Apple",
        description: "Your bust and waist are larger than your hips. You carry weight in your upper body and midsection."
    },
    rectangle: {
        name: "Rectangle",
        description: "Your bust, waist, and hips are relatively similar in measurement. You have a straight silhouette."
    },
    triangle: {
        name: "Inverted Triangle",
        description: "Your shoulders and bust are wider than your hips. You have a strong upper body."
    }
};
const allClothingOptions = {
    tops: [
        { name: "Fitted Blazer", image: "👔", bodyTypes: ["hourglass", "rectangle"] },
        { name: "Wrap Blouse", image: "👚", bodyTypes: ["hourglass", "apple"] },
        { name: "Belted Shirt", image: "👕", bodyTypes: ["hourglass", "rectangle"] },
        { name: "V-Neck Blouse", image: "👚", bodyTypes: ["apple", "triangle"] },
        { name: "Boat Neck Top", image: "👕", bodyTypes: ["pear"] },
        { name: "Peplum Blouse", image: "👚", bodyTypes: ["rectangle", "triangle"] },
        { name: "Off-Shoulder Top", image: "👕", bodyTypes: ["pear", "hourglass"] },
        { name: "Statement Blazer", image: "👔", bodyTypes: ["pear", "triangle"] },
        { name: "Empire Waist Top", image: "👚", bodyTypes: ["apple"] },
        { name: "Crop Top", image: "👕", bodyTypes: ["hourglass", "rectangle"] },
        { name: "Tunic Style Top", image: "👚", bodyTypes: ["apple", "rectangle"] },
        { name: "Fitted Tank", image: "👕", bodyTypes: ["hourglass", "triangle"] },
        { name: "Flowy Blouse", image: "👚", bodyTypes: ["apple"] },
        { name: "Wide Collar Shirt", image: "👕", bodyTypes: ["pear"] },
        { name: "Ruffled Top", image: "👚", bodyTypes: ["rectangle", "triangle"] }
    ],
    bottoms: [
        { name: "Pencil Skirt", image: "👗", bodyTypes: ["hourglass"] },
        { name: "High-Waisted Trousers", image: "👖", bodyTypes: ["hourglass", "rectangle"] },
        { name: "A-Line Skirt", image: "👗", bodyTypes: ["pear", "apple", "triangle"] },
        { name: "Straight-Leg Pants", image: "👖", bodyTypes: ["apple", "triangle"] },
        { name: "Wide-Leg Trousers", image: "👖", bodyTypes: ["pear", "apple"] },
        { name: "Boot-Cut Pants", image: "👖", bodyTypes: ["pear", "triangle"] },
        { name: "High-Waisted Jeans", image: "👖", bodyTypes: ["hourglass", "rectangle"] },
        { name: "Palazzo Pants", image: "👖", bodyTypes: ["pear", "apple"] },
        { name: "Fitted Pants", image: "👖", bodyTypes: ["hourglass", "rectangle"] },
        { name: "Flared Pants", image: "👖", bodyTypes: ["pear", "triangle"] },
        { name: "Mini Skirt", image: "👗", bodyTypes: ["hourglass", "rectangle"] },
        { name: "Midi Skirt", image: "👗", bodyTypes: ["all"] },
        { name: "Maxi Skirt", image: "👗", bodyTypes: ["hourglass", "pear"] },
        { name: "Pleated Skirt", image: "👗", bodyTypes: ["rectangle", "triangle"] },
        { name: "Wrap Skirt", image: "👗", bodyTypes: ["hourglass", "apple"] }
    ],
    dresses: [
        { name: "Wrap Dress", image: "👗", bodyTypes: ["hourglass", "apple"] },
        { name: "Sheath Dress", image: "👗", bodyTypes: ["hourglass", "rectangle"] },
        { name: "Fit-and-Flare Dress", image: "👗", bodyTypes: ["pear", "rectangle", "triangle"] },
        { name: "Bodycon Dress", image: "👗", bodyTypes: ["hourglass", "rectangle"] },
        { name: "A-Line Dress", image: "👗", bodyTypes: ["pear", "apple", "triangle"] },
        { name: "Empire Waist Dress", image: "👗", bodyTypes: ["apple", "pear"] },
        { name: "Shift Dress", image: "👗", bodyTypes: ["rectangle", "triangle"] },
        { name: "Maxi Dress", image: "👗", bodyTypes: ["all"] },
        { name: "Little Black Dress", image: "👗", bodyTypes: ["hourglass"] },
        { name: "Cocktail Dress", image: "👗", bodyTypes: ["hourglass", "pear"] },
        { name: "Sundress", image: "👗", bodyTypes: ["all"] },
        { name: "Tunic Dress", image: "👗", bodyTypes: ["apple", "rectangle"] },
        { name: "Belted Dress", image: "👗", bodyTypes: ["hourglass", "rectangle"] },
        { name: "Off-Shoulder Dress", image: "👗", bodyTypes: ["pear", "hourglass"] },
        { name: "T-Shirt Dress", image: "👗", bodyTypes: ["rectangle", "triangle"] }
    ]
};
const fashionDatabase = {
    hourglass: {
        summer: {
            office: ["Fitted blazers", "Pencil skirts", "Wrap dresses", "High-waisted trousers", "Belted shirts"],
            party: ["Bodycon dresses", "Crop tops with high-waisted skirts", "Off-shoulder tops", "Fitted midi dresses"],
            casual: ["Fitted t-shirts", "High-waisted jeans", "Wrap tops", "A-line sundresses", "Belted tops"],
            ethnic: ["Fitted blouses with sarees", "Anarkali suits", "Lehenga choli", "Fitted kurtas"]
        },
        winter: {
            office: ["Fitted coats", "Turtleneck sweaters", "Wool pencil skirts", "Tailored blazers", "Belted cardigans"],
            party: ["Velvet dresses", "Long-sleeve bodycon dresses", "Fitted sweater dresses", "Wrap party dresses"],
            casual: ["Fitted sweaters", "High-waisted jeans", "Wrap coats", "Knee-high boots", "Belted jackets"],
            ethnic: ["Silk sarees with fitted blouses", "Velvet anarkalis", "Wool shawls", "Fitted winter kurtas"]
        },
        monsoon: {
            office: ["Water-resistant blazers", "Quick-dry trousers", "Umbrella dresses", "Fitted rain jackets"],
            party: ["Synthetic blend dresses", "Water-resistant party wear", "Quick-dry fitted tops"],
            casual: ["Cotton-poly blend tops", "Water-resistant jeans", "Light jackets", "Quick-dry fitted tees"],
            ethnic: ["Synthetic sarees", "Cotton kurtas", "Water-resistant ethnic wear", "Quick-dry anarkalis"]
        }
    },
    pear: {
        summer: {
            office: ["Boat neck tops", "A-line skirts", "Wide-leg trousers", "Statement necklaces", "Bright blazers"],
            party: ["Off-shoulder dresses", "A-line party dresses", "Bright colored tops", "Empire waist dresses"],
            casual: ["Horizontal striped tops", "Bootcut jeans", "A-line sundresses", "Flowy tops"],
            ethnic: ["Heavy work blouses", "A-line lehengas", "Palazzo suits", "Embroidered tops"]
        },
        winter: {
            office: ["Structured blazers", "A-line coats", "Wide-leg wool trousers", "Statement scarves"],
            party: ["A-line party dresses", "Embellished tops", "Statement earrings", "Flowy party wear"],
            casual: ["Chunky sweaters", "Bootcut jeans", "A-line coats", "Layered looks"],
            ethnic: ["Heavy silk blouses", "A-line anarkalis", "Embroidered shawls", "Palazzo suits"]
        },
        monsoon: {
            office: ["Quick-dry A-line tops", "Water-resistant wide-leg pants", "Umbrella cuts", "Light blazers"],
            party: ["Synthetic A-line dresses", "Water-resistant accessories", "Quick-dry party tops"],
            casual: ["Cotton A-line tops", "Quick-dry bootcut jeans", "Light rain jackets"],
            ethnic: ["Cotton A-line kurtas", "Synthetic palazzo sets", "Water-resistant dupattas"]
        }
    },
    apple: {
        summer: {
            office: ["V-neck blouses", "Empire waist dresses", "Straight-leg trousers", "Long blazers"],
            party: ["Empire waist party dresses", "Tunics with leggings", "V-neck tops", "Flowy party wear"],
            casual: ["Flowy tops", "Straight-leg jeans", "Tunic dresses", "V-neck tees"],
            ethnic: ["Empire waist anarkalis", "Long kurtas", "Flowy saree draping", "Tunics"]
        },
        winter: {
            office: ["V-neck sweaters", "Empire waist coats", "Straight-leg wool trousers", "Long cardigans"],
            party: ["Empire waist party dresses", "Flowy sweater dresses", "V-neck party tops"],
            casual: ["Flowy sweaters", "Straight-leg jeans", "Long cardigans", "Tunic sweaters"],
            ethnic: ["Empire waist anarkalis", "Long wool kurtas", "Flowy shawls", "Winter tunics"]
        },
        monsoon: {
            office: ["Quick-dry V-neck tops", "Empire waist rain coats", "Straight-leg quick-dry pants"],
            party: ["Synthetic empire waist dresses", "Flowy rain jackets", "V-neck party tops"],
            casual: ["Cotton V-neck tops", "Straight-leg quick-dry pants", "Flowy rain wear"],
            ethnic: ["Cotton empire waist kurtas", "Flowy rain-resistant dupattas", "Long cotton tunics"]
        }
    },
    rectangle: {
        summer: {
            office: ["Peplum tops", "Belted dresses", "High-waisted skirts", "Structured blazers"],
            party: ["Bodycon dresses", "Crop tops with high-waisted bottoms", "Peplum party tops"],
            casual: ["Belted tops", "High-waisted jeans", "Fit and flare dresses", "Structured tees"],
            ethnic: ["Belted kurtas", "Peplum blouses with sarees", "High-waisted lehengas"]
        },
        winter: {
            office: ["Belted coats", "Peplum sweaters", "High-waisted wool trousers", "Structured blazers"],
            party: ["Belted party dresses", "Layered outfits", "Peplum party tops", "Structured party wear"],
            casual: ["Belted sweaters", "High-waisted jeans", "Layered looks", "Structured cardigans"],
            ethnic: ["Belted anarkalis", "Layered ethnic wear", "Structured ethnic jackets"]
        },
        monsoon: {
            office: ["Belted rain coats", "High-waisted water-resistant pants", "Structured rain jackets"],
            party: ["Belted synthetic dresses", "Layered rain-resistant outfits", "Structured party coats"],
            casual: ["Belted quick-dry tops", "High-waisted water-resistant jeans", "Layered rain wear"],
            ethnic: ["Belted cotton kurtas", "Layered rain-resistant ethnic wear", "Structured ethnic coats"]
        }
    },
    triangle: {
        summer: {
            office: ["Fitted tops", "A-line skirts", "Straight-leg trousers", "Soft blazers"],
            party: ["Fitted party dresses", "A-line party skirts", "Soft party tops", "Feminine cuts"],
            casual: ["Fitted t-shirts", "A-line sundresses", "Bootcut jeans", "Soft casual tops"],
            ethnic: ["Fitted blouses", "A-line lehengas", "Straight kurtas", "Soft ethnic tops"]
        },
        winter: {
            office: ["Fitted sweaters", "A-line wool skirts", "Straight-leg wool trousers", "Soft blazers"],
            party: ["Fitted party dresses", "A-line party wear", "Soft party sweaters", "Feminine cuts"],
            casual: ["Fitted sweaters", "A-line coats", "Bootcut jeans", "Soft cardigans"],
            ethnic: ["Fitted blouses", "A-line anarkalis", "Straight kurtas", "Soft ethnic wear"]
        },
        monsoon: {
            office: ["Fitted rain-resistant tops", "A-line water-resistant skirts", "Straight rain pants"],
            party: ["Fitted synthetic dresses", "A-line party wear", "Soft rain-resistant tops"],
            casual: ["Fitted quick-dry tops", "A-line rain jackets", "Soft rain wear"],
            ethnic: ["Fitted cotton blouses", "A-line rain-resistant ethnic wear", "Soft ethnic rain coats"]
        }
    }
};
function startQuiz() {
    showSection('quiz');
    updateProgressBar(25);
    document.getElementById('bust').value = '';
    document.getElementById('waist').value = '';
    document.getElementById('hips').value = '';
    document.getElementById('shoulders').value = '';
}

function calculateBodyType() {
    const bust = parseFloat(document.getElementById('bust').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hips = parseFloat(document.getElementById('hips').value);
    const shoulders = parseFloat(document.getElementById('shoulders').value);

    if (!bust || !waist || !hips || !shoulders || bust <= 0 || waist <= 0 || hips <= 0 || shoulders <= 0) {
        alert('Please enter valid measurements for all fields');
        return;
    }

    userData.measurements = { bust, waist, hips, shoulders };

    const bustHipDiff = Math.abs(bust - hips);
    const waistBustRatio = waist / bust;
    const waistHipRatio = waist / hips;
    const shoulderHipRatio = shoulders / hips;
    const shoulderBustRatio = shoulders / bust;

    let bodyType = '';
    if (bustHipDiff <= 1 && waistBustRatio <= 0.75 && waistHipRatio <= 0.75) {
        bodyType = 'hourglass';
    }
    else if (hips > bust + 1 && hips > shoulders + 1) {
        bodyType = 'pear';
    }
    else if ((bust > hips + 1 || waist >= bust * 0.8) && shoulders >= hips) {
        bodyType = 'apple';
    }
    else if (shoulders > hips + 2 || (bust > hips + 2 && shoulderBustRatio >= 0.95)) {
        bodyType = 'triangle';
    }
    else {
        bodyType = 'rectangle';
    }

    userData.bodyType = bodyType;
    displayBodyType(bodyType);
    updateProgressBar(50);
    showSection('bodyTypeResult');
}

function displayBodyType(bodyType) {
    const display = document.getElementById('bodyTypeDisplay');
    const description = document.getElementById('bodyTypeDescription');
    
    display.innerHTML = `<h3>${bodyTypeData[bodyType].name}</h3>`;
    description.textContent = bodyTypeData[bodyType].description;
}

function showSeasonSelection() {
    showSection('seasonSelection');
    updateProgressBar(75);
    document.querySelectorAll('.season-card').forEach(card => {
        card.classList.remove('selected');
    });
    const proceedBtn = document.getElementById('proceedToRecommendations');
    if (proceedBtn) {
        proceedBtn.classList.add('hidden');
    }
    userData.season = '';
}

function selectSeason(season) {
    document.querySelectorAll('.season-card').forEach(card => {
        card.classList.remove('selected');
    });
    

    if (event && event.target) {
        event.target.closest('.season-card').classList.add('selected');
    }
    userData.season = season;
    
    const proceedBtn = document.getElementById('proceedToRecommendations');
    if (proceedBtn) {
        proceedBtn.classList.remove('hidden');
    }
}

function showRecommendations() {
    if (!userData.season) {
        alert('Please select a season first');
        return;
    }

    const summary = document.getElementById('recommendationSummary');
    const list = document.getElementById('recommendationsList');
    
    if (summary) {
        summary.innerHTML = `
            <div class="body-shape-result">
                <h3>Your Style Profile</h3>
                <p><strong>Body Type:</strong> ${bodyTypeData[userData.bodyType].name}</p>
                <p><strong>Season:</strong> ${userData.season.charAt(0).toUpperCase() + userData.season.slice(1)}</p>
            </div>
        `;
    }

    const recommendations = fashionDatabase[userData.bodyType][userData.season];
    
    let recommendationHTML = '';
    Object.keys(recommendations).forEach(occasion => {
        recommendationHTML += `
            <div class="occasion-card">
                <h4>${occasion.charAt(0).toUpperCase() + occasion.slice(1)} Wear</h4>
                ${recommendations[occasion].map(item => `<div class="clothing-item">${item}</div>`).join('')}
            </div>
        `;
    });
    
    if (list) {
        list.innerHTML = recommendationHTML;
    }
    updateProgressBar(100);
    showSection('recommendations');
}

function showDashboard() {
    if (!userData.bodyType || !userData.season) {
        alert('Please complete the quiz first');
        showSection('welcome');
        return;
    }
    
    showSection('dashboard');
    const userBodyTypeEl = document.getElementById('userBodyType');
    if (userBodyTypeEl) {
        userBodyTypeEl.textContent = bodyTypeData[userData.bodyType].name;
    }
    
    userData.selectedOutfit = { top: '', bottom: '', dress: '' };
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.classList.add('hidden');
    }
    
    loadAllClothingOptions();
    
    updateSelectionSummary();
}

function loadAllClothingOptions() {
    const bodyType = userData.bodyType;
    

    const topsContainer = document.getElementById('tops-container');
    if (topsContainer) {
        topsContainer.innerHTML = allClothingOptions.tops.map(item => {
            const isRecommended = item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all');
            return `
                <div class="clothing-card ${isRecommended ? 'recommended' : ''}" onclick="selectClothing('top', '${item.name}')">
                    <div class="clothing-image">${item.image}</div>
                    <div class="clothing-name">${item.name}</div>
                    ${isRecommended ? '<div class="recommended-badge">✨ Perfect for you!</div>' : '<div class="not-recommended-badge">Not ideal</div>'}
                </div>
            `;
        }).join('');
    }
    
    
    const bottomsContainer = document.getElementById('bottoms-container');
    if (bottomsContainer) {
        bottomsContainer.innerHTML = allClothingOptions.bottoms.map(item => {
            const isRecommended = item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all');
            return `
                <div class="clothing-card ${isRecommended ? 'recommended' : ''}" onclick="selectClothing('bottom', '${item.name}')">
                    <div class="clothing-image">${item.image}</div>
                    <div class="clothing-name">${item.name}</div>
                    ${isRecommended ? '<div class="recommended-badge">✨ Perfect for you!</div>' : '<div class="not-recommended-badge">Not ideal</div>'}
                </div>
            `;
        }).join('');
    }
    
    const dressesContainer = document.getElementById('dresses-container');
    if (dressesContainer) {
        dressesContainer.innerHTML = allClothingOptions.dresses.map(item => {
            const isRecommended = item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all');
            return `
                <div class="clothing-card ${isRecommended ? 'recommended' : ''}" onclick="selectClothing('dress', '${item.name}')">
                    <div class="clothing-image">${item.image}</div>
                    <div class="clothing-name">${item.name}</div>
                    ${isRecommended ? '<div class="recommended-badge">✨ Perfect for you!</div>' : '<div class="not-recommended-badge">Not ideal</div>'}
                </div>
            `;
        }).join('');
    }
}

function selectClothing(category, item) {
    const categoryContainer = document.getElementById(`${category}s-container`);
    if (categoryContainer) {
        categoryContainer.querySelectorAll('.clothing-card').forEach(card => {
            card.classList.remove('selected');
        });
    }
    
    
    if (event && event.target) {
        event.target.closest('.clothing-card').classList.add('selected');
    }
    userData.selectedOutfit[category] = item;
    
    if (category === 'dress') {
        userData.selectedOutfit.top = '';
        userData.selectedOutfit.bottom = '';
        ['tops-container', 'bottoms-container'].forEach(containerId => {
            const container = document.getElementById(containerId);
            if (container) {
                container.querySelectorAll('.clothing-card').forEach(card => {
                    card.classList.remove('selected');
                });
            }
        });
    } else if (category === 'top' || category === 'bottom') {
        userData.selectedOutfit.dress = '';
        const dressContainer = document.getElementById('dresses-container');
        if (dressContainer) {
            dressContainer.querySelectorAll('.clothing-card').forEach(card => {
                card.classList.remove('selected');
            });
        }
    }
    
    updateSelectionSummary();
    
    const scoreDisplay = document.getElementById('scoreDisplay');
    if (scoreDisplay) {
        scoreDisplay.classList.add('hidden');
    }
}

function updateSelectionSummary() {
    const outfit = userData.selectedOutfit;
    
    const selectedTop = document.getElementById('selectedTop');
    const selectedBottom = document.getElementById('selectedBottom');
    const selectedDress = document.getElementById('selectedDress');
    
    if (selectedTop) {
        selectedTop.innerHTML = outfit.top ? 
            `<span class="selected-text">👕 ${outfit.top}</span>` : 
            '<span class="unselected-text">👕 No top selected</span>';
    }
        
    if (selectedBottom) {
        selectedBottom.innerHTML = outfit.bottom ? 
            `<span class="selected-text">👖 ${outfit.bottom}</span>` : 
            '<span class="unselected-text">👖 No bottom selected</span>';
    }
        
    if (selectedDress) {
        selectedDress.innerHTML = outfit.dress ? 
            `<span class="selected-text">👗 ${outfit.dress}</span>` : 
            '<span class="unselected-text">👗 No dress selected</span>';
    }
}

function calculateStyleScore() {
    const outfit = userData.selectedOutfit;
    
    
    if (!outfit.top && !outfit.bottom && !outfit.dress) {
        
        const summary = document.getElementById('selectionSummary');
        if (summary) {
            summary.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                summary.style.animation = '';
            }, 500);
        }
        
        alert('Please select at least one clothing item to get your style score! 👗✨');
        return;
    }

    let totalScore = 0;
    let feedback = [];
    let breakdown = [];
    
    const bodyType = userData.bodyType;
    
    let topMatches = false;
    let bottomMatches = false;
    let dressMatches = false;
    
    if (outfit.top) {
        const topItem = allClothingOptions.tops.find(item => item.name === outfit.top);
        topMatches = topItem && (topItem.bodyTypes.includes(bodyType) || topItem.bodyTypes.includes('all'));
        
        if (topMatches) {
            totalScore += 50;
            feedback.push(`✓ ${outfit.top} is perfect for your ${bodyTypeData[bodyType].name} body type!`);
            breakdown.push({ item: outfit.top, score: 50, type: 'top', match: true });
        } else {
            feedback.push(`△ ${outfit.top} is not ideal for your ${bodyTypeData[bodyType].name} body type`);
            breakdown.push({ item: outfit.top, score: 0, type: 'top', match: false });
        }
    }
    
    if (outfit.bottom) {
        const bottomItem = allClothingOptions.bottoms.find(item => item.name === outfit.bottom);
        bottomMatches = bottomItem && (bottomItem.bodyTypes.includes(bodyType) || bottomItem.bodyTypes.includes('all'));
        
        if (bottomMatches) {
            totalScore += 50;
            feedback.push(`✓ ${outfit.bottom} is perfect for your ${bodyTypeData[bodyType].name} body type!`);
            breakdown.push({ item: outfit.bottom, score: 50, type: 'bottom', match: true });
        } else {
            feedback.push(`△ ${outfit.bottom} is not ideal for your ${bodyTypeData[bodyType].name} body type`);
            breakdown.push({ item: outfit.bottom, score: 0, type: 'bottom', match: false });
        }
    }
    
    if (outfit.dress) {
        const dressItem = allClothingOptions.dresses.find(item => item.name === outfit.dress);
        dressMatches = dressItem && (dressItem.bodyTypes.includes(bodyType) || dressItem.bodyTypes.includes('all'));
        
        if (dressMatches) {
            totalScore = 100; 
            feedback = [`✓ ${outfit.dress} is absolutely perfect for your ${bodyTypeData[bodyType].name} body type!`];
            breakdown = [{ item: outfit.dress, score: 100, type: 'dress', match: true }];
        } else {
            totalScore = 0; 
            feedback = [`△ ${outfit.dress} is not ideal for your ${bodyTypeData[bodyType].name} body type`];
            breakdown = [{ item: outfit.dress, score: 0, type: 'dress', match: false }];
        }
    }
    
    if (topMatches && bottomMatches && !outfit.dress) {
        totalScore = 100;
    }
    
    displayScore(totalScore, feedback, breakdown);
}

function displayScore(totalScore, feedback, breakdown) {
    const scoreDisplay = document.getElementById('scoreDisplay');
    const scoreCircle = document.getElementById('scoreCircle');
    const scoreText = document.getElementById('scoreText');
    const scoreBreakdown = document.getElementById('scoreBreakdown');
    
    if (!scoreDisplay || !scoreCircle || !scoreText || !scoreBreakdown) {
        console.error('Score display elements not found');
        return;
    }
    
    let breakdownHTML = '<div class="breakdown-items">';
    breakdown.forEach(item => {
        const icon = item.type === 'top' ? '👕' : item.type === 'bottom' ? '👖' : '👗';
        const statusClass = item.match ? 'match' : 'no-match';
        breakdownHTML += `
            <div class="breakdown-item ${statusClass}">
                <span class="item-icon">${icon}</span>
                <span class="item-name">${item.item}</span>
                <span class="item-score">${item.score} pts</span>
            </div>
        `;
    });
    breakdownHTML += '</div>';
    scoreBreakdown.innerHTML = breakdownHTML;
    
    let currentScore = 0;
    const increment = totalScore / 50;
    const timer = setInterval(() => {
        currentScore += increment;
        if (currentScore >= totalScore) {
            currentScore = totalScore;
            clearInterval(timer);
        }
        scoreCircle.textContent = Math.round(currentScore);
    }, 30);
    
    if (totalScore === 100) {
        scoreCircle.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        scoreCircle.style.color = 'white';
        scoreText.innerHTML = `<strong>🎉 Perfect Match!</strong><br>Your outfit is absolutely ideal for your ${bodyTypeData[userData.bodyType].name} body type!`;
    } else if (totalScore >= 50) {
        scoreCircle.style.background = 'linear-gradient(45deg, #FF9800, #f57c00)';
        scoreCircle.style.color = 'white';
        scoreText.innerHTML = `<strong>👍 Great Choice!</strong><br>Your outfit works well for your ${bodyTypeData[userData.bodyType].name} body type!`;
    } else {
        scoreCircle.style.background = 'linear-gradient(45deg, #F44336, #d32f2f)';
        scoreCircle.style.color = 'white';
        scoreText.innerHTML = `<strong>💡 Try Something Different!</strong><br>Consider selecting items marked as "Perfect for you!" to boost your score.`;
    }
    
    if (totalScore < 100) {
        const suggestions = getSuggestions();
        if (suggestions.length > 0) {
            scoreText.innerHTML += `<br><br><strong>💝 Try these perfect matches:</strong><br>${suggestions.join('<br>')}`;
        }
    }
    
    scoreDisplay.classList.remove('hidden');
    scoreDisplay.scrollIntoView({ behavior: 'smooth' });
}

function getSuggestions() {
    const bodyType = userData.bodyType;
    const suggestions = [];
    
    const recommendedTops = allClothingOptions.tops.filter(item => 
        item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all')
    ).slice(0, 3);
    
    const recommendedBottoms = allClothingOptions.bottoms.filter(item => 
        item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all')
    ).slice(0, 3);
    
    const recommendedDresses = allClothingOptions.dresses.filter(item => 
        item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all')
    ).slice(0, 3);
    
    if (!userData.selectedOutfit.dress) {
        if (!userData.selectedOutfit.top || !allClothingOptions.tops.find(item => 
            item.name === userData.selectedOutfit.top && (item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all'))
        )) {
            suggestions.push(`👕 Tops: ${recommendedTops.map(item => item.name).join(', ')}`);
        }
        
        if (!userData.selectedOutfit.bottom || !allClothingOptions.bottoms.find(item => 
            item.name === userData.selectedOutfit.bottom && (item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all'))
        )) {
            suggestions.push(`👖 Bottoms: ${recommendedBottoms.map(item => item.name).join(', ')}`);
        }
    } else {
        if (!allClothingOptions.dresses.find(item => 
            item.name === userData.selectedOutfit.dress && (item.bodyTypes.includes(bodyType) || item.bodyTypes.includes('all'))
        )) {
            suggestions.push(`👗 Dresses: ${recommendedDresses.map(item => item.name).join(', ')}`);
        }
    }
    
    return suggestions;
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

function filterClothingOptions(category, filter) {
    const container = document.getElementById(`${category}-container`);
    if (!container) return;
    
    const cards = container.querySelectorAll('.clothing-card');
    
    cards.forEach(card => {
        const nameEl = card.querySelector('.clothing-name');
        if (!nameEl) return;
        
        const cardName = nameEl.textContent.toLowerCase();
        let shouldShow = false;
        
        if (filter === 'all') {
            shouldShow = true;
        } else if (filter === 'recommended') {
            shouldShow = card.classList.contains('recommended');
        } else if (filter === 'search') {
            const searchInput = document.getElementById(`${category}-search`);
            if (searchInput) {
                const searchTerm = searchInput.value.toLowerCase();
                shouldShow = cardName.includes(searchTerm);
            }
        }
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

function setupSearch() {
    ['tops', 'bottoms', 'dresses'].forEach(category => {
        const searchInput = document.getElementById(`${category}-search`);
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                filterClothingOptions(category, 'search');
            });
        }
    });
}

function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }
        
        .clothing-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
        }
        
        .clothing-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .clothing-card.selected {
            border: 2px solid #4CAF50;
            box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
        }
        
        .season-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
        }
        
        .season-card:hover {
            transform: translateY(-2px);
        }
        
        .season-card.selected {
            border: 2px solid #4CAF50;
            background: linear-gradient(135deg, #4CAF50, #45a049);
            color: white;
        }
        
        .recommended-badge {
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 2px 6px;
            border-radius: 12px;
            font-size: 0.8em;
            margin-top: 4px;
        }
        
        .not-recommended-badge {
            background: linear-gradient(45deg, #FF9800, #f57c00);
            color: white;
            padding: 2px 6px;
            border-radius: 12px;
            font-size: 0.8em;
            margin-top: 4px;
        }
        
        .breakdown-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px;
            border-radius: 8px;
            margin: 4px 0;
        }
        
        .breakdown-item.match {
            background: rgba(76, 175, 80, 0.1);
            border-left: 4px solid #4CAF50;
        }
        
        .breakdown-item.no-match {
            background: rgba(244, 67, 54, 0.1);
            border-left: 4px solid #F44336;
        }
        
        .selected-text {
            color: #4CAF50;
            font-weight: bold;
        }
        
        .unselected-text {
            color: #999;
            font-style: italic;
        }
        
        .hidden {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Style Maven initializing...');
    
    addAnimationStyles();
    
    showSection('welcome');
    
    setupSearch();
    
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
        quizSection.querySelectorAll('input').forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculateBodyType();
                }
            });
        });
    }
    
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add fun loading animations for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.animation = 'bounce 0.6s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.matches('[data-filter]')) {
            const category = e.target.getAttribute('data-category');
            const filter = e.target.getAttribute('data-filter');
            if (category && filter) {
                filterClothingOptions(category, filter);
                
                const filterContainer = e.target.parentElement;
                if (filterContainer) {
                    filterContainer.querySelectorAll('[data-filter]').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    e.target.classList.add('active');
                }
            }
        }
    });
    
    console.log('Style Maven initialized successfully! ✨');
});

function restartQuiz() {
    userData = {
        bodyType: '',
        season: '',
        measurements: {},
        selectedOutfit: {
            top: '',
            bottom: '',
            dress: '',
            occasion: 'office'
        }
    };
    updateProgressBar(0);
    showSection('welcome');
}

window.StyleMaven = {
    startQuiz,
    calculateBodyType,
    showSeasonSelection,
    selectSeason,
    showRecommendations,
    showDashboard,
    selectClothing,
    calculateStyleScore,
    restartQuiz,
    filterClothingOptions
};