const requestedPage=new URLSearchParams(location.search).get('page');
const path=requestedPage?`${requestedPage.toLowerCase()}.html`:(location.pathname.split('/').pop()||'index.html').toLowerCase();
const religious=['theology.html','infographics.html','hymnody.html','liturgical-resources.html','writings.html','religious-art.html','prayer-in-song.html'].includes(path);
document.body.classList.toggle('religious',religious);
const pageTitles={'index.html':'Marcus J. Larsen | Technology, Data & Hymnody','technology.html':'Technology & Networking | Marcus J. Larsen','data-mathematics.html':'Data & Mathematics | Marcus J. Larsen','theology.html':'Theology & Liturgy | Marcus J. Larsen','prayer-in-song.html':'Prayer in Song | Marcus J. Larsen','infographics.html':'Infographics | Marcus J. Larsen','hymnody.html':'Hymnody | Marcus J. Larsen','liturgical-resources.html':'Liturgical Resources | Marcus J. Larsen','writings.html':'Writings | Marcus J. Larsen','religious-art.html':'Religious Art | Marcus J. Larsen'};
document.title=pageTitles[path]||'Page not found | Marcus J. Larsen';
const nav=[['index.html','Home'],['technology.html','Technology & Networking'],['data-mathematics.html','Data & Mathematics'],['theology.html','Theology & Liturgy'],['prayer-in-song.html','<em>Prayer in Song</em>']];
const header=`<a class="skip" href="#main">Skip to content</a><header class="header"><div class="wrap nav"><a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true">ML</span>Marcus Larsen</a><button class="menu-button" type="button" aria-expanded="false" aria-controls="navigation">Menu</button><nav id="navigation" class="navlinks" aria-label="Main navigation">${nav.map(([u,l])=>`<a href="${u}"${u===path?' aria-current="page"':''}>${l}</a>`).join('')}</nav></div></header>`;
const footer=`<footer class="footer"><div class="wrap footer-inner"><span>© 2026 Marcus J. Larsen</span><span><a href="https://www.linkedin.com/in/marcusjosephlarsen/">LinkedIn</a> · <a href="index.html">Portfolio</a></span></div></footer>`;
const tags=a=>`<div class="tags">${a.map(x=>`<span class="tag">${x}</span>`).join('')}</div>`;
const subnav=`<nav class="subnav" aria-label="Theology and Liturgy sections"><a href="infographics.html">Infographics</a><a href="hymnody.html">Hymnody</a><a href="liturgical-resources.html">Liturgical Resources</a><a href="writings.html">Writings</a><a href="religious-art.html">Religious Art</a></nav>`;
const home=`<main id="main"><section class="wrap hero"><div><p class="eyebrow">Technology · Data · Hymnody</p><h1>Marcus J. Larsen</h1><p class="lead">I’m Marcus Larsen. I work in IT, study data analytics, and write about the history and theology of hymnody. I am a problem-solver who enjoys finding patterns and making sense of them. Whether I find those patterns in an algorithm, an equation, or a liturgy does not matter to me—the process of understanding them is what I enjoy.</p><div class="hero-actions"><a class="button" href="technology.html">Explore my work</a><a class="button secondary" href="https://www.linkedin.com/in/marcusjosephlarsen/">Connect on LinkedIn</a></div></div><img class="hero-photo" src="marcus-home.jpg" alt="Marcus Larsen outdoors by the water"></section><section class="soft"><div class="wrap section grid2"><article class="card image-card"><img src="graduation.jpg" alt="Marcus Larsen at his Lakeland University graduation"><div><p class="eyebrow">Education</p><h2>Academic foundation</h2><p><strong>University of Wisconsin–Madison</strong><br>M.S. in Data, Insights, and Analytics · Expected 2028</p><p><strong>Lakeland University</strong><br>B.S. Computer Science · B.A. Mathematics<br>3.99 GPA · <em>Summa Cum Laude</em></p><p><strong>Outstanding Student of the Year</strong><br>Computer Science, 2026 · Mathematics, 2025 · Religion, 2025</p></div></article><article class="card image-card reverse"><div><p class="eyebrow">Professional</p><h2>Technology Specialist</h2><p><strong>Partners for Community Development, Inc.</strong></p><p>I have worked in IT since 2021. Today I support technology and telecommunications across four sites in eastern Wisconsin while coordinating providers, upgrades, documentation, and infrastructure projects.</p><p>My long-term goal is specialized work in data science or networking that allows me to solve meaningful problems and keep learning.</p>${tags(['Organized','Goal-oriented','Lifelong learner'])}</div><img src="professional.jpg" alt="Professional portrait of Marcus Larsen"></article></div></section><section class="wrap section"><p class="eyebrow">Explore</p><div class="grid3"><article class="card preview-card"><h3>Technology & Networking</h3><p>Case studies in infrastructure, network projects, documentation, and multi-site support.</p><a href="technology.html">View Technology & Networking →</a></article><article class="card preview-card"><h3>Data & Mathematics</h3><p>Work in data, statistics, programming, machine learning, and mathematical reasoning.</p><a href="data-mathematics.html">Explore Data & Mathematics →</a></article><article class="card preview-card"><h3>Theology & Liturgy</h3><p>Theological writing, liturgical resources, infographics, hymnody, and religious art.</p><a href="theology.html">Explore Theology & Liturgy →</a></article></div></section><section class="soft"><div class="wrap section"><article class="feature"><p class="eyebrow">Book & lecture series</p><h2><em>Prayer in Song</em></h2><p>An ongoing project exploring the history and theology of hymnody across scriptural, historical, poetic, musical, and theological dimensions.</p><a class="button" href="prayer-in-song.html">Discover <em>Prayer in Song</em></a></article></div></section></main>`;
const technology=`<main id="main"><div class="wrap"><header class="pagehead"><p class="eyebrow">Technology & Networking</p><h1>Broad technical work, carefully organized.</h1><p class="lead">I began working in IT in 2021 and earned my B.S. in Computer Science from Lakeland University in 2026, with emphases in Data Analytics and Cybersecurity. My experience spans support, networking, cybersecurity, infrastructure, and systems administration.</p><p class="lead">My particular strengths are organization, planning, and project coordination: dividing complex needs into manageable parts and bringing together the people, resources, and information needed to complete the work.</p></header><section class="section"><div class="skill-groups"><div class="skill-group"><h3>Networking & Infrastructure</h3><ul><li>UniFi and Cisco Meraki</li><li>VLAN design and DNS</li><li>Network cabling</li><li>Security gateways</li></ul></div><div class="skill-group"><h3>Security & Diagnostics</h3><ul><li>Wireshark</li><li>Network segmentation</li><li>Troubleshooting</li><li>Surveillance and door access</li></ul></div><div class="skill-group"><h3>Programming & Data</h3><ul><li>Python</li><li>R and SQL</li><li>MATLAB</li><li>Tableau</li></ul></div><div class="skill-group"><h3>Systems & Collaboration</h3><ul><li>Microsoft Office and SharePoint</li><li>Asset management</li><li>Documentation</li><li>Vendor coordination</li></ul></div></div></section><article class="project"><div class="project-meta"><strong>CURRENT ROLE</strong>Partners for Community Development, Inc.<br>August 2025–Present</div><div class="project-body"><h2>Technology Specialist</h2><p>I support and maintain technology and telecommunications systems across four sites in eastern Wisconsin. My work includes troubleshooting, coordinating with our managed service provider and vendors, supporting upgrades, maintaining asset documentation, and planning infrastructure improvements.</p>${tags(['Multi-site IT','Asset documentation','Procurement','Vendor coordination'])}</div></article><article class="project"><div class="project-meta"><strong>FACILITY RELOCATION</strong>Partners for Community Development, Inc.<br>March–July 2026</div><div class="project-body"><h2>Sheboygan Weatherization Facility Technology Relocation</h2><p>As the primary technology contact, I coordinated management, contractors, vendors, and our managed service provider. I planned network cabling, drafted the network map and equipment plan, coordinated internet and telecommunications, procured technology, completed the A/V installation, organized asset relocation, and assisted with network installation.</p>${tags(['Network planning','A/V installation','Telecommunications','Project coordination'])}</div></article><article class="project"><div class="project-meta"><strong>NETWORK MODERNIZATION</strong>Sheboygan Lutheran High School<br>Network Intern · June–August 2025</div><div class="project-body"><h2>Security Network Segmentation</h2><p>I led a completed modernization project focused on security, organization, documentation, and reliability. The work included UniFi switches and security gateways, surveillance and door-access integration, segmented VLAN architecture, device migration, and physical infrastructure organization.</p>${tags(['UniFi','Security gateways','VLANs','Surveillance','Door access'])}</div></article></div></main>`;
const data=`<main id="main"><div class="wrap"><header class="pagehead"><p class="eyebrow">Data & Mathematics</p><h1>Understanding data. Supporting responsible decisions.</h1><p class="lead">My background in computer science, mathematics, and IT has led me to the intersection of data science, cybersecurity, and network infrastructure. I am also interested in predictive modeling and data visualization. My goal is not only to understand data, but to use it in ways that support responsible decision-making.</p></header><section class="section"><div class="skill-groups"><div class="skill-group"><h3>Programming</h3><ul><li>Python, R, SQL</li><li>MATLAB</li></ul></div><div class="skill-group"><h3>Analysis</h3><ul><li>Statistical inference</li><li>Predictive modeling</li><li>Random Forest</li><li>Data preparation</li></ul></div><div class="skill-group"><h3>Visualization</h3><ul><li>Tableau</li><li>ggplot2</li><li>Statistical communication</li></ul></div><div class="skill-group"><h3>Tools</h3><ul><li>RStudio</li><li>SQL warehouses</li><li>Cloud technologies</li><li>AI-assisted analysis</li></ul></div></div></section><section class="soft"><div class="section"><p class="eyebrow">Graduate Study</p><h2>M.S. in Data, Insights, and Analytics</h2><p>University of Wisconsin–Madison · Expected 2028</p><div class="course-grid"><div class="course-year"><h3>Year One</h3><p><strong>Fall:</strong> Business Statistics Using Python; Data Exploration Using SQL and AI; Data Visualization and Cloud Technologies</p><p><strong>Spring:</strong> Advanced SQL and Data Warehousing; Business Process Automation Using AI</p><p><strong>Summer:</strong> Applied Analytics: Case Studies; Python Fundamentals</p></div><div class="course-year"><h3>Year Two</h3><p><strong>Fall:</strong> Prescriptive Modeling and Optimization; Statistical Learning; Experiments and Causal Methods</p><p><strong>Spring:</strong> Machine Learning and AI; Analytics Consulting Project Management; Text Mining and Generation</p><p><strong>Summer:</strong> Pitfalls, Ethics, Communication, and Leadership; Master’s Capstone</p></div></div></div></section><article class="project"><div class="project-meta"><strong>MAT 320 · MAY 2026</strong>Applied Statistics<br>With Hannah Pratsch</div><div class="project-body"><div class="image-card"><img src="subaru.jpg" alt="2014 Subaru Forester used in the study"><div><h2>Applying Statistics to My Daily Commute</h2><p>Twelve years and 669 fuel records became an observational study of prices, efficiency, and driving patterns using R, ANOVA, Tukey comparisons, and Wilcoxon rank-sum tests.</p>${tags(['R','dplyr','lubridate','ggplot2','ANOVA'])}<div class="downloads"><a class="button" href="commute-statistics.pdf">Read report</a><a class="button secondary" href="commute-data.xlsx">Download data</a></div></div></div></div></article><article class="project"><div class="project-meta"><strong>DAT 455 · APRIL 2025</strong>Predictive Analytics<br>Individual project</div><div class="project-body"><h2>Loan Default Prediction Using Machine Learning</h2><p>I developed a Random Forest classifier using a public Kaggle dataset. The unusually strong AUC of 1.0 requires caution about leakage, overfitting, bias, privacy, explainability, and external validation.</p>${tags(['R','Random Forest','caret','pROC','ROC/AUC'])}<a class="button" href="loan-default-prediction.pdf">Read report</a></div></article><article class="project"><div class="project-meta"><strong>MAT 322 · DECEMBER 2024</strong>College Geometry<br>Individual paper</div><div class="project-body"><h2><em>A New Angle on SAS</em></h2><p>This LaTeX paper treats ASA as an axiom and proves SAS as a theorem, arguing that SAS is historically important but holds no necessary logical primacy.</p>${tags(['Axiomatic reasoning','Formal proof','Research','LaTeX'])}<a class="button" href="new-angle-on-sas.pdf">Read paper</a></div></article></div></main>`;
const theology=`<main id="main"><div class="wrap"><header class="pagehead"><p class="eyebrow">Theology & Liturgy</p><h1>Faith studied, prayed, and shared.</h1><p class="lead">As a Catholic with a minor in Religious Studies and Lakeland University’s 2025 Outstanding Student of the Year award in Religion, I bring academic study together with practical parish service. This collection gathers resources for Scripture study, worship, parish life, and reflection.</p></header>${subnav}<section class="section"><div class="grid3"><article class="card preview-card"><h3>Infographics</h3><p>Charts and tools relating to scriptural exegesis, the liturgical year, and other engaging religious topics.</p><a href="infographics.html">Explore infographics →</a></article><article class="card preview-card"><h3>Hymnody</h3><p>Original hymns, hymn reviews, and individual hymn case studies.</p><a href="hymnody.html">Explore hymnody →</a></article><article class="card preview-card"><h3>Liturgical Resources</h3><p>Resources for needs ranging from elements of the Mass to extra-liturgical settings.</p><a href="liturgical-resources.html">View resources →</a></article><article class="card preview-card"><h3>Writings</h3><p>Essays, papers, and devotional writing on a range of religious subjects.</p><a href="writings.html">Read writings →</a></article><article class="card preview-card"><h3>Religious Art</h3><p>Photographs of stained glass and other religious artwork encountered in churches.</p><a href="religious-art.html">View the collection →</a></article></div></section><section class="section"><article class="feature"><p class="eyebrow">A larger work</p><h2><em>Prayer in Song</em></h2><p>This book and lecture series grows from my studies in hymnody, liturgy, and theology. Its larger scope gives it a dedicated place in this portfolio.</p><a class="button" href="prayer-in-song.html">Explore the project</a></article></section></div></main>`;
const prayer=`<main id="main"><div class="wrap"><header class="pagehead"><p class="eyebrow">Book & Lecture Series · In Progress</p><h1><em>Prayer in Song</em></h1><p class="lead"><em>A Theological Approach to Interpreting Hymnody in Its Historical Context</em></p><p class="lead"><em>Prayer in Song</em> explores how Christian hymnody functions as both theology and worship, tracing its development from biblical canticles through the early Church, the Reformation, and modern liturgical renewal. Blending Church history, theology, liturgical study, and literary analysis, it shows how hymns reveal the faith of each era while remaining living prayer for the Church today.</p></header><section class="section grid2"><div><p class="eyebrow">The Book</p><h2>Hymns as living prayer</h2><p>The book approaches hymns as prayer rather than merely music. Grounded in Scripture, sacramental theology, and the lived worship of the Church, it is written at an accessible academic level for parish studies, college courses, choir formation, and personal enrichment.</p><div class="downloads"><a class="button" href="prayer-in-song-sample-chapters.pdf">Sample Chapters 1–2</a><a class="button secondary" href="veni-redemptor-gentium.pdf"><em>Veni, Redemptor Gentium</em> study</a></div></div><div><h3>Fourteen chapters</h3><ol class="chapters"><li>Music and Prayer</li><li>Introduction to Hymnody</li><li>Old Testament Song</li><li>Early Church Song</li><li>Plainchant</li><li>Medieval Age Hymnody</li><li>The German Chorale</li><li>Post-Reformation Chorales</li><li>Metrical Psalmody</li><li>English Reformed Hymnody</li><li>The Pre-Victorian Era</li><li>The Oxford Movement</li><li>Second Vatican Council</li><li>Hymnody Today</li></ol></div></section></div><section class="soft"><div class="wrap section grid2"><div><p class="eyebrow">The Lecture Series</p><h2>An interactive form for parishioners</h2><p>The lecture series translates the larger book project into an interactive format accessible to parishioners. Presentations, participant handouts, hymn examples, shared singing, reflection, and discussion make each historical period tangible.</p><div class="file-list"><div class="file-item"><strong>August–November 2024</strong><br>Sheboygan Southside Catholic Parishes</div><div class="file-item"><strong>January–February 2026</strong><br>St. Francis of Assisi Parish, Manitowoc</div><div class="file-item"><strong>March–April 2026</strong><br>Sheboygan Northside Catholic Parishes</div></div><div class="downloads"><a class="button" href="prayer-in-song-session-1-handout.pdf">View Session 1 handout</a></div></div><img class="presentation" src="prayer-in-song-presentation.png" alt="Marcus Larsen presenting Prayer in Song"></div></section><section class="wrap section"><p class="eyebrow">An interpretive framework developed by Marcus Larsen</p><h2>The Four Voices of Hymnody</h2><p class="lead">These voices are tools for attentive listening, not rigid categories. Many hymns move among them, though most lean more strongly in one direction.</p><div class="grid4"><article class="card voice"><p class="direction">Upward</p><h3>Doxological</h3><p>Hymns of praise that address God or call others to proclaim His glory.</p><p><em>“Holy God, We Praise Thy Name”</em></p></article><article class="card voice"><p class="direction">Toward the mind</p><h3>Doctrinal</h3><p>Hymns of instruction that use poetry and music to teach what the Church believes.</p><p><em>“Hark! The Herald Angels Sing”</em></p></article><article class="card voice"><p class="direction">Story into life</p><h3>Allegorical</h3><p>Hymns that recount and interpret a story, then apply it through reflection or petition.</p><p><em>“Lord, Who Throughout These Forty Days”</em></p></article><article class="card voice"><p class="direction">Toward the heart</p><h3>Experiential</h3><p>First-person hymns of encounter, trust, struggle, repentance, or consolation.</p><p><em>“Amazing Grace”</em></p></article></div></section></main>`;
const religiousArt=[
  {
    "title": "I believe in God",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [],
    "figures": [
      "Father"
    ],
    "tags": [
      "believe",
      "God"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed01.jpg",
    "alt": "I believe in God, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "And in Jesus Christ",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "Christ",
      "believe",
      "Son"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed02.jpg",
    "alt": "And in Jesus Christ, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "Who was conceived",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "Christmas"
    ],
    "figures": [
      "Mary",
      "Jesus",
      "Holy Spirit"
    ],
    "tags": [
      "nativity",
      "incarnation"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed03.jpg",
    "alt": "Who was conceived, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "Suffered under Pontius Pilate",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "Holy Week",
      "Lent"
    ],
    "figures": [
      "Jesus",
      "Pilate"
    ],
    "tags": [
      "crucifixion",
      "burial",
      "death",
      "cross"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed04.jpg",
    "alt": "Suffered under Pontius Pilate, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "He decended into Hell",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "Easter"
    ],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "resurrection",
      "descent",
      "rose"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed05.jpg",
    "alt": "He decended into Hell, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "He acsended into heaven",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "Ascension",
      "Christ the King"
    ],
    "figures": [
      "Jesus",
      "Father"
    ],
    "tags": [
      "king",
      "ascended",
      "throne"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed06.jpg",
    "alt": "He acsended into heaven, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "From thence he shall come",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "End Times"
    ],
    "figures": [],
    "tags": [
      "judgment",
      "Parousia",
      "reconciliation",
      "justice"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed07.jpg",
    "alt": "From thence he shall come, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "I believe in the Holy Ghost",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "Pentecost"
    ],
    "figures": [
      "Holy Spirit",
      "Jesus",
      "Peter"
    ],
    "tags": [
      "believe",
      "Spirit",
      "Ghost",
      "Church",
      "keys",
      "dove"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed08.jpg",
    "alt": "I believe in the Holy Ghost, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "The Holy Catholic Church",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "Christ the King"
    ],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "Church",
      "king",
      "throne",
      "saints"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed09.jpg",
    "alt": "The Holy Catholic Church, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "The forgiveness of sins",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "Lent"
    ],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "justice",
      "reconciliation",
      "forgiveness"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed10.jpg",
    "alt": "The forgiveness of sins, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "The resurrection of the body",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [
      "End Times"
    ],
    "figures": [
      "angel"
    ],
    "tags": [
      "death",
      "cross",
      "resurrection",
      "Parousia"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed11.jpg",
    "alt": "The resurrection of the body, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "And life everlasting",
    "church": "St. Columba",
    "churchCode": "CBC",
    "location": "Youngstown, OH",
    "seasons": [],
    "figures": [],
    "tags": [
      "saints",
      "Parousia",
      "heaven",
      "resurrection"
    ],
    "type": "Stained Glass",
    "image": "religious-art/cbc-creed12.jpg",
    "alt": "And life everlasting, stained glass at St. Columba in Youngstown, OH"
  },
  {
    "title": "Ascension",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [
      "Ascension"
    ],
    "figures": [
      "Jesus",
      "Mary",
      "Peter",
      "John",
      "Apostles",
      "angels"
    ],
    "tags": [
      "apostles",
      "ascended"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-ascension.jpg",
    "alt": "Ascension, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Fishers of Men",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus",
      "Peter",
      "Andrew"
    ],
    "tags": [
      "fish",
      "fishermen",
      "fishers",
      "calling",
      "apostles",
      "Church"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-calling.jpg",
    "alt": "Fishers of Men, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Let the little children come to me",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus",
      "Peter",
      "John",
      "children"
    ],
    "tags": [
      "child"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-children.jpg",
    "alt": "Let the little children come to me, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Consecration of St. Clement",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Peter",
      "Clement"
    ],
    "tags": [
      "ordination",
      "apostles",
      "Church",
      "keys",
      "holy orders"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-clement.jpg",
    "alt": "Consecration of St. Clement, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Institution of the Lord's Supper",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Week"
    ],
    "figures": [
      "Jesus",
      "John",
      "Apostles",
      "Judas"
    ],
    "tags": [
      "Eucharist",
      "Thursday",
      "last supper",
      "institution"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-eucharist.jpg",
    "alt": "Institution of the Lord's Supper, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Holy Family",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Family"
    ],
    "figures": [
      "Jesus",
      "Mary",
      "Joseph"
    ],
    "tags": [
      "labor",
      "carpentry",
      "carpenter",
      "cross",
      "mother"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-family.jpg",
    "alt": "Holy Family, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Flight into Egypt",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Family",
      "Christmas"
    ],
    "figures": [
      "Jesus",
      "Mary",
      "Joseph",
      "angel"
    ],
    "tags": [
      "flight",
      "Egypt",
      "donkey",
      "mother"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-flight.jpg",
    "alt": "Flight into Egypt, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Fountain",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "water",
      "baptism",
      "blood"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-fount.jpg",
    "alt": "Fountain, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Incense censer",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "thurible",
      "incense",
      "censer",
      "chi rho",
      "prayer"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-incense.jpg",
    "alt": "Incense censer, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Mark and Luke",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Mark",
      "Luke"
    ],
    "tags": [
      "saints",
      "evangelists"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-mark-luke.jpg",
    "alt": "Mark and Luke, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Matthew and John",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Matthew",
      "John"
    ],
    "tags": [
      "saints",
      "evangelists",
      "apostles"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-matthew-john.jpg",
    "alt": "Matthew and John, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Nativity",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [
      "Christmas",
      "Epiphany"
    ],
    "figures": [
      "Jesus",
      "Mary",
      "Joseph",
      "angels",
      "shepherds",
      "magi"
    ],
    "tags": [
      "nativity",
      "incarnation",
      "gifts",
      "sheep"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-nativity.jpg",
    "alt": "Nativity, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "I am the Good Shepherd",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus",
      "Peter",
      "shepherds"
    ],
    "tags": [
      "shepherd",
      "parable",
      "sheep"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-shepherd.jpg",
    "alt": "I am the Good Shepherd, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Theological Virtues",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "faith",
      "hope",
      "love",
      "cross",
      "anchor",
      "heart"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-virtues.jpg",
    "alt": "Theological Virtues, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Elements of Communion",
    "church": "St. Clement",
    "churchCode": "SCL",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "wheat",
      "grain",
      "Eucharist",
      "bread",
      "wine",
      "chalice",
      "grapes",
      "body",
      "blood"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scl-wheat-wine.jpg",
    "alt": "Elements of Communion, stained glass at St. Clement in Sheboygan, WI"
  },
  {
    "title": "Agnes and Lucy",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Agnes",
      "Lucy"
    ],
    "tags": [
      "saints",
      "sheep",
      "martyr",
      "palm",
      "palms"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-agnes-lucy.jpg",
    "alt": "Agnes and Lucy, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Aloysius and Stanislaus",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Aloysius",
      "Stanislaus"
    ],
    "tags": [
      "saints"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-aloysius-stanislaus.jpg",
    "alt": "Aloysius and Stanislaus, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Anthony and Francis",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Anthony",
      "Francis"
    ],
    "tags": [
      "saints",
      "Assisi",
      "Padua"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-anthony-francis.jpg",
    "alt": "Anthony and Francis, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Baptism Font",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Holy Spirit"
    ],
    "tags": [
      "baptism",
      "chi rho",
      "water",
      "Spirit",
      "Ghost"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-baptistry.jpg",
    "alt": "Baptism Font, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Bells and Lyre",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "music",
      "instruments",
      "bells",
      "lyre",
      "harp"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-bells-lyre.jpg",
    "alt": "Bells and Lyre, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Body of Christ",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "bread",
      "grain",
      "wheat",
      "Eucharist"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-bread.jpg",
    "alt": "Body of Christ, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Christ the King",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [
      "Christ the King"
    ],
    "figures": [
      "Jesus",
      "angels"
    ],
    "tags": [
      "throne",
      "Church",
      "king",
      "incense",
      "censer",
      "thurible",
      "Parousia",
      "heaven"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-christ.jpg",
    "alt": "Christ the King, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Helena and Elizabeth",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Helena",
      "Elizabeth"
    ],
    "tags": [
      "saints",
      "queen",
      "chi rho",
      "cross",
      "Hungary"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-helena-elizabeth.jpg",
    "alt": "Helena and Elizabeth, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "John and Stephen",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "John",
      "Stephen"
    ],
    "tags": [
      "apostles",
      "martyr",
      "evangelist",
      "palm",
      "palms"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-john-stephen.jpg",
    "alt": "John and Stephen, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Mary",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Mary",
      "angels"
    ],
    "tags": [
      "queen",
      "heaven",
      "Church",
      "assumption"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-mary.jpg",
    "alt": "Mary, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Incense censer",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "censer",
      "incense",
      "thurible",
      "king"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-narthex.jpg",
    "alt": "Incense censer, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Therese and Rose",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Therese",
      "Rose"
    ],
    "tags": [
      "saints",
      "Lisieux",
      "Lima"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-therese-rose.jpg",
    "alt": "Therese and Rose, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Trumpets and Organ",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "music",
      "instruments",
      "trumpet",
      "organ"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-trumpets-organ.jpg",
    "alt": "Trumpets and Organ, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Blood of Christ",
    "church": "Ss. Cyril and Methodius",
    "churchCode": "SCM",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "wine",
      "grapes",
      "chalice",
      "Eucharist"
    ],
    "type": "Stained Glass",
    "image": "religious-art/scm-wine.jpg",
    "alt": "Blood of Christ, stained glass at Ss. Cyril and Methodius in Sheboygan, WI"
  },
  {
    "title": "Baptism",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [],
    "figures": [
      "Father",
      "Son"
    ],
    "tags": [
      "baptism",
      "water",
      "cross"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-baptism.jpg",
    "alt": "Baptism, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "Come follow me",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [],
    "figures": [
      "Jesus",
      "Peter",
      "Andrew",
      "Apostles"
    ],
    "tags": [
      "fish",
      "fishermen",
      "fishers",
      "calling",
      "Church",
      "keys"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-john1.jpg",
    "alt": "Come follow me, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "Master where dwellest Thou",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [],
    "figures": [
      "John the Baptist",
      "John",
      "Jesus"
    ],
    "tags": [
      "calling"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-john2.jpg",
    "alt": "Master where dwellest Thou, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "He was transfigured before them",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [
      "Lent"
    ],
    "figures": [
      "Jesus",
      "Peter",
      "John",
      "James",
      "Apostles",
      "Moses",
      "Elijah"
    ],
    "tags": [
      "transfiguration"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-john3.jpg",
    "alt": "He was transfigured before them, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "The disciple took her",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [
      "Lent",
      "Holy Week"
    ],
    "figures": [
      "John",
      "Mary"
    ],
    "tags": [
      "cross",
      "crucifixion",
      "assumption",
      "queen",
      "Eucharist"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-john4.jpg",
    "alt": "The disciple took her, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "The disciple saw and believed",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [
      "Easter"
    ],
    "figures": [
      "John",
      "Jesus",
      "Peter",
      "Magdalene"
    ],
    "tags": [
      "resurrection",
      "burial",
      "rose"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-john5.jpg",
    "alt": "The disciple saw and believed, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "In the name of Jesus Christ",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [],
    "figures": [
      "John",
      "Peter",
      "Apostles"
    ],
    "tags": [
      "Church",
      "calling",
      "keys",
      "holy orders",
      "Christ"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-john6.jpg",
    "alt": "In the name of Jesus Christ, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "These things I write",
    "church": "St. John the Baptist",
    "churchCode": "SJE",
    "location": "Kohler, WI",
    "seasons": [
      "End Times"
    ],
    "figures": [
      "John",
      "Father"
    ],
    "tags": [
      "sheep",
      "heaven",
      "Parousia",
      "throne",
      "ascended",
      "king"
    ],
    "type": "Stained Glass",
    "image": "religious-art/sje-john7.jpg",
    "alt": "These things I write, stained glass at St. John the Baptist in Kohler, WI"
  },
  {
    "title": "Wedding at Cana",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus",
      "Mary"
    ],
    "tags": [
      "wine",
      "water",
      "wedding",
      "marriage",
      "Cana",
      "matrimony"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-cana.jpg",
    "alt": "Wedding at Cana, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Let the little children come to me",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus",
      "children"
    ],
    "tags": [
      "child"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-children.jpg",
    "alt": "Let the little children come to me, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Crucifixion",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Week",
      "Lent"
    ],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "cross",
      "crucifixion",
      "death",
      "forgiveness"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-crucifixion.jpg",
    "alt": "Crucifixion, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Final Judgment",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "End Times"
    ],
    "figures": [
      "Jesus",
      "angel",
      "angels"
    ],
    "tags": [
      "judgment",
      "Parousia",
      "heaven",
      "trumpet",
      "instruments",
      "throne",
      "king"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-judgment.jpg",
    "alt": "Final Judgment, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Narthex Cross",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [],
    "tags": [
      "cross"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-narthex.jpg",
    "alt": "Narthex Cross, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Triumphal Entry",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Week"
    ],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "donkey",
      "palm",
      "palms"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-palm-sunday.jpg",
    "alt": "Triumphal Entry, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Descent of the Holy Spirit",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Pentecost"
    ],
    "figures": [
      "Mary",
      "Holy Spirit",
      "Apostles"
    ],
    "tags": [
      "calling",
      "Spirit",
      "Ghost",
      "descent",
      "Church",
      "institution",
      "dove"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-pentecost.jpg",
    "alt": "Descent of the Holy Spirit, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Institution of the Church",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Peter",
      "Jesus",
      "Apostles"
    ],
    "tags": [
      "keys",
      "Church",
      "institution",
      "sheep"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-peter.jpg",
    "alt": "Institution of the Church, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Preaching of the Kingdom",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus",
      "Apostles"
    ],
    "tags": [
      "preaching"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-preaching.jpg",
    "alt": "Preaching of the Kingdom, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Baptism of Jesus",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Epiphany"
    ],
    "figures": [
      "John the Baptist",
      "Jesus"
    ],
    "tags": [
      "Spirit",
      "Ghost",
      "baptism",
      "dove",
      "water",
      "forgiveness",
      "reconciliation"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-reconciliation1.jpg",
    "alt": "Baptism of Jesus, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Jesus and the Children",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "children",
      "forgiveness",
      "reconciliation",
      "child"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-reconciliation2.jpg",
    "alt": "Jesus and the Children, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Jesus the Good Shepherd",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "sheep",
      "shepherds",
      "forgiveness",
      "reconciliation"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-reconciliation3.jpg",
    "alt": "Jesus the Good Shepherd, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Crucifixion of Jesus",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Week",
      "Lent"
    ],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "cross",
      "crucifixion",
      "death",
      "forgiveness",
      "reconciliation"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-reconciliation4.jpg",
    "alt": "Crucifixion of Jesus, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Resurrection",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Easter"
    ],
    "figures": [
      "Jesus",
      "angel"
    ],
    "tags": [
      "resurrection",
      "rose",
      "king"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-resurrection.jpg",
    "alt": "Resurrection, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Child Jesus in the Temple",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Family"
    ],
    "figures": [
      "Jesus"
    ],
    "tags": [
      "children",
      "temple",
      "child"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-temple.jpg",
    "alt": "Child Jesus in the Temple, stained glass at St. Peter Claver in Sheboygan, WI"
  },
  {
    "title": "Jesus on Trial",
    "church": "St. Peter Claver",
    "churchCode": "SPC",
    "location": "Sheboygan, WI",
    "seasons": [
      "Holy Week"
    ],
    "figures": [
      "Jesus",
      "Pilate"
    ],
    "tags": [
      "judgment",
      "king"
    ],
    "type": "Stained Glass",
    "image": "religious-art/spc-trial.jpg",
    "alt": "Jesus on Trial, stained glass at St. Peter Claver in Sheboygan, WI"
  }
];
const artPage=`<main id="main"><div class="wrap"><header class="pagehead"><p class="eyebrow">Theology & Liturgy</p><h1>Religious Art</h1><p class="lead">A searchable repository of photographs of stained glass and other religious artwork encountered in churches I have visited.</p></header>${subnav}<section class="art-controls" aria-label="Filter religious artwork"><div class="art-search"><label for="art-search">Search titles and tags</label><input id="art-search" type="search" placeholder="Try Nativity, Christmas, Mary, SPC…"></div><div><label for="art-church">Church</label><select id="art-church"><option value="">All churches</option></select></div><div><label for="art-type">Artwork type</label><select id="art-type"><option value="">All types</option></select></div><button class="button secondary" id="art-clear" type="button">Clear filters</button></section><div class="art-results"><p id="art-count" aria-live="polite"></p></div><section id="art-gallery" class="art-gallery" aria-label="Religious art gallery"></section><dialog id="art-dialog"><button id="art-dialog-close" class="dialog-close" type="button" aria-label="Close image">×</button><img id="art-dialog-image" alt=""><div id="art-dialog-caption"></div></dialog></div></main>`;
const simple={
'infographics.html':['Infographics','Charts and tools relating to scriptural exegesis, elements of the liturgical year, and other engaging religious topics.','This collection will expand as additional visual resources are prepared for publication.']};
const collections={
'hymnody.html':['Hymnody','Original hymns, reviews, and individual case studies examining the words Christians sing.',[['Veni, Redemptor Gentium','A comparative study of St. Ambrose’s Latin text, Martin Luther’s German adaptation, and two English translations.','veni-redemptor-gentium.pdf']]],
'liturgical-resources.html':['Liturgical Resources','Resources prepared for needs ranging from elements of the Mass to extra-liturgical settings.',[['Holy Cross Procession','An order of worship and ministers’ resource prepared for a parish procession and veneration of a relic of the True Cross.','holy-cross-procession.pdf']]],
'writings.html':['Writings','Essays, papers, and devotional writing addressing a range of religious subjects.',[['Exegesis of Acts 20:7–12','Scriptural exegesis','exegesis-acts-20.docx'],['Exegesis of 1 Corinthians 4:1–13','Scriptural exegesis','exegesis-1-corinthians-4.docx'],['Exegesis of Luke 1:39–56','Scriptural exegesis','exegesis-luke-1.docx'],['The Nature of Scripture','Theological paper','nature-of-scripture.docx']]]};
let content={
'index.html':home,'technology.html':technology,'data-mathematics.html':data,'theology.html':theology,'prayer-in-song.html':prayer,'religious-art.html':artPage}[path];
if(simple[path]){const [t,d,n]=simple[path];content=`<main id="main"><div class="wrap"><header class="pagehead"><p class="eyebrow">Theology & Liturgy</p><h1>${t}</h1><p class="lead">${d}</p></header>${subnav}<section class="section"><p class="note">${n}</p></section></div></main>`}
if(collections[path]){const [t,d,items]=collections[path];content=`<main id="main"><div class="wrap"><header class="pagehead"><p class="eyebrow">Theology & Liturgy</p><h1>${t}</h1><p class="lead">${d}</p></header>${subnav}<section class="section file-list">${items.map(([a,b,u])=>`<article class="file-item"><h3>${a}</h3><p>${b}</p><a href="${u}">Open resource</a></article>`).join('')}</section></div></main>`}
if(!content)content=`<main id="main"><div class="wrap pagehead"><p class="eyebrow">404</p><h1>Page not found</h1><a class="button" href="index.html">Return home</a></div></main>`;
document.body.innerHTML=header+content+footer;
if(path==='religious-art.html'){
  const controls={search:document.querySelector('#art-search'),church:document.querySelector('#art-church'),type:document.querySelector('#art-type')};
  const unique=values=>[...new Set(values.filter(Boolean))].sort((a,b)=>a.localeCompare(b));
  const addOptions=(select,values)=>unique(values).forEach(value=>select.insertAdjacentHTML('beforeend',`<option value="${value}">${value}</option>`));
  addOptions(controls.church,religiousArt.map(item=>item.church));
  addOptions(controls.type,religiousArt.map(item=>item.type));
  const searchable=item=>[item.title,item.church,item.churchCode,item.location,item.type,...(item.seasons||[]),...(item.figures||[]),...(item.tags||[])].filter(Boolean).join(' ').toLowerCase();
  const gallery=document.querySelector('#art-gallery');
  const count=document.querySelector('#art-count');
  const dialog=document.querySelector('#art-dialog');
  const renderGallery=()=>{
    const queryTerms=controls.search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const matches=religiousArt.filter(item=>queryTerms.every(term=>searchable(item).includes(term))&&(!controls.church.value||item.church===controls.church.value)&&(!controls.type.value||item.type===controls.type.value));
    count.textContent=`Showing ${matches.length} of ${religiousArt.length} ${religiousArt.length===1?'work':'works'}`;
    gallery.innerHTML=matches.map(item=>`<article class="art-card"><button class="art-image-button" type="button" data-index="${religiousArt.indexOf(item)}" aria-label="View ${item.title} at full size"><img src="${item.image}" alt="${item.alt}" loading="lazy"></button><div class="art-card-body"><p class="eyebrow">${item.type||'Religious art'}</p><h2>${item.title}</h2><p><strong>${item.church}</strong>${item.location?`<br>${item.location}`:''}</p>${tags([...(item.seasons||[]),...(item.figures||[]),...(item.tags||[])].filter(Boolean))}</div></article>`).join('');
    if(!matches.length)gallery.innerHTML=`<p class="note">${religiousArt.length?'No artwork matches these filters.':'The gallery is ready. Add photograph records to the religiousArt list in app.js to begin the collection.'}</p>`;
    gallery.querySelectorAll('.art-image-button').forEach(button=>button.addEventListener('click',()=>{
      const item=religiousArt[Number(button.dataset.index)];
      document.querySelector('#art-dialog-image').src=item.image;
      document.querySelector('#art-dialog-image').alt=item.alt;
      document.querySelector('#art-dialog-caption').innerHTML=`<h2>${item.title}</h2><p><strong>${item.church}</strong>${item.location?` · ${item.location}`:''}</p>`;
      dialog.showModal();
    }));
  };
  Object.values(controls).forEach(control=>control.addEventListener(control.type==='search'?'input':'change',renderGallery));
  document.querySelector('#art-clear').addEventListener('click',()=>{Object.values(controls).forEach(control=>control.value='');renderGallery()});
  document.querySelector('#art-dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
  renderGallery();
}
document.querySelectorAll('a[href$=".html"]').forEach(link=>{
  const target=link.getAttribute('href').replace('.html','');
  link.setAttribute('href',target==='index'?'./':`./?page=${target}`);
});
document.querySelector('.menu-button')?.addEventListener('click',e=>{const n=document.querySelector('.navlinks');const open=n.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',String(open))});
