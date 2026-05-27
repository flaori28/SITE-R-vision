/**
 * ================================================================
 * BTS SIO 1 - APPLICATION PRINCIPALE (LOGIQUE SPA)
 * Gère la navigation, les onglets, flashcards, quiz
 * ================================================================
 */

// ===== GESTION DU MODE SOMBRE =====
class DarkModeManager {
    constructor() {
        this.isDark = localStorage.getItem('darkMode') === 'true';
        this.toggle = document.getElementById('darkModeToggle');
        this.init();
    }
    
    init() {
        this.apply();
        this.toggle.addEventListener('click', () => this.toggle());
    }
    
    toggle() {
        this.isDark = !this.isDark;
        localStorage.setItem('darkMode', this.isDark);
        this.apply();
    }
    
    apply() {
        if (this.isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
}

// ===== GESTION DE LA NAVIGATION (SIDEBAR) =====
class NavigationManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.overlay = document.getElementById('overlay');
        this.menuToggle = document.getElementById('menuToggle');
        this.closeMenu = document.getElementById('closeMenu');
        this.menuItems = document.querySelectorAll('.menu-item');
        this.submenuItems = document.querySelectorAll('.submenu-item');
        
        this.init();
    }
    
    init() {
        // Toggle menu mobile
        this.menuToggle?.addEventListener('click', () => this.toggleSidebar());
        this.closeMenu?.addEventListener('click', () => this.closeSidebar());
        this.overlay?.addEventListener('click', () => this.closeSidebar());
        
        // Menu items - Afficher/Masquer sous-menus
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                this.handleMenuClick(e, item);
            });
        });
        
        // Submenu items - Charger le contenu
        this.submenuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                this.handleSubmenuClick(e, item);
            });
        });
        
        // Charger le premier sous-menu par défaut
        const firstSubmenu = document.querySelector('[data-content="cadre-juridique"]');
        if (firstSubmenu) {
            firstSubmenu.click();
        }
    }
    
    toggleSidebar() {
        this.sidebar.classList.toggle('open');
        this.overlay.classList.toggle('open');
    }
    
    closeSidebar() {
        this.sidebar.classList.remove('open');
        this.overlay.classList.remove('open');
    }
    
    handleMenuClick(e, item) {
        const menuId = item.dataset.menu;
        const submenu = document.getElementById(menuId + '-submenu');
        
        // Mettre à jour styles
        document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
        item.classList.add('active');
        
        // Afficher/Masquer sous-menu
        document.querySelectorAll('.submenu').forEach(s => s.classList.add('hidden'));
        if (submenu) submenu.classList.remove('hidden');
    }
    
    handleSubmenuClick(e, item) {
        const contentId = item.dataset.content;
        
        // Mettre à jour styles
        document.querySelectorAll('.submenu-item').forEach(m => m.classList.remove('active'));
        item.classList.add('active');
        
        // Charger le contenu
        app.loadContent(contentId);
        
        // Fermer menu mobile
        this.closeSidebar();
    }
}

// ===== APPLICATION PRINCIPALE =====
class BtsSioApp {
    constructor() {
        this.currentContent = null;
        this.currentTabIndex = 0;
        this.flashcards = [];
        this.quizAnswered = false;
        
        this.init();
    }
    
    init() {
        // Gestionnaires
        new DarkModeManager();
        new NavigationManager();
        
        // Événements des onglets
        document.querySelectorAll('.tab-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => this.switchTab(index));
        });
        
        // Événements flashcards
        document.getElementById('prevFlashcard')?.addEventListener('click', () => this.prevFlashcard());
        document.getElementById('nextFlashcard')?.addEventListener('click', () => this.nextFlashcard());
        
