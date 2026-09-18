const allScreens = [
  'authScreen', 'landingScreen', 'hubScreen', 'keyTermsFolderScreen', 'unitsScreen', 'quizUnitsScreen', 'quizUnitDetailScreen',
  'unitDetailScreen', 'placeholderScreen', 'progressScreen', 'reviewScreen', 'quizApp'
];

function showScreen(screenId) {
  allScreens.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== screenId);
  });
}

function initButtons() {
  const enterBtn = document.getElementById('enterBtn');
  const authSwitchBtn = document.getElementById('authSwitchBtn');
  const authSubmit = document.getElementById('authSubmit');
  const logoutBtn = document.getElementById('logoutBtn');
  const hubMapQuiz = document.getElementById('hubMapQuiz');
  const hubKeyTerms = document.getElementById('hubKeyTerms');
  const hubProgress = document.getElementById('hubProgress');
  const backToHubBtn = document.getElementById('backToHubBtn');
  const phBackBtn = document.getElementById('phBackBtn');

  if (enterBtn) enterBtn.addEventListener('click', () => showScreen('hubScreen'));
  if (authSwitchBtn) authSwitchBtn.addEventListener('click', () => showScreen('landingScreen'));
  if (authSubmit) authSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    showScreen('landingScreen');
  });
  if (logoutBtn) logoutBtn.addEventListener('click', () => showScreen('authScreen'));
  if (hubMapQuiz) hubMapQuiz.addEventListener('click', () => showScreen('quizApp'));
  if (hubKeyTerms) hubKeyTerms.addEventListener('click', () => showScreen('keyTermsFolderScreen'));
  if (hubProgress) hubProgress.addEventListener('click', () => showScreen('progressScreen'));
  if (backToHubBtn) backToHubBtn.addEventListener('click', () => showScreen('hubScreen'));
  if (phBackBtn) phBackBtn.addEventListener('click', () => showScreen('hubScreen'));

  const keyTermsFolderBackBtn = document.getElementById('keyTermsFolderBackBtn');
  const unitsBackBtn = document.getElementById('unitsBackBtn');
  const quizUnitsBackBtn = document.getElementById('quizUnitsBackBtn');
  const quizUnitDetailBackBtn = document.getElementById('quizUnitDetailBackBtn');
  const unitDetailBackBtn = document.getElementById('unitDetailBackBtn');
  const progressBackBtn = document.getElementById('progressBackBtn');
  const reviewBackBtn = document.getElementById('reviewBackBtn');
  const reviewBtn = document.getElementById('reviewBtn');

  if (keyTermsFolderBackBtn) keyTermsFolderBackBtn.addEventListener('click', () => showScreen('hubScreen'));
  if (unitsBackBtn) unitsBackBtn.addEventListener('click', () => showScreen('keyTermsFolderScreen'));
  if (quizUnitsBackBtn) quizUnitsBackBtn.addEventListener('click', () => showScreen('keyTermsFolderScreen'));
  if (quizUnitDetailBackBtn) quizUnitDetailBackBtn.addEventListener('click', () => showScreen('quizUnitsScreen'));
  if (unitDetailBackBtn) unitDetailBackBtn.addEventListener('click', () => showScreen('unitsScreen'));
  if (progressBackBtn) progressBackBtn.addEventListener('click', () => showScreen('hubScreen'));
  if (reviewBackBtn) reviewBackBtn.addEventListener('click', () => showScreen('progressScreen'));

  const folderKeyTerms = document.getElementById('folderKeyTerms');
  const folderVocabQuiz = document.getElementById('folderVocabQuiz');
  const quizUnitsGrid = document.getElementById('quizUnitsGrid');
  const unitsGrid = document.getElementById('unitsGrid');

  if (folderKeyTerms) folderKeyTerms.addEventListener('click', () => { showScreen('unitsScreen'); if (unitsGrid) unitsGrid.innerHTML = '<button class="hub-card is-ready"><div class="hub-tag">Unit 1</div><div class="hub-name">Unit 1</div></button>'; });
  if (folderVocabQuiz) folderVocabQuiz.addEventListener('click', () => { showScreen('quizUnitsScreen'); if (quizUnitsGrid) quizUnitsGrid.innerHTML = '<button class="hub-card is-ready"><div class="hub-tag">Unit 1</div><div class="hub-name">Unit 1</div></button>'; });

  document.querySelectorAll('.hub-card').forEach((card) => {
    card.addEventListener('click', () => {
      const title = card.dataset.title || card.querySelector('.hub-name')?.textContent || 'Screen';
      if (title === 'Placeholder') {
        showScreen('placeholderScreen');
        const phTitle = document.getElementById('phTitle');
        if (phTitle) phTitle.textContent = 'Placeholder';
      }
    });
  });

  if (reviewBtn) reviewBtn.addEventListener('click', () => showScreen('reviewScreen'));

  const quizStart = document.getElementById('startBtn');
  const mapQuizScreen = document.getElementById('quizScreen');
  if (quizStart && mapQuizScreen) {
    quizStart.addEventListener('click', () => {
      mapQuizScreen.classList.remove('hidden');
      document.getElementById('setupScreen')?.classList.add('hidden');
      const qCounter = document.getElementById('qCounter');
      if (qCounter) qCounter.textContent = 'Question 1 of 20';
    });
  }

  const selectAllBtn = document.getElementById('selectAllBtn');
  const selectNoneBtn = document.getElementById('selectNoneBtn');
  if (selectAllBtn) {
    selectAllBtn.addEventListener('click', () => document.querySelectorAll('.cat-option').forEach((box) => box.classList.add('selected')));
  }
  if (selectNoneBtn) {
    selectNoneBtn.addEventListener('click', () => document.querySelectorAll('.cat-option').forEach((box) => box.classList.remove('selected')));
  }
}

function seedAllGroups() {
  const packGrid = document.getElementById('packGrid');
  const catGrid = document.getElementById('catGrid');
  if (packGrid) {
    packGrid.innerHTML = [
      'North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania'
    ].map((item) => `<button type="button" class="hub-card is-ready" style="min-height: 90px; padding: 18px;">${item}</button>`).join('');
  }
  if (catGrid) {
    catGrid.innerHTML = [
      'Countries', 'Capitals', 'Landforms', 'Cities', 'Regions', 'Physical Features'
    ].map((item) => `<button type="button" class="hub-card is-ready cat-option" style="min-height: 90px; padding: 18px;">${item}</button>`).join('');
  }

  const unitsGrid = document.getElementById('unitsGrid');
  if (unitsGrid) {
    unitsGrid.innerHTML = [
      'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'
    ].map((item) => `<button class="hub-card is-ready"><div class="hub-tag">${item}</div><div class="hub-name">${item}</div></button>`).join('');
  }

  const quizUnitsGrid = document.getElementById('quizUnitsGrid');
  if (quizUnitsGrid) {
    quizUnitsGrid.innerHTML = [
      'Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6'
    ].map((item) => `<button class="hub-card is-ready"><div class="hub-tag">${item}</div><div class="hub-name">${item}</div></button>`).join('');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  seedAllGroups();
  initButtons();
  showScreen('authScreen');
});
