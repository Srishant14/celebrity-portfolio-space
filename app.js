/* ==========================================================================
   AESTHETICA - PORTFOLIO WEB APPLICATION ENGINE
   Core Logic: 16 Images (Pranali, Sharvari, Aneet, Sreeleela), Search, 
   3D Tilt, Radar Chart, Quiz, Comments, Floating Likes, Canvas Downloads, 
   Gamification Engine, Lo-Fi beats Synth & Page transitions
   ========================================================================== */

// --- Original + Sreeleela 16 Images Database ---
const celebrityDatabase = [
    // Sharvari Wagh Portfolio
    {
        id: 5,
        name: "Sharvari Wagh",
        category: "sharvari",
        imageOld: "images/sharvari_1.jpg",
        imageHD: "new_images/Sharvari_1.png",
        image: "images/sharvari_1.jpg",
        caption: "High-voltage glamour, featuring avant-garde structures and neon accents.",
        tagline: "Fashion Queen",
        vibe: "Fashion",
        profession: "Actress & Model",
        stylePalette: "Cyber Purple & Radiant Pink",
        bio: "Sharvari Wagh is a sensation of new-age cinema, known for her magnetic energy and daring style statements. Bringing a fresh, electric energy to every photoshoot, she has quickly established herself as the ultimate muse for modern designers.",
        stats: { elegance: 86, boldness: 98, glamour: 96, trendiness: 96, versatility: 92 },
        likes: 1890
    },
    {
        id: 6,
        name: "Sharvari Wagh",
        category: "sharvari",
        imageOld: "images/sharvari_2.jpg",
        imageHD: "new_images/Sharvari_2.png",
        image: "images/sharvari_2.jpg",
        caption: "Stunning red-carpet look showcasing geometric tailoring and high confidence.",
        tagline: "Stylish Pose",
        vibe: "Glamour",
        profession: "Actress & Model",
        stylePalette: "Glossy Black & Metallic Cyan",
        bio: "A true showstopper, Sharvari commands the red carpet with structural fashion cuts and a fierce camera gaze. This highlight look showcases her capability to own high-glamour aesthetics with complete elegance and posture.",
        stats: { elegance: 92, boldness: 95, glamour: 98, trendiness: 92, versatility: 88 },
        likes: 1720
    },
    {
        id: 7,
        name: "Sharvari Wagh",
        category: "sharvari",
        imageOld: "images/sharvari_3.png",
        imageHD: "new_images/Sharvari_3.png",
        image: "images/sharvari_3.png",
        caption: "Warm golden-hour natural capture, radiating effortless style and charisma.",
        tagline: "Golden Hour Charisma",
        vibe: "Modern",
        profession: "Actress & Model",
        stylePalette: "Sunlit Amber & Honey Gold",
        bio: "Even in minimal makeup and natural lighting, Sharvari's star quality shines bright. This candid golden-hour capture highlights her effortless side, making it a favorite look among college students searching for daily aesthetic inspiration.",
        stats: { elegance: 90, boldness: 80, glamour: 88, trendiness: 90, versatility: 95 },
        likes: 2150
    },
    {
        id: 8,
        name: "Sharvari Wagh",
        category: "sharvari",
        imageOld: "images/sharvari_4.jpg",
        imageHD: "new_images/Sharvari_4.png",
        image: "images/sharvari_4.jpg",
        caption: "Exquisite couture dress blending intricate detailing with bold style choices.",
        tagline: "Glamour Couture",
        vibe: "Elegance",
        profession: "Actress & Model",
        stylePalette: "Midnight Emerald & Silver Thread",
        bio: "This high-fashion couture look captures Sharvari in a masterpiece of modern drape. Mixing complex fabric structures with custom jewelry pieces, it stands as an artistic expression of haute couture that is highly praised by style critics.",
        stats: { elegance: 94, boldness: 94, glamour: 95, trendiness: 90, versatility: 85 },
        likes: 1540
    },

    // Sreeleela Portfolio (Newly Added)
    {
        id: 13,
        name: "Sreeleela",
        category: "sreeleela",
        imageOld: "images/sreeleela_1.jpg",
        imageHD: "new_images/Sreelela_1.png",
        image: "images/sreeleela_1.jpg",
        caption: "Vibrant and lively posture, capturing her expressive youth appeal.",
        tagline: "Vibrant Charm",
        vibe: "Fashion",
        profession: "Actress & Dancer",
        stylePalette: "Sunset Yellow & Aqua Blue",
        bio: "Sreeleela is a powerhouse of energy and dance in South Indian cinema, loved by youth for her lively charm. This look features her in a bright designer dress, showing off a fresh, modern aesthetic that is perfect for college fests and dance events.",
        stats: { elegance: 85, boldness: 94, glamour: 92, trendiness: 96, versatility: 90 },
        likes: 2110
    },
    {
        id: 14,
        name: "Sreeleela",
        category: "sreeleela",
        imageOld: "images/sreeleela_2.jpg",
        imageHD: "new_images/Sreelela_2.png",
        image: "images/sreeleela_2.jpg",
        caption: "Traditional custom-designed lehenga, showing off rich textures and borders.",
        tagline: "Traditional Sparkle",
        vibe: "Traditional",
        profession: "Actress & Dancer",
        stylePalette: "Fuschia Pink & Gold Glimmer",
        bio: "Dressed in a sparkling traditional lehenga, Sreeleela carries traditional prints with a playful twist. The bright colors and intricate threadwork make this a standout look for cultural celebrations.",
        stats: { elegance: 92, boldness: 88, glamour: 95, trendiness: 89, versatility: 93 },
        likes: 1980
    },
    {
        id: 15,
        name: "Sreeleela",
        category: "sreeleela",
        imageOld: "images/sreeleela_3.jpg",
        imageHD: "new_images/Sreelela_3.png",
        image: "images/sreeleela_3.jpg",
        caption: "Elegant evening lookbook styling, emphasizing glamorous details.",
        tagline: "Glamorous Evening",
        vibe: "Glamour",
        profession: "Actress & Dancer",
        stylePalette: "Velvet Purple & Silver Accents",
        bio: "This high-fashion portfolio highlights Sreeleela's red carpet presence. With sleek hair and designer jewelry, she presents a sophisticated evening look that dominates magazine covers.",
        stats: { elegance: 94, boldness: 90, glamour: 97, trendiness: 92, versatility: 88 },
        likes: 2450
    },
    {
        id: 16,
        name: "Sreeleela",
        category: "sreeleela",
        imageOld: "images/sreeleela_4.jpg",
        imageHD: "new_images/Sreelela_4.png",
        image: "images/sreeleela_4.jpg",
        caption: "Trendy denim streetwear layer, setting contemporary styling goals.",
        tagline: "Denim Streetwear Icon",
        vibe: "Modern",
        profession: "Actress & Dancer",
        stylePalette: "Classic Denim & Muted White",
        bio: "Sreeleela shows her modern streetwear side in this structured denim jacket and styling layout. Clean lines and casual layering make this an excellent inspiration for day-to-day college style.",
        stats: { elegance: 80, boldness: 95, glamour: 87, trendiness: 97, versatility: 94 },
        likes: 1850
    },

    // Pranali Portfolio
    {
        id: 1,
        name: "Pranali",
        category: "pranali",
        imageOld: "images/pranali_1.jpg",
        imageHD: "new_images/Pranali_1.png",
        image: "images/pranali_1.jpg",
        caption: "A vision in soft ivory lace, blending vintage charm with modern allure.",
        tagline: "Icon of Elegance",
        vibe: "Elegance",
        profession: "Actress & Model",
        stylePalette: "Soft Ivory & Gold Sparkles",
        bio: "Pranali is a vision of grace and modern sophistication. Captivating audiences with her effortless charm and multi-faceted screen presence, she represents the perfect balance of classic beauty and trend-setting fashion aesthetics. This exclusive collection celebrates her cinematic journey and timeless allure.",
        stats: { elegance: 95, boldness: 65, glamour: 88, trendiness: 78, versatility: 82 },
        likes: 1240
    },
    {
        id: 2,
        name: "Pranali",
        category: "pranali",
        imageOld: "images/pranali_2.jpg",
        imageHD: "new_images/Pranali_2.png",
        image: "images/pranali_2.jpg",
        caption: "Radiant contemporary photoshoot framing a bold and stylish stance.",
        tagline: "Beautiful Moments",
        vibe: "Fashion",
        profession: "Actress & Model",
        stylePalette: "Midnight Crimson & Rose Glow",
        bio: "Posing with a bold and stylish stance, Pranali pairs contemporary designs with expressive styling. Known for her photogenic features, she continually experiments with styling boundaries, inspiring college students with her runway lookbooks.",
        stats: { elegance: 88, boldness: 92, glamour: 90, trendiness: 88, versatility: 85 },
        likes: 980
    },
    {
        id: 3,
        name: "Pranali",
        category: "pranali",
        imageOld: "images/pranali_3.jpg",
        imageHD: "new_images/Pranali_3.png",
        image: "images/pranali_3.jpg",
        caption: "Traditional majesty, draped in authentic custom-designed heritage prints.",
        tagline: "Traditional Majesty",
        vibe: "Traditional",
        profession: "Actress & Model",
        stylePalette: "Royal Maroon & Ochre Gold",
        bio: "Celebrating heritage craftsmanship, this look features Pranali in rich traditional weaves. Draping classic Indian silhouettes, she proves that heritage style remains the ultimate canvas for timeless elegance.",
        stats: { elegance: 98, boldness: 55, glamour: 85, trendiness: 70, versatility: 90 },
        likes: 1450
    },
    {
        id: 4,
        name: "Pranali",
        category: "pranali",
        imageOld: "images/pranali_4.jpg",
        imageHD: "new_images/Pranali_4.png",
        image: "images/pranali_4.jpg",
        caption: "Sleek metropolitan chic, bringing street-smart structures to high-end apparel.",
        tagline: "Metropolitan Chic",
        vibe: "Modern",
        profession: "Actress & Model",
        stylePalette: "Slate Black & Platinum Grey",
        bio: "Embracing minimalist structures, Pranali steps out in sharp lines and sleek urban layers. This metropolitan look highlights her versatility, showing she can transition effortlessly from traditional elegance to sharp street-luxe style.",
        stats: { elegance: 85, boldness: 85, glamour: 82, trendiness: 94, versatility: 88 },
        likes: 1120
    },

    // Aneet Padda Portfolio
    {
        id: 9,
        name: "Aneet Padda",
        category: "aneet",
        imageOld: "images/aneet_1.jpg",
        imageHD: "new_images/aneet_1.png",
        image: "images/aneet_1.jpg",
        caption: "Timeless classic silhouette, echoing the romantic aesthetics of cinema history.",
        tagline: "Grace & Beauty",
        vibe: "Classic",
        profession: "Debut Actress & Model",
        stylePalette: "Vintage Rose & Soft Charcoal",
        bio: "Aneet Padda is a breath of fresh air in the cinema space, combining soft nostalgic vibes with clean contemporary trends. Her lookbook celebrates simplicity and structure, presenting how understated styling can create the deepest impression.",
        stats: { elegance: 96, boldness: 60, glamour: 82, trendiness: 75, versatility: 88 },
        likes: 850
    },
    {
        id: 10,
        name: "Aneet Padda",
        category: "aneet",
        imageOld: "images/aneet_2.jpg",
        imageHD: "new_images/aneet_2.png",
        image: "images/aneet_2.jpg",
        caption: "Modern minimalist fashion set, showing clean textures and pastel structure.",
        tagline: "Modern Look",
        vibe: "Modern",
        profession: "Debut Actress & Model",
        stylePalette: "Sage Green & Ivory Linen",
        bio: "Focusing on neat lines and breathable fabrics, Aneet embodies the minimalist 'quiet luxury' look. Perfect for college wardrobes, this look relies on tailoring and structural balance rather than loud ornaments.",
        stats: { elegance: 88, boldness: 78, glamour: 80, trendiness: 92, versatility: 90 },
        likes: 920
    },
    {
        id: 11,
        name: "Aneet Padda",
        category: "aneet",
        imageOld: "images/aneet_3.jpg",
        imageHD: "new_images/aneet_3.png",
        image: "images/aneet_3.jpg",
        caption: "Romantic sunset mood portrait, expressing soft artistic film aesthetics.",
        tagline: "Memories",
        vibe: "Classic",
        profession: "Debut Actress & Model",
        stylePalette: "Warm Sepia & Sunset Orange",
        bio: "Captured in vintage sepia tones, Aneet looks like a page from an aesthetic film diary. This soft retro feel showcases her capabilities to evoke strong emotional vibes and artistic atmosphere in front of the lens.",
        stats: { elegance: 92, boldness: 65, glamour: 84, trendiness: 80, versatility: 86 },
        likes: 1100
    },
    {
        id: 12,
        name: "Aneet Padda",
        category: "aneet",
        imageOld: "images/aneet_4.jpg",
        imageHD: "new_images/aneet_4.png",
        image: "images/aneet_4.jpg",
        caption: "Premium dark outfit pairing elegant textures with high-contrast studio light.",
        tagline: "Classic Style",
        vibe: "Elegance",
        profession: "Debut Actress & Model",
        stylePalette: "Obsidian Black & Silver Sheen",
        bio: "Dressed in high-quality dark velvet and silk borders, Aneet demonstrates the beauty of monochromatic styling. The high-contrast studio lights accentuate the textures of her clothing, framing a portrait of clean focus.",
        stats: { elegance: 95, boldness: 72, glamour: 92, trendiness: 82, versatility: 84 },
        likes: 1040
    }
];

