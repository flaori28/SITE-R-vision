// ===================================
// DARK MODE TOGGLE
// ===================================

const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

// Load dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// ===================================
// NAVIGATION
// ===================================

const navLinks = document.querySelectorAll('.nav-link');
const contentArea = document.getElementById('content');
const dashboardSection = document.getElementById('dashboard');

// Page content generators
const pageGenerators = {
    dashboard: () => {
        dashboardSection.style.display = 'block';
        updateDashboard();
        return '';
    },
    math: generateMathPage,
    culture: generateCulturePage,
    anglais: generateAnglaisPage,
    'slam-algo': generateAlgoPage,
    'slam-bdd': generateBDDPage,
    'slam-web': generateWebPage,
    'slam-poo': generatePOOPage,
    'sisr-reseau': generateReseauPage,
    'sisr-systeme': generateSystemePage,
    'sisr-cyber': generateCyberPage,
    'sisr-virt': generateVirtPage,
    cejm: generateCEJMPage,
    ecodroit: generateEcoDroitPage,
    management: generateManagementPage
};

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        
        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Load page
        if (page === 'dashboard') {
            contentArea.innerHTML = '';
            contentArea.style.display = 'none';
            dashboardSection.style.display = 'block';
            updateDashboard();
        } else {
            dashboardSection.style.display = 'none';
            contentArea.style.display = 'block';
            const content = pageGenerators[page] ? pageGenerators[page]() : '<p>Page non trouvée</p>';
            contentArea.innerHTML = content;
            
            // Syntax highlighting for code blocks
            contentArea.querySelectorAll('pre code').forEach(block => {
                hljs.highlightElement(block);
            });
        }
    });
});

// ===================================
// PAGE GENERATORS
// ===================================

function generateMathPage() {
    return `
    <div class="page-content">
        <h1>Mathématiques pour l'informatique</h1>
        
        <div class="lesson-content">
            <h2>1. Algèbre de Boole</h2>
            <p>L'algèbre de Boole est un système mathématique utilisant des valeurs binaires (0 et 1).</p>
            <div class="definition-box">Définition : L'algèbre de Boole formalise les opérations logiques avec les variables booléennes (true/false ou 1/0).</div>
            
            <h3>Opérateurs de base</h3>
            <ul>
                <li><strong>ET (AND)</strong> : 1 ET 1 = 1, sinon 0</li>
                <li><strong>OU (OR)</strong> : 1 OU 0 = 1, 0 OU 0 = 0</li>
                <li><strong>NON (NOT)</strong> : NON 1 = 0, NON 0 = 1</li>
            </ul>

            <h3>Tables de vérité</h3>
            <table>
                <tr><th>A</th><th>B</th><th>A ET B</th><th>A OU B</th></tr>
                <tr><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>
                <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
                <tr><td>1</td><td>1</td><td>1</td><td>1</td></tr>
            </table>

            <h2>2. Système binaire</h2>
            <p>Le binaire utilise la base 2 avec les chiffres 0 et 1. Chaque position représente une puissance de 2.</p>
            <div class="code-block"><pre><code class="language-javascript">// Exemple de conversion binaire vers décimal
1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰
     = 8 + 0 + 2 + 1
     = 11₁₀</code></pre></div>

            <h2>3. Système hexadécimal</h2>
            <p>L'hexadécimal utilise la base 16 avec les chiffres 0-9 et les lettres A-F (A=10, B=11, ... F=15).</p>
            <div class="code-block"><pre><code class="language-javascript">// Exemple de conversion hexadécimal vers décimal
FF₁₆ = 15×16¹ + 15×16⁰
     = 240 + 15
     = 255₁₀</code></pre></div>
        </div>

        <div class="exercises-section">
            <h2>Exercices</h2>
            <div class="exercise">
                <h4>Exercice 1 : Conversion binaire</h4>
                <p>Convertir 1001₂ en décimal</p>
                <button class="btn" onclick="toggleSolution(this)">Voir la correction</button>
                <div class="exercise-solution">
                    <strong>Solution :</strong> 1001₂ = 1×8 + 0×4 + 0×2 + 1×1 = 9₁₀
                </div>
            </div>
            <div class="exercise">
                <h4>Exercice 2 : Algèbre de Boole</h4>
                <p>Évaluer (1 ET 0) OU (1 OU 1)</p>
                <button class="btn" onclick="toggleSolution(this)">Voir la correction</button>
                <div class="exercise-solution">
                    <strong>Solution :</strong> (1 ET 0) OU (1 OU 1) = 0 OU 1 = 1
                </div>
            </div>
        </div>

        <div class="quiz-section">
            <h2>Quiz : Mathématiques</h2>
            <form id="mathQuiz">
                <div class="quiz-question">
                    <h4>1. Combien vaut 101₂ en décimal ?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option"><input type="radio" name="q1" value="0"> 3</label>
                        <label class="quiz-option"><input type="radio" name="q1" value="1"> 5</label>
                        <label class="quiz-option"><input type="radio" name="q1" value="0"> 6</label>
                    </div>
                </div>
                <div class="quiz-question">
                    <h4>2. Quel est le résultat de (1 OU 0) ET 1 ?</h4>
                    <div class="quiz-options">
                        <label class="quiz-option"><input type="radio" name="q2" value="0"> 0</label>
                        <label class="quiz-option"><input type="radio" name="q2" value="1"> 1</label>
                    </div>
                </div>
                <button type="button" class="btn" onclick="submitQuiz('mathQuiz', 'math')">Soumettre</button>
            </form>
            <div id="math-result" class="quiz-result"></div>
        </div>
    </div>
    `;
}