        // Initialiser Mermaid
        if (typeof mermaid !== 'undefined') {
            mermaid.initialize({ startOnLoad: true, theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light' });
        }
    }
    
    /**
     * Charger le contenu d'une section
     */
    loadContent(contentId) {
        if (!btsSioData[contentId]) {
            console.error(`Contenu ${contentId} non trouvé`);
            return;
        }
        
        this.currentContent = btsSioData[contentId];
        this.flashcards = this.currentContent.flashcards || [];
        this.currentTabIndex = 0;
        
        // Réinitialiser les onglets
        document.querySelectorAll('.tab-btn').forEach((btn, index) => {
            btn.classList.toggle('active', index === 0);
            btn.classList.toggle('border-indigo-600', index === 0);
            btn.classList.toggle('text-indigo-600', index === 0);
            btn.classList.toggle('border-transparent', index !== 0);
            btn.classList.toggle('text-gray-600', index !== 0);
        });
        
        document.querySelectorAll('.tab-content').forEach((tab, index) => {
            tab.classList.toggle('hidden', index !== 0);
        });
        
        // Charger les onglets
        this.renderCours();
        this.renderFlashcards();
        this.renderQuiz();
        
        // Smooth scroll
        document.querySelector('.content-area').scrollTop = 0;
    }
    
    /**
     * Changer d'onglet
     */
    switchTab(index) {
        this.currentTabIndex = index;
        
        // Mettre à jour boutons
        document.querySelectorAll('.tab-btn').forEach((btn, i) => {
            const isActive = i === index;
            btn.classList.toggle('active', isActive);
            btn.classList.toggle('border-indigo-600', isActive);
            btn.classList.toggle('text-indigo-600', isActive);
            btn.classList.toggle('text-gray-600', !isActive);
            btn.classList.toggle('border-transparent', !isActive);
        });
        
        // Mettre à jour contenu
        document.querySelectorAll('.tab-content').forEach((tab, i) => {
            tab.classList.toggle('hidden', i !== index);
        });
    }
    
    /**
     * Afficher le cours
     */
    renderCours() {
        if (!this.currentContent) return;
        
        const coursContent = document.getElementById('cours-content');
        const coursTab = this.currentContent.cours;
        
        let html = `
            <div class="fade-in">
                ${coursTab.content}
            </div>
        `;
        
        coursContent.innerHTML = html;
        
        // Relancer Mermaid si besoin
        if (typeof mermaid !== 'undefined') {
            setTimeout(() => {
                document.querySelectorAll('.mermaid').forEach(el => {
                    if (!el.hasAttribute('data-processed')) {
                        mermaid.contentLoaded();
                    }
                });
            }, 100);
        }
    }
    
    /**
     * Afficher les flashcards
     */
    renderFlashcards() {
        if (!this.flashcards.length) {
            document.getElementById('flashcards-content').innerHTML = '<p class="text-gray-600">Aucune flashcard disponible</p>';
            return;
        }
        
        const card = this.flashcards[this.currentTabIndex] || this.flashcards[0];
        const flashcardsContent = document.getElementById('flashcards-content');
        
        let html = `
            <div class="flashcard fade-in" onclick="app.toggleFlashcard(this)">
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <div>
                            <p class="text-sm opacity-80 mb-4">Question</p>
                            <p class="text-xl font-bold">${card.question}</p>
                        </div>
                    </div>
                    <div class="flashcard-back">
                        <div>
                            <p class="text-sm opacity-80 mb-4">Réponse</p>
                            <p class="text-lg font-bold mb-4">${card.answer}</p>
                            <p class="text-xs opacity-70 italic">${card.explication}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        flashcardsContent.innerHTML = html;
        
        // Mettre à jour le compteur
        document.getElementById('flashcard-counter').textContent = 
            `${Math.min(this.currentTabIndex + 1, this.flashcards.length)} / ${this.flashcards.length}`;
    }
    
    /**
     * Toggle une flashcard
     */
    toggleFlashcard(element) {
        element.classList.toggle('flipped');
    }
    
    /**
     * Flashcard précédente
     */
    prevFlashcard() {
        if (this.currentTabIndex > 0) {
            this.currentTabIndex--;
            this.renderFlashcards();
        }
    }
    
    /**
     * Flashcard suivante
     */
    nextFlashcard() {
        if (this.currentTabIndex < this.flashcards.length - 1) {
            this.currentTabIndex++;
            this.renderFlashcards();
        }
    }
    
    /**
     * Afficher le quiz
     */
    renderQuiz() {
        if (!this.currentContent?.quiz) {
            document.getElementById('quiz-content').innerHTML = '<p class="text-gray-600">Aucun quiz disponible</p>';
            return;
        }
        
        const quiz = this.currentContent.quiz;
        let html = '<div class="fade-in space-y-8">';
        
        quiz.forEach((q, qIndex) => {
            html += `
                <div class="quiz-question bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-4">
                        ${qIndex + 1}. ${q.question}
                    </h3>
                    <div class="space-y-3">
            `;
            
            q.options.forEach((option, oIndex) => {
                html += `
                    <button class="quiz-option w-full text-left p-4 border-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer disabled"
                            onclick="app.answerQuiz(${qIndex}, ${oIndex}, this)">
                        <span class="font-semibold">${String.fromCharCode(65 + oIndex)}.</span> ${option}
                    </button>
                `;
            });
            
            html += `
                    </div>
                    <div class="quiz-explanation mt-4 hidden p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border-l-4 border-blue-500">
                        <p class="font-semibold text-blue-900 dark:text-blue-200 mb-2">💡 Explication :</p>
                        <p class="text-blue-800 dark:text-blue-300">${q.explication}</p>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        
        document.getElementById('quiz-content').innerHTML = html;
    }
    
    /**
     * Répondre à une question du quiz
     */
    answerQuiz(qIndex, optionIndex, element) {
        const question = this.currentContent.quiz[qIndex];
        const options = element.parentElement.querySelectorAll('.quiz-option');
        const explanation = element.closest('.quiz-question').querySelector('.quiz-explanation');
        
        // Désactiver les options
        options.forEach(opt => opt.classList.add('disabled', 'pointer-events-none', 'opacity-60'));
        
        // Afficher la bonne réponse
        if (optionIndex === question.correctAnswer) {
            element.classList.add('correct');
        } else {
            element.classList.add('incorrect');
            options[question.correctAnswer].classList.add('correct');
        }
        
        // Afficher l'explication
        explanation.classList.remove('hidden');
        explanation.classList.add('fade-in');
    }
}

// ===== INITIALISATION =====
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new BtsSioApp();
});