// --- Gamified Daily Horoscope Tarot Data ---
const tarotHoroscopes = [
    { name: "The Empress", quote: "\"Simplicity is the keynote of all true elegance.\"", tip: "Keep accessories minimal and let soft pastel outlines frame your styling coordinate today." },
    { name: "The Alchemist", quote: "\"Style is a way to say who you are without speaking.\"", tip: "Try experimenting with high-contrast blazers or dark silk collars for a powerful statement." },
    { name: "The Sunlit Star", quote: "\"Own your light, carry your charm, and never dim your shine.\"", tip: "Channel a radiant vibe with amber shades, retro sunglasses, and natural daylight makeup." },
    { name: "The Classic Muse", quote: "\"Fashion fades, only style remains the same.\"", tip: "Opt for structural shapes, retro textures, or monochrome styling coordinates today." },
    { name: "The Maverick", quote: "\"Why fit in when you were born to stand out?\"", tip: "Go bold! Mix vibrant colors, asymmetric shapes, or experimental jackets for a futuristic look." }
];

// --- Application User Profiles database ---
const userProfiles = {
    tarush: { name: "Tarush", level: 5, asp: 750 },
    srishant: { name: "Srishant", level: 4, asp: 500 },
    pranav: { name: "Pranav", level: 3, asp: 300 },
    guest: { name: "Guest", level: 1, asp: 0 }
};

const startupIsPremium = JSON.parse(localStorage.getItem("aesthetica_premium")) || false;
const startupUser = localStorage.getItem("aesthetica_premium_user") || "Guest";
const startupUserKey = startupUser.toLowerCase();
const startupProfile = userProfiles[startupUserKey] || userProfiles.guest;

const startupASP = parseInt(localStorage.getItem(`aesthetica_asp_${startupUserKey}`)) || startupProfile.asp;
const startupLevel = parseInt(localStorage.getItem(`aesthetica_level_${startupUserKey}`)) || startupProfile.level;
const startupQuests = JSON.parse(localStorage.getItem(`aesthetica_quests_${startupUserKey}`)) || { tarot: false, comment: false, battleCount: 0, fav: false };

// --- Application State Manager ---
const state = {
    searchQuery: "",
    activeCategory: "all",
    activeTag: null,
    favoritesOnly: false,
    favorites: JSON.parse(localStorage.getItem("aesthetica_favs")) || [],
    comments: JSON.parse(localStorage.getItem("aesthetica_comments")) || {},
    soundEnabled: JSON.parse(localStorage.getItem("aesthetica_sound")) !== false,
    battleStats: JSON.parse(localStorage.getItem("aesthetica_battles")) || { total: 0 },
    currentTheme: localStorage.getItem("aesthetica_theme") || "sapphire",
    modalActiveId: null,
    
    // Premium Member states
    isPremium: startupIsPremium,
    currentUser: startupUser,
    lofiWasPlaying: false, // track state between song pause/resume
    
    // Gamification & Quest states
    styleASP: startupASP,
    styleLevel: startupLevel,
    questDate: localStorage.getItem("aesthetica_quest_date") || "",
    questStatus: startupQuests,
    tarotIndex: parseInt(localStorage.getItem("aesthetica_tarot_idx")) || 0,
    tarotFlipped: JSON.parse(localStorage.getItem("aesthetica_tarot_flipped")) || false,
    
    // Lo-Fi beats synthesis
    lofiPlaying: false
};

// --- Web Audio Synthesizer (Retro Sounds & Ambient Lo-Fi Beats) ---
let audioCtx = null;
let lofiIntervalId = null;
let currentSynthNodes = [];

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playSynthSound(type) {
    if (!state.soundEnabled) return;
    try {
        initAudio();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        const now = audioCtx.currentTime;
        
        if (type === 'click') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(100, now + 0.15);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            osc.start(now);
            osc.stop(now + 0.15);
        } else if (type === 'success') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.setValueAtTime(783.99, now + 0.08);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.setValueAtTime(0.15, now + 0.08);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
            osc.start(now);
            osc.stop(now + 0.25);
        } else if (type === 'heart') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(293.66, now);
            osc.frequency.exponentialRampToValueAtTime(587.33, now + 0.12);
            gain.gain.setValueAtTime(0.25, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
            osc.start(now);
            osc.stop(now + 0.12);
        } else if (type === 'levelUp') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(261.63, now);
            osc.frequency.setValueAtTime(329.63, now + 0.1);
            osc.frequency.setValueAtTime(392.00, now + 0.2);
            osc.frequency.setValueAtTime(523.25, now + 0.3);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.setValueAtTime(0.2, now + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
            osc.start(now);
            osc.stop(now + 0.6);
        }
    } catch (e) {
        console.warn("Audio Context blocked", e);
    }
}

// Lo-Fi Beat Synthesizer Loop (Generates cozy minor chord pad sweeps)
function startLoFiBeats() {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    state.lofiPlaying = true;
    
    const chords = [
        [220.00, 261.63, 329.63, 392.00], // Am7
        [293.66, 349.23, 440.00, 523.25], // Dm7
        [196.00, 246.94, 293.66, 349.23], // G7
        [261.63, 329.63, 392.00, 493.88]  // Cmaj7
    ];
    
    let chordIndex = 0;
    
    function playNextChord() {
        if (!state.lofiPlaying) return;
        
        const now = audioCtx.currentTime;
        const freqs = chords[chordIndex];
        chordIndex = (chordIndex + 1) % chords.length;
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, now);
        filter.connect(audioCtx.destination);
        
        const nodes = [];
        
        freqs.forEach(freq => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now);
            
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.04, now + 1.5);
            gain.gain.setValueAtTime(0.04, now + 3.0);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 4.8);
            
            osc.connect(gain);
            gain.connect(filter);
            
            osc.start(now);
            osc.stop(now + 5.0);
            
            nodes.push(osc);
        });
        
        const vinylNoise = audioCtx.createOscillator();
        const noiseGain = audioCtx.createGain();
        vinylNoise.type = 'sawtooth';
        vinylNoise.frequency.setValueAtTime(5, now);
        noiseGain.gain.setValueAtTime(0.0015, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);
        vinylNoise.connect(noiseGain);
        noiseGain.connect(filter);
        vinylNoise.start(now);
        vinylNoise.stop(now + 5.0);
        
        nodes.push(vinylNoise);
        currentSynthNodes = nodes;
    }
    
    playNextChord();
    lofiIntervalId = setInterval(playNextChord, 5000);
}

function stopLoFiBeats() {
    state.lofiPlaying = false;
    if (lofiIntervalId) {
        clearInterval(lofiIntervalId);
        lofiIntervalId = null;
    }
    currentSynthNodes.forEach(node => {
        try { node.stop(); } catch(e){}
    });
    currentSynthNodes = [];
}

// --- Theme Switcher Logic ---
function applyTheme(themeName) {
    document.documentElement.setAttribute("data-theme", themeName);
    state.currentTheme = themeName;
    localStorage.setItem("aesthetica_theme", themeName);
    
    document.querySelectorAll(".theme-option").forEach(opt => {
        if (opt.getAttribute("data-theme") === themeName) {
            opt.classList.add("selected");
        } else {
            opt.classList.remove("selected");
        }
    });
}

// --- Floating Likes Heart Effect (+1) ---
function triggerFloatingHeart(e) {
    if (!e) return;
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart floating-like";
    
    let x, y;
    if (e.clientX && e.clientY) {
        x = e.clientX;
        y = e.clientY;
    } else {
        const rect = e.target.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top + rect.height / 2;
    }
    
    heart.style.left = `${x - 12}px`;
    heart.style.top = `${y - 12}px`;
    
    const rotate = (Math.random() - 0.5) * 30;
    heart.style.transform = `rotate(${rotate}deg)`;
    
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 850);
}

// --- Gamification Quests & Leveling Engine ---
function checkQuestDate() {
    const todayStr = new Date().toDateString();
    if (state.questDate !== todayStr) {
        state.questDate = todayStr;
        state.questStatus = { tarot: false, comment: false, battleCount: 0, fav: false };
        state.tarotFlipped = false;
        state.tarotIndex = Math.floor(Math.random() * tarotHoroscopes.length);
        
        localStorage.setItem("aesthetica_quest_date", todayStr);
        localStorage.setItem("aesthetica_quests", JSON.stringify(state.questStatus));
        localStorage.setItem("aesthetica_tarot_flipped", JSON.stringify(false));
        localStorage.setItem("aesthetica_tarot_idx", state.tarotIndex);
    }
}

function completeQuest(questKey) {
    let earnedASP = 0;
    if (questKey === 'tarot' && !state.questStatus.tarot) {
        state.questStatus.tarot = true;
        earnedASP = 20;
    } else if (questKey === 'comment' && !state.questStatus.comment) {
        state.questStatus.comment = true;
        earnedASP = 30;
    } else if (questKey === 'fav' && !state.questStatus.fav) {
        state.questStatus.fav = true;
        earnedASP = 10;
    } else if (questKey === 'battle') {
        if (state.questStatus.battleCount < 3) {
            state.questStatus.battleCount++;
            if (state.questStatus.battleCount === 3) {
                earnedASP = 40;
            }
        }
    }
    
    if (earnedASP > 0) {
        addStyleASP(earnedASP);
    }
    
    localStorage.setItem(`aesthetica_quests_${state.currentUser.toLowerCase()}`, JSON.stringify(state.questStatus));
    updateQuestUI();
}

function addStyleASP(points) {
    state.styleASP += points;
    
    const thresholds = [100, 250, 450, 700, 99999];
    let newLvl = 1;
    for (let i = 0; i < thresholds.length; i++) {
        if (state.styleASP >= thresholds[i]) {
            newLvl = i + 2;
        } else {
            break;
        }
    }
    
    if (newLvl > state.styleLevel) {
        state.styleLevel = newLvl;
        localStorage.setItem(`aesthetica_level_${state.currentUser.toLowerCase()}`, state.styleLevel);
        setTimeout(() => {
            playSynthSound('levelUp');
            alert(`🎉 STYLE LEVEL UP! You are now a Level ${state.styleLevel} Fashion Icon!`);
        }, 300);
    }
    
    localStorage.setItem(`aesthetica_asp_${state.currentUser.toLowerCase()}`, state.styleASP);
    updateQuestUI();
}

function updateQuestUI() {
    const levelNames = ["Fashion Novice", "Style Apprentice", "Chic Trendsetter", "Runway Icon", "Haute Couture Legend"];
    const thresholds = [0, 100, 250, 450, 700];
    
    const curName = levelNames[Math.min(state.styleLevel - 1, levelNames.length - 1)];
    document.getElementById("levelName").textContent = curName;
    
    let base = thresholds[state.styleLevel - 1];
    let target = thresholds[state.styleLevel] || 1000;
    let range = target - base;
    let currentXP = state.styleASP - base;
    let pct = (currentXP / range) * 100;
    
    document.getElementById("levelXP").textContent = `Level ${state.styleLevel} • ${state.styleASP} / ${target} ASP`;
    document.getElementById("levelProgressFill").style.width = `${Math.min(Math.max(pct, 0), 100)}%`;
    
    const updateQuestItem = (id, isCompleted) => {
        const item = document.getElementById(id);
        const icon = item.querySelector(".quest-box");
        if (isCompleted) {
            item.classList.add("completed");
            icon.className = "fa-solid fa-square-check quest-box";
        } else {
            item.classList.remove("completed");
            icon.className = "fa-regular fa-square quest-box";
        }
    };
    
    updateQuestItem("quest-tarot", state.questStatus.tarot);
    updateQuestItem("quest-comment", state.questStatus.comment);
    updateQuestItem("quest-fav", state.questStatus.fav);
    
    document.getElementById("questBattleProgress").textContent = `${state.questStatus.battleCount}/3`;
    updateQuestItem("quest-battle", state.questStatus.battleCount >= 3);
}

// --- Vibe Tarot Draw Card setup ---
function setupTarotCard() {
    const card3D = document.getElementById("tarotCard");
    const horror = tarotHoroscopes[state.tarotIndex];
    
    document.getElementById("tarotName").textContent = horror.name;
    document.getElementById("tarotQuote").textContent = horror.quote;
    document.getElementById("tarotTip").textContent = horror.tip;
    
    if (state.tarotFlipped) {
        card3D.classList.add("flipped");
    }
    
    card3D.onclick = () => {
        if (!state.tarotFlipped) {
            state.tarotFlipped = true;
            localStorage.setItem("aesthetica_tarot_flipped", JSON.stringify(true));
            card3D.classList.add("flipped");
            completeQuest("tarot");
        } else {
            card3D.classList.toggle("flipped");
            playSynthSound("click");
        }
    };
}

