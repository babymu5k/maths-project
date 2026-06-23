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
    main.innerHTML = html;
    updateProgress();
}

function renderPastPapers() {
    const main = document.getElementById('mainContent');
    if (ppState === 'tiers') {
        main.innerHTML = `
                <div class="pp-container">
                    <h2 class="pp-title">Past Papers</h2>
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
    } else if (ppState === 'higher' || ppState === 'foundation') {
        const label = ppState === 'higher' ? 'Higher' : 'Foundation';
        main.innerHTML = `
                <div class="pp-container">
                    <button class="back-link" onclick="ppState='tiers';renderPastPapers()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                        Back to tiers
                    </button>
                    <h2 class="pp-title">${label} Tier</h2>
                    <p class="pp-subtitle">Select a paper to view questions, mark scheme and worked solutions.</p>
                    <div class="papers-grid">
                        <div class="paper-card" onclick="openPastPaper('${ppState}',1)">
                            <h4>Paper 1</h4>
                            <p class="paper-type">Non-Calculator</p>
                        </div>
                        <div class="paper-card" onclick="openPastPaper('${ppState}',2)">
                            <h4>Paper 2</h4>
                            <p class="paper-type">Calculator</p>
                        </div>
                        <div class="paper-card" onclick="openPastPaper('${ppState}',3)">
                            <h4>Paper 3</h4>
                            <p class="paper-type">Calculator</p>
                        </div>
                    </div>
                </div>`;
    }
}

function openPastPaper(tier, num) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalContent');
    const label = tier === 'higher' ? 'Higher' : 'Foundation';
    const calc = num === 1 ? 'Non-Calculator' : 'Calculator';
    overlay.classList.remove('hidden');
    modal.innerHTML = `
                <button class="modal-close" onclick="closeModal()">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
                <h2>${label} Tier — Paper ${num}</h2>
                <p class="modal-subtitle">${calc} · 80 marks · 1 hour 30 minutes</p>
                <div class="tab-nav">
                    <button class="tab-btn active" data-tab="questions">Questions</button>
                    <button class="tab-btn" data-tab="markscheme">Mark Scheme</button>
                    <button class="tab-btn" data-tab="worked">Worked Solutions</button>
                </div>
                <div class="tab-panel" data-tab="questions">${generatePaperContent('questions', label, num)}</div>
                <div class="tab-panel hidden" data-tab="markscheme">${generatePaperContent('markscheme', label, num)}</div>
                <div class="tab-panel hidden" data-tab="worked">${generatePaperContent('worked', label, num)}</div>`;
    setupTabs(modal);
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