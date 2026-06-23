const topicDatabase = [
    { id: 'four-ops', name: 'Four Operations', category: 'Number', grade: '1-3', gradeNum: 1 },
    { id: 'place-value', name: 'Place Value', category: 'Number', grade: '1-3', gradeNum: 1 },
    { id: 'rounding', name: 'Rounding & Estimation', category: 'Number', grade: '1-3', gradeNum: 1 },
    { id: 'bidmas', name: 'Order of Operations', category: 'Number', grade: '1-3', gradeNum: 1 },
    { id: 'factors', name: 'Factors, Multiples & Primes', category: 'Number', grade: '1-3', gradeNum: 1 },
    { id: 'hcf-lcm', name: 'HCF & LCM', category: 'Number', grade: '1-3', gradeNum: 2 },
    { id: 'negatives', name: 'Negative Numbers', category: 'Number', grade: '1-3', gradeNum: 1 },
    { id: 'fractions-basic', name: 'Fractions', category: 'Number', grade: '1-3', gradeNum: 2 },
    { id: 'decimals', name: 'Decimals', category: 'Number', grade: '1-3', gradeNum: 1 },
    { id: 'percentages-basic', name: 'Percentages', category: 'Number', grade: '1-3', gradeNum: 2 },
    { id: 'ratio-simple', name: 'Simplifying Ratios', category: 'Ratio', grade: '1-3', gradeNum: 2 },
    { id: 'collect-terms', name: 'Collecting Like Terms', category: 'Algebra', grade: '1-3', gradeNum: 1 },
    { id: 'expand-single', name: 'Expanding Brackets', category: 'Algebra', grade: '1-3', gradeNum: 2 },
    { id: 'substitution', name: 'Substitution', category: 'Algebra', grade: '1-3', gradeNum: 2 },
    { id: 'one-step-eq', name: 'One-Step Equations', category: 'Algebra', grade: '1-3', gradeNum: 1 },
    { id: 'two-step-eq', name: 'Two-Step Equations', category: 'Algebra', grade: '1-3', gradeNum: 2 },
    { id: 'coordinates', name: 'Coordinates', category: 'Algebra', grade: '1-3', gradeNum: 1 },
    { id: 'angle-facts', name: 'Angle Facts', category: 'Geometry', grade: '1-3', gradeNum: 1 },
    { id: 'parallel-lines', name: 'Angles in Parallel Lines', category: 'Geometry', grade: '1-3', gradeNum: 2 },
    { id: 'shape-props', name: 'Properties of Shapes', category: 'Geometry', grade: '1-3', gradeNum: 1 },
    { id: 'perimeter', name: 'Perimeter', category: 'Geometry', grade: '1-3', gradeNum: 1 },
    { id: 'area-rect', name: 'Area of Rectangles & Triangles', category: 'Geometry', grade: '1-3', gradeNum: 2 },
    { id: 'units', name: 'Units & Conversions', category: 'Geometry', grade: '1-3', gradeNum: 1 },
    { id: 'averages', name: 'Averages & Range', category: 'Statistics', grade: '1-3', gradeNum: 2 },
    { id: 'frequency-tables', name: 'Frequency Tables', category: 'Statistics', grade: '1-3', gradeNum: 2 },
    { id: 'bar-charts', name: 'Bar Charts & Pictograms', category: 'Statistics', grade: '1-3', gradeNum: 1 },
    { id: 'pct-inc-dec', name: 'Percentage Change', category: 'Number', grade: '3-5', gradeNum: 3 },
    { id: 'reverse-pct', name: 'Reverse Percentages', category: 'Number', grade: '3-5', gradeNum: 4 },
    { id: 'fraction-of-amount', name: 'Fractions of Amounts', category: 'Number', grade: '3-5', gradeNum: 3 },
    { id: 'sharing-ratio', name: 'Sharing in a Ratio', category: 'Ratio', grade: '3-5', gradeNum: 3 },
    { id: 'best-buys', name: 'Best Buys', category: 'Ratio', grade: '3-5', gradeNum: 4 },
    { id: 'linear-graphs', name: 'Linear Graphs', category: 'Algebra', grade: '3-5', gradeNum: 4 },
    { id: 'rearranging', name: 'Rearranging Formulae', category: 'Algebra', grade: '3-5', gradeNum: 4 },
    { id: 'forming-expr', name: 'Forming Equations', category: 'Algebra', grade: '3-5', gradeNum: 3 },
    { id: 'expand-double', name: 'Expanding Double Brackets', category: 'Algebra', grade: '3-5', gradeNum: 4 },
    { id: 'factorising', name: 'Factorising', category: 'Algebra', grade: '3-5', gradeNum: 4 },
    { id: 'solving-linear', name: 'Solving Linear Equations', category: 'Algebra', grade: '3-5', gradeNum: 3 },
    { id: 'inequalities', name: 'Inequalities', category: 'Algebra', grade: '3-5', gradeNum: 4 },
    { id: 'sequences', name: 'Sequences', category: 'Algebra', grade: '3-5', gradeNum: 3 },
    { id: 'compound-area', name: 'Compound Area', category: 'Geometry', grade: '3-5', gradeNum: 3 },
    { id: 'circumference', name: 'Circumference', category: 'Geometry', grade: '3-5', gradeNum: 4 },
    { id: 'area-circles', name: 'Area of Circles', category: 'Geometry', grade: '3-5', gradeNum: 4 },
    { id: 'volume-prisms', name: 'Volume of Prisms', category: 'Geometry', grade: '3-5', gradeNum: 4 },
    { id: 'surface-area', name: 'Surface Area', category: 'Geometry', grade: '3-5', gradeNum: 5 },
    { id: 'transformations', name: 'Transformations', category: 'Geometry', grade: '3-5', gradeNum: 4 },
    { id: 'scatter-graphs', name: 'Scatter Graphs', category: 'Statistics', grade: '3-5', gradeNum: 3 },
    { id: 'probability-basic', name: 'Probability', category: 'Statistics', grade: '3-5', gradeNum: 3 },
    { id: 'frequency-trees', name: 'Frequency Trees', category: 'Statistics', grade: '3-5', gradeNum: 4 },
    { id: 'standard-form', name: 'Standard Form', category: 'Number', grade: '5-7', gradeNum: 5 },
    { id: 'compound-interest', name: 'Compound Interest', category: 'Number', grade: '5-7', gradeNum: 6 },
    { id: 'bounds', name: 'Bounds & Error Intervals', category: 'Number', grade: '5-7', gradeNum: 6 },
    { id: 'simultaneous', name: 'Simultaneous Equations', category: 'Algebra', grade: '5-7', gradeNum: 6 },
    { id: 'quadratics-factor', name: 'Factorising Quadratics', category: 'Algebra', grade: '5-7', gradeNum: 5 },
    { id: 'quadratic-formula', name: 'Quadratic Formula', category: 'Algebra', grade: '5-7', gradeNum: 6 },
    { id: 'completing-square', name: 'Completing the Square', category: 'Algebra', grade: '5-7', gradeNum: 7 },
    { id: 'quadratic-graphs', name: 'Quadratic Graphs', category: 'Algebra', grade: '5-7', gradeNum: 6 },
    { id: 'functions-basic', name: 'Functions', category: 'Algebra', grade: '5-7', gradeNum: 6 },
    { id: 'iteration', name: 'Iteration', category: 'Algebra', grade: '5-7', gradeNum: 7 },
    { id: 'similar-shapes', name: 'Similar Shapes', category: 'Geometry', grade: '5-7', gradeNum: 6 },
    { id: 'trigonometry', name: 'Trigonometry', category: 'Geometry', grade: '5-7', gradeNum: 6 },
    { id: 'exact-trig', name: 'Exact Trig Values', category: 'Geometry', grade: '5-7', gradeNum: 7 },
    { id: 'sectors-arcs', name: 'Sectors & Arcs', category: 'Geometry', grade: '5-7', gradeNum: 6 },
    { id: 'pythagoras-3d', name: 'Pythagoras (3D)', category: 'Geometry', grade: '5-7', gradeNum: 6 },
    { id: 'histograms', name: 'Histograms', category: 'Statistics', grade: '5-7', gradeNum: 7 },
    { id: 'cumulative-freq', name: 'Cumulative Frequency', category: 'Statistics', grade: '5-7', gradeNum: 6 },
    { id: 'box-plots', name: 'Box Plots', category: 'Statistics', grade: '5-7', gradeNum: 6 },
    { id: 'tree-diagrams', name: 'Tree Diagrams', category: 'Statistics', grade: '5-7', gradeNum: 6 },
    { id: 'surds', name: 'Surds', category: 'Number', grade: '7-9', gradeNum: 8 },
    { id: 'exponential', name: 'Exponential Growth', category: 'Number', grade: '7-9', gradeNum: 8 },
    { id: 'algebraic-fractions', name: 'Algebraic Fractions', category: 'Algebra', grade: '7-9', gradeNum: 8 },
    { id: 'proof', name: 'Algebraic Proof', category: 'Algebra', grade: '7-9', gradeNum: 9 },
    { id: 'functions-advanced', name: 'Composite Functions', category: 'Algebra', grade: '7-9', gradeNum: 8 },
    { id: 'quadratic-inequalities', name: 'Quadratic Inequalities', category: 'Algebra', grade: '7-9', gradeNum: 8 },
    { id: 'circle-theorems', name: 'Circle Theorems', category: 'Geometry', grade: '7-9', gradeNum: 8 },
    { id: 'sine-cosine-rule', name: 'Sine & Cosine Rule', category: 'Geometry', grade: '7-9', gradeNum: 8 },
    { id: 'area-non-right', name: 'Area of Any Triangle', category: 'Geometry', grade: '7-9', gradeNum: 7 },
    { id: 'vectors', name: 'Vectors', category: 'Geometry', grade: '7-9', gradeNum: 8 },
    { id: 'loci', name: 'Loci & Construction', category: 'Geometry', grade: '7-9', gradeNum: 7 },
    { id: 'direct-proportion', name: 'Direct & Inverse Proportion', category: 'Ratio', grade: '7-9', gradeNum: 8 },
    { id: 'compound-measures', name: 'Compound Measures', category: 'Ratio', grade: '7-9', gradeNum: 7 },
    { id: 'venn-diagrams', name: 'Venn Diagrams', category: 'Statistics', grade: '7-9', gradeNum: 7 },
];