// --- Dynamic Category & Vibe Tags Generator ---
function initDynamicFilters() {
    const categoryChips = document.getElementById("categoryChips");
    categoryChips.innerHTML = "";
    
    const allChip = document.createElement("button");
    allChip.className = `chip ${state.activeCategory === 'all' ? 'active' : ''}`;
    allChip.setAttribute("data-filter", "all");
    allChip.textContent = "All Profiles";
    allChip.addEventListener("click", () => handleCategoryFilter("all", allChip));
    categoryChips.appendChild(allChip);
    
    const uniqueMap = {};
    celebrityDatabase.forEach(item => {
        uniqueMap[item.category] = item.name;
    });
    
    for (const key in uniqueMap) {
        const chip = document.createElement("button");
        chip.className = `chip ${state.activeCategory === key ? 'active' : ''}`;
        chip.setAttribute("data-filter", key);
        chip.textContent = uniqueMap[key];
        chip.addEventListener("click", () => handleCategoryFilter(key, chip));
        categoryChips.appendChild(chip);
    }
    
    const vibeTags = document.getElementById("vibeTags");
    vibeTags.innerHTML = "";
    
    const uniqueTags = [...new Set(celebrityDatabase.map(x => x.vibe))];
    uniqueTags.forEach(tagName => {
        const tag = document.createElement("span");
        tag.className = `tag-chip ${state.activeTag === tagName ? 'active' : ''}`;
        tag.setAttribute("data-tag", tagName);
        tag.textContent = tagName;
        tag.addEventListener("click", () => handleTagFilter(tagName, tag));
        vibeTags.appendChild(tag);
    });
}

function handleCategoryFilter(categoryKey, chipElement) {
    playSynthSound('click');
    document.querySelectorAll("#categoryChips .chip").forEach(c => c.classList.remove("active"));
    chipElement.classList.add("active");
    state.activeCategory = categoryKey;
    renderGallery();
}

function handleTagFilter(tagName, tagElement) {
    playSynthSound('click');
    if (tagElement.classList.contains("active")) {
        tagElement.classList.remove("active");
        state.activeTag = null;
    } else {
        document.querySelectorAll("#vibeTags .tag-chip").forEach(t => t.classList.remove("active"));
        tagElement.classList.add("active");
        state.activeTag = tagName;
    }
    renderGallery();
}

// --- Card Rendering Engine (with 3D reveals) ---
function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    const emptyState = document.getElementById("emptyState");
    grid.innerHTML = "";
    
    const filtered = celebrityDatabase.filter(item => {
        if (state.activeCategory !== "all" && item.category !== state.activeCategory) return false;
        if (state.activeTag && item.vibe !== state.activeTag) return false;
        if (state.favoritesOnly && !state.favorites.includes(item.id)) return false;
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            const matchesName = item.name.toLowerCase().includes(query);
            const matchesVibe = item.vibe.toLowerCase().includes(query);
            const matchesCaption = item.caption.toLowerCase().includes(query);
            const matchesTagline = item.tagline.toLowerCase().includes(query);
            if (!matchesName && !matchesVibe && !matchesCaption && !matchesTagline) return false;
        }
        return true;
    });

    const statusText = document.getElementById("galleryStatus");
    if (state.favoritesOnly) {
        statusText.textContent = `Showing ${filtered.length} Bookmarked Look${filtered.length === 1 ? '' : 's'}`;
    } else {
        statusText.textContent = `Showing ${filtered.length} of ${celebrityDatabase.length} looks`;
    }

    if (filtered.length === 0) {
        emptyState.style.display = "flex";
        grid.style.display = "none";
        return;
    } else {
        emptyState.style.display = "none";
        grid.style.display = "grid";
    }

    filtered.forEach(item => {
        const isLiked = state.favorites.includes(item.id);
        const cardWrapper = document.createElement("div");
        cardWrapper.className = `card-wrapper reveal-on-scroll ${state.isPremium ? 'premium-card-active' : ''}`;
        
        cardWrapper.innerHTML = `
            <div class="gallery-card" data-id="${item.id}">
                <div class="card-shine"></div>
                <div class="card-top-controls">
                    <span class="card-badge">⚡ Interactive</span>
                    <button class="card-heart-btn ${isLiked ? 'liked' : ''}" data-id="${item.id}" title="Bookmark look">
                        <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="card-img-wrapper">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                </div>
                <div class="card-overlay">
                    <span class="card-subtitle">${item.tagline}</span>
                    <h3 class="card-title">${item.name}</h3>
                    <p class="card-caption">${item.caption}</p>
                </div>
            </div>
        `;
        
        const card = cardWrapper.querySelector(".gallery-card");
        const shine = card.querySelector(".card-shine");
        
        card.addEventListener("mousemove", (e) => {
            if (!state.isPremium) return; // Only paid users get 3D hover/tilt effects!
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return; // Disable on mobile to prevent stuck tilts
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Stronger 3D rotations on z-axis
            const tiltX = ((y - centerY) / centerY) * -14;
            const tiltY = ((x - centerX) / centerX) * 14;
            card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-10px) scale(1.02)`;
            
            if (shine) {
                const px = (x / rect.width) * 100;
                const py = (y / rect.height) * 100;
                // Spotlights: Gold glow for premium members, white glow for guests
                const colorStr = state.isPremium ? 'rgba(255, 215, 0, 0.22)' : 'rgba(255, 255, 255, 0.16)';
                shine.style.background = `radial-gradient(circle at ${px}% ${py}%, ${colorStr} 0%, rgba(255,255,255,0) 80%)`;
            }
        });
        
        card.addEventListener("mouseleave", () => {
            if (!state.isPremium) return;
            if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
            card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0) scale(1)`;
            if (shine) {
                shine.style.background = "none";
            }
        });

        card.addEventListener("click", (e) => {
            if (e.target.closest(".card-heart-btn")) return;
            openDetailModal(item.id);
        });

        const heartBtn = cardWrapper.querySelector(".card-heart-btn");
        heartBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleFavorite(item.id);
            triggerFloatingHeart(e);
        });
        
        grid.appendChild(cardWrapper);
    });
    
    bindScrollReveals();
}

function bindScrollReveals() {
    const cards = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
}