function generateCulturePage() {
    return `
    <div class="page-content">
        <h1>Culture générale et expression</h1>
        <div class="lesson-content">
            <h2>Communication professionnelle</h2>
            <p>La communication efficace est essentielle dans un environnement professionnel IT.</p>
            <h3>Principes clés</h3>
            <ul>
                <li>Clarté et concision du message</li>
                <li>Adaptation au public</li>
                <li>Écoute active</li>
                <li>Feedback constructif</li>
            </ul>
            <p><strong>Bientôt :</strong> Plus de contenu à venir...</p>
        </div>
    </div>
    `;
}

function generateAnglaisPage() {
    return `
    <div class="page-content">
        <h1>Anglais technique</h1>
        <div class="lesson-content">
            <h2>Vocabulaire informatique</h2>
            <p>Termes essentiels en anglais pour un informaticien.</p>
            <div class="definition-box">
                <strong>Server</strong> : Serveur - machine fournissant des services réseau<br>
                <strong>Database</strong> : Base de données - système de stockage structuré<br>
                <strong>Network</strong> : Réseau - ensemble de machines connectées
            </div>
            <p><strong>Bientôt :</strong> Plus de contenu à venir...</p>
        </div>
    </div>
    `;
}

function generateAlgoPage() {
    return `
    <div class="page-content">
        <h1>Algorithmique et programmation</h1>
        <div class="lesson-content">
            <h2>Variables et types de données</h2>
            <p>Une variable stocke une valeur. Les types de base sont : entier, réel, caractère, booléen.</p>
            <div class="code-block"><pre><code class="language-javascript">let age = 25;           // Entier
let nom = "Alice";      // Chaîne
let actif = true;       // Booléen
let prix = 19.99;       // Réel</code></pre></div>

            <h2>Structures de contrôle</h2>
            <h3>Conditions</h3>
            <div class="code-block"><pre><code class="language-javascript">if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}</code></pre></div>

            <h3>Boucles</h3>
            <div class="code-block"><pre><code class="language-javascript">// Boucle for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Boucle while
while (age < 30) {
    age++;
}</code></pre></div>

            <h3>Fonctions</h3>
            <div class="code-block"><pre><code class="language-javascript">function additioner(a, b) {
    return a + b;
}

let resultat = additioner(5, 3);  // 8</code></pre></div>
        </div>
        <p style="text-align:center; color:var(--text-secondary); margin-top:2rem;">Plus de contenu à venir...</p>
    </div>
    `;
}

function generateBDDPage() {
    return `<div class="page-content"><h1>Bases de données</h1><p>Contenu en construction...</p></div>`;
}