const categoryDisplay = {
    'Number': 'Number',
    'Algebra': 'Algebra',
    'Ratio': 'Ratio & Proportion',
    'Geometry': 'Geometry & Measures',
    'Statistics': 'Statistics & Probability'
};
const categoryOrder = ['Number', 'Algebra', 'Ratio & Proportion', 'Geometry & Measures', 'Statistics & Probability'];

let completed = JSON.parse(localStorage.getItem('gcse_completed') || '{}');
let favourites = JSON.parse(localStorage.getItem('gcse_favourites') || '{}');
let currentGrade = 'all';
let currentView = 'topics';
let searchTerm = '';
let ppState = 'tiers';

function save() {
    localStorage.setItem('gcse_completed', JSON.stringify(completed));
    localStorage.setItem('gcse_favourites', JSON.stringify(favourites));
}
function updateProgress() {
    const done = Object.values(completed).filter(v => v).length;
    const pct = Math.round((done / topicDatabase.length) * 100);
    document.getElementById('progressLabel').textContent = pct + '%';
}
function toggleComplete(id) { completed[id] = !completed[id]; save(); updateProgress(); render(); }
function toggleFavourite(id) { favourites[id] = !favourites[id]; save(); render(); }

function handleSearch() {
    searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    render();
}

function navigateTo(view) {
    currentView = view;
    if (view === 'pastpapers') { ppState = 'tiers'; }
    updateNavHighlight();
    render();
}