// --- Toggle Favorite (Bookmark) Look ---
function toggleFavorite(id) {
    const index = state.favorites.indexOf(id);
    if (index > -1) {
        state.favorites.splice(index, 1);
        playSynthSound('click');
    } else {
        state.favorites.push(id);
        playSynthSound('heart');
        completeQuest("fav");
    }
    localStorage.setItem("aesthetica_favs", JSON.stringify(state.favorites));
    renderGallery();
    
    if (state.modalActiveId === id) {
        const item = celebrityDatabase.find(x => x.id === id);
        const modalHeartBtn = document.getElementById("modalHeartBtn");
        const liked = state.favorites.includes(id);
        modalHeartBtn.className = `modal-heart-btn ${liked ? 'liked' : ''}`;
        modalHeartBtn.innerHTML = `<i class="${liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
        document.getElementById("modalLikesCount").textContent = `${item.likes + (liked ? 1 : 0)}`;
    }
}

// --- Immersive Detail Modal & Tabs ---
function openDetailModal(id) {
    playSynthSound('click');
    const item = celebrityDatabase.find(x => x.id === id);
    if (!item) return;

    state.modalActiveId = id;

    // Dynamically assign image source based on premium state
    item.image = state.isPremium ? item.imageHD : item.imageOld;

    // Render premium lock/unlock status badge
    const premiumBadge = document.getElementById("modalPremiumBadge");
    if (premiumBadge) {
        if (state.isPremium) {
            premiumBadge.innerHTML = `<span class="premium-unlocked-tag"><i class="fa-solid fa-crown"></i> HD & Audio Active</span>`;
        } else {
            premiumBadge.innerHTML = `<span class="premium-lock-tag" id="upgradeModalTrackBtn" title="Click to Upgrade to Premium"><i class="fa-solid fa-lock"></i> Go Premium (Audio Locked)</span>`;
            setTimeout(() => {
                const upgradeBtn = document.getElementById("upgradeModalTrackBtn");
                if (upgradeBtn) {
                    upgradeBtn.addEventListener("click", () => {
                        openLoginModal();
                    });
                }
            }, 50);
        }
    }

    // Play music only if premium member
    if (state.isPremium) {
        // Pause Lo-Fi beats if active so audio doesn't overlap
        if (state.lofiPlaying) {
            stopLoFiBeats();
            state.lofiWasPlaying = true;
        } else {
            state.lofiWasPlaying = false;
        }

        // Load and play specific celebrity theme song from local folder in a loop
        const celebritySongs = {
            sharvari: "Sharvari Wagh.mp3",
            sreeleela: "Shrelela.mp3",
            pranali: "Pranali.mp3",
            aneet: "Aneet pada.mp3"
        };

        const songFile = celebritySongs[item.category];
        const player = document.getElementById("celebAudioPlayer");
        if (player && songFile) {
            player.volume = 0.6;
            player.loop = true; // Ensure it plays in a loop
            player.onerror = (e) => {
                console.error("Error loading local audio file: " + songFile, e);
            };
            player.src = songFile;
            player.play().catch(e => {
                console.warn("Autoplay block caught, requiring click interaction", e);
            });
                // Show audio equalizer visualizer for premium users
                const eqBar = document.getElementById('audioVisualizerBar');
                if (eqBar) eqBar.style.display = 'flex';
        }
    } else {
        state.lofiWasPlaying = false;
        const player = document.getElementById("celebAudioPlayer");
        if (player) {
            player.pause();
            player.src = "";
        }
        const eqBar = document.getElementById('audioVisualizerBar');
        if (eqBar) eqBar.style.display = 'none';
    }

    const modalImg = document.getElementById("modalImg");
    modalImg.src = item.image;
    
    // Default active dance animation for paid users on open
    if (state.isPremium) {
        modalImg.classList.add("celeb-dance-anim");
    } else {
        modalImg.classList.remove("celeb-dance-anim");
    }
    
    // Toggle dance action on click for paid users
    modalImg.onclick = () => {
        if (!state.isPremium) {
            showPremiumToast("VIP Interaction Locked", "Only Premium members can trigger interactive celebrity dance poses!");
            return;
        }
        
        const isDancing = modalImg.classList.toggle("celeb-dance-anim");
        if (isDancing) {
            playSynthSound('success');
            modalImg.classList.add("celeb-spin-interactive");
            setTimeout(() => {
                modalImg.classList.remove("celeb-spin-interactive");
            }, 800);
        } else {
            playSynthSound('click');
        }
    };

    document.getElementById("modalName").textContent = item.name;
    document.getElementById("modalTagline").textContent = item.tagline;
    document.getElementById("modalBio").textContent = item.bio;
    document.getElementById("modalProfession").textContent = item.profession;
    document.getElementById("modalVibe").textContent = item.vibe;
    document.getElementById("modalPalette").textContent = item.stylePalette;
    
    const liked = state.favorites.includes(item.id);
    document.getElementById("modalLikesCount").textContent = `${item.likes + (liked ? 1 : 0)}`;
    
    const modalHeartBtn = document.getElementById("modalHeartBtn");
    modalHeartBtn.className = `modal-heart-btn ${liked ? 'liked' : ''}`;
    modalHeartBtn.innerHTML = `<i class="${liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
    
    modalHeartBtn.onclick = (e) => {
        toggleFavorite(item.id);
        triggerFloatingHeart(e);
    };
    
    setActiveTab("bio-tab");
    renderComments(id);
    drawRadarChart(item.stats);

    document.getElementById("detailModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeDetailModal() {
    const eqBar = document.getElementById('audioVisualizerBar');
    if (eqBar) eqBar.style.display = 'none';
    playSynthSound('click');
    document.getElementById("detailModal").classList.remove("active");
    document.body.style.overflow = "auto";
    state.modalActiveId = null;

    // Clear dynamic premium container inner contents to halt YouTube frames
    const vidContainer = document.getElementById("premiumVideoContainer");
    if (vidContainer) vidContainer.innerHTML = "";
    const coutureContainer = document.getElementById("premiumCoutureContainer");
    if (coutureContainer) coutureContainer.innerHTML = "";

    // Stop celebrity theme song by pausing and clearing source
    const player = document.getElementById("celebAudioPlayer");
    if (player) {
        player.pause();
        player.src = "";
    }

    // Resume Lo-Fi background beats if it was playing before
    if (state.lofiWasPlaying) {
        startLoFiBeats();
        const lofiPlayBtn = document.getElementById("lofiPlayBtn");
        if (lofiPlayBtn) {
            lofiPlayBtn.classList.add("active");
            lofiPlayBtn.innerHTML = `<i class="fa-solid fa-square-stop"></i> <span class="lofi-btn-text">Stop beats</span>`;
        }
    }
}

function renderCoutureRoom(item) {
    const container = document.getElementById("premiumCoutureContainer");
    if (!container) return;

    const silNames = ["Runway Gown", "Street Blazer", "Royal Lehenga", "Retro Dress"];
    const fabrics = ["Glossy Silk", "Matte Velvet", "Metallic Satin", "Casual Denim"];
    const colors = [
        { name: "Gold", hex: "#ffd700" },
        { name: "Cyan", hex: "#00f0ff" },
        { name: "Magenta", hex: "#ff00a0" },
        { name: "Emerald", hex: "#00ff88" },
        { name: "Purple", hex: "#a020f0" }
    ];

    let activeSil = silNames[0];
    let activeFab = fabrics[0];
    let activeCol = colors[0];

    container.innerHTML = `
        <div class="couture-builder-layout">
            <div class="couture-canvas-pane">
                <span class="couture-canvas-title">Interactive Dress Canvas</span>
                <canvas id="coutureCanvas" width="180" height="180" style="border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; background: rgba(0,0,0,0.5);"></canvas>
            </div>
            
            <div class="couture-controls-pane">
                <div class="couture-option-group">
                    <label>Select Silhouette</label>
                    <div class="couture-chips" id="silChips"></div>
                </div>
                
                <div class="couture-option-group">
                    <label>Select Fabric Material</label>
                    <div class="couture-chips" id="fabChips"></div>
                </div>
                
                <div class="couture-option-group">
                    <label>Select Accent Shade</label>
                    <div class="couture-chips" id="colChips"></div>
                </div>
                
                <button class="couture-generate-btn" id="generateCoutureBtn">
                    <i class="fa-solid fa-shirt"></i> Generate Dress Card
                </button>
            </div>
        </div>
    `;

    const silContainer = document.getElementById("silChips");
    silNames.forEach(sil => {
        const chip = document.createElement("button");
        chip.className = `couture-chip ${sil === activeSil ? 'active' : ''}`;
        chip.textContent = sil;
        chip.onclick = () => {
            document.querySelectorAll("#silChips .couture-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeSil = sil;
            playSynthSound('click');
            drawCoutureCanvas();
        };
        silContainer.appendChild(chip);
    });

    const fabContainer = document.getElementById("fabChips");
    fabrics.forEach(fab => {
        const chip = document.createElement("button");
        chip.className = `couture-chip ${fab === activeFab ? 'active' : ''}`;
        chip.textContent = fab;
        chip.onclick = () => {
            document.querySelectorAll("#fabChips .couture-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeFab = fab;
            playSynthSound('click');
            drawCoutureCanvas();
        };
        fabContainer.appendChild(chip);
    });

    const colContainer = document.getElementById("colChips");
    colors.forEach(col => {
        const chip = document.createElement("button");
        chip.className = `couture-chip color-dot ${col.name === activeCol.name ? 'active' : ''}`;
        chip.innerHTML = `<span class="couture-color-preview" style="background: ${col.hex};"></span> ${col.name}`;
        chip.onclick = () => {
            document.querySelectorAll("#colChips .couture-chip").forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            activeCol = col;
            playSynthSound('click');
            drawCoutureCanvas();
        };
        colContainer.appendChild(chip);
    });

    function drawCoutureCanvas() {
        const canvas = document.getElementById("coutureCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const grad = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 10, canvas.width/2, canvas.height/2, 90);
        grad.addColorStop(0, activeCol.hex + "33");
        grad.addColorStop(1, "rgba(0, 0, 0, 0.7)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = activeCol.hex;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = activeCol.hex;
        ctx.shadowBlur = 12;
        ctx.beginPath();

        if (activeSil === "Runway Gown") {
            ctx.moveTo(90, 35);
            ctx.lineTo(80, 55);
            ctx.lineTo(65, 80);
            ctx.lineTo(55, 145);
            ctx.lineTo(125, 145);
            ctx.lineTo(115, 80);
            ctx.lineTo(100, 55);
            ctx.closePath();
        } else if (activeSil === "Street Blazer") {
            ctx.moveTo(70, 40);
            ctx.lineTo(110, 40);
            ctx.lineTo(120, 75);
            ctx.lineTo(110, 75);
            ctx.lineTo(110, 130);
            ctx.lineTo(70, 130);
            ctx.lineTo(70, 75);
            ctx.lineTo(60, 75);
            ctx.closePath();
            ctx.moveTo(80, 40); ctx.lineTo(90, 70); ctx.lineTo(100, 40);
        } else if (activeSil === "Royal Lehenga") {
            ctx.moveTo(75, 40); ctx.lineTo(105, 40); ctx.lineTo(100, 65); ctx.lineTo(80, 65); ctx.closePath();
            ctx.moveTo(85, 75);
            ctx.lineTo(50, 145);
            ctx.lineTo(130, 145);
            ctx.lineTo(95, 75);
            ctx.closePath();
        } else {
            ctx.moveTo(80, 40);
            ctx.lineTo(100, 40);
            ctx.lineTo(105, 75);
            ctx.lineTo(50, 135);
            ctx.lineTo(130, 135);
            ctx.lineTo(75, 75);
            ctx.closePath();
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#fff";
        if (activeSil === "Street Blazer") {
            ctx.fillRect(88, 85, 4, 4);
            ctx.fillRect(88, 100, 4, 4);
        } else {
            ctx.strokeStyle = "rgba(255,255,255,0.4)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(75, 75);
            ctx.lineTo(105, 75);
            ctx.stroke();
        }

        ctx.fillStyle = "rgba(255,215,0,0.65)";
        ctx.font = "bold 9px Outfit, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`Styled by ${state.currentUser}`, canvas.width / 2, canvas.height - 15);
    }

    drawCoutureCanvas();

    document.getElementById("generateCoutureBtn").onclick = () => {
        playSynthSound('success');
        
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = 400;
        tempCanvas.height = 400;
        const tCtx = tempCanvas.getContext("2d");

        const bGrad = tCtx.createLinearGradient(0, 0, 400, 400);
        bGrad.addColorStop(0, "#0b0f19");
        bGrad.addColorStop(1, "#1e293b");
        tCtx.fillStyle = bGrad;
        tCtx.fillRect(0,0,400,400);

        tCtx.strokeStyle = "#ffd700";
        tCtx.lineWidth = 6;
        tCtx.strokeRect(15, 15, 370, 370);

        tCtx.strokeStyle = "rgba(255,255,255,0.06)";
        tCtx.lineWidth = 1;
        tCtx.strokeRect(20, 20, 360, 360);

        tCtx.fillStyle = "#fff";
        tCtx.font = "bold 20px 'Cinzel', serif";
        tCtx.textAlign = "center";
        tCtx.fillText("AESTHETICA COUTURE", 200, 55);

        tCtx.fillStyle = "#ffd700";
        tCtx.font = "9px 'Outfit', sans-serif";
        tCtx.fillText("OFFICIAL PREMIUM COLLECTION", 200, 75);

        const sourceCanvas = document.getElementById("coutureCanvas");
        if (sourceCanvas) {
            tCtx.drawImage(sourceCanvas, 110, 105, 180, 180);
        }

        tCtx.fillStyle = "#94a3b8";
        tCtx.font = "11px 'Outfit', sans-serif";
        tCtx.fillText(`Silhouette: ${activeSil}  |  Material: ${activeFab}`, 200, 315);
        
        tCtx.fillStyle = "#ffffff";
        tCtx.font = "bold 12px 'Outfit', sans-serif";
        tCtx.fillText(`Custom designed with ${item.name}`, 200, 340);

        tCtx.fillStyle = "rgba(255,255,255,0.2)";
        tCtx.font = "9px monospace";
        tCtx.fillText("AUTHENTIC PREMIUM ITEM • REPLICABLE FOR RAMP", 200, 365);

        try {
            const link = document.createElement("a");
            link.download = `${item.name.replace(/\s+/g, '_')}_Couture_Design.png`;
            link.href = tempCanvas.toDataURL("image/png");
            link.click();
            showPremiumToast("👗 Outfit Generated!", "Your custom fashion card has been successfully saved to your downloads!");
        } catch (e) {
            console.warn("Canvas export failed under local security domain.", e);
            showPremiumToast("👗 Outfit Saved!", "Design generated successfully!");
        }
    };
}

function setActiveTab(tabId) {
    document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) btn.classList.add("active");
        else btn.classList.remove("active");
    });
    
    document.querySelectorAll(".tab-pane").forEach(pane => {
        if (pane.id === tabId) pane.classList.add("active");
        else pane.classList.remove("active");
    });

    // Clear video container if moving away from video tab
    if (tabId !== "video-tab") {
        const vidContainer = document.getElementById("premiumVideoContainer");
        if (vidContainer) vidContainer.innerHTML = "";

        // Resume celebrity audio loop if premium and paused
        if (state.isPremium && state.modalActiveId) {
            const player = document.getElementById("celebAudioPlayer");
            if (player && player.paused && player.src) {
                player.play().catch(e => console.warn(e));
            }
        }
    }

    const activeItem = celebrityDatabase.find(x => x.id === state.modalActiveId);

    if (tabId === "video-tab" && activeItem) {
        // Pause local celebrity audio loops
        const player = document.getElementById("celebAudioPlayer");
        if (player) player.pause();

        const vidContainer = document.getElementById("premiumVideoContainer");
        if (vidContainer) {
            if (state.isPremium) {
                const videoMap = {
                    sharvari: "videos/Sharvari.mp4",
                    sreeleela: "videos/Sreelela.mp4",
                    pranali: "videos/Pranali.mp4",
                    aneet: "videos/Aneet.mp4"
                };
                const videoFile = videoMap[activeItem.category] || "videos/Sharvari.mp4";
                
                vidContainer.innerHTML = `
                    <div id="videoIntroWrapper" style="position: relative; width: 100%; height: 290px; overflow: hidden; border-radius: 12px; background: #000; box-shadow: 0 10px 25px rgba(0,0,0,0.5); cursor: pointer;">
                        <!-- The Video (hidden initially) -->
                        <video id="celebTabVideo" width="100%" height="290" controls loop style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; border-radius: 12px; opacity: 0; transition: opacity 1.2s ease; z-index: 1;">
                            <source src="${videoFile}" type="video/mp4">
                        </video>
                        
                        <!-- The Cinematic Poster Image (visible initially) -->
                        <div id="videoIntroPoster" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('${activeItem.image}') no-repeat center/cover; z-index: 2; transition: transform 1.3s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 1.3s ease, filter 1.3s ease; display: flex; flex-direction: column; align-items: center; justify-content: center; transform-style: preserve-3d; perspective: 1000px;">
                            <!-- Dark tint overlay -->
                            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.45); z-index: 1;"></div>
                            
                            <!-- Large glowing play icon -->
                            <div id="videoPlayOverlayBtn" style="position: relative; z-index: 2; font-size: 55px; color: #ffd700; cursor: pointer; text-shadow: 0 0 20px rgba(255, 215, 0, 0.7); transform: translateZ(40px) scale(1); transition: transform 0.3s ease;">
                                <i class="fa-solid fa-circle-play"></i>
                            </div>
                            
                            <!-- Text indicator -->
                            <div style="position: absolute; bottom: 25px; z-index: 2; color: #fff; font-family: 'Outfit', sans-serif; font-size: 11.5px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; text-shadow: 0 2px 5px rgba(0,0,0,0.8); transform: translateZ(30px);">
                                Click to Play Runway Clip
                            </div>
                        </div>
                    </div>
                `;

                const wrapper = document.getElementById("videoIntroWrapper");
                const poster = document.getElementById("videoIntroPoster");
                const videoEl = document.getElementById("celebTabVideo");
                const playBtn = document.getElementById("videoPlayOverlayBtn");

                const youtubeMap = {
                    sharvari: "SNcmsQTZUKw",
                    sreeleela: "KimJbIImeTk",
                    pranali: "ljFXmFpwrDo",
                    aneet: "rOUuGvJkBrQ"
                };

                // Catch local video loading failures (like on Vercel deployment)
                videoEl.addEventListener("error", () => {
                    console.warn("Local video load failed. Falling back to YouTube embed.");
                    const ytId = youtubeMap[activeItem.category] || "SNcmsQTZUKw";
                    vidContainer.innerHTML = `
                        <iframe width="100%" height="290" src="https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px; border: 1px solid rgba(255,215,0,0.25); box-shadow: 0 10px 25px rgba(0,0,0,0.5);"></iframe>
                    `;
                }, true);

                wrapper.addEventListener("click", function startPlay() {
                    wrapper.removeEventListener("click", startPlay);
                    playSynthSound('success');

                    // Apply cinematic zoom-in, fade-out, glow mix animation to poster image
                    poster.style.transform = "scale(1.4) rotate(1deg)";
                    poster.style.opacity = "0";
                    poster.style.filter = "blur(12px) brightness(1.7)";

                    // Fade in the video
                    videoEl.style.opacity = "1";
                    videoEl.play().catch(e => {
                        console.warn("Local video play failed. Falling back to YouTube.");
                        const ytId = youtubeMap[activeItem.category] || "SNcmsQTZUKw";
                        vidContainer.innerHTML = `
                            <iframe width="100%" height="290" src="https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&loop=1&playlist=${ytId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius: 12px; border: 1px solid rgba(255,215,0,0.25); box-shadow: 0 10px 25px rgba(0,0,0,0.5);"></iframe>
                        `;
                    });

                    setTimeout(() => {
                        if (poster) poster.style.display = "none";
                    }, 1300);
                });

                wrapper.addEventListener("mouseenter", () => {
                    if (playBtn) playBtn.style.transform = "translateZ(40px) scale(1.15)";
                });
                wrapper.addEventListener("mouseleave", () => {
                    if (playBtn) playBtn.style.transform = "translateZ(40px) scale(1)";
                });
            } else {
                vidContainer.innerHTML = `
                    <div style="text-align: center; padding: 25px; font-family: 'Outfit', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 290px; box-sizing: border-box; background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(9, 13, 26, 0.96)); border-radius: 16px; border: 1px solid rgba(255, 215, 0, 0.25);">
                        <div style="font-size: 28px; color: #ffd700; margin-bottom: 10px;"><i class="fa-solid fa-crown"></i></div>
                        <h3 style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 6px;">Premium Runway Video Theater</h3>
                        <p style="font-size: 11px; color: var(--text-secondary); max-width: 280px; line-height: 1.5; margin-bottom: 14px; text-align: center;">
                            Upgrade to Premium to watch exclusive high-resolution fashion walks and behind-the-scenes clips of ${activeItem.name}!
                        </p>
                        <button class="login-submit-btn" id="videoUpgradeBtn" style="padding: 8px 20px; font-size: 11px; margin: 0; cursor: pointer;">Unlock Video Theater</button>
                    </div>
                `;
                setTimeout(() => {
                    const btn = document.getElementById("videoUpgradeBtn");
                    if (btn) btn.onclick = openLoginModal;
                }, 50);
            }
        }
    }

    if (tabId === "couture-tab" && activeItem) {
        if (state.isPremium) {
            renderCoutureRoom(activeItem);
        } else {
            const coutureContainer = document.getElementById("premiumCoutureContainer");
            if (coutureContainer) {
                coutureContainer.innerHTML = `
                    <div style="text-align: center; padding: 25px; font-family: 'Outfit', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 260px; box-sizing: border-box; background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(9, 13, 26, 0.96)); border-radius: 16px; border: 1px solid rgba(255, 215, 0, 0.25);">
                        <div style="font-size: 28px; color: #ffd700; margin-bottom: 10px;"><i class="fa-solid fa-shirt"></i></div>
                        <h3 style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 6px;">AI Couture Designer Room</h3>
                        <p style="font-size: 11px; color: var(--text-secondary); max-width: 280px; line-height: 1.5; margin-bottom: 14px; text-align: center;">
                            Unlock the interactive custom outfit creator to style and draw custom garments with ${activeItem.name}!
                        </p>
                        <button class="login-submit-btn" id="coutureUpgradeBtn" style="padding: 8px 20px; font-size: 11px; margin: 0; cursor: pointer;">Unlock Designer Room</button>
                    </div>
                `;
                setTimeout(() => {
                    const btn = document.getElementById("coutureUpgradeBtn");
                    if (btn) btn.onclick = openLoginModal;
                }, 50);
            }
        }
    }

    if (tabId === "compare-tab" && activeItem) {
        renderHDCompareSlider(activeItem);
    }

    if (tabId === "wallpaper-tab" && activeItem) {
        renderWallpaperTab(activeItem);
    }
}

// --- Dynamic Canvas-based Spider Radar Chart ---
function drawRadarChart(stats) {
    const canvas = document.getElementById("radarCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = 80;
    
    const metrics = [
        { label: "Elegance", val: stats.elegance },
        { label: "Boldness", val: stats.boldness },
        { label: "Glamour", val: stats.glamour },
        { label: "Trendiness", val: stats.trendiness },
        { label: "Versatility", val: stats.versatility }
    ];
    
    const count = metrics.length;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.lineWidth = 1;
    
    for (let layer = 1; layer <= 3; layer++) {
        const layerRad = radius * (layer / 3);
        ctx.beginPath();
        for (let i = 0; i < count; i++) {
            const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
            const x = centerX + Math.cos(angle) * layerRad;
            const y = centerY + Math.sin(angle) * layerRad;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    ctx.beginPath();
    for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
        const x = centerX + Math.cos(angle) * radius;
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y = centerY + Math.sin(angle) * radius);
    }
    ctx.stroke();
    
    let themeColor = "#ffb703";
    let themeFill = "rgba(255, 183, 3, 0.25)";
    if (state.currentTheme === "cyberpunk") {
        themeColor = "#00f0ff";
        themeFill = "rgba(0, 240, 255, 0.3)";
    } else if (state.currentTheme === "royal") {
        themeColor = "#d4af37";
        themeFill = "rgba(212, 175, 55, 0.25)";
    } else if (state.currentTheme === "emerald") {
        themeColor = "#10b981";
        themeFill = "rgba(16, 185, 129, 0.25)";
    }
    
    ctx.beginPath();
    for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
        const percent = metrics[i].val / 100;
        const x = centerX + Math.cos(angle) * radius * percent;
        const y = centerY + Math.sin(angle) * radius * percent;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = themeFill;
    ctx.fill();
    ctx.strokeStyle = themeColor;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
        const percent = metrics[i].val / 100;
        const x = centerX + Math.cos(angle) * radius * percent;
        const y = centerY + Math.sin(angle) * radius * percent;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.strokeStyle = themeColor;
        ctx.stroke();
    }
    
    ctx.fillStyle = "#cbd5e1";
    ctx.font = "bold 10px Outfit";
    ctx.textAlign = "center";
    for (let i = 0; i < count; i++) {
        const angle = (i * 2 * Math.PI) / count - Math.PI / 2;
        const textDist = radius + 20;
        const x = centerX + Math.cos(angle) * textDist;
        const y = centerY + Math.sin(angle) * textDist + 4;
        ctx.fillText(`${metrics[i].label} (${metrics[i].val}%)`, x, y);
    }
}

// --- Comments Wall Logic ---
function renderComments(id) {
    const list = document.getElementById("commentsList");
    list.innerHTML = "";
    
    const lookComments = state.comments[id] || [
        { name: "Sneha", text: "Absolute styling goals! Perfect fit. ✨", avatar: "✨", time: "2 hours ago" },
        { name: "Varun", text: "The camera lighting here is next level.", avatar: "😎", time: "4 hours ago" }
    ];
    
    lookComments.forEach(comm => {
        const item = document.createElement("div");
        item.className = "comment-card";
        item.innerHTML = `
            <div class="comment-avatar">${comm.avatar}</div>
            <div class="comment-details">
                <div class="comment-author-row">
                    <span class="comment-author">${escapeHTML(comm.name)}</span>
                    <span class="comment-time">${comm.time}</span>
                </div>
                <div class="comment-body">${escapeHTML(comm.text)}</div>
            </div>
        `;
        list.appendChild(item);
    });
    list.scrollTop = list.scrollHeight;
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

// --- Personality Vibe Quiz Engine ---
const quizState = {
    currentStep: 1,
    answers: { pranali: 0, sharvari: 0, aneet: 0, sreeleela: 0 },
    matchedCelebrityKey: null
};

function startQuiz() {
    playSynthSound('click');
    quizState.currentStep = 1;
    quizState.answers = { pranali: 0, sharvari: 0, aneet: 0, sreeleela: 0 };
    
    document.querySelectorAll(".quiz-step").forEach(step => step.classList.remove("active"));
    document.querySelector('.quiz-step[data-step="1"]').classList.add("active");
    
    document.getElementById("quizFooter").style.display = "flex";
    updateQuizProgress();
    
    document.getElementById("quizModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeQuiz() {
    playSynthSound('click');
    document.getElementById("quizModal").classList.remove("active");
    document.body.style.overflow = "auto";
}

function selectQuizOption(value) {
    playSynthSound('click');
    
    if (value === "pranali") {
        quizState.answers.pranali += 2;
        quizState.answers.sreeleela += 1;
    } else if (value === "sharvari") {
        quizState.answers.sharvari += 2;
        quizState.answers.sreeleela += 1;
    } else if (value === "aneet") {
        quizState.answers.aneet += 2;
    }
    
    if (quizState.currentStep < 4) {
        quizState.currentStep++;
        showQuizStep(quizState.currentStep);
    } else {
        calculateQuizResult();
    }
}

function showQuizStep(stepNum) {
    document.querySelectorAll(".quiz-step").forEach(step => step.classList.remove("active"));
    const nextStep = document.querySelector(`.quiz-step[data-step="${stepNum}"]`);
    if (nextStep) nextStep.classList.add("active");
    updateQuizProgress();
}

function updateQuizProgress() {
    const fill = document.getElementById("quizProgressFill");
    const label = document.getElementById("quizProgressText");
    const percent = ((quizState.currentStep - 1) / 3) * 100;
    fill.style.width = `${percent || 25}%`;
    label.textContent = `Question ${quizState.currentStep} of 4`;
}

function calculateQuizResult() {
    let winnerKey = "pranali";
    let max = -1;
    for (const celeb in quizState.answers) {
        if (quizState.answers[celeb] > max) {
            max = quizState.answers[celeb];
            winnerKey = celeb;
        }
    }
    
    quizState.matchedCelebrityKey = winnerKey;
    
    const mapping = {
        pranali: {
            name: "Pranali",
            desc: "You match Pranali! You adore airy pastel structures, graceful lines, and traditional prints. Your design vibe represents classic luxury balanced with gentle sparkles.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmfg_TtMbYYxad53GHEkr2smgnt5N0vPZwdjqKgcKRg&s=10",
            vibe: "Ethereal Elegance"
        },
        sharvari: {
            name: "Sharvari Wagh",
            desc: "You match Sharvari! You embody bold, high-contrast aesthetics and street-style silhouettes. You love crop tops, structured jackets, and bright red-carpet accents.",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sharvari_Wagh.png",
            vibe: "High-Fashion Glamour"
        },
        aneet: {
            name: "Aneet Padda",
            desc: "Your match is Aneet! You prefer minimal, clean textures and quiet luxury styles. You values structure, timeless blazers, and sepia vintage atmospheres.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGuE-h92e7Aoh59H7Ro2txZinLnTdC_fqtMgNw6YV7w&s=10",
            vibe: "Quiet Luxury Minimalist"
        },
        sreeleela: {
            name: "Sreeleela",
            desc: "Your style match is Sreeleela! You are energetic, playful, and love vibrant designer sarees and fusion outfits. You carry outstanding charisma and modern grace.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkotPcesre0W28CKAT0Dy_lX4ePQmXz_FgBZMAlf5hw&s=10",
            vibe: "Vibrant Charisma"
        }
    };
    
    const res = mapping[winnerKey] || mapping.pranali;
    
    document.getElementById("resultImg").src = res.image;
    document.getElementById("resultName").textContent = res.name;
    document.getElementById("resultDesc").textContent = res.desc;
    document.getElementById("resultVibe").textContent = res.vibe;
    
    document.getElementById("quizFooter").style.display = "none";
    document.querySelectorAll(".quiz-step").forEach(step => step.classList.remove("active"));
    document.getElementById("quizResultStep").classList.add("active");
    
    playSynthSound('success');
}

// --- Fashion Battle Duel Mechanic ---
function startBattle() {
    playSynthSound('click');
    setupNewBattle();
    document.getElementById("battleModal").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeBattle() {
    playSynthSound('click');
    document.getElementById("battleModal").classList.remove("active");
    document.body.style.overflow = "auto";
}

function setupNewBattle() {
    let idxA = Math.floor(Math.random() * celebrityDatabase.length);
    let idxB = Math.floor(Math.random() * celebrityDatabase.length);
    while (idxB === idxA) {
        idxB = Math.floor(Math.random() * celebrityDatabase.length);
    }
    
    const cardA = celebrityDatabase[idxA];
    const cardB = celebrityDatabase[idxB];
    
    state.currentBattle = { left: cardA, right: cardB, voted: false };
    
    const leftEl = document.getElementById("battleCardLeft");
    leftEl.className = "battle-card-box";
    leftEl.querySelector(".battle-img").src = cardA.image;
    leftEl.querySelector(".battle-name").textContent = cardA.name;
    leftEl.querySelector(".battle-caption").textContent = cardA.vibe;
    
    const rightEl = document.getElementById("battleCardRight");
    rightEl.className = "battle-card-box";
    rightEl.querySelector(".battle-img").src = cardB.image;
    rightEl.querySelector(".battle-name").textContent = cardB.name;
    rightEl.querySelector(".battle-caption").textContent = cardB.vibe;
    
    document.getElementById("nextBattleBtn").disabled = true;
    document.getElementById("battleStatsSummary").textContent = `Total Battles Fought: ${state.battleStats.total}`;
}

function castBattleVote(chosenSide) {
    if (state.currentBattle.voted) return;
    state.currentBattle.voted = true;
    
    state.battleStats.total++;
    completeQuest("battle");
    
    let percentLeft = Math.floor(Math.random() * 41) + 30;
    let percentRight = 100 - percentLeft;
    
    const leftEl = document.getElementById("battleCardLeft");
    const rightEl = document.getElementById("battleCardRight");
    
    leftEl.classList.add("voted");
    rightEl.classList.add("voted");
    
    if (chosenSide === 'left') {
        leftEl.classList.add("winner");
        if (percentLeft < percentRight) {
            let temp = percentLeft;
            percentLeft = percentRight;
            percentRight = temp;
        }
    } else {
        rightEl.classList.add("winner");
        if (percentRight < percentLeft) {
            let temp = percentLeft;
            percentLeft = percentRight;
            percentRight = temp;
        }
    }
    
    document.getElementById("battlePercentLeft").textContent = `${percentLeft}%`;
    document.getElementById("battlePercentRight").textContent = `${percentRight}%`;
    document.getElementById("nextBattleBtn").disabled = false;
    
    localStorage.setItem("aesthetica_battles", JSON.stringify(state.battleStats));
    playSynthSound('success');
}

// --- Bulletproof Canvas ID Card Exporter ---
function generateFashionCard() {
    playSynthSound('click');
    const item = celebrityDatabase.find(x => x.id === state.modalActiveId);
    if (!item) return;
    
    const canvas = document.getElementById("downloadHelperCanvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = 500;
    canvas.height = 700;
    
    const grad = ctx.createLinearGradient(0, 0, 0, 700);
    if (state.currentTheme === 'cyberpunk') {
        grad.addColorStop(0, '#120324');
        grad.addColorStop(1, '#050508');
    } else if (state.currentTheme === 'royal') {
        grad.addColorStop(0, '#2a200f');
        grad.addColorStop(1, '#0a0a0a');
    } else if (state.currentTheme === 'emerald') {
        grad.addColorStop(0, '#02231c');
        grad.addColorStop(1, '#042f2e');
    } else {
        grad.addColorStop(0, '#1b193f');
        grad.addColorStop(1, '#090d16');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 500, 700);
    
    ctx.strokeStyle = state.currentTheme === 'cyberpunk' ? '#ff007f' : (state.currentTheme === 'royal' ? '#d4af37' : '#6366f1');
    ctx.lineWidth = 10;
    ctx.strokeRect(5, 5, 490, 690);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px Cinzel';
    ctx.textAlign = 'center';
    ctx.fillText('A E S T H E T I C A', 250, 60);
    
    ctx.fillStyle = state.currentTheme === 'cyberpunk' ? '#00f0ff' : '#ffd700';
    ctx.font = 'bold 11px Outfit';
    ctx.fillText('VERIFIED FASHION ID CARD', 250, 85);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 2;
    ctx.strokeRect(125, 120, 250, 270);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
    ctx.fillRect(125, 120, 250, 270);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(250, 220, 50, 0, 2 * Math.PI);
    ctx.moveTo(200, 340);
    ctx.lineTo(210, 300);
    ctx.lineTo(290, 300);
    ctx.lineTo(300, 340);
    ctx.stroke();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = 'italic 11px Outfit';
    ctx.fillText('HD Image Embedded', 250, 270);

    const img = new Image();
    if (item.image && item.image.startsWith("http")) {
        img.crossOrigin = "anonymous";
    }
    img.onload = function() {
        try {
            ctx.drawImage(img, 125, 120, 250, 270);
            finalizeFashionCardDownload(canvas);
        } catch (e) {
            finalizeFashionCardDownload(canvas);
        }
    };
    img.onerror = function() {
        finalizeFashionCardDownload(canvas);
    };
    img.src = item.image;
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px Outfit';
    ctx.fillText(item.name.toUpperCase(), 250, 430);
    
    ctx.fillStyle = state.currentTheme === 'cyberpunk' ? '#ff007f' : '#ffb703';
    ctx.font = '600 13px Outfit';
    ctx.fillText(item.tagline.toUpperCase(), 250, 455);
    
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.moveTo(80, 480);
    ctx.lineTo(420, 480);
    ctx.stroke();
    
    const statsMetrics = [
        { label: 'Elegance', val: item.stats.elegance },
        { label: 'Boldness', val: item.stats.boldness },
        { label: 'Glamour', val: item.stats.glamour },
        { label: 'Trendiness', val: item.stats.trendiness }
    ];
    
    ctx.textAlign = 'left';
    ctx.font = '600 11px Outfit';
    
    statsMetrics.forEach((stat, i) => {
        const yOffset = 520 + (i * 38);
        
        ctx.fillStyle = '#cbd5e1';
        ctx.fillText(stat.label.toUpperCase(), 80, yOffset);
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(200, yOffset - 10, 220, 10);
        
        const fillGrad = ctx.createLinearGradient(200, 0, 420, 0);
        if (state.currentTheme === 'cyberpunk') {
            fillGrad.addColorStop(0, '#ff007f');
            fillGrad.addColorStop(1, '#00f0ff');
        } else if (state.currentTheme === 'royal') {
            fillGrad.addColorStop(0, '#d4af37');
            fillGrad.addColorStop(1, '#fff');
        } else if (state.currentTheme === 'emerald') {
            fillGrad.addColorStop(0, '#10b981');
            fillGrad.addColorStop(1, '#34d399');
        } else {
            fillGrad.addColorStop(0, '#6366f1');
            fillGrad.addColorStop(1, '#ff007f');
        }
        ctx.fillStyle = fillGrad;
        ctx.fillRect(200, yOffset - 10, 220 * (stat.val / 100), 10);
        
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${stat.val}%`, 430, yOffset);
    });
}

function finalizeFashionCardDownload(canvas) {
    try {
        const link = document.createElement('a');
        link.download = `Aesthetica_Card_${state.modalActiveId}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        console.warn("Canvas export failed under local security domain. Downloading relative image directly.", e);
        const activeItem = celebrityDatabase.find(x => x.id === state.modalActiveId);
        if (activeItem) {
            const link = document.createElement('a');
            link.download = `Aesthetica_Card_${activeItem.name.replace(/\s/g, '_')}.jpg`;
            link.href = activeItem.image;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

// Downloads the Vibe match Badge certificate generated in the Quiz
function generateVibeBadge() {
    playSynthSound('click');
    if (!quizState.matchedCelebrityKey) return;
    
    const mapping = {
        pranali: { name: "Pranali", vibe: "Ethereal Elegance", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmfg_TtMbYYxad53GHEkr2smgnt5N0vPZwdjqKgcKRg&s=10" },
        sharvari: { name: "Sharvari Wagh", vibe: "High-Fashion Glamour", img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sharvari_Wagh.png" },
        aneet: { name: "Aneet Padda", vibe: "Quiet Luxury Minimalist", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGuE-h92e7Aoh59H7Ro2txZinLnTdC_fqtMgNw6YV7w&s=10" },
        sreeleela: { name: "Sreeleela", vibe: "Vibrant Charisma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYkotPcesre0W28CKAT0Dy_lX4ePQmXz_FgBZMAlf5hw&s=10" }
    };
    
    const celeb = mapping[quizState.matchedCelebrityKey];
    
    const canvas = document.getElementById("downloadHelperCanvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = 600;
    canvas.height = 400;
    
    const grad = ctx.createLinearGradient(0, 0, 600, 400);
    grad.addColorStop(0, '#111827');
    grad.addColorStop(1, '#1f2937');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 400);
    
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, 594, 394);
    
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 24px Cinzel';
    ctx.textAlign = 'center';
    ctx.fillText('AESTHETICA STYLE MATCH BADGE', 300, 50);
    
    ctx.fillStyle = 'rgba(255, 215, 0, 0.08)';
    ctx.fillRect(50, 75, 500, 30);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 12px Outfit';
    ctx.fillText('OFFICIAL COMPATIBILITY CERTIFICATE', 300, 94);
    
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.strokeRect(50, 130, 160, 200);
    ctx.fillStyle = 'rgba(255,255,255,0.03)';
    ctx.fillRect(50, 130, 160, 200);
    
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath();
    ctx.arc(130, 200, 30, 0, 2*Math.PI);
    ctx.stroke();
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function() {
        try {
            ctx.drawImage(img, 50, 130, 160, 200);
            finalizeBadgeDownload(canvas);
        } catch (e) {
            finalizeBadgeDownload(canvas);
        }
    };
    img.onerror = function() {
        finalizeBadgeDownload(canvas);
    };
    img.src = celeb.img;
    
    ctx.textAlign = 'left';
    ctx.fillStyle = '#ffffff';
    ctx.font = '600 13px Outfit';
    ctx.fillText(`STYLE MATCH: ${celeb.name.toUpperCase()}`, 240, 160);
    
    ctx.fillStyle = '#ff007f';
    ctx.font = 'bold 15px Outfit';
    ctx.fillText(`VIBE: ${celeb.vibe}`, 240, 190);
    
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '11px Outfit';
    
    const textStr = `Congratulations! Your answers indicate a 98% styling match with ${celeb.name}. You share a passion for structured coordinates, fine drapes, and expressive modern glamour.`;
    wrapText(ctx, textStr, 240, 230, 310, 18);
    
    ctx.textAlign = 'right';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.font = 'bold 12px Cinzel';
    ctx.fillText('AESTHETICA HUBS 2026', 550, 355);
}

function finalizeBadgeDownload(canvas) {
    try {
        const link = document.createElement('a');
        link.download = `Aesthetica_Vibe_Badge.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        console.warn("Canvas export failed under local security domain.", e);
        showPremiumToast("Vibe Match Saved!", "Your compatibility card is logged in the profile!");
    }
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    
    for (let n = 0; n < words.length; n++) {
        let testLine = line + words[n] + ' ';
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

// --- Scroll Depth bar calculator ---
function handlePageScroll() {
    const progress = document.getElementById("scrollProgress");
    if (!progress || document.body.classList.contains("quests-view-active")) return;
    
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
        progress.style.width = "0%";
        return;
    }
    const pct = (window.scrollY / totalHeight) * 100;
    progress.style.width = `${pct}%`;
}

// --- Virtual routing toggle ---
function toggleVirtualPage(showQuests) {
    const body = document.body;
    const questsBtn = document.getElementById("questsNavBtn");
    const navText = document.getElementById("questsNavText");
    
    playSynthSound('click');
    
    if (showQuests) {
        body.classList.add("quests-view-active");
        questsBtn.innerHTML = `<i class="fa-solid fa-images"></i> <span id="questsNavText">Gallery View</span>`;
        questsBtn.classList.add("active");
        
        // Reset scroll progress bar while in Quests page
        document.getElementById("scrollProgress").style.width = "0%";
    } else {
        body.classList.remove("quests-view-active");
        questsBtn.innerHTML = `<i class="fa-solid fa-trophy"></i> <span id="questsNavText">Quest Hub</span>`;
        questsBtn.classList.remove("active");
        
        // Restore scroll progress bar
        handlePageScroll();
        
        // Rerender gallery reveals
        renderGallery();
    }
}

// --- Premium Status Image Swapper ---
function updateDatabaseImages() {
    celebrityDatabase.forEach(item => {
        item.image = state.isPremium ? item.imageHD : item.imageOld;
    });
}

// --- Premium Authentication Controller ---
function openLoginModal() {
    playSynthSound('click');
    const modal = document.getElementById("loginModal");
    if (modal) {
        modal.classList.add("active");
        document.getElementById("loginErrorMsg").style.display = "none";
        document.getElementById("loginForm").reset();
    }
}

function closeLoginModal() {
    playSynthSound('click');
    const modal = document.getElementById("loginModal");
    if (modal) modal.classList.remove("active");
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const userVal = document.getElementById("loginUsername").value.trim();
    const passVal = document.getElementById("loginPassword").value;
    
    const allowedUsers = ["tarush", "srishant", "pranav"];
    const inputUserLower = userVal.toLowerCase();
    
    if (allowedUsers.includes(inputUserLower)) {
        if (passVal === "Paisa@123") {
            const capitalizedUser = userVal.charAt(0).toUpperCase() + userVal.slice(1);
            
            state.isPremium = true;
            state.currentUser = capitalizedUser;
            localStorage.setItem("aesthetica_premium", JSON.stringify(true));
            localStorage.setItem("aesthetica_premium_user", capitalizedUser);
            
            // Load user specific progress
            const profile = userProfiles[inputUserLower] || userProfiles.guest;
            state.styleASP = parseInt(localStorage.getItem(`aesthetica_asp_${inputUserLower}`)) || profile.asp;
            state.styleLevel = parseInt(localStorage.getItem(`aesthetica_level_${inputUserLower}`)) || profile.level;
            state.questStatus = JSON.parse(localStorage.getItem(`aesthetica_quests_${inputUserLower}`)) || { tarot: false, comment: false, battleCount: 0, fav: false };
            state.tarotFlipped = JSON.parse(localStorage.getItem(`aesthetica_tarot_flipped_${inputUserLower}`)) || false;
            
            document.body.classList.add("premium-active");
            launchPremiumConfetti();
            startPremiumParticles();
            
            updateDatabaseImages();
            updateAuthHeaderUI();
            updateQuestUI();
            renderGallery();
            closeLoginModal();
            
            playSynthSound('success');
            showPremiumToast(`👑 Welcome Premium, ${capitalizedUser}!`, "HD Portfolios & continuous local audio loops are now unlocked!");
            
            // If modal was open, refresh the active image inside modal
            if (state.modalActiveId) {
                const item = celebrityDatabase.find(x => x.id === state.modalActiveId);
                if (item) {
                    const modalImg = document.getElementById("modalImg");
                    modalImg.src = item.imageHD;
                    modalImg.classList.add("celeb-dance-anim");
                    const premiumBadge = document.getElementById("modalPremiumBadge");
                    if (premiumBadge) premiumBadge.innerHTML = `<span class="premium-unlocked-tag"><i class="fa-solid fa-crown"></i> HD & Audio Active</span>`;
                    
                    // Play music immediately since they just unlocked it
                    const celebritySongs = {
                        sharvari: "Sharvari Wagh.mp3",
                        sreeleela: "Shrelela.mp3",
                        pranali: "Pranali.mp3",
                        aneet: "Aneet pada.mp3"
                    };
                    const songFile = celebritySongs[item.category];
                    const player = document.getElementById("celebAudioPlayer");
                    if (player && songFile) {
                        player.volume = 0.6;
                        player.loop = true;
                        player.src = songFile;
                        player.play().catch(err => console.warn(err));
                    }
                }
            }
        } else {
            const errorMsg = document.getElementById("loginErrorMsg");
            if (errorMsg) {
                errorMsg.textContent = "Incorrect password for Premium user.";
                errorMsg.style.display = "block";
            }
            playSynthSound('click');
        }
    } else {
        // Any other username is classified as Guest!
        const capitalizedUser = userVal ? (userVal.charAt(0).toUpperCase() + userVal.slice(1)) : "Guest";
        
        state.isPremium = false;
        state.currentUser = capitalizedUser;
        localStorage.setItem("aesthetica_premium", JSON.stringify(false));
        localStorage.setItem("aesthetica_premium_user", capitalizedUser);
        
        // Load Guest progress
        state.styleASP = parseInt(localStorage.getItem(`aesthetica_asp_guest`)) || 0;
        state.styleLevel = parseInt(localStorage.getItem(`aesthetica_level_guest`)) || 1;
        state.questStatus = JSON.parse(localStorage.getItem(`aesthetica_quests_guest`)) || { tarot: false, comment: false, battleCount: 0, fav: false };
        state.tarotFlipped = JSON.parse(localStorage.getItem(`aesthetica_tarot_flipped_guest`)) || false;
        
        document.body.classList.remove("premium-active");
        stopPremiumParticles();
        
        // Stop audio
        const player = document.getElementById("celebAudioPlayer");
        if (player) {
            player.pause();
            player.src = "";
        }
        
        updateDatabaseImages();
        updateAuthHeaderUI();
        updateQuestUI();
        renderGallery();
        closeLoginModal();
        
        playSynthSound('click');
        showPremiumToast(`Guest Mode: ${capitalizedUser}`, "Music and HD textures are locked. Purchase Premium to unlock.");
        
        // If modal was open, refresh the active image inside modal to standard low-res
        if (state.modalActiveId) {
            const item = celebrityDatabase.find(x => x.id === state.modalActiveId);
            if (item) {
                const modalImg = document.getElementById("modalImg");
                modalImg.src = item.imageOld;
                modalImg.classList.remove("celeb-dance-anim");
                const premiumBadge = document.getElementById("modalPremiumBadge");
                if (premiumBadge) premiumBadge.innerHTML = `<span class="premium-lock-tag" id="upgradeModalTrackBtn" title="Click to Upgrade to Premium"><i class="fa-solid fa-lock"></i> Go Premium (Audio Locked)</span>`;
                setTimeout(() => {
                    const upgradeBtn = document.getElementById("upgradeModalTrackBtn");
                    if (upgradeBtn) upgradeBtn.onclick = openLoginModal;
                }, 50);
            }
        }
    }
}

function handleLogout() {
    playSynthSound('click');
    
    state.isPremium = false;
    state.currentUser = "Guest";
    localStorage.setItem("aesthetica_premium", JSON.stringify(false));
    localStorage.setItem("aesthetica_premium_user", "Guest");
    
    document.body.classList.remove("premium-active");
    stopPremiumParticles();
    
    // Reset to Guest progress
    state.styleASP = parseInt(localStorage.getItem(`aesthetica_asp_guest`)) || 0;
    state.styleLevel = parseInt(localStorage.getItem(`aesthetica_level_guest`)) || 1;
    state.questStatus = JSON.parse(localStorage.getItem("aesthetica_quests_guest")) || { tarot: false, comment: false, battleCount: 0, fav: false };
    state.tarotFlipped = JSON.parse(localStorage.getItem("aesthetica_tarot_flipped_guest")) || false;
    
    // Stop audio
    const player = document.getElementById("celebAudioPlayer");
    if (player) {
        player.pause();
        player.src = "";
    }
    
    updateDatabaseImages();
    updateAuthHeaderUI();
    updateQuestUI();
    renderGallery();
    
    if (state.modalActiveId) {
        const item = celebrityDatabase.find(x => x.id === state.modalActiveId);
        if (item) {
            const modalImg = document.getElementById("modalImg");
            modalImg.src = item.imageOld;
            modalImg.classList.remove("celeb-dance-anim");
            const premiumBadge = document.getElementById("modalPremiumBadge");
            if (premiumBadge) premiumBadge.innerHTML = `<span class="premium-lock-tag" id="upgradeModalTrackBtn" title="Click to Upgrade to Premium"><i class="fa-solid fa-lock"></i> Go Premium (Audio Locked)</span>`;
            setTimeout(() => {
                const upgradeBtn = document.getElementById("upgradeModalTrackBtn");
                if (upgradeBtn) upgradeBtn.onclick = openLoginModal;
            }, 50);
        }
    }
    
    showPremiumToast("Guest Mode Enabled", "You are now viewing standard portfolios. Music and HD textures are locked.");
}

function updateAuthHeaderUI() {
    const container = document.getElementById("authHeaderContainer");
    if (!container) return;
    
    document.body.classList.toggle("premium-active", state.isPremium);
    
    if (state.isPremium) {
        container.innerHTML = `
            <span class="premium-user-badge" title="Authenticated Premium Member">
                <i class="fa-solid fa-crown" style="color: #ffd700;"></i> Premium: ${state.currentUser}
            </span>
            <button class="premium-logout-btn" id="logoutBtn" title="Logout from Premium">
                <i class="fa-solid fa-right-from-bracket"></i>
            </button>
        `;
        document.getElementById("logoutBtn").addEventListener("click", handleLogout);
    } else {
        const displayName = state.currentUser && state.currentUser !== "Guest" ? `Guest: ${state.currentUser}` : "Guest Mode";
        container.innerHTML = `
            <span class="guest-user-badge" style="color: #94a3b8; font-size: 11px; font-weight: 600; font-family: 'Outfit', sans-serif; margin-right: 10px; display: inline-flex; align-items: center; gap: 4px;">
                <i class="fa-solid fa-user" style="font-size: 10px;"></i> ${displayName}
            </span>
            <button class="control-btn action-btn premium-btn" id="loginOpenBtn" style="padding: 6px 12px; font-size: 11px; margin: 0;">
                <i class="fa-solid fa-crown"></i> Go Premium
            </button>
        `;
        document.getElementById("loginOpenBtn").addEventListener("click", openLoginModal);
    }
}

// Custom Premium Toast Warning System
function showPremiumToast(title, desc) {
    document.querySelectorAll(".premium-toast").forEach(t => t.remove());
    
    const toast = document.createElement("div");
    toast.className = "premium-toast";
    toast.innerHTML = `
        <div class="premium-toast-icon"><i class="fa-solid fa-crown"></i></div>
        <div class="premium-toast-body">
            <span class="premium-toast-title">${title}</span>
            <span class="premium-toast-desc">${desc}</span>
        </div>
        <button class="premium-toast-close">&times;</button>
    `;
    
    document.body.appendChild(toast);
    
    const closeBtn = toast.querySelector(".premium-toast-close");
    closeBtn.onclick = () => toast.remove();
    
    setTimeout(() => {
        if (toast.parentElement) toast.remove();
    }, 6000);
}

// Premium Floating Ambient Particles Background
function startPremiumParticles() {
    const existing = document.getElementById('premiumParticlesContainer');
    if (existing) return;

    const container = document.createElement('div');
    container.id = 'premiumParticlesContainer';
    container.className = 'premium-particles-container';
    document.body.appendChild(container);

    for (let i = 0; i < 25; i++) {
        const p = document.createElement('div');
        p.className = 'premium-particle';
        const size = Math.random() * 4 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDuration = (Math.random() * 15 + 10) + 's';
        p.style.animationDelay = (Math.random() * 10) + 's';
        p.style.opacity = Math.random() * 0.5 + 0.2;
        container.appendChild(p);
    }
}

function stopPremiumParticles() {
    const container = document.getElementById('premiumParticlesContainer');
    if (container) container.remove();
}

// --- HD vs SD Comparison Slider ---
// --- HD vs SD Comparison Slider ---
function renderHDCompareSlider(item) {
    const container = document.getElementById("premiumCompareContainer");
    if (!container) return;

    container.innerHTML = `
        <div style="font-family: 'Outfit', sans-serif; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h4 style="color: #ffd700; font-size: 13px; font-weight: 700; margin: 0 0 4px 0;"><i class="fa-solid fa-arrows-left-right"></i> HD vs SD Quality Comparison</h4>
                <p style="color: #94a3b8; font-size: 11px; margin: 0;">${state.isPremium ? 'Drag the golden slider to compare Standard vs Premium HD quality' : 'Upgrade to Premium to unlock interactive comparison'}</p>
            </div>
            ${!state.isPremium ? '<span style="background: rgba(255, 215, 0, 0.15); border: 1px solid #ffd700; color: #ffd700; padding: 2px 8px; border-radius: 20px; font-size: 9px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;"><i class="fa-solid fa-lock"></i> Locked</span>' : ''}
        </div>
        <div class="hd-comparison-wrapper" id="hdCompareWrapper" style="position: relative;">
            <img src="${item.imageOld}" class="sd-img-layer" alt="SD Quality">
            <img src="${item.imageHD}" class="hd-img-clip" id="hdClipImg" alt="HD Quality">
            <div class="hd-comparison-divider" id="hdDivider"></div>
            <div class="hd-comparison-handle" id="hdHandle"><i class="fa-solid fa-arrows-left-right"></i></div>
            <span class="hd-label-hd">✨ Premium HD</span>
            <span class="hd-label-sd">SD Standard</span>
            
            ${!state.isPremium ? `
            <div id="compareLockOverlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.45); backdrop-filter: blur(1.5px); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s;">
                <div style="background: rgba(0, 0, 0, 0.75); border: 1px solid rgba(255, 215, 0, 0.3); padding: 15px 25px; border-radius: 12px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.6); max-width: 80%;">
                    <div style="font-size: 20px; color: #ffd700; margin-bottom: 6px;"><i class="fa-solid fa-crown"></i></div>
                    <span style="font-size: 11px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 1px;">Unlock Quality Slider</span>
                    <p style="font-size: 9px; color: #94a3b8; margin: 4px 0 0 0; line-height: 1.4;">Premium users can drag the slider to compare HD vs SD resolution details!</p>
                </div>
            </div>
            ` : ''}
        </div>
    `;

    const wrapper = document.getElementById("hdCompareWrapper");
    const clipImg = document.getElementById("hdClipImg");
    const divider = document.getElementById("hdDivider");
    const handle = document.getElementById("hdHandle");

    if (state.isPremium) {
        let isDragging = false;

        function updateSlider(clientX) {
            const rect = wrapper.getBoundingClientRect();
            let pct = ((clientX - rect.left) / rect.width) * 100;
            pct = Math.max(2, Math.min(98, pct));
            clipImg.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
            divider.style.left = pct + '%';
            handle.style.left = pct + '%';
        }

        wrapper.addEventListener("mousedown", (e) => { isDragging = true; updateSlider(e.clientX); });
        wrapper.addEventListener("touchstart", (e) => { isDragging = true; updateSlider(e.touches[0].clientX); });
        document.addEventListener("mousemove", (e) => { if (isDragging) updateSlider(e.clientX); });
        document.addEventListener("touchmove", (e) => { if (isDragging) updateSlider(e.touches[0].clientX); });
        document.addEventListener("mouseup", () => isDragging = false);
        document.addEventListener("touchend", () => isDragging = false);
    } else {
        clipImg.style.clipPath = 'inset(0 50% 0 0)';
        divider.style.left = '50%';
        handle.style.left = '50%';
        handle.style.cursor = 'not-allowed';
        wrapper.style.cursor = 'pointer';

        const overlay = document.getElementById("compareLockOverlay");
        if (overlay) {
            overlay.onclick = () => {
                showPremiumToast("👑 Premium Feature Locked!", "Please purchase Premium membership to access interactive quality comparisons!");
                openLoginModal();
            };
        }
    }
}

// --- Premium Wallpaper Download Generator ---
function renderWallpaperTab(item) {
    const container = document.getElementById("premiumWallpaperContainer");
    if (!container) return;

    if (state.isPremium) {
        const styles = [
            { name: "Neon Glow", gradient: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)", textColor: "#ffd700" },
            { name: "Royal Gold", gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)", textColor: "#ffd700" },
            { name: "Midnight Rose", gradient: "linear-gradient(135deg, #0f0f0f, #2d132c, #801336)", textColor: "#ff6b9d" }
        ];

        container.innerHTML = `
            <div class="wallpaper-gen-panel">
                <h4 style="color: #ffd700; font-size: 13px; font-weight: 700; margin: 0 0 4px 0;">
                    <i class="fa-solid fa-image"></i> Premium Wallpaper Studio
                </h4>
                <p style="color: #94a3b8; font-size: 11px; margin: 0;">Click a style below to generate & download a custom phone wallpaper</p>
                <div class="wallpaper-preview-grid">
                    ${styles.map((s, i) => `
                        <div class="wallpaper-card" data-style-idx="${i}" title="Download ${s.name} Wallpaper">
                            <div style="width: 100%; height: 100%; background: ${s.gradient}; display: flex; align-items: center; justify-content: center;">
                                <img src="${item.imageHD}" style="width: 70%; height: 70%; object-fit: cover; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.5);" alt="${s.name}">
                            </div>
                            <div class="wallpaper-overlay"><span>${s.name}</span></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        container.querySelectorAll('.wallpaper-card').forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.getAttribute('data-style-idx'));
                generateWallpaperDownload(item, styles[idx]);
            });
        });
    } else {
        container.innerHTML = `
            <div style="text-align: center; padding: 30px; font-family: 'Outfit', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 290px; box-sizing: border-box; background: linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(9, 13, 26, 0.96)); border-radius: 16px; border: 1px solid rgba(255, 215, 0, 0.25);">
                <div style="font-size: 28px; color: #ffd700; margin-bottom: 10px;"><i class="fa-solid fa-crown"></i></div>
                <h3 style="font-size: 14px; font-weight: 700; color: #fff; margin-bottom: 6px;">Premium Wallpaper Studio</h3>
                <p style="font-size: 11px; color: #94a3b8; max-width: 280px; line-height: 1.5; margin-bottom: 14px;">
                    Upgrade to Premium to generate custom phone wallpapers from ${item.name}'s HD lookbook!
                </p>
                <button class="login-submit-btn" id="wallpaperUpgradeBtn" style="padding: 8px 20px; font-size: 11px; margin: 0; cursor: pointer;">Unlock Wallpapers</button>
            </div>
        `;
        setTimeout(() => {
            const btn = document.getElementById("wallpaperUpgradeBtn");
            if (btn) btn.onclick = openLoginModal;
        }, 50);
    }
}

function generateWallpaperDownload(item, style) {
    playSynthSound('success');
    const canvas = document.createElement('canvas');
    canvas.width = 540;
    canvas.height = 960;
    const ctx = canvas.getContext('2d');

    // Draw gradient background
    const grad = ctx.createLinearGradient(0, 0, 540, 960);
    const colors = style.gradient.match(/#[0-9a-fA-F]{6}/g) || ['#0f0c29', '#302b63', '#24243e'];
    colors.forEach((c, i) => grad.addColorStop(i / (colors.length - 1), c));
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 540, 960);

    // Draw decorative border
    ctx.strokeStyle = style.textColor;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.3;
    ctx.strokeRect(20, 20, 500, 920);
    ctx.globalAlpha = 1;

    // Load the HD image and draw
    const img = new Image();
    if (item.imageHD && item.imageHD.startsWith("http")) {
        img.crossOrigin = "anonymous";
    }
    img.onload = () => {
        // Draw celebrity photo
        const photoW = 440, photoH = 550;
        const photoX = (540 - photoW) / 2, photoY = 100;
        ctx.save();
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(photoX, photoY, photoW, photoH, 16);
        } else {
            ctx.rect(photoX, photoY, photoW, photoH);
        }
        ctx.clip();
        ctx.drawImage(img, photoX, photoY, photoW, photoH);
        ctx.restore();

        // Photo border glow
        ctx.strokeStyle = style.textColor;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(photoX, photoY, photoW, photoH, 16);
        } else {
            ctx.rect(photoX, photoY, photoW, photoH);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Brand header
        ctx.fillStyle = style.textColor;
        ctx.font = 'bold 18px Cinzel, serif';
        ctx.textAlign = 'center';
        ctx.fillText('AESTHETICA', 270, 60);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '600 10px Outfit, sans-serif';
        ctx.fillText('PREMIUM COLLECTION', 270, 78);

        // Celebrity name
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 28px Outfit, sans-serif';
        ctx.fillText(item.name.toUpperCase(), 270, 710);

        // Tagline
        ctx.fillStyle = style.textColor;
        ctx.font = '600 13px Outfit, sans-serif';
        ctx.fillText(item.tagline, 270, 735);

        // Style info
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = '500 10px Outfit, sans-serif';
        ctx.fillText(item.stylePalette, 270, 760);

        // Watermark
        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        ctx.font = '500 9px Outfit, sans-serif';
        ctx.fillText(`Designed by ${state.currentUser || 'Guest'} | ${style.name} Edition`, 270, 920);

        // Download
        try {
            const link = document.createElement('a');
            link.download = `Aesthetica_${item.name.replace(/\s/g, '_')}_${style.name.replace(/\s/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.warn("Canvas export failed under local security domain. Downloading relative image directly.", e);
            const link = document.createElement('a');
            link.download = `Aesthetica_Wallpaper_${item.name.replace(/\s/g, '_')}.png`;
            link.href = item.imageHD;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.open(item.imageHD, '_blank');
        }
    };
    img.onerror = () => {
        // Fallback drawing text and watermark if image fails to load
        ctx.fillStyle = style.textColor;
        ctx.font = 'bold 18px Cinzel, serif';
        ctx.textAlign = 'center';
        ctx.fillText('AESTHETICA', 270, 60);
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '600 10px Outfit, sans-serif';
        ctx.fillText('PREMIUM COLLECTION', 270, 78);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 28px Outfit, sans-serif';
        ctx.fillText(item.name.toUpperCase(), 270, 710);
        ctx.fillStyle = style.textColor;
        ctx.font = '600 13px Outfit, sans-serif';
        ctx.fillText(item.tagline, 270, 735);
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.font = '500 10px Outfit, sans-serif';
        ctx.fillText(item.stylePalette, 270, 760);
        ctx.fillStyle = 'rgba(255,255,255,0.15)';
        ctx.font = '500 9px Outfit, sans-serif';
        ctx.fillText(`Designed by ${state.currentUser || 'Guest'} | ${style.name} Edition`, 270, 920);

        try {
            const link = document.createElement('a');
            link.download = `Aesthetica_${item.name.replace(/\s/g, '_')}_${style.name.replace(/\s/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (e) {
            console.warn("Canvas export failed under local security domain.", e);
            const link = document.createElement('a');
            link.download = `Aesthetica_Wallpaper_${item.name.replace(/\s/g, '_')}.png`;
            link.href = item.imageHD;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.open(item.imageHD, '_blank');
        }
    };
    img.src = item.imageHD;
}

// Fullscreen Premium Sparkle Confetti Generator
function launchPremiumConfetti() {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "99999";
    container.style.overflow = "hidden";
    document.body.appendChild(container);

    const colors = ["#ffd700", "#ffa500", "#ffeed0", "#ffffff"];
    for (let i = 0; i < 60; i++) {
        const p = document.createElement("div");
        p.style.position = "absolute";
        p.style.width = Math.random() * 8 + 4 + "px";
        p.style.height = p.style.width;
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
        p.style.left = Math.random() * 100 + "vw";
        p.style.top = "-20px";
        p.style.opacity = Math.random() * 0.8 + 0.2;
        p.style.transform = `rotate(${Math.random() * 360}deg)`;
        
        container.appendChild(p);
        
        const duration = Math.random() * 2 + 1.5;
        const drift = (Math.random() - 0.5) * 200;
        
        p.animate([
            { transform: `translateY(0) rotate(0deg)`, opacity: p.style.opacity },
            { transform: `translateY(105vh) translateX(${drift}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: "cubic-bezier(0.1, 0.8, 0.3, 1)",
            fill: "forwards"
        });
    }

    setTimeout(() => container.remove(), 4000);
}

// --- Event Bindings & Startup Init ---
document.addEventListener("DOMContentLoaded", () => {
    checkQuestDate();
    updateQuestUI();
    setupTarotCard();
    
    // Set active images based on premium status
    updateDatabaseImages();
    updateAuthHeaderUI();
    if (state.isPremium) startPremiumParticles();
    
    applyTheme(state.currentTheme);
    initDynamicFilters();
    renderGallery();
    
    window.addEventListener("scroll", handlePageScroll);
    
    // Virtual routing listeners
    const questsBtn = document.getElementById("questsNavBtn");
    questsBtn.addEventListener("click", () => {
        const isQuestsView = document.body.classList.contains("quests-view-active");
        toggleVirtualPage(!isQuestsView);
    });
    
    document.getElementById("returnGalleryBtn").addEventListener("click", () => {
        toggleVirtualPage(false);
    });
    
    document.getElementById("logoClick").addEventListener("click", () => {
        toggleVirtualPage(false);
    });
    
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    
    searchInput.addEventListener("input", (e) => {
        state.searchQuery = e.target.value;
        if (state.searchQuery) {
            clearSearchBtn.classList.add("active");
        } else {
            clearSearchBtn.classList.remove("active");
        }
        renderGallery();
    });
    
    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        clearSearchBtn.classList.remove("active");
        renderGallery();
        playSynthSound('click');
    });
    
    document.getElementById("resetFiltersBtn").addEventListener("click", () => {
        searchInput.value = "";
        state.searchQuery = "";
        state.activeCategory = "all";
        state.activeTag = null;
        state.favoritesOnly = false;
        
        document.querySelectorAll("#categoryChips .chip").forEach(c => {
            if (c.getAttribute("data-filter") === "all") c.classList.add("active");
            else c.classList.remove("active");
        });
        
        document.querySelectorAll("#vibeTags .tag-chip").forEach(t => t.classList.remove("active"));
        
        const favBtn = document.getElementById("favFilterBtn");
        favBtn.classList.remove("active");
        favBtn.querySelector("i").className = "fa-regular fa-heart";
        
        clearSearchBtn.classList.remove("active");
        
        renderGallery();
        playSynthSound('click');
    });

    const favBtn = document.getElementById("favFilterBtn");
    favBtn.addEventListener("click", () => {
        playSynthSound('click');
        state.favoritesOnly = !state.favoritesOnly;
        
        if (state.favoritesOnly) {
            favBtn.classList.add("active");
            favBtn.querySelector("i").className = "fa-solid fa-heart";
        } else {
            favBtn.classList.remove("active");
            favBtn.querySelector("i").className = "fa-regular fa-heart";
        }
        renderGallery();
    });

    const themeTrigger = document.getElementById("themeBtnTrigger");
    const themeDropdown = document.getElementById("themeDropdown");
    
    themeTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        themeDropdown.classList.toggle("active");
        playSynthSound('click');
    });
    
    document.addEventListener("click", () => {
        themeDropdown.classList.remove("active");
    });
    
    document.querySelectorAll(".theme-option").forEach(opt => {
        opt.addEventListener("click", (e) => {
            e.stopPropagation();
            applyTheme(opt.getAttribute("data-theme"));
            themeDropdown.classList.remove("active");
            playSynthSound('success');
            
            if (state.modalActiveId) {
                const item = celebrityDatabase.find(x => x.id === state.modalActiveId);
                if (item) drawRadarChart(item.stats);
            }
        });
    });

    const soundBtn = document.getElementById("soundBtn");
    if (state.soundEnabled) {
        soundBtn.classList.add("active");
        soundBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
    } else {
        soundBtn.classList.remove("active");
        soundBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
    }
    
    soundBtn.addEventListener("click", () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem("aesthetica_sound", JSON.stringify(state.soundEnabled));
        
        if (state.soundEnabled) {
            soundBtn.classList.add("active");
            soundBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
            initAudio();
            playSynthSound('success');
        } else {
            soundBtn.classList.remove("active");
            soundBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
        }
    });

    const lofiPlayBtn = document.getElementById("lofiPlayBtn");
    lofiPlayBtn.addEventListener("click", () => {
        if (!state.isPremium) {
            showPremiumToast("👑 Premium Feature Locked!", "Please purchase Premium membership to access relaxing background beats!");
            openLoginModal();
            return;
        }
        if (!state.lofiPlaying) {
            startLoFiBeats();
            lofiPlayBtn.classList.add("active");
            lofiPlayBtn.innerHTML = `<i class="fa-solid fa-square-stop"></i> <span class="lofi-btn-text">Stop beats</span>`;
        } else {
            stopLoFiBeats();
            lofiPlayBtn.classList.remove("active");
            lofiPlayBtn.innerHTML = `<i class="fa-solid fa-headphones"></i> <span class="lofi-btn-text">Lo-Fi Beats</span>`;
        }
    });

    // Detail Modal Actions
    document.getElementById("modalCloseBtn").addEventListener("click", closeDetailModal);
    document.getElementById("detailModal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("detailModal")) closeDetailModal();
    });
    
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            playSynthSound('click');
            setActiveTab(btn.getAttribute("data-tab"));
        });
    });

    // Comment Form Submission
    document.getElementById("commentForm").addEventListener("submit", (e) => {
        e.preventDefault();
        
        const activeId = state.modalActiveId;
        if (!activeId) return;
        
        const nameInput = document.getElementById("commentUser");
        const textInput = document.getElementById("commentText");
        const activeAvatar = document.querySelector(".avatar-opt.active").textContent;
        
        const newComm = {
            name: nameInput.value,
            text: textInput.value,
            avatar: activeAvatar,
            time: "Just now"
        };
        
        if (!state.comments[activeId]) {
            state.comments[activeId] = [
                { name: "Sneha", text: "Absolute styling goals! Perfect fit. ✨", avatar: "✨", time: "2 hours ago" },
                { name: "Varun", text: "The camera lighting here is next level.", avatar: "😎", time: "4 hours ago" }
            ];
        }
        
        state.comments[activeId].push(newComm);
        localStorage.setItem("aesthetica_comments", JSON.stringify(state.comments));
        
        renderComments(activeId);
        textInput.value = "";
        playSynthSound('success');
        
        completeQuest("comment");
    });

    document.querySelectorAll(".avatar-opt").forEach(opt => {
        opt.addEventListener("click", () => {
            document.querySelectorAll(".avatar-opt").forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
            playSynthSound('click');
        });
    });

    // Quiz Triggers
    document.getElementById("quizOpenBtn").addEventListener("click", startQuiz);
    document.getElementById("quizCloseBtn").addEventListener("click", closeQuiz);
    document.getElementById("quizModal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("quizModal")) closeQuiz();
    });
    
    document.querySelectorAll(".quiz-option").forEach(opt => {
        opt.addEventListener("click", () => {
            const val = opt.getAttribute("data-value");
            selectQuizOption(val);
        });
    });
    
    document.getElementById("quizRestartBtn").onclick = startQuiz;

    // Fashion Battle Triggers
    document.getElementById("battleOpenBtn").addEventListener("click", startBattle);
    document.getElementById("battleCloseBtn").addEventListener("click", closeBattle);
    document.getElementById("battleModal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("battleModal")) closeBattle();
    });
    
    document.getElementById("battleCardLeft").addEventListener("click", () => castBattleVote('left'));
    document.getElementById("battleCardRight").addEventListener("click", () => castBattleVote('right'));
    document.getElementById("nextBattleBtn").addEventListener("click", () => {
        playSynthSound('click');
        setupNewBattle();
    });

    // Canvas Downloads Triggers
    document.getElementById("downloadCardBtn").addEventListener("click", generateFashionCard);
    document.getElementById("downloadBadgeBtn").addEventListener("click", generateVibeBadge);
    
    // Premium Auth Modal Listeners
    document.getElementById("loginForm").addEventListener("submit", handleLoginSubmit);
    document.getElementById("loginCloseBtn").addEventListener("click", closeLoginModal);
    document.getElementById("loginGuestBtn").addEventListener("click", () => {
        document.getElementById("loginUsername").value = "Guest";
        document.getElementById("loginPassword").value = "";
        const form = document.getElementById("loginForm");
        if (form) form.dispatchEvent(new Event('submit'));
    });
    document.getElementById("loginModal").addEventListener("click", (e) => {
        if (e.target === document.getElementById("loginModal")) closeLoginModal();
    });
});
