/**
 * ================================================================
 * BTS SIO 1 - BASE DE DONNÉES PÉDAGOGIQUE COMPLÈTE
 * Segmentation: Matière → Chapitre → Contenu riche
 * ================================================================
 */

const btsSioDataComplete = {
    
    // ╔════════════════════════════════════════════════════════════╗
    // ║  MATIÈRE 1: EDMN - ÉCONOMIE, DROIT ET MANAGEMENT NUMÉRIQUE ║
    // ╚════════════════════════════════════════════════════════════╝
    
    "edmn": {
        title: "Économie, Droit et Management du Numérique",
        icon: "⚖️",
        chapters: {
            
            // CHAPITRE 1.1
            "cadre-juridique": {
                title: "Chapitre 1: Le Cadre Juridique de l'Activité Numérique",
                icon: "📋",
                
                cours: {
                    title: "Cours Complet",
                    content: `
                        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Chapitre 1: Le Cadre Juridique du Numérique</h2>
                        
                        <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Objectifs d'apprentissage</p>
                            <ul class="list-disc list-inside text-indigo-800 dark:text-indigo-300 mt-2 space-y-1">
                                <li>Comprendre le RGPD et ses obligations</li>
                                <li>Connaître les droits d'auteur et brevets</li>
                                <li>Maîtriser les responsabilités légales</li>
                                <li>Appliquer les mesures de conformité</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 1: RGPD - Règlement Général sur la Protection des Données</h3>
                        
                        <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.1 - Contexte Historique</h4>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                                <li><strong>1978 :</strong> Loi Informatique et Libertés (France)</li>
                                <li><strong>1995 :</strong> Directive 95/46/CE (UE)</li>
                                <li><strong>2016 :</strong> Adoption du RGPD</li>
                                <li><strong>2018 :</strong> Entrée en vigueur du RGPD</li>
                            </ul>
                        </div>
                        
                        <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.2 - Champ d'Application du RGPD</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-3">S'applique à :</p>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                                <li>Toute organisation UE ou traitant données citoyens UE</li>
                                <li>Données personnelles (nom, email, IP, cookies, biométrie...)</li>
                                <li>Tous types de traitement (collecte, conservation, utilisation)</li>
                            </ul>
                        </div>
                        
                        <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.3 - Principes Clés du RGPD</h4>
                            <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 mt-3 text-sm">
                                <thead class="bg-green-100 dark:bg-green-900">
                                    <tr>
                                        <th class="border p-2 text-left">Principe</th>
                                        <th class="border p-2 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-700 dark:text-gray-300">
                                    <tr>
                                        <td class="border p-2"><strong>Licéité</strong></td>
                                        <td class="border p-2">Base légale (consentement, contrat, obligation légale...)</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Transparence</strong></td>
                                        <td class="border p-2">Informer la personne du traitement de ses données</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Limitation</strong></td>
                                        <td class="border p-2">Collecter uniquement les données nécessaires</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Intégrité</strong></td>
                                        <td class="border p-2">Protéger contre perte, destruction ou accès non autorisé</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 2: Droits des Personnes</h3>
                        
                        <div class="lesson-box border-l-4 border-purple-600 bg-purple-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">2.1 - 6 Droits Fondamentaux</h4>
                            <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Droit d'accès :</strong> Obtenir copie de ses données</li>
                                <li><strong>Droit de rectification :</strong> Corriger données inexactes</li>
                                <li><strong>Droit à l'oubli :</strong> Demander suppression (avec conditions)</li>
                                <li><strong>Droit de limitation :</strong> Arrêter traitement temporairement</li>
                                <li><strong>Droit à la portabilité :</strong> Récupérer données dans format standard</li>
                                <li><strong>Droit d'opposition :</strong> Refuser traitement pour certains usages</li>
                            </ol>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 3: Obligations des Entreprises</h3>
                        
                        <div class="alert alert-info border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-blue-900 dark:text-blue-200">🔧 Actions Obligatoires :</p>
                            <ul class="list-disc list-inside text-blue-800 dark:text-blue-300 mt-2 space-y-1">
                                <li>Nommer un DPO (Data Protection Officer) si nécessaire</li>
                                <li>Effectuer une AIPD (Analyse d'Impact)</li>
                                <li>Tenir un registre des traitements</li>
                                <li>Signer DPA (Data Processing Agreement) avec prestataires</li>
                                <li>Signaler violations dans 72h à l'autorité</li>
                                <li>Informer personnes en cas de risque</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 4: Sanctions et Amendes</h3>
                        
                        <div class="alert alert-warning border-l-4 border-red-500 bg-red-50 dark:bg-red-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-red-900 dark:text-red-200">⚠️ Niveaux d'Amendes :</p>
                            <ul class="list-disc list-inside text-red-800 dark:text-red-300 mt-2 space-y-1">
                                <li><strong>Tier 1 :</strong> Jusqu'à 2% du CA annuel (manquements mineurs)</li>
                                <li><strong>Tier 2 :</strong> Jusqu'à 4% du CA annuel (violations graves)</li>
                                <li><strong>Exemples :</strong> 20M€ pour Meta, 746M€ pour Amazon</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 5: Cas Pratiques</h3>
                        
                        <div class="lesson-box border-l-4 border-orange-600 bg-orange-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">Cas 1: E-commerce et CRM</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>Situation :</strong> Vous collectez emails clients pour newsletter.</p>
                            <p class="text-gray-700 dark:text-gray-300"><strong>Obligations RGPD :</strong></p>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                                <li>✅ Consentement explicite (opt-in, pas opt-out)</li>
                                <li>✅ Politique de confidentialité claire</li>
                                <li>✅ Droit de désabonnement facile</li>
                                <li>✅ Sécuriser les données (chiffrement)</li>
                                <li>✅ Registre de traitement</li>
                            </ul>
                        </div>
                        
                        <div class="mermaid">
                            graph LR
                            A[Collecte Données] --> B[Consentement?]
                            B -->|Non| C[❌ Violation]
                            B -->|Oui| D[Enregistrement]
                            D --> E[Sécurité]
                            E --> F[Droit d'accès]
                            F --> G[✅ Conforme]
                        </div>
                    `
                },
                
                flashcards: [
                    {
                        question: "Quand le RGPD est-il entré en vigueur?",
                        answer: "25 mai 2018 (après 2 ans de délai depuis adoption en 2016)",
                        explication: "Date clé pour toutes les organisations UE"
                    },
                    {
                        question: "Quel est l'amende maximale du RGPD?",
                        answer: "4% du chiffre d'affaires annuel (max 20 millions €)",
                        explication: "Tier 2 pour violations graves"
                    },
                    {
                        question: "Qu'est-ce qu'une DPA?",
                        answer: "Data Processing Agreement - Contrat avec prestataires traitant données",
                        explication: "Obligatoire pour externalisation (cloud, agences...)"
                    },
                    {
                        question: "Quel est le délai pour signaler une violation?",
                        answer: "72 heures maximum après découverte",
                        explication: "Exception si risque faible pour les personnes"
                    },
                    {
                        question: "Qu'est-ce qu'une AIPD?",
                        answer: "Analyse d'Impact sur la Protection des Données - Évaluation risques",
                        explication: "Obligatoire pour traitements à risque élevé"
                    }
                ],
                
                quiz: [
                    {
                        question: "Le RGPD s'applique à :",
                        options: [
                            "France uniquement",
                            "UE et pays tiers traitant données UE",
                            "Optionnel pour petites entreprises",
                            "Uniquement secteur public"
                        ],
                        correctAnswer: 1,
                        explication: "Le RGPD s'applique globalement à tout traitement de données UE"
                    },
                    {
                        question: "Quel est le droit à l'oubli?",
                        options: [
                            "Supprimer toute trace d'une personne",
                            "Demander suppression données avec certaines conditions",
                            "Empêcher archivage légal",
                            "Aucun impact légal"
                        ],
                        correctAnswer: 1,
                        explication: "C'est un droit fondamental mais avec exceptions (intérêt public...)"
                    },
                    {
                        question: "Qui doit nommer un DPO?",
                        options: [
                            "Toutes les entreprises",
                            "Secteur public et traitements sensibles",
                            "Optionnel",
                            "Uniquement très grandes entreprises"
                        ],
                        correctAnswer: 1,
                        explication: "DPO obligatoire pour secteur public et traitements sensibles"
                    },
                    {
                        question: "Consentement RGPD signifie:",
                        options: [
                            "Case pré-cochée",
                            "Consentement explicite et révocable",
                            "Silence = accord",
                            "Obligation légale seule"
                        ],
                        correctAnswer: 1,
                        explication: "Consentement doit être actif, spécifique et révocable"
                    },
                    {
                        question: "Que doit faire une entreprise en cas de violation?",
                        options: [
                            "Rien si données non sensibles",
                            "Signaler à autorité dans 72h",
                            "Attendre plainte",
                            "Nettoyer les logs"
                        ],
                        correctAnswer: 1,
                        explication: "Notification obligatoire sauf si risque faible"
                    }
                ]
            },
            
            // CHAPITRE 1.2
            "gouvernance-donnees": {
                title: "Chapitre 2: La Gouvernance des Données",
                icon: "🔐",
                
                cours: {
                    title: "Cours Complet",
                    content: `
                        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Chapitre 2: La Gouvernance des Données</h2>
                        
                        <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition</p>
                            <p class="text-indigo-800 dark:text-indigo-300 mt-2">Ensemble de processus, politiques et technologies pour gérer qualité, sécurité, conformité et utilisation des données dans l'organisation.</p>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 1: Principes Fondamentaux</h3>
                        
                        <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.1 - Les 4 Piliers</h4>
                            <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Qualité :</strong> Exactitude, complétude, cohérence des données</li>
                                <li><strong>Sécurité :</strong> Protection contre accès non autorisé</li>
                                <li><strong>Conformité :</strong> Respect lois (RGPD, sectorielles...)</li>
                                <li><strong>Valeur :</strong> Monétisation et utilisation efficace</li>
                            </ol>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 2: Classification des Données</h3>
                        
                        <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">2.1 - Types et Sensibilité</h4>
                            <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 mt-3 text-sm">
                                <thead class="bg-blue-100 dark:bg-blue-900">
                                    <tr>
                                        <th class="border p-2 text-left">Type</th>
                                        <th class="border p-2 text-left">Exemples</th>
                                        <th class="border p-2 text-left">Sensibilité</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-700 dark:text-gray-300">
                                    <tr>
                                        <td class="border p-2"><strong>Données Publiques</strong></td>
                                        <td class="border p-2">Info site public, avis clients</td>
                                        <td class="border p-2">🟢 Faible</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Données Personnelles</strong></td>
                                        <td class="border p-2">Nom, email, adresse, IP</td>
                                        <td class="border p-2">🟠 Moyenne</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Données Sensibles</strong></td>
                                        <td class="border p-2">Données de santé, origine, religion</td>
                                        <td class="border p-2">🔴 Haute</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Données Critiques</strong></td>
                                        <td class="border p-2">Données financières, secrets commerciaux</td>
                                        <td class="border p-2">🔴 Critique</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 3: Rôles et Responsabilités</h3>
                        
                        <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">3.1 - Acteurs Clés</h4>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Data Officer :</strong> Supervise stratégie données</li>
                                <li><strong>DPO :</strong> Veille conformité RGPD</li>
                                <li><strong>Data Steward :</strong> Propriétaire métier des données</li>
                                <li><strong>Data Analyst :</strong> Analyse et exploitation</li>
                                <li><strong>Data Custodian :</strong> Gestion technique et sécurité</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 4: Politiques et Procédures</h3>
                        
                        <div class="alert alert-info border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-blue-900 dark:text-blue-200">📋 Documents Essentiels :</p>
                            <ul class="list-disc list-inside text-blue-800 dark:text-blue-300 mt-2 space-y-1">
                                <li>Politique de classification des données</li>
                                <li>Procédures d'accès et authentification</li>
                                <li>Plan de continuité et récupération</li>
                                <li>Procédure d'audit et conformité</li>
                                <li>Charte informatique et code de conduite</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 5: Outils et Technologies</h3>
                        
                        <div class="lesson-box border-l-4 border-purple-600 bg-purple-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">5.1 - Solutions Technique</h4>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Master Data Management (MDM) :</strong> Centraliser source unique de vérité</li>
                                <li><strong>Data Warehouse :</strong> Entrepôt centralisé pour analyse</li>
                                <li><strong>Chiffrement :</strong> Protéger données en transit et au repos</li>
                                <li><strong>Audit Trail :</strong> Tracer accès et modifications</li>
                                <li><strong>DLP (Data Loss Prevention) :</strong> Prévenir fuites</li>
                            </ul>
                        </div>
                    `
                },
                
                flashcards: [
                    {
                        question: "Qu'est-ce que la gouvernance des données?",
                        answer: "Ensemble de processus pour gérer qualité, sécurité, conformité et utilisation des données",
                        explication: "C'est la stratégie globale de l'organisation vis-à-vis de ses données"
                    },
                    {
                        question: "Quel est le rôle du DPO?",
                        answer: "Veiller à la conformité RGPD et protéger les données personnelles",
                        explication: "C'est le responsable de la protection des données"
                    },
                    {
                        question: "Que signifie MDM?",
                        answer: "Master Data Management - Centraliser une source unique de vérité",
                        explication: "Évite la duplication et incohérence des données"
                    },
                    {
                        question: "Quelles données nécessitent le plus de sécurité?",
                        answer: "Les données sensibles et critiques (santé, finances, secrets commerciaux)",
                        explication: "Classification en 4 niveaux selon sensibilité"
                    },
                    {
                        question: "Qu'est-ce qu'un audit trail?",
                        answer: "Registre traçant qui accède aux données et quand",
                        explication: "Outil essentiellement de conformité et sécurité"
                    }
                ],
                
                quiz: [
                    {
                        question: "Les 4 piliers de la gouvernance sont:",
                        options: [
                            "Accès, Archivage, Performance",
                            "Qualité, Sécurité, Conformité, Valeur",
                            "Stockage, Réseau, Calcul",
                            "Vente, Marketing, IT, Finance"
                        ],
                        correctAnswer: 1,
                        explication: "Ces 4 piliers sont la base de toute stratégie données"
                    },
                    {
                        question: "Données de santé sont classées comme:",
                        options: [
                            "Publiques",
                            "Personnelles",
                            "Sensibles",
                            "Critiques"
                        ],
                        correctAnswer: 2,
                        explication: "Données sensibles = données personnelles spéciales (santé, origine, religion...)"
                    },
                    {
                        question: "Un Data Steward est:",
                        options: [
                            "Responsable technique des serveurs",
                            "Propriétaire métier des données",
                            "Analyste de sécurité",
                            "Responsable des archives"
                        ],
                        correctAnswer: 1,
                        explication: "Data Steward = propriétaire métier, responsable qualité et utilisation"
                    },
                    {
                        question: "DLP signifie:",
                        options: [
                            "Data Loss Prevention",
                            "Data Location Protocol",
                            "Digital Legal Process",
                            "Data Level Protection"
                        ],
                        correctAnswer: 0,
                        explication: "Data Loss Prevention - technologie pour prévenir fuites de données"
                    },
                    {
                        question: "Une politique de classification doit définir:",
                        options: [
                            "Les autorisations seules",
                            "Les niveaux de sensibilité et règles d'accès",
                            "Les salaires",
                            "Les horaires de travail"
                        ],
                        correctAnswer: 1,
                        explication: "Classification = catégoriser données par sensibilité et définir protections"
                    }
                ]
            },
            
            // CHAPITRE 1.3
            "management-innovation": {
                title: "Chapitre 3: Le Management de l'Innovation",
                icon: "💡",
                
                cours: {
                    title: "Cours Complet",
                    content: `
                        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Chapitre 3: Le Management de l'Innovation</h2>
                        
                        <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition</p>
                            <p class="text-indigo-800 dark:text-indigo-300 mt-2">Processus de création, développement et mise en marché de nouvelles idées, produits ou services pour créer de la valeur.</p>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 1: Types d'Innovation</h3>
                        
                        <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.1 - Les 4 Catégories</h4>
                            <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 mt-3 text-sm">
                                <thead class="bg-indigo-100 dark:bg-indigo-900">
                                    <tr>
                                        <th class="border p-2 text-left">Type</th>
                                        <th class="border p-2 text-left">Définition</th>
                                        <th class="border p-2 text-left">Exemple IT</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-700 dark:text-gray-300">
                                    <tr>
                                        <td class="border p-2"><strong>Produit</strong></td>
                                        <td class="border p-2">Nouveau bien/service</td>
                                        <td class="border p-2">App mobile, SaaS</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Processus</strong></td>
                                        <td class="border p-2">Améliorer production/service</td>
                                        <td class="border p-2">Automatisation, CI/CD</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Organisationnelle</strong></td>
                                        <td class="border p-2">Nouvelle structure/méthode</td>
                                        <td class="border p-2">Agile, DevOps</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Marketing</strong></td>
                                        <td class="border p-2">Nouveau marché/client</td>
                                        <td class="border p-2">Crowdsourcing, Freemium</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 2: Processus d'Innovation</h3>
                        
                        <div class="mermaid">
                            graph LR
                            A[Idée] --> B[Exploration]
                            B --> C[Prototypage]
                            C --> D[Test/Validation]
                            D --> E{Succès?}
                            E -->|Non| F[Amélioration]
                            F --> D
                            E -->|Oui| G[Lancement]
                            G --> H[Adoption]
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 3: Outils et Méthodologies</h3>
                        
                        <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">3.1 - Approches Modernes</h4>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Design Thinking :</strong> Centré utilisateur, itératif</li>
                                <li><strong>Lean Startup :</strong> MVP, test rapide, feedback</li>
                                <li><strong>Agile :</strong> Sprints courts, amélioration continue</li>
                                <li><strong>Hackathon :</strong> Brainstorm collectif intensif</li>
                                <li><strong>Crowdsourcing :</strong> Exploiter intelligence collective</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 4: Facteurs de Succès</h3>
                        
                        <div class="alert alert-info border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-blue-900 dark:text-blue-200">🎯 Éléments Clés :</p>
                            <ul class="list-disc list-inside text-blue-800 dark:text-blue-300 mt-2 space-y-1">
                                <li>Vision et stratégie claire</li>
                                <li>Engagement de la direction</li>
                                <li>Culture d'expérimentation et d'acceptation risque</li>
                                <li>Budget dédié à l'innovation</li>
                                <li>Talent et compétences nécessaires</li>
                                <li>Feedback client régulier</li>
                            </ul>
                        </div>
                    `
                },
                
                flashcards: [
                    {
                        question: "Qu'est-ce que le Design Thinking?",
                        answer: "Approche d'innovation centrée utilisateur et itérative",
                        explication: "Empathy → Define → Ideate → Prototype → Test"
                    },
                    {
                        question: "Que signifie MVP?",
                        answer: "Minimum Viable Product - Produit minimum avec fonctionnalités essentielles",
                        explication: "Permet tester rapidement avec clients réels"
                    },
                    {
                        question: "Quels sont les 4 types d'innovation?",
                        answer: "Produit, Processus, Organisationnelle, Marketing",
                        explication: "Classification OCDE standard"
                    },
                    {
                        question: "Qu'est-ce qu'un hackathon?",
                        answer: "Événement intensif d'innovation avec brainstorm collectif",
                        explication: "Souvent sur 24-48h pour générer idées rapidement"
                    },
                    {
                        question: "Qu'est-ce que le Lean Startup?",
                        answer: "Méthodologie: MVP rapide, test, feedback, itération",
                        explication: "Minimiser risque et coût d'innovation"
                    }
                ],
                
                quiz: [
                    {
                        question: "Innovation de processus signifie:",
                        options: [
                            "Nouveau produit",
                            "Améliorer comment on produit/délivre",
                            "Changer le nom de l'entreprise",
                            "Recruter plus"
                        ],
                        correctAnswer: 1,
                        explication: "Innovation de processus = amélioration efficacité opérationnelle"
                    },
                    {
                        question: "Le Design Thinking commence par:",
                        options: [
                            "La solution",
                            "Le codage",
                            "L'empathie avec l'utilisateur",
                            "Le budget"
                        ],
                        correctAnswer: 2,
                        explication: "Comprendre les besoins utilisateur avant de proposer solution"
                    },
                    {
                        question: "Un MVP doit avoir:",
                        options: [
                            "Toutes les fonctionnalités",
                            "Interface parfaite",
                            "Fonctionnalités minimales essentielles",
                            "100 utilisateurs"
                        ],
                        correctAnswer: 2,
                        explication: "MVP = tester concept avec minimum de ressources"
                    },
                    {
                        question: "Pour réussir l'innovation, l'entreprise doit:",
                        options: [
                            "Copier concurrent",
                            "Investir beaucoup",
                            "Accepter risque et échecs",
                            "Garder secret"
                        ],
                        correctAnswer: 2,
                        explication: "Innovation = culture d'expérimentation et acceptation échec"
                    },
                    {
                        question: "Crowdsourcing pour l'innovation signifie:",
                        options: [
                            "Embaucher à bas coût",
                            "Exploiter intelligence collective externe",
                            "Vendre plus cher",
                            "Importer technologie"
                        ],
                        correctAnswer: 1,
                        explication: "Obtenir idées d'une large communauté externe"
                    }
                ]
            }
        }
    },
    
    // ╔════════════════════════════════════════════════════════════╗
    // ║  MATIÈRE 2: BLOC 1 - SUPPORT ET MISE À DISPOSITION SI      ║
    // ╚════════════════════════════════════════════════════════════╝
    
    "bloc1": {
        title: "Bloc 1: Support et Mise à Disposition de Services Informatiques",
        icon: "🖥️",
        chapters: {
            
            // CHAPITRE 2.1
            "gestion-patrimoine": {
                title: "Chapitre 1: Gestion du Patrimoine Informatique",
                icon: "💾",
                
                cours: {
                    title: "Cours Complet",
                    content: `
                        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Chapitre 1: Gestion du Patrimoine Informatique</h2>
                        
                        <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition</p>
                            <p class="text-indigo-800 dark:text-indigo-300 mt-2">Processus de gestion, suivi et maintenance de tous les actifs informatiques de l'organisation (matériel, logiciel, données) du cycle d'acquisition à fin de vie.</p>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 1: Inventaire et Découverte</h3>
                        
                        <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.1 - GLPI (Gestion Libre du Parc Informatique)</h4>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Type :</strong> Logiciel open-source de gestion d'actifs IT</li>
                                <li><strong>Fonctionnalités :</strong> Inventaire matériel/logiciel, incidents, contrats, historique</li>
                                <li><strong>Avantage :</strong> Gratuit, modulable, intégration facile</li>
                                <li><strong>Cas d'usage :</strong> PME, collectivités, grandes entreprises</li>
                            </ul>
                        </div>
                        
                        <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.2 - OCS Inventory</h4>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Type :</strong> Outil de découverte automatique du parc</li>
                                <li><strong>Fonctionnement :</strong> Agents clients qui collectent configuration</li>
                                <li><strong>Avantage :</strong> Découverte sans intervention manuelle</li>
                                <li><strong>Intégration :</strong> Fonctionne avec GLPI</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 2: Cycle de Vie des Actifs</h3>
                        
                        <div class="mermaid">
                            graph LR
                            A[Acquisition] --> B[Déploiement]
                            B --> C[Maintenance]
                            C --> D[Fin de Vie]
                            D --> E[Recyclage/Destruction]
                            C -.->|Mise à Jour| C
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 3: Métriques Clés</h3>
                        
                        <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">3.1 - KPIs Importants</h4>
                            <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 mt-3 text-sm">
                                <thead class="bg-green-100 dark:bg-green-900">
                                    <tr>
                                        <th class="border p-2 text-left">Métrique</th>
                                        <th class="border p-2 text-left">Formule</th>
                                        <th class="border p-2 text-left">Interprétation</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-700 dark:text-gray-300">
                                    <tr>
                                        <td class="border p-2"><strong>MTBF</strong></td>
                                        <td class="border p-2">Heures totales / Nb pannes</td>
                                        <td class="border p-2">Temps moyen avant défaillance</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>MTTR</strong></td>
                                        <td class="border p-2">Temps réparation / Nb pannes</td>
                                        <td class="border p-2">Temps moyen de réparation</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>TCO</strong></td>
                                        <td class="border p-2">Achat + Maintenance + Énergie...</td>
                                        <td class="border p-2">Coût total de possession</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>ROI</strong></td>
                                        <td class="border p-2">(Gain - Coût) / Coût × 100</td>
                                        <td class="border p-2">Retour sur investissement %</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Disponibilité</strong></td>
                                        <td class="border p-2">MTBF / (MTBF + MTTR)</td>
                                        <td class="border p-2">% de temps opérationnel</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 4: Gestion Licences</h3>
                        
                        <div class="alert alert-warning border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-amber-900 dark:text-amber-200">⚠️ Conformité Critiques :</p>
                            <ul class="list-disc list-inside text-amber-800 dark:text-amber-300 mt-2 space-y-1">
                                <li>Audit régulier des licences</li>
                                <li>Documenter achats et déploiement</li>
                                <li>Éviter logiciels non-licenciés (piratage)</li>
                                <li>Prévoir renouvellements/upgrades</li>
                                <li>Gérer version multi-sièges</li>
                            </ul>
                        </div>
                    `
                },
                
                flashcards: [
                    {
                        question: "Qu'est-ce que GLPI?",
                        answer: "Logiciel open-source pour gérer patrimoine informatique (inventaire, incidents, contrats)",
                        explication: "Outil complet de gestion d'actifs informatiques"
                    },
                    {
                        question: "Quel est le rôle d'OCS Inventory?",
                        answer: "Découvrir et inventorier automatiquement le parc IT",
                        explication: "Agents clients collectent données sans intervention manuelle"
                    },
                    {
                        question: "Que mesure le MTBF?",
                        answer: "Mean Time Between Failures - Temps moyen entre défaillances",
                        explication: "Indicateur de fiabilité du matériel"
                    },
                    {
                        question: "Qu'est-ce que le TCO?",
                        answer: "Total Cost of Ownership - Coût complet de possession d'un équipement",
                        explication: "Inclut achat, maintenance, énergie, support, fin de vie"
                    },
                    {
                        question: "Comment calcule-t-on la disponibilité?",
                        answer: "MTBF / (MTBF + MTTR) = pourcentage de temps opérationnel",
                        explication: "Mesure l'efficacité réelle du service"
                    }
                ],
                
                quiz: [
                    {
                        question: "GLPI permet de gérer:",
                        options: [
                            "Uniquement matériel",
                            "Matériel, logiciel, incidents, contrats",
                            "Uniquement réseau",
                            "Uniquement base de données"
                        ],
                        correctAnswer: 1,
                        explication: "GLPI est un outil complet d'asset management IT"
                    },
                    {
                        question: "OCS Inventory utilise quelle méthode?",
                        options: [
                            "Balayage réseau manuel",
                            "Agents clients pour collection automatique",
                            "API cloud uniquement",
                            "Interviews des utilisateurs"
                        ],
                        correctAnswer: 1,
                        explication: "OCS déploie des agents pour récolter données sans action manuelle"
                    },
                    {
                        question: "Calcul du MTTR:",
                        options: [
                            "Heures totales / nombre pannes",
                            "Temps réparation / nombre pannes",
                            "Achat / maintenance",
                            "Gain / Coût"
                        ],
                        correctAnswer: 1,
                        explication: "MTTR mesure rapidité du support technique"
                    },
                    {
                        question: "Le TCO inclut:",
                        options: [
                            "Achat uniquement",
                            "Achat + maintenance seulement",
                            "Achat + maintenance + énergie + fin de vie",
                            "Rien (gratuit)"
                        ],
                        correctAnswer: 2,
                        explication: "TCO = tous coûts du cycle de vie complet"
                    },
                    {
                        question: "Pour vérifier conformité licences:",
                        options: [
                            "Faire confiance éditeur",
                            "OCS + GLPI et audit régulier",
                            "Rien (pas important)",
                            "Laisser IT seul"
                        ],
                        correctAnswer: 1,
                        explication: "Audit licences critique: audit légal + conformité"
                    }
                ]
            }
        }
    },
    
    // ╔════════════════════════════════════════════════════════════╗
    // ║  MATIÈRE 3: MATHÉMATIQUES POUR L'INFORMATIQUE             ║
    // ╚════════════════════════════════════════════════════════════╝
    
    "maths": {
        title: "Mathématiques pour l'Informatique",
        icon: "🔢",
        chapters: {
            
            // CHAPITRE 3.1
            "algebre-boole": {
                title: "Chapitre 1: Algèbre de Boole",
                icon: "🔢",
                
                cours: {
                    title: "Cours Complet",
                    content: `
                        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Chapitre 1: Algèbre de Boole</h2>
                        
                        <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition</p>
                            <p class="text-indigo-800 dark:text-indigo-300 mt-2">Algèbre mathématique utilisant variables binaires (0/1, VRAI/FAUX). Fondamentale pour logique numérique, circuits, programmation et algorithmes.</p>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 1: Concepts Fondamentaux</h3>
                        
                        <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.1 - Variables Booléennes</h4>
                            <p class="text-gray-700 dark:text-gray-300">Variable = une valeur parmi 2 états possibles :</p>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                                <li><strong>1</strong> = VRAI, OUI, allumé, True</li>
                                <li><strong>0</strong> = FAUX, NON, éteint, False</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 2: Opérateurs Logiques de Base</h3>
                        
                        <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">2.1 - AND (ET) - ∧ ou . ou &&</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2">Résultat = 1 UNIQUEMENT si TOUS les entrées = 1</p>
                            <table class="w-full border-collapse border border-gray-400 mt-2 text-sm">
                                <tr class="bg-green-100 dark:bg-green-900">
                                    <th class="border p-2">A</th>
                                    <th class="border p-2">B</th>
                                    <th class="border p-2">A AND B</th>
                                </tr>
                                <tr><td class="border p-2">0</td><td class="border p-2">0</td><td class="border p-2 font-bold">0</td></tr>
                                <tr><td class="border p-2">0</td><td class="border p-2">1</td><td class="border p-2 font-bold">0</td></tr>
                                <tr><td class="border p-2">1</td><td class="border p-2">0</td><td class="border p-2 font-bold">0</td></tr>
                                <tr class="bg-green-100 dark:bg-green-900"><td class="border p-2">1</td><td class="border p-2">1</td><td class="border p-2 font-bold">1</td></tr>
                            </table>
                        </div>
                        
                        <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">2.2 - OR (OU) - ∨ ou + ou ||</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2">Résultat = 1 si AU MOINS une entrée = 1</p>
                            <table class="w-full border-collapse border border-gray-400 mt-2 text-sm">
                                <tr class="bg-blue-100 dark:bg-blue-900">
                                    <th class="border p-2">A</th>
                                    <th class="border p-2">B</th>
                                    <th class="border p-2">A OR B</th>
                                </tr>
                                <tr><td class="border p-2">0</td><td class="border p-2">0</td><td class="border p-2 font-bold">0</td></tr>
                                <tr class="bg-blue-100 dark:bg-blue-900"><td class="border p-2">0</td><td class="border p-2">1</td><td class="border p-2 font-bold">1</td></tr>
                                <tr class="bg-blue-100 dark:bg-blue-900"><td class="border p-2">1</td><td class="border p-2">0</td><td class="border p-2 font-bold">1</td></tr>
                                <tr class="bg-blue-100 dark:bg-blue-900"><td class="border p-2">1</td><td class="border p-2">1</td><td class="border p-2 font-bold">1</td></tr>
                            </table>
                        </div>
                        
                        <div class="lesson-box border-l-4 border-purple-600 bg-purple-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">2.3 - NOT (NON) - ¬ ou ! ou barre</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-2">Inverse la valeur (complémentation)</p>
                            <table class="w-full border-collapse border border-gray-400 mt-2 text-sm">
                                <tr class="bg-purple-100 dark:bg-purple-900">
                                    <th class="border p-2">A</th>
                                    <th class="border p-2">NOT A</th>
                                </tr>
                                <tr class="bg-purple-100 dark:bg-purple-900"><td class="border p-2">0</td><td class="border p-2 font-bold">1</td></tr>
                                <tr><td class="border p-2">1</td><td class="border p-2 font-bold">0</td></tr>
                            </table>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 3: Lois de l'Algèbre de Boole</h3>
                        
                        <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">3.1 - Propriétés Essentielles</h4>
                            <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 mt-3 text-sm">
                                <thead class="bg-indigo-100 dark:bg-indigo-900">
                                    <tr>
                                        <th class="border p-2 text-left">Propriété</th>
                                        <th class="border p-2 text-left">Expression</th>
                                    </tr>
                                </thead>
                                <tbody class="text-gray-700 dark:text-gray-300">
                                    <tr>
                                        <td class="border p-2"><strong>Commutativité</strong></td>
                                        <td class="border p-2">A∧B = B∧A ; A∨B = B∨A</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Associativité</strong></td>
                                        <td class="border p-2">(A∧B)∧C = A∧(B∧C)</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Distributivité</strong></td>
                                        <td class="border p-2">A∧(B∨C) = (A∧B)∨(A∧C)</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Identité</strong></td>
                                        <td class="border p-2">A∧1 = A ; A∨0 = A</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Annulation</strong></td>
                                        <td class="border p-2">A∧0 = 0 ; A∨1 = 1</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Complémentarité</strong></td>
                                        <td class="border p-2">A∧¬A = 0 ; A∨¬A = 1</td>
                                    </tr>
                                    <tr>
                                        <td class="border p-2"><strong>Double Négation</strong></td>
                                        <td class="border p-2">¬(¬A) = A</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 4: Lois de De Morgan</h3>
                        
                        <div class="alert alert-info border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-blue-900 dark:text-blue-200">🔑 Lois Principales :</p>
                            <ul class="list-disc list-inside text-blue-800 dark:text-blue-300 mt-2 space-y-1">
                                <li><strong>Loi 1 :</strong> ¬(A ∧ B) = ¬A ∨ ¬B</li>
                                <li><strong>Loi 2 :</strong> ¬(A ∨ B) = ¬A ∧ ¬B</li>
                                <li><strong>Utilité :</strong> Simplifier expressions booléennes</li>
                                <li><strong>Exemple :</strong> ¬(x>5 ∧ x<10) = (x≤5 ∨ x≥10)</li>
                            </ul>
                        </div>
                    `
                },
                
                flashcards: [
                    {
                        question: "Que vaut (1 AND 0)?",
                        answer: "0 - AND nécessite TOUS les 1",
                        explication: "AND = tous les 1, sinon 0"
                    },
                    {
                        question: "Que vaut (0 OR 1)?",
                        answer: "1 - OR nécessite AU MOINS un 1",
                        explication: "OR = au moins un 1, sinon 0"
                    },
                    {
                        question: "Que vaut NOT(0)?",
                        answer: "1 - NOT inverse",
                        explication: "NOT 0→1, NOT 1→0"
                    },
                    {
                        question: "Loi De Morgan: ¬(A∧B) = ?",
                        answer: "¬A ∨ ¬B",
                        explication: "Négation AND = OR des négations"
                    },
                    {
                        question: "A ∧ ¬A vaut toujours?",
                        answer: "0 (faux) - Complémentarité",
                        explication: "Une variable ne peut pas être VRAI et FAUX"
                    }
                ],
                
                quiz: [
                    {
                        question: "(1 AND 1) OR 0 = ?",
                        options: ["0", "1", "Indéfini", "Erreur"],
                        correctAnswer: 1,
                        explication: "(1∧1)=1, (1∨0)=1"
                    },
                    {
                        question: "NOT(0 OR 1) = ?",
                        options: ["0", "1", "Indéfini", "Erreur"],
                        correctAnswer: 0,
                        explication: "(0∨1)=1, NOT(1)=0"
                    },
                    {
                        question: "(1 AND 1) AND (0 OR 1) = ?",
                        options: ["0", "1", "Indéfini", "2"],
                        correctAnswer: 1,
                        explication: "(1∧1)=1, (0∨1)=1, (1∧1)=1"
                    },
                    {
                        question: "Simplifier ¬(A ∨ B):",
                        options: ["¬A ∧ ¬B", "¬A ∨ ¬B", "A ∧ B", "¬A"],
                        correctAnswer: 0,
                        explication: "De Morgan: ¬(A∨B) = ¬A∧¬B"
                    },
                    {
                        question: "A ∨ NOT(A) = ?",
                        options: ["Toujours 0", "Toujours 1", "Dépend A", "Erreur"],
                        correctAnswer: 1,
                        explication: "Tautologie: A VRAI ou NOT(A) VRAI"
                    }
                ]
            }
        }
    },
    
    // ╔════════════════════════════════════════════════════════════╗
    // ║  MATIÈRE 4: CGE & ANGLAIS                                  ║
    // ╚════════════════════════════════════════════════════════════╝
    
    "cge": {
        title: "Culture Générale, Expression & Anglais",
        icon: "📚",
        chapters: {
            
            // CHAPITRE 4.1
            "synthese-documents": {
                title: "Chapitre 1: Synthèse de Documents",
                icon: "📄",
                
                cours: {
                    title: "Cours Complet",
                    content: `
                        <h2 class="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Chapitre 1: Synthèse de Documents</h2>
                        
                        <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition</p>
                            <p class="text-indigo-800 dark:text-indigo-300 mt-2">Technique de rédaction réduisant un texte long en conservant idées principales, sans ajout d'opinions personnelles ni recopie.</p>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 1: Principes Fondamentaux</h3>
                        
                        <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">1.1 - Les 5 Règles d'Or</h4>
                            <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Fidélité :</strong> Respecter la pensée de l'auteur</li>
                                <li><strong>Objectivité :</strong> Pas d'interprétation ou avis personnel</li>
                                <li><strong>Concision :</strong> Réduire à 1/3-1/4 du texte original</li>
                                <li><strong>Clarté :</strong> Rédaction fluide et compréhensible</li>
                                <li><strong>Complétude :</strong> Conserver toutes idées principales</li>
                            </ol>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 2: Méthodologie</h3>
                        
                        <div class="mermaid">
                            graph TD
                            A[Lecture attentive] --> B[Identifier idées principales]
                            B --> C[Mettre en avant thèmes clés]
                            C --> D[Rédiger sans recopier]
                            D --> E[Vérifier cohérence]
                            E --> F[Respecter longueur]
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 3: Erreurs Courantes</h3>
                        
                        <div class="alert alert-warning border-l-4 border-red-500 bg-red-50 dark:bg-red-900 p-4 mb-6 rounded">
                            <p class="font-semibold text-red-900 dark:text-red-200">⚠️ À Éviter :</p>
                            <ul class="list-disc list-inside text-red-800 dark:text-red-300 mt-2 space-y-1">
                                <li>❌ Recopier phrases du texte original</li>
                                <li>❌ Ajouter informations externes</li>
                                <li>❌ Oublier idées importantes</li>
                                <li>❌ Langage trop simplifié</li>
                                <li>❌ Synthèse trop courte ou trop longue</li>
                                <li>❌ Déformer le sens</li>
                            </ul>
                        </div>
                        
                        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Section 4: Connecteurs Logiques</h3>
                        
                        <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                            <h4 class="font-bold text-gray-900 dark:text-white mb-2">4.1 - Mots de Liaison</h4>
                            <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                <li><strong>Cause/Conséquence :</strong> car, donc, c'est pourquoi, par conséquent</li>
                                <li><strong>Énumération :</strong> d'abord, ensuite, enfin, notamment</li>
                                <li><strong>Opposition :</strong> cependant, toutefois, bien que, alors que</li>
                                <li><strong>Addition :</strong> de plus, en outre, également, ainsi</li>
                            </ul>
                        </div>
                    `
                },
                
                flashcards: [
                    {
                        question: "Qu'est-ce qu'une synthèse?",
                        answer: "Réduction fidèle d'un texte en conservant idées principales",
                        explication: "Objectif: concis, clair, sans ajout personnel"
                    },
                    {
                        question: "Longueur recommandée synthèse?",
                        answer: "1/3 à 1/4 du texte original",
                        explication: "Réduction de 60-75%"
                    },
                    {
                        question: "Peux-tu donner ton avis?",
                        answer: "Non, c'est interdit. Objectivité obligatoire",
                        explication: "La synthèse rapporte, pas juge"
                    },
                    {
                        question: "Que faire avec phrases du texte?",
                        answer: "Les rédiger avec tes propres mots",
                        explication: "Recopie = erreur majeure (plagiat)"
                    },
                    {
                        question: "Connecteur pour conséquence?",
                        answer: "Donc, par conséquent, c'est pourquoi",
                        explication: "Relient cause et effet logiquement"
                    }
                ],
                
                quiz: [
                    {
                        question: "Synthèse doit être:",
                        options: [
                            "Fidèle, objective, concise",
                            "Subjective et détaillée",
                            "Copiée du texte",
                            "Enrichie d'avis"
                        ],
                        correctAnswer: 0,
                        explication: "Les 3 piliers"
                    },
                    {
                        question: "Recopier signifie:",
                        options: [
                            "Encouragé",
                            "Interdit - erreur majeure",
                            "Optionnel",
                            "Technique correcte"
                        ],
                        correctAnswer: 1,
                        explication: "Recopie = plagiat"
                    },
                    {
                        question: "Ratio idéal réduction:",
                        options: [
                            "Aucune limite",
                            "50% du texte",
                            "1/3 à 1/4 du texte",
                            "Identique au texte"
                        ],
                        correctAnswer: 2,
                        explication: "Diviser par 3-4"
                    },
                    {
                        question: "Comment identifier idées principales?",
                        options: [
                            "Surligner au hasard",
                            "Lire plusieurs fois, noter thèmes récurrents",
                            "Copier premiers paragraphes",
                            "C'est impossible"
                        ],
                        correctAnswer: 1,
                        explication: "Lecture attentive et réflexion"
                    },
                    {
                        question: "Synthèse bien rédigée contient:",
                        options: [
                            "Uniquement copier-coller",
                            "Idées principales + rédaction propre",
                            "Avis personnels",
                            "Histoires non liées"
                        ],
                        correctAnswer: 1,
                        explication: "Idées principales + belle rédaction = succès"
                    }
                ]
            }
        }
    }
};

// Retro-compatibilité: créer structure aplatie pour compatibility
const btsSioData = {};
for (const subject in btsSioDataComplete) {
    const chapters = btsSioDataComplete[subject].chapters || {};
    for (const chapterId in chapters) {
        btsSioData[chapterId] = {
            title: chapters[chapterId].title,
            icon: chapters[chapterId].icon,
            cours: chapters[chapterId].cours,
            flashcards: chapters[chapterId].flashcards,
            quiz: chapters[chapterId].quiz
        };
    }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { btsSioDataComplete, btsSioData };
}