function showGrade(grade) {
    currentGrade = grade;
    currentView = 'topics';
    updateNavHighlight();
    render();
}

function showFavourites() {
    currentGrade = 'favourites';
    currentView = 'topics';
    updateNavHighlight();
    render();
}

function updateNavHighlight() {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if (currentView === 'pastpapers') {
        document.querySelector('[data-view="pastpapers"]')?.classList.add('active');
    } else if (currentGrade === 'all' || currentGrade === 'favourites') {
        document.querySelector('[data-view="topics"]')?.classList.add('active');
    } else {
        const map = { '1-3': 'grade-1-3', '3-5': 'grade-3-5', '5-7': 'grade-5-7', '7-9': 'grade-7-9' };
        document.querySelector(`[data-view="${map[currentGrade]}"]`)?.classList.add('active');
    }
}

function getFilteredTopics() {
    let topics = [...topicDatabase];
    if (currentGrade === 'favourites') topics = topics.filter(t => favourites[t.id]);
    else if (currentGrade !== 'all') topics = topics.filter(t => t.grade === currentGrade);
    if (searchTerm) topics = topics.filter(t => t.name.toLowerCase().includes(searchTerm) || t.category.toLowerCase().includes(searchTerm) || t.grade.includes(searchTerm));
    return topics;
}

function render() {
    if (currentView === 'pastpapers') renderPastPapers();
    else renderTopics();
}

function renderTopics() {
    const main = document.getElementById('mainContent');
    const topics = getFilteredTopics();
    
    if (!topics.length) {
        main.innerHTML = '<div class="empty-state"><h3>No topics found</h3><p>Try a different search or filter.</p></div>';
        updateProgress();
        return;
    }
    
    // Add hero section if viewing all topics (homepage)
    if (currentGrade === 'all' && !searchTerm && currentView === 'topics') {
        main.innerHTML = generateHomepage() + generateTopicsGrid(topics);
    } else {
        main.innerHTML = generateTopicsGrid(topics);
    }
    
    updateProgress();
}

