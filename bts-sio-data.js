/**
 * ================================================================
 * BTS SIO 1 - BASE DE DONNÉES COMPLÈTE
 * Contient tous les cours, flashcards et quiz pour BTS SIO 1
 * ================================================================
 */

const btsSioData = {
    // ===== SECTION 1: EDMN (Économie, Droit et Management du Numérique) =====
    
    "cadre-juridique": {
        title: "Le Cadre Juridique de l'Activité Numérique",
        icon: "📋",
        
        // COURS
        cours: {
            title: "Cours Complet",
            content: `
                <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Le Cadre Juridique du Numérique</h2>
                
                <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                    <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition clé</p>
                    <p class="text-indigo-800 dark:text-indigo-300 mt-2">Le cadre juridique numérique regroupe l'ensemble des lois et régulations régissant les activités informatiques et les échanges de données.</p>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">1. Les Lois Fondamentales</h3>
                
                <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">RGPD (Règlement Général sur la Protection des Données)</h4>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Entrée en vigueur : mai 2018</li>
                        <li>Obligatoire dans toute l'UE</li>
                        <li>Protège les données personnelles des citoyens</li>
                        <li>Amendes : jusqu'à 4% du CA (max 20M€)</li>
                    </ul>
                </div>
                
                <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">Loi Informatique et Libertés (France)</h4>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Depuis 1978, modernisée en 2004 et 2018</li>
                        <li>Complément du RGPD en France</li>
                        <li>Crée la CNIL (Commission Nationale Informatique et Libertés)</li>
                        <li>Droit d'accès, rectification, suppression des données</li>
                    </ul>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">2. Propriété Intellectuelle</h3>
                
                <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">Copyright et Droit d'Auteur</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Protège les créations originales (code, documents, images). Automatique, pas besoin de déclaration.</p>
                    <p class="text-gray-700 dark:text-gray-300">Durée : toute la vie + 70 ans après la mort</p>
                </div>
                
                <div class="lesson-box border-l-4 border-purple-600 bg-purple-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">Brevet & Marque</h4>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        <li><strong>Brevet :</strong> Protège une invention (20 ans)</li>
                        <li><strong>Marque :</strong> Logo, nom distinctif (renouvelable)</li>
                        <li>Nécessite une demande officielle (INPI en France)</li>
                    </ul>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">3. Responsabilités Légales</h3>
                
                <div class="alert alert-info border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 p-4 mb-6 rounded">
                    <p class="text-blue-900 dark:text-blue-200"><strong>Loi Hadopi :</strong> Protection des droits d'auteur en ligne. Trois avertissements avant coupure Internet.</p>
                </div>
                
                <div class="alert alert-warning border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900 p-4 mb-6 rounded">
                    <p class="text-amber-900 dark:text-amber-200"><strong>Cybercriminalité :</strong> Accès frauduleux, usurpation d'identité, phishing (article 226-16 à 226-17 CP)</p>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">4. Conformité & Audit</h3>
                
                <p class="text-gray-700 dark:text-gray-300 mb-4">Les entreprises doivent :</p>
                <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                    <li>Nommer un DPO (Data Protection Officer)</li>
                    <li>Tenir un registre des traitements</li>
                    <li>Réaliser une analyse d'impact (AIPD)</li>
                    <li>Signaler les violations dans les 72h</li>
                    <li>Respecter le droit à l'oubli</li>
                </ul>
            `
        },
        
        // FLASHCARDS
        flashcards: [
            {
                question: "Que signifie RGPD ?",
                answer: "Règlement Général sur la Protection des Données. Loi UE de 2018 protégeant les données personnelles.",
                explication: "Le RGPD s'applique à tous les traitements de données personnelles de citoyens de l'UE, peu importe où l'entreprise est basée."
            },
            {
                question: "Quelle est l'amende maximale du RGPD ?",
                answer: "4% du chiffre d'affaires annuel (max 20 millions €)",
                explication: "Les amendes du RGPD sont très élevées pour encourager la conformité des entreprises."
            },
            {
                question: "Quand le RGPD est-il entré en vigueur ?",
                answer: "Mai 2018 (après 2 ans de délai)",
                explication: "Il a remplacé la directive 95/46/CE datant de 1995."
            },
            {
                question: "Quel organisme français protège les données ?",
                answer: "La CNIL (Commission Nationale Informatique et Libertés)",
                explication: "La CNIL est l'autorité de contrôle française pour la protection des données."
            },
            {
                question: "Quel est le délai pour signaler une violation de données ?",
                answer: "72 heures maximum après découverte",
                explication: "C'est une obligation obligatoire du RGPD, sauf si risque faible."
            }
        ],
        
        // QUIZ
        quiz: [
            {
                question: "Le RGPD s'applique à :",
                options: ["France uniquement", "UE et pays tiers traitant données UE", "Monde entier", "Optionnel"],
                correctAnswer: 1,
                explication: "Le RGPD s'applique à tout traitement de données personnelles de citoyens de l'UE, même si l'entreprise est hors UE."
            },
            {
                question: "Quelle entreprise doit nommer un DPO ?",
                options: ["Tous les e-commerces", "Organismes de secteur public", "Entreprises traitant données sensibles", "Aucune (facultatif)"],
                correctAnswer: 2,
                explication: "Le DPO est obligatoire pour les organismes publics et les entreprises effectuant surveillance systématique."
            },
            {
                question: "Le droit à l'oubli signifie :",
                options: ["Supprimer toute trace sur Internet", "Demander la suppression de ses données", "Refuser la CNIL", "Aucun impact légal"],
                correctAnswer: 1,
                explication: "Le droit à l'oubli permet à une personne de demander la suppression de ses données personnelles."
            },
            {
                question: "La Loi Informatique et Libertés en France date de :",
                options: ["1995", "2004 (date de modernisation)", "1978 (date originelle)", "2020"],
                correctAnswer: 2,
                explication: "La loi originelle date de 1978, modernisée en 2004 et à nouveau en 2018."
            },
            {
                question: "Hadopi s'occupe de :",
                options: ["Protection fiscale", "Protection des droits d'auteur en ligne", "Cybersécurité", "Brevets"],
                correctAnswer: 1,
                explication: "Hadopi (Haute Autorité pour la Diffusion des Œuvres et la Protection des droits sur Internet) combat le téléchargement illégal."
            }
        ]
    },
    
    // ===== SECTION 2: BLOC 1 =====
    
    "gestion-patrimoine": {
        title: "Gestion du Patrimoine Informatique",
        icon: "💾",
        
        cours: {
            title: "Cours Complet",
            content: `
                <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Gestion du Patrimoine Informatique</h2>
                
                <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                    <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition clé</p>
                    <p class="text-indigo-800 dark:text-indigo-300 mt-2">Ensemble des processus de gestion, suivi et maintenance de tous les actifs informatiques d'une organisation (matériel, logiciel, données).</p>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">1. Inventaire et Suivi</h3>
                
                <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">GLPI (Gestion Libre du Parc Informatique)</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Logiciel open-source de gestion d'actifs informatiques.</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Inventaire matériel et logiciel</li>
                        <li>Gestion des incidents et tickets</li>
                        <li>Suivi des contrats</li>
                        <li>Historique des changements</li>
                    </ul>
                </div>
                
                <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">OCS Inventory (Open Computer and Software Inventory)</h4>
                    <p class="text-gray-700 dark:text-gray-300">Outil de découverte automatique du parc informatique via agent client.</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Déploiement automatique d'agents sur les machines</li>
                        <li>Collecte configuration matérielle/logicielle</li>
                        <li>Rapport automatisé de conformité licences</li>
                    </ul>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">2. Cycle de Vie des Actifs</h3>
                
                <div class="mermaid">
                    graph LR
                    A[Acquisition] --> B[Déploiement]
                    B --> C[Maintenance]
                    C --> D{Fin de Vie?}
                    D -->|Non| C
                    D -->|Oui| E[Désinstallation]
                    E --> F[Recyclage]
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">3. Métriques et Indicateurs</h3>
                
                <table class="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
                    <thead class="bg-indigo-100 dark:bg-indigo-900">
                        <tr>
                            <th class="border border-gray-300 dark:border-gray-700 p-3 text-left">Indicateur</th>
                            <th class="border border-gray-300 dark:border-gray-700 p-3 text-left">Définition</th>
                            <th class="border border-gray-300 dark:border-gray-700 p-3 text-left">Utilité</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-700 dark:text-gray-300">
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="border border-gray-300 dark:border-gray-700 p-3">MTBF</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Mean Time Between Failures</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Temps moyen avant défaillance</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="border border-gray-300 dark:border-gray-700 p-3">MTTR</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Mean Time To Repair</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Temps moyen de réparation</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="border border-gray-300 dark:border-gray-700 p-3">ROI</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Return On Investment</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Rentabilité de l'investissement</td>
                        </tr>
                        <tr class="hover:bg-gray-100 dark:hover:bg-gray-800">
                            <td class="border border-gray-300 dark:border-gray-700 p-3">TCO</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Total Cost of Ownership</td>
                            <td class="border border-gray-300 dark:border-gray-700 p-3">Coût total de possession</td>
                        </tr>
                    </tbody>
                </table>
            `
        },
        
        flashcards: [
            {
                question: "Qu'est-ce que GLPI ?",
                answer: "Gestion Libre du Parc Informatique - logiciel open-source de gestion d'actifs IT",
                explication: "GLPI permet de gérer l'inventaire, les incidents, les contrats et l'historique du parc informatique."
            },
            {
                question: "Quel est le rôle d'OCS Inventory ?",
                answer: "Découvrir automatiquement et inventorier le parc informatique via des agents clients",
                explication: "OCS Inventory complète GLPI en automatisant la collecte des données du parc."
            },
            {
                question: "Que signifie MTBF ?",
                answer: "Mean Time Between Failures - Temps moyen entre défaillances",
                explication: "C'est un KPI important pour mesurer la fiabilité d'un équipement."
            },
            {
                question: "Qu'est-ce que le TCO ?",
                answer: "Total Cost of Ownership - Coût total de possession d'un équipement",
                explication: "Inclut achat, maintenance, énergie, support jusqu'à fin de vie."
            },
            {
                question: "Quel est le cycle de vie d'un actif informatique ?",
                answer: "Acquisition → Déploiement → Maintenance → Désinstallation → Recyclage",
                explication: "Chaque phase requiert une gestion spécifique pour optimiser le ROI."
            }
        ],
        
        quiz: [
            {
                question: "GLPI permet de gérer :",
                options: ["Uniquement le matériel", "Matériel, logiciel, incidents, contrats", "Uniquement les licences", "Uniquement les incidents"],
                correctAnswer: 1,
                explication: "GLPI est un outil complet de gestion d'actifs informatiques et de services."
            },
            {
                question: "OCS Inventory utilise :",
                options: ["Balayage réseau manuel", "Agents clients pour collecte automatique", "API cloud uniquement", "Fichiers Excel importés"],
                correctAnswer: 1,
                explication: "OCS Inventory installe des agents qui collectent les données de chaque machine."
            },
            {
                question: "Le MTTR mesure :",
                options: ["Temps entre pannes", "Temps de réparation", "Temps d'achat", "Temps de recyclage"],
                correctAnswer: 1,
                explication: "MTTR = Mean Time To Repair, mesure l'efficacité du support technique."
            },
            {
                question: "Quel KPI inclut coûts d'achat ET de maintenance ?",
                options: ["MTBF", "ROI", "TCO", "MTTR"],
                correctAnswer: 2,
                explication: "Le TCO (Total Cost of Ownership) englobe tous les coûts de vie d'un équipement."
            },
            {
                question: "La conformité des licences logicielles est vérifiée par :",
                options: ["GLPI seul", "OCS Inventory seul", "GLPI + OCS Inventory", "Aucun de ces outils"],
                correctAnswer: 2,
                explication: "OCS collecte les logiciels installés, GLPI les confronte aux licences achetées."
            }
        ]
    },
    
    // ===== SECTION 3: MATHÉMATIQUES =====
    
    "algebre-boole": {
        title: "Algèbre de Boole",
        icon: "🔢",
        
        cours: {
            title: "Cours Complet",
            content: `
                <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Algèbre de Boole</h2>
                
                <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                    <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition clé</p>
                    <p class="text-indigo-800 dark:text-indigo-300 mt-2">Algèbre mathématique basée sur des variables à deux états : VRAI (1) ou FAUX (0). Fondamentale pour l'informatique et les circuits logiques.</p>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">1. Variables Booléennes</h3>
                
                <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <p class="text-gray-700 dark:text-gray-300">Une variable booléenne peut prendre exactement 2 valeurs :</p>
                    <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                        <li><strong>1</strong> = VRAI (True, OUI, allumé)</li>
                        <li><strong>0</strong> = FAUX (False, NON, éteint)</li>
                    </ul>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">2. Opérateurs Logiques</h3>
                
                <div class="lesson-box border-l-4 border-green-600 bg-green-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">ET Logique (AND)</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Symbole : ∧ ou . ou &&</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Résultat = 1 seulement si TOUS les entrées = 1</p>
                    <table class="w-full border-collapse border border-gray-400 mt-2 text-sm">
                        <tr class="bg-green-100 dark:bg-gray-700">
                            <th class="border p-2">A</th>
                            <th class="border p-2">B</th>
                            <th class="border p-2">A AND B</th>
                        </tr>
                        <tr>
                            <td class="border p-2">0</td>
                            <td class="border p-2">0</td>
                            <td class="border p-2"><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td class="border p-2">0</td>
                            <td class="border p-2">1</td>
                            <td class="border p-2"><strong>0</strong></td>
                        </tr>
                        <tr>
                            <td class="border p-2">1</td>
                            <td class="border p-2">0</td>
                            <td class="border p-2"><strong>0</strong></td>
                        </tr>
                        <tr class="bg-green-100 dark:bg-green-900">
                            <td class="border p-2">1</td>
                            <td class="border p-2">1</td>
                            <td class="border p-2"><strong>1</strong></td>
                        </tr>
                    </table>
                </div>
                
                <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">OU Logique (OR)</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Symbole : ∨ ou + ou ||</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Résultat = 1 si AU MOINS une entrée = 1</p>
                    <table class="w-full border-collapse border border-gray-400 mt-2 text-sm">
                        <tr class="bg-blue-100 dark:bg-gray-700">
                            <th class="border p-2">A</th>
                            <th class="border p-2">B</th>
                            <th class="border p-2">A OR B</th>
                        </tr>
                        <tr>
                            <td class="border p-2">0</td>
                            <td class="border p-2">0</td>
                            <td class="border p-2"><strong>0</strong></td>
                        </tr>
                        <tr class="bg-blue-100 dark:bg-blue-900">
                            <td class="border p-2">0</td>
                            <td class="border p-2">1</td>
                            <td class="border p-2"><strong>1</strong></td>
                        </tr>
                        <tr class="bg-blue-100 dark:bg-blue-900">
                            <td class="border p-2">1</td>
                            <td class="border p-2">0</td>
                            <td class="border p-2"><strong>1</strong></td>
                        </tr>
                        <tr class="bg-blue-100 dark:bg-blue-900">
                            <td class="border p-2">1</td>
                            <td class="border p-2">1</td>
                            <td class="border p-2"><strong>1</strong></td>
                        </tr>
                    </table>
                </div>
                
                <div class="lesson-box border-l-4 border-purple-600 bg-purple-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">NON Logique (NOT)</h4>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Symbole : ¬ ou ! ou bar au-dessus</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2">Inverse la valeur (0→1, 1→0)</p>
                    <table class="w-full border-collapse border border-gray-400 mt-2 text-sm">
                        <tr class="bg-purple-100 dark:bg-gray-700">
                            <th class="border p-2">A</th>
                            <th class="border p-2">NOT A</th>
                        </tr>
                        <tr class="bg-purple-100 dark:bg-purple-900">
                            <td class="border p-2">0</td>
                            <td class="border p-2"><strong>1</strong></td>
                        </tr>
                        <tr>
                            <td class="border p-2">1</td>
                            <td class="border p-2"><strong>0</strong></td>
                        </tr>
                    </table>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">3. Lois Fondamentales</h3>
                
                <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <p class="text-gray-700 dark:text-gray-300"><strong>Commutativité :</strong> A∧B = B∧A et A∨B = B∨A</p>
                    <p class="text-gray-700 dark:text-gray-300"><strong>Associativité :</strong> (A∧B)∧C = A∧(B∧C)</p>
                    <p class="text-gray-700 dark:text-gray-300"><strong>Distributivité :</strong> A∧(B∨C) = (A∧B)∨(A∧C)</p>
                    <p class="text-gray-700 dark:text-gray-300"><strong>Identité :</strong> A∧1 = A, A∨0 = A</p>
                    <p class="text-gray-700 dark:text-gray-300"><strong>Complémentarité :</strong> A∧¬A = 0, A∨¬A = 1</p>
                    <p class="text-gray-700 dark:text-gray-300"><strong>Lois de De Morgan :</strong> ¬(A∧B) = ¬A∨¬B, ¬(A∨B) = ¬A∧¬B</p>
                </div>
            `
        },
        
        flashcards: [
            {
                question: "Que vaut (1 AND 0) ?",
                answer: "0 - Le AND nécessite que TOUS les entrées soient 1",
                explication: "AND = tous les 1, sinon c'est 0"
            },
            {
                question: "Que vaut (0 OR 0) ?",
                answer: "0 - Le OR nécessite au moins une entrée à 1",
                explication: "OR = au moins un 1, sinon c'est 0"
            },
            {
                question: "Que vaut NOT(1) ?",
                answer: "0 - NOT inverse la valeur",
                explication: "NOT est l'opérateur inverse : 0→1 et 1→0"
            },
            {
                question: "Quelle est la loi de De Morgan pour AND ?",
                answer: "¬(A∧B) = ¬A∨¬B",
                explication: "La négation d'un AND = OR des négations"
            },
            {
                question: "A AND NOT(A) vaut toujours :",
                answer: "0 (faux) - c'est la loi de complémentarité",
                explication: "A ne peut pas être VRAI et FAUX en même temps."
            }
        ],
        
        quiz: [
            {
                question: "Que vaut (1 AND 1) OR 0 ?",
                options: ["0", "1", "Indéterminé", "Erreur"],
                correctAnswer: 1,
                explication: "(1 AND 1) = 1, puis (1 OR 0) = 1"
            },
            {
                question: "Que vaut NOT(0 OR 1) ?",
                options: ["0", "1", "Indéterminé", "Erreur"],
                correctAnswer: 0,
                explication: "(0 OR 1) = 1, puis NOT(1) = 0"
            },
            {
                question: "Que vaut (1 AND 1) AND (0 OR 1) ?",
                options: ["0", "1", "Indéterminé", "2"],
                correctAnswer: 1,
                explication: "(1 AND 1) = 1, (0 OR 1) = 1, (1 AND 1) = 1"
            },
            {
                question: "Simplifier : ¬(A ∨ B) selon De Morgan",
                options: ["¬A AND ¬B", "¬A OR ¬B", "A AND B", "NOT A"],
                correctAnswer: 0,
                explication: "Loi de De Morgan : ¬(A∨B) = ¬A∧¬B"
            },
            {
                question: "Que vaut A OR NOT(A) ?",
                options: ["Toujours 0", "Toujours 1", "Dépend de A", "Erreur"],
                correctAnswer: 1,
                explication: "C'est une tautologie : A est VRAI ou NOT(A) est VRAI, jamais les deux faux."
            }
        ]
    },
    
    // ===== SECTION 4: CGE & ANGLAIS =====
    
    "synthese-documents": {
        title: "Synthèse de Documents",
        icon: "📄",
        
        cours: {
            title: "Cours Complet",
            content: `
                <h2 class="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Synthèse de Documents</h2>
                
                <div class="alert border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900 p-4 mb-6 rounded">
                    <p class="font-semibold text-indigo-900 dark:text-indigo-200">📌 Définition clé</p>
                    <p class="text-indigo-800 dark:text-indigo-300 mt-2">Technique de rédaction qui consiste à réduire un texte long en conservant ses idées principales, sans ajouter d'opinions personnelles.</p>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">1. Principes Fondamentaux</h3>
                
                <div class="lesson-box border-l-4 border-indigo-600 bg-indigo-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <h4 class="font-bold text-gray-900 dark:text-white mb-2">Les 5 règles d'or</h4>
                    <ol class="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>Fidélité :</strong> Respecter la pensée de l'auteur</li>
                        <li><strong>Objectivité :</strong> Pas d'interprétation, pas d'avis personnel</li>
                        <li><strong>Concision :</strong> Réduire à l'essentiel (1/3 à 1/4 du texte)</li>
                        <li><strong>Clarté :</strong> Rédaction fluide et compréhensible</li>
                        <li><strong>Complétude :</strong> Ne pas oublier les idées majeures</li>
                    </ol>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">2. Méthodologie</h3>
                
                <div class="mermaid">
                    graph TD
                    A[Lecture attentive du texte] --> B[Identifier les idées principales]
                    B --> C[Mettre en avant les thèmes clés]
                    C --> D[Rédiger sans recopier]
                    D --> E[Vérifier la cohérence]
                    E --> F[Respecter la longueur demandée]
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">3. Erreurs à Éviter</h3>
                
                <div class="alert alert-warning border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900 p-4 mb-6 rounded">
                    <ul class="list-disc list-inside text-amber-900 dark:text-amber-200 space-y-1">
                        <li>❌ Recopier des phrases du texte original</li>
                        <li>❌ Ajouter des informations externes ou personnelles</li>
                        <li>❌ Oublier des idées importantes</li>
                        <li>❌ Utiliser un langage trop simplifié</li>
                        <li>❌ Rédiger une synthèse trop courte ou trop longue</li>
                        <li>❌ Déformer le sens du texte</li>
                    </ul>
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-6">4. Connecteurs Utiles</h3>
                
                <div class="lesson-box border-l-4 border-blue-600 bg-blue-50 dark:bg-gray-800 p-4 mb-4 rounded">
                    <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>Cause/Conséquence :</strong> car, donc, c'est pourquoi, par conséquent</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>Énumération :</strong> d'abord, ensuite, enfin, notamment</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-2"><strong>Opposition :</strong> cependant, toutefois, bien que, alors que</p>
                    <p class="text-gray-700 dark:text-gray-300"><strong>Addition :</strong> de plus, en outre, également, ainsi</p>
                </div>
            `
        },
        
        flashcards: [
            {
                question: "Qu'est-ce qu'une synthèse de documents ?",
                answer: "Réduction d'un texte long en conservant les idées principales sans ajouter d'opinions.",
                explication: "C'est un exercice d'objectivité et de concision."
            },
            {
                question: "Quelle est la longueur recommandée d'une synthèse ?",
                answer: "Environ 1/3 à 1/4 du texte original",
                explication: "Cela dépend des instructions, mais généralement on réduit de 60-75%."
            },
            {
                question: "Peux-tu ajouter tes opinions dans une synthèse ?",
                answer: "Non, c'est interdit. Il faut être objectif.",
                explication: "La synthèse rapporte ce que l'auteur dit, pas ce que tu en penses."
            },
            {
                question: "Dois-tu recopier des phrases du texte original ?",
                answer: "Non, tu dois rédiger avec tes propres mots.",
                explication: "C'est l'une des erreurs les plus fréquentes."
            },
            {
                question: "Quel connecteur utiliser pour exprimer une conséquence ?",
                answer: "Donc, par conséquent, c'est pourquoi...",
                explication: "Ces connecteurs relient cause et effet logiquement."
            }
        ],
        
        quiz: [
            {
                question: "Une synthèse doit être :",
                options: ["Fidèle, objective et concise", "Subjective et détaillée", "Copiée du texte original", "Enrichie d'avis personnels"],
                correctAnswer: 0,
                explication: "Les trois piliers de la synthèse sont fidélité, objectivité et concision."
            },
            {
                question: "Que signifie 'recopier' dans une synthèse ?",
                options: ["C'est encouragé", "C'est interdit - erreur majeure", "C'est optionnel", "C'est une technique correcte"],
                correctAnswer: 1,
                explication: "Recopier = plagiat. Tu dois reformuler avec tes mots."
            },
            {
                question: "Quel est le ratio idéal de réduction pour une synthèse ?",
                options: ["Aucune limite", "50% du texte original", "1/3 à 1/4 du texte original", "Identique au texte"],
                correctAnswer: 2,
                explication: "On cherche généralement à diviser la longueur par 3-4."
            },
            {
                question: "Comment identifier les idées principales d'un texte ?",
                options: ["En surlignant tout au hasard", "En lisant plusieurs fois et en notant les thèmes récurrents", "En copiant les premiers paragraphes", "C'est impossible"],
                correctAnswer: 1,
                explication: "Il faut une lecture attentive pour repérer les concepts clés."
            },
            {
                question: "Une synthèse bien rédigée doit contenir :",
                options: ["Uniquement du copier-coller", "Les idées principales avec une rédaction propre", "Tes avis personnels", "Des histoires non liées"],
                correctAnswer: 1,
                explication: "Idées principales + rédaction fluide sans recopie = succès."
            }
        ]
    }
};

// Export pour utilisation globale
if (typeof module !== 'undefined' && module.exports) {
    module.exports = btsSioData;
}