function generateWebPage() {
    return `<div class="page-content"><h1>Développement web</h1><p>Contenu en construction...</p></div>`;
}

function generatePOOPage() {
    return `<div class="page-content"><h1>Programmation Orientée Objet</h1><p>Contenu en construction...</p></div>`;
}

function generateReseauPage() {
    return `<div class="page-content"><h1>Réseaux informatiques</h1><p>Contenu en construction...</p></div>`;
}

function generateSystemePage() {
    return `<div class="page-content"><h1>Systèmes d'exploitation</h1><p>Contenu en construction...</p></div>`;
}

function generateCyberPage() {
    return `<div class="page-content"><h1>Cybersécurité</h1><p>Contenu en construction...</p></div>`;
}

function generateVirtPage() {
    return `<div class="page-content"><h1>Virtualisation</h1><p>Contenu en construction...</p></div>`;
}

function generateCEJMPage() {
    return `<iframe src="/pages/transversal/cejm.html" style="width: 100%; height: 1000px; border: none; display: block;"></iframe>`;
}

function generateEcoDroitPage() {
    return `<div class="page-content"><h1>Économie-droit</h1><p>Contenu en construction...</p></div>`;
}

function generateManagementPage() {
    return `<div class="page-content"><h1>Management SI</h1><p>Contenu en construction...</p></div>`;
}

// ===================================
// EXERCISE & QUIZ FUNCTIONS
// ===================================

function toggleSolution(button) {
    const solution = button.nextElementSibling;
    solution.classList.toggle('show');
    button.textContent = solution.classList.contains('show') ? 'Masquer la correction' : 'Voir la correction';
}

function submitQuiz(quizId, subject) {
    const form = document.getElementById(quizId);
    const answers = new FormData(form);
    
    let correct = 0;
    const total = form.querySelectorAll('.quiz-question').length;

    // Check answers based on subject
    if (subject === 'math') {
        const q1 = form.querySelector('input[name="q1"]:checked');
        const q2 = form.querySelector('input[name="q2"]:checked');
        
        if (q1 && q1.value === '1') correct++;
        if (q2 && q2.value === '1') correct++;
    }

    const score = Math.round((correct / total) * 100);
    const resultDiv = document.getElementById(`${subject}-result`);
    
    resultDiv.classList.add('show');
    resultDiv.innerHTML = `
        <div class="quiz-result ${score >= 50 ? 'success' : 'failure'}">
            <h3>Résultat</h3>
            <div class="quiz-result-score">${score}%</div>
            <p>${correct}/${total} réponses correctes</p>
            <button class="btn" onclick="location.reload()">Recommencer</button>
        </div>
    `;
    
    saveScore(subject, score);
}

// ===================================
// PROGRESS TRACKING
// ===================================

function updateDashboard() {
    const scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    const subjectsArray = Object.keys(scores);
    
    // Calculate stats
    const avgScore = subjectsArray.length > 0 
        ? Math.round(subjectsArray.reduce((sum, s) => sum + scores[s], 0) / subjectsArray.length)
        : 0;
    
    const totalProgress = Math.min(100, subjectsArray.length * 10); // 10% per subject completed
    
    // Update dashboard display
    document.getElementById('totalProgress').textContent = totalProgress + '%';
    document.getElementById('avgScore').textContent = subjectsArray.length > 0 ? `${avgScore}%` : '--';
    document.getElementById('completedCount').textContent = subjectsArray.length;
    
    // Update subject cards with progress
    subjectsArray.forEach(subject => {
        const card = document.querySelector(`[data-subject="${subject}"]`);
        if (card) {
            const progressBar = card.querySelector('.progress-fill');
            progressBar.style.width = scores[subject] + '%';
            const statsSpan = card.querySelector('.card-stats .stat');
            statsSpan.textContent = `${scores[subject]}% complété`;
        }
    });
}

function saveScore(subject, score) {
    const scores = JSON.parse(localStorage.getItem('quizScores') || '{}');
    
    // Only update if new score is better
    if (!scores[subject] || score > scores[subject]) {
        scores[subject] = score;
        localStorage.setItem('quizScores', JSON.stringify(scores));
        updateDashboard();
    }
}

// Initialize dashboard on page load
updateDashboard();