function generateHomepage() {
    return `
        <div class="hero-section">
            <div class="hero-content">
                <div class="hero-badge">
                    <span class="pulse-dot"></span>
                    AI-Powered Learning
                </div>
                <h1 class="hero-title">
                    Welcome to <span class="gradient-text">STEM Portal</span>
                </h1>
                <p class="hero-subtitle">
                    The ultimate destination for Edexcel GCSE Mathematics revision. 
                    Access brandnew practice papers, comprehensive topic guides, 
                    and smart revision tools — all in one place.
                </p>
                <div class="hero-stats">
                    <div class="stat-card">
                        <span class="stat-number">80+</span>
                        <span class="stat-label">Topics Covered</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">30</span>
                        <span class="stat-label">Practice Papers</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">24/7</span>
                        <span class="stat-label">Access Available</span>
                    </div>
                </div>
                <div class="hero-actions">
                    <button class="cta-button primary" onclick="navigateTo('pastpapers')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        Try Practice Papers
                    </button>
                    <button class="cta-button secondary" onclick="document.getElementById('searchInput').focus()">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        Search Topics
                    </button>
                </div>
            </div>
            
            <div class="hero-visual">
                <div class="floating-shapes">
                    <div class="shape shape-1">∑</div>
                    <div class="shape shape-2">∫</div>
                    <div class="shape shape-3">π</div>
                    <div class="shape shape-4">√</div>
                </div>
                <div class="hero-paper-preview">
                    <div class="paper-preview-card">
                        <div class="preview-header">
                            <div class="preview-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div class="preview-content">
                            <div class="preview-line"></div>
                            <div class="preview-line short"></div>
                            <div class="preview-line"></div>
                            <div class="preview-line short"></div>
                            <div class="preview-formula">E = mc²</div>
                            <div class="preview-line"></div>
                            <div class="preview-line short"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="features-section">
            <h2 class="section-title">Why Choose <span class="gradient-text">STEM Portal</span>?</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon ai-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2a4 4 0 0 1 4 4v1h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2V6a4 4 0 0 1 4-4z"/>
                            <path d="M9 12h6M9 16h6"/>
                        </svg>
                    </div>
                    <h3>AI-Generated Papers</h3>
                    <p>Every practice paper is uniquely generated by our advanced AI, ensuring fresh questions that mirror real Edexcel exam patterns.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon instant-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                    </div>
                    <h3>Instant Access</h3>
                    <p>No waiting, no subscriptions. Access all 30 practice papers across Foundation and Higher tiers instantly, 24/7.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon comprehensive-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                        </svg>
                    </div>
                    <h3>Full Syllabus Coverage</h3>
                    <p>80+ topics mapped to the Edexcel specification, from Grade 1 to Grade 9, ensuring complete exam preparation.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon smart-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        </svg>
                    </div>
                    <h3>Smart Progress Tracking</h3>
                    <p>Track your completion across every topic, mark favourites, and monitor your revision progress with our built-in tracker.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon answers-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 12l2 2 4-4"/>
                            <path d="M21 12c0 4.97-4.03 9-9 9a9.1 9.1 0 0 1-5.3-1.7L3 21l1.7-3.7A9 9 0 1 1 21 12z"/>
                        </svg>
                    </div>
                    <h3>Detailed Mark Schemes</h3>
                    <p>Every paper comes with a comprehensive mark scheme, showing method marks and step-by-step solutions.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon edexcel-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2"/>
                            <line x1="8" y1="21" x2="16" y2="21"/>
                            <line x1="12" y1="17" x2="12" y2="21"/>
                        </svg>
                    </div>
                    <h3>Edexcel-Specific Format</h3>
                    <p>Papers follow the exact Edexcel structure: 80 marks, 1 hour 30 minutes, with non-calculator and calculator papers.</p>
                </div>
            </div>
        </div>

        <div class="testimonial-section">
            <div class="testimonial-card">
                <div class="testimonial-quote">"</div>
                <p class="testimonial-text">
                    STEM Portal revolutionized my GCSE Maths revision. The AI-generated papers felt exactly like the real thing, 
                    and the instant mark schemes helped me understand where I went wrong.
                </p>
                <div class="testimonial-author">
                    <div class="author-avatar">SG</div>
                    <div>
                        <strong>Sarah G.</strong>
                        <span>Grade 9 Student</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateTopicsGrid(topics) {
    const grouped = {};
    categoryOrder.forEach(c => grouped[c] = []);
    topics.forEach(t => {
        const cat = categoryDisplay[t.category] || 'Number';
        if (grouped[cat]) grouped[cat].push(t);
    });
    
    let html = '';
    for (const [cat, items] of Object.entries(grouped)) {
        if (!items.length) continue;
        html += `<section class="category"><div class="category-title">${cat}</div><div class="topic-grid">`;
        items.forEach(t => {
            const tagClass = t.gradeNum <= 2 ? 'tag-easy' : t.gradeNum <= 4 ? 'tag-medium' : t.gradeNum <= 6 ? 'tag-hard' : 'tag-advanced';
            html += `
                    <div class="topic-card ${completed[t.id] ? 'completed' : ''}" onclick="openTopicModal('${t.id}')">
                        <div class="topic-check" onclick="event.stopPropagation();toggleComplete('${t.id}')">${completed[t.id] ? '&#10003;' : ''}</div>
                        <div class="topic-info">
                            <div class="topic-name">${t.name}</div>
                            <div class="topic-meta"><span class="grade-tag ${tagClass}">Grade ${t.grade}</span></div>
                        </div>
                        <button class="favourite-btn ${favourites[t.id] ? 'active' : ''}" onclick="event.stopPropagation();toggleFavourite('${t.id}')">${favourites[t.id] ? '★' : '☆'}</button>
                    </div>`;
        });
        html += '</div></section>';
    }
    return html;
}

function renderPastPapers() {
    const main = document.getElementById('mainContent');
    if (ppState === 'tiers') {
        main.innerHTML = `
                <div class="pp-container">
                    <h2 class="pp-title">Practise Papers</h2>
                    <p class="pp-subtitle">Select a tier to access Edexcel GCSE Mathematics papers with mark schemes and worked solutions.</p>
                    <div class="tier-grid">
                        <div class="tier-card" onclick="ppState='foundation';renderPastPapers()">
                            <h3>Foundation Tier</h3>
                            <span class="tier-badge badge-foundation">Grades 1–5</span>
                            <p class="tier-range">Papers 1, 2 & 3</p>
                        </div>
                        <div class="tier-card" onclick="ppState='higher';renderPastPapers()">
                            <h3>Higher Tier</h3>
                            <span class="tier-badge badge-higher">Grades 4–9</span>
                            <p class="tier-range">Papers 1, 2 & 3</p>
                        </div>
                    </div>
                </div>`;
    } else if (ppState === 'foundation') {
        main.innerHTML = generatePastPaperList('Foundation');
    } else if (ppState === 'higher') {
        main.innerHTML = generatePastPaperList('Higher');
    }
}

function generatePastPaperList(tier) {
    const papers = [
        { num: 1, type: 'Non-Calculator' },
        { num: 2, type: 'Calculator' },
        { num: 3, type: 'Calculator' }
    ];
    
    const years = [
        { year: '2023', month: 'June' },
        { year: '2022', month: 'June' },
        { year: '2022', month: 'November' },
        { year: '2021', month: 'November' },
        { year: '2020', month: 'November' }
    ];
    
    let html = `
        <div class="pp-container">
            <button class="back-link" onclick="ppState='tiers';renderPastPapers()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                Back to tiers
            </button>
            <h2 class="pp-title">${tier} Tier Practise Papers</h2>
            <p class="pp-subtitle">Select a paper to view questions, mark scheme, and worked solutions.</p>
    `;
    
    papers.forEach(paper => {
        html += `
            <div class="paper-section">
                <h3 class="paper-section-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    Paper ${paper.num} — ${paper.type}
                </h3>
                <div class="paper-links-grid">`;
        
        years.forEach(y => {
            html += `
                    <div class="paper-link-card" onclick="openPastPaper('${tier.toLowerCase()}', ${paper.num}, '${y.month} ${y.year}')">
                        <div class="paper-link-year">${y.month} ${y.year}</div>
                        <div class="paper-link-info">
                            <span class="paper-link-badge">Paper ${paper.num}</span>
                            <span class="paper-link-badge ${tier.toLowerCase()}">${tier}</span>
                        </div>
                        <svg class="paper-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </div>`;
        });
        
        html += `
                </div>
            </div>`;
    });
    
    html += '</div>';
    return html;
}

// Replace the openPastPaper function with this:
// Replace the renderPastPapers function
function renderPastPapers() {
    const main = document.getElementById('mainContent');
    if (ppState === 'tiers') {
        main.innerHTML = `
                <div class="pp-container">
                    <h2 class="pp-title">Practise Papers</h2>
                    <p class="pp-subtitle">Select a tier to access Edexcel GCSE Mathematics practice papers with questions and mark schemes.</p>
                    <div class="tier-grid">
                        <div class="tier-card" onclick="ppState='foundation';renderPastPapers()">
                            <h3>Foundation Tier</h3>
                            <span class="tier-badge badge-foundation">Grades 1–5</span>
                            <p class="tier-range">Papers 1, 2 & 3</p>
                        </div>
                        <div class="tier-card" onclick="ppState='higher';renderPastPapers()">
                            <h3>Higher Tier</h3>
                            <span class="tier-badge badge-higher">Grades 4–9</span>
                            <p class="tier-range">Papers 1, 2 & 3</p>
                        </div>
                    </div>
                </div>`;
    } else if (ppState === 'foundation') {
        main.innerHTML = generatePracticePaperList('Foundation');
    } else if (ppState === 'higher') {
        main.innerHTML = generatePracticePaperList('Higher');
    }
}

// Replace generatePastPaperList with generatePracticePaperList
function generatePracticePaperList(tier) {
    const papers = [
        { num: 1, type: 'Non-Calculator' },
        { num: 2, type: 'Calculator' },
        { num: 3, type: 'Calculator' }
    ];
    
    const practicePapers = [
        { num: 1, name: 'Practice Paper 1' },
        { num: 2, name: 'Practice Paper 2' },
        { num: 3, name: 'Practice Paper 3' },
        { num: 4, name: 'Practice Paper 4' },
        { num: 5, name: 'Practice Paper 5' }
    ];
    
    let html = `
        <div class="pp-container">
            <button class="back-link" onclick="ppState='tiers';renderPastPapers()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                Back to tiers
            </button>
            <h2 class="pp-title">${tier} Tier Practice Papers</h2>
            <p class="pp-subtitle">Select a practice paper to view the question paper or mark scheme.</p>
    `;
    
    papers.forEach(paper => {
        html += `
            <div class="paper-section">
                <h3 class="paper-section-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                    </svg>
                    Paper ${paper.num} — ${paper.type}
                </h3>
                <div class="paper-links-grid">`;
        
        practicePapers.forEach(pp => {
            html += `
                    <div class="paper-link-card" onclick="openPracticePaper('${tier.toLowerCase()}', ${paper.num}, ${pp.num})">
                        <div class="paper-link-year">${pp.name}</div>
                        <div class="paper-link-info">
                            <span class="paper-link-badge">Paper ${paper.num}</span>
                            <span class="paper-link-badge ${tier.toLowerCase()}">${tier}</span>
                        </div>
                        <svg class="paper-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="9 18 15 12 9 6"/>
                        </svg>
                    </div>`;
        });
        
        html += `
                </div>
            </div>`;
    });
    
    html += '</div>';
    return html;
}

// Replace openPastPaper with openPracticePaper
function openPracticePaper(tier, paperNum, practiceNum) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalContent');
    const label = tier === 'higher' ? 'Higher' : 'Foundation';
    const calc = paperNum === 1 ? 'Non-Calculator' : 'Calculator';
    
    overlay.classList.remove('hidden');
    modal.innerHTML = `
        <button class="modal-close" onclick="closeModal()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="paper-choice-modal">
            <div class="paper-choice-header">
                <h2>${label} Tier — Paper ${paperNum}</h2>
                <p class="paper-choice-subtitle">Practice Paper ${practiceNum} · ${calc} · 80 marks · 1 hour 30 minutes</p>
            </div>
            
            <div class="paper-choice-grid">
                <div class="paper-choice-card questions-card" onclick="openPDF('${tier}', ${paperNum}, ${practiceNum}, 'questions')">
                    <div class="paper-choice-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <line x1="16" y1="13" x2="8" y2="13"/>
                            <line x1="16" y1="17" x2="8" y2="17"/>
                            <polyline points="10 9 9 9 8 9"/>
                        </svg>
                    </div>
                    <h3>Question Paper</h3>
                    <p>View the full question paper with all questions and working spaces</p>
                    <span class="paper-choice-badge">PDF</span>
                </div>
                
                <div class="paper-choice-card markscheme-card" onclick="openPDF('${tier}', ${paperNum}, ${practiceNum}, 'markscheme')">
                    <div class="paper-choice-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                            <path d="M9 15l2 2 4-4"/>
                        </svg>
                    </div>
                    <h3>Mark Scheme</h3>
                    <p>View detailed mark scheme with method marks and answers</p>
                    <span class="paper-choice-badge">PDF</span>
                </div>
            </div>
            <br/>
            <button style="float: right;" class="btn" onclick="closeModal()">Close</button>
        </div>`;
}

// Replace openPDF with updated version for practice papers
function openPDF(tier, paperNum, practiceNum, type) {
    const label = tier === 'higher' ? 'Higher' : 'Foundation';
    const tierName = tier.toLowerCase();
    const typeLabel = type === 'questions' ? 'Question Paper' : 'Mark Scheme';
    const calc = paperNum === 1 ? 'Non-Calculator' : 'Calculator';
    
    // Generate PDF filename in format: practisepaperX_paperX_foundation/higher.pdf
    // For questions: practisepaper1_paper1_foundation.pdf
    // For markscheme: practisepaper1_paper1_foundation_ms.pdf
    const typeSuffix = type === 'markscheme' ? '_ms' : '';
    const filename = `practisepaper${practiceNum}_paper${paperNum}_${tierName}${typeSuffix}.pdf`;
    
    // Create an overlay message
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalContent');
    
    modal.innerHTML = `
        <button class="modal-close" onclick="closeModal()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="pdf-loading-modal">
            <div class="pdf-loading-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
            </div>
            <h3>${typeLabel}</h3>
            <p class="pdf-filename">${filename}</p>
            <p class="pdf-info">${label} Tier · Paper ${paperNum} · Practice Paper ${practiceNum} · ${calc}</p>
            
            <div class="pdf-actions">
                <button class="btn btn-primary" onclick="window.open('pdfs/${filename}', '_blank')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Open PDF
                </button>
                <button class="btn" onclick="closeModal()">Close</button>
            </div>
        </div>`;
}


function openTopicModal(id) {
    const t = topicDatabase.find(x => x.id === id);
    if (!t) return;
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalContent');
    const tagClass = t.gradeNum <= 2 ? 'tag-easy' : t.gradeNum <= 4 ? 'tag-medium' : t.gradeNum <= 6 ? 'tag-hard' : 'tag-advanced';
    overlay.classList.remove('hidden');
    modal.innerHTML = `
                <button class="modal-close" onclick="closeModal()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
                <h2>${t.name}</h2>
                <p class="modal-subtitle"><span class="grade-tag ${tagClass}">Grade ${t.grade}</span> · ${categoryDisplay[t.category] || t.category}</p>
                <div class="tab-nav">
                    <button class="tab-btn active" data-tab="learn">Learn</button>
                    <button class="tab-btn" data-tab="examples">Worked Examples</button>
                    <button class="tab-btn" data-tab="exam">Exam Questions</button>
                    <button class="tab-btn" data-tab="practice">Practice Questions</button>
                    <button class="tab-btn" data-tab="markscheme">Mark Scheme</button>
                </div>
                <div class="tab-panel" data-tab="learn">${generateLearn(t)}</div>
                <div class="tab-panel hidden" data-tab="examples">${generateExamples(t)}</div>
                <div class="tab-panel hidden" data-tab="exam">${generateExam(t)}</div>
                <div class="tab-panel hidden" data-tab="practice">${generatePractice(t)}</div>
                <div class="tab-panel hidden" data-tab="markscheme">${generateMarkScheme(t)}</div>`;
    setupTabs(modal);
}

function setupTabs(modal) {
    // Find the specific container holding the buttons and panels
    const container = modal.querySelector('.tabs-container')?.parentElement || modal;

    container.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const targetTab = this.getAttribute('data-tab');
            if (!targetTab) return;

            // 1. Reset all buttons inside this container only
            container.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('active');
            });

            // 2. Hide all panels inside this container only
            container.querySelectorAll('.tab-panel').forEach(p => {
                p.classList.add('hidden');
            });

            // 3. Activate the clicked button
            this.classList.add('active');

            // 4. Reveal the exact matching panel
            const matchingPanel = container.querySelector(`.tab-panel[data-tab="${targetTab}"]`);
            if (matchingPanel) {
                matchingPanel.classList.remove('hidden');
            }
        });
    });
}


function generateLearn(t) {
    return `
            <div class="content-block"><h4>Learning Objectives</h4><ul><li>Understand the principles of ${t.name}</li><li>Apply methods accurately in varied contexts</li><li>Solve examination-style problems with confidence</li></ul></div>
            <div class="content-block"><h4>Key Concepts</h4><p>${t.name} is a core topic in the Edexcel GCSE ${t.grade.includes('1') || t.grade.includes('3') ? 'Foundation' : 'Higher'} specification. A thorough understanding of this topic is essential for success in the examination.</p></div>
            <div class="content-block"><h4>Common Mistakes</h4><ul><li>Omitting units from final answers</li><li>Incorrect application of the order of operations</li><li>Rounding intermediate values too early in multi-step problems</li></ul></div>
            <div class="content-block"><h4>Examination Guidance</h4><p>Always present your working clearly. Method marks are awarded even when the final answer contains an error. Pay careful attention to command words such as "show that" which require full justification.</p></div>`;
}

function generateExamples(t) {
    return `
            <div class="example-box"><strong>Easy Example</strong><p>Solve a straightforward ${t.name} problem. <em>Step 1:</em> Identify the given values and what is required. <em>Step 2:</em> Apply the standard method directly. <em>Step 3:</em> State the answer with appropriate units.</p></div>
            <div class="example-box"><strong>Medium Example</strong><p>Apply ${t.name} within a multi-step context. <em>Step 1:</em> Break the problem into logical parts. <em>Step 2:</em> Solve each part sequentially. <em>Step 3:</em> Combine the results and verify they make sense.</p></div>
            <div class="example-box"><strong>Hard Example</strong><p>Tackle a challenging question that combines ${t.name} with other topic areas. <em>Step 1:</em> Draw a diagram if applicable. <em>Step 2:</em> Formulate equations. <em>Step 3:</em> Solve systematically and verify each step.</p></div>
            ${t.gradeNum >= 7 ? '<div class="example-box"><strong>Grade 9 Challenge</strong><p>An advanced problem requiring deeper insight and the ability to apply ' + t.name + ' in unfamiliar contexts. Work through carefully and check each stage.</p></div>' : ''}`;
}

function generateExam(t) {
    let q = '';
    for (let i = 1; i <= 15; i++) {
        const marks = Math.floor(Math.random() * 5) + 2;
        q += `<div class="question-item"><strong>Exam Question ${i}</strong> <span style="color:var(--text-tertiary);font-weight:500;">[${marks} marks]</span><p>Edexcel-style examination question on ${t.name}. This question reflects the wording, structure, and difficulty progression of genuine GCSE papers.</p><div class="working-area">Working space — show all steps clearly</div></div>`;
    }
    return q;
}

function generatePractice(t) {
    let q = '';
    const difficulties = ['Easy', 'Easy', 'Easy', 'Medium', 'Medium', 'Medium', 'Medium', 'Hard', 'Hard', 'Hard'];
    for (let i = 0; i < 10; i++) {
        q += `<div class="question-item"><strong>Practice Q${i + 1}</strong> <span style="color:var(--text-tertiary);">(${difficulties[i]})</span><p>Practice question on ${t.name}, designed to build confidence and fluency.</p><div class="working-area">Working space</div></div>`;
    }
    q += `<div class="question-item" style="border-left:3px solid var(--primary);"><strong>Mixed Exam-Style Questions</strong><p>Five additional questions combining ${t.name} with other topics, mirroring the integrated nature of Edexcel GCSE papers.</p><div class="working-area">Working space</div></div>`;
    return q;
}

function generateMarkScheme(t) {
    return `
            <div class="mark-scheme-block">
                <h4 style="margin-bottom:8px;color:var(--text);">Mark Scheme — ${t.name}</h4>
                <p><strong>Q1:</strong> M1 for correct method shown, A1 for accurate final answer. <em>Total: 2 marks</em></p>
                <p><strong>Q2:</strong> B1 for correct substitution, M1 for solving, A1 for final answer. <em>Total: 3 marks</em></p>
                <p><strong>Q3:</strong> M2 for fully correct method, A1 for accuracy. Accept any valid alternative approach. <em>Total: 3 marks</em></p>
                <p style="margin-top:6px;"><strong>Common error:</strong> Omitting units in the final answer typically results in the loss of 1 accuracy mark. Premature rounding can also lead to mark loss.</p>
                <p><strong>Alternative methods:</strong> Where a valid alternative method is used, marks are awarded equivalently. The scheme indicates the most common approach.</p>
            </div>`;
}

function generatePaperContent(type, label, num) {
    if (type === 'questions') {
        let q = '';
        for (let i = 1; i <= 10; i++) q += `<div class="question-item"><strong>Question ${i}</strong> <span style="color:var(--text-tertiary);">[${Math.floor(Math.random() * 5) + 1} marks]</span><p>Examination question for ${label} Tier Paper ${num}.</p><div class="working-area">Working space</div></div>`;
        return q;
    } else if (type === 'markscheme') {
        return '<div class="mark-scheme-block"><h4 style="margin-bottom:8px;">Full Mark Scheme</h4><p>Each question shows the allocation of method marks (M), accuracy marks (A), and independent marks (B). Alternative valid methods are accepted and awarded equivalently.</p></div>';
    }
    return '<div class="example-box"><h4 style="margin-bottom:6px;">Fully Worked Solutions</h4><p>Step-by-step solutions for every question on this paper, showing the reasoning behind each step and the most efficient approach.</p></div>';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.add('hidden');
}

document.getElementById('modalOverlay').addEventListener('click', function (e) { if (e.target === this) closeModal(); });
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}



const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateProgress();
render();