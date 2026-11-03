/**
 * =========================================================================
 * KUIS HATI & RASA 🍷✨ (EDISI SPESIAL MALIKA)
 * 5 Snappy Questions: Fun Frequency + Serious Comfort & Care + Spontaneous Escape
 * Anti-Bohong: Upil Segede Bakso Urat & Kuping Dijewer Malaikat Cinta 👼👂
 * 100% Cute Cartoon Synth FX & Silent Cloud Email Backup to kthoriq7@gmail.com
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==================== STATE MANAGEMENT ====================
  const state = {
    currentStep: 0, // 0: Welcome (Vow), 1..5: Q1..Q5, 6: Result
    totalQuestions: 5,
    soundEnabled: true,
    answers: {
      senderName: 'Malika',
      q1: '',
      q1Text: '',
      q2: '',
      q2Text: '',
      q3: '',
      q3Text: '',
      q4: '',
      q4Text: '',
      q5: '',
      q5Text: ''
    },
    headerClickCount: 0
  };

  // ==================== 100% CUTE SYNTH AUDIO ENGINE ====================
  const AudioEngine = {
    ctx: null,
    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    },

    // 1. Bubble Pop
    playBubblePop() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1350, this.ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
      } catch (e) { console.debug(e); }
    },

    // 2. Cute Star / Coin Chime
    playCoin() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now); // B5
        osc.frequency.setValueAtTime(1318.51, now + 0.07); // E6
        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.28);
      } catch (e) { console.debug(e); }
    },

    // 3. Cartoon Spring Boing
    playBoing() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(650, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(130, now + 0.26);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.26);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.26);
      } catch (e) { console.debug(e); }
    },

    // 4. Sweet Squeak
    playSqueak() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1500, now);
        osc.frequency.exponentialRampToValueAtTime(2400, now + 0.06);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.1);
      } catch (e) { console.debug(e); }
    },

    // 5. Triple Marimba Chime
    playChime() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [587.33, 739.99, 880.00]; // D5, F#5, A5
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime + i * 0.06);
          gain.gain.setValueAtTime(0.2, this.ctx.currentTime + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + i * 0.06 + 0.18);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(this.ctx.currentTime + i * 0.06);
          osc.stop(this.ctx.currentTime + i * 0.06 + 0.18);
        });
      } catch (e) { console.debug(e); }
    },

    // 6. Cupid Harp Cascade
    playHarpSparkle() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 987.77, 1046.50]; // C5, E5, G5, B5, C6
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          const t = this.ctx.currentTime + i * 0.05;
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0.18, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.22);
        });
      } catch (e) { console.debug(e); }
    },

    // 7. Whoosh Tone
    playWhooshTone() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(1700, now + 0.14);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
      } catch (e) { console.debug(e); }
    },

    // 8. Victory Fanfare
    playVictory() {
      if (!state.soundEnabled) return;
      this.init();
      if (!this.ctx) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
        notes.forEach((freq, i) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'sine';
          const t = this.ctx.currentTime + i * 0.09;
          osc.frequency.setValueAtTime(freq, t);
          gain.gain.setValueAtTime(0, t);
          gain.gain.linearRampToValueAtTime(0.28, t + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(t);
          osc.stop(t + 0.38);
        });
      } catch (e) { console.debug(e); }
    }
  };

  const soundCues = {
    cieee: () => AudioEngine.playHarpSparkle(),
    adem: () => AudioEngine.playChime(),
    wkwk: () => AudioEngine.playBoing(),
    meow: () => AudioEngine.playSqueak(),
    nyam: () => AudioEngine.playCoin(),
    gas: () => AudioEngine.playWhooshTone(),
    boing: () => AudioEngine.playBoing()
  };

  // ==================== DOM ELEMENTS ====================
  const screens = {
    0: document.getElementById('screen-welcome'),
    1: document.getElementById('screen-q1'),
    2: document.getElementById('screen-q2'),
    3: document.getElementById('screen-q3'),
    4: document.getElementById('screen-q4'),
    5: document.getElementById('screen-q5'),
    6: document.getElementById('screen-result')
  };

  const progressBar = document.getElementById('progress-bar');
  const stepTracker = document.getElementById('step-tracker');
  const stepNumberText = document.getElementById('step-number-text');
  const vibeTag = document.getElementById('vibe-tag');
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  const resetQuizBtn = document.getElementById('reset-quiz-btn');

  // Welcome / Vow
  const vowCheckbox = document.getElementById('vow-checkbox');
  const inputSenderName = document.getElementById('input-sender-name');
  const startQuizBtn = document.getElementById('start-quiz-btn');

  // Result Elements
  const resName = document.getElementById('res-name');
  const resTitle = document.getElementById('res-title');
  const resChemistry = document.getElementById('res-chemistry');
  const summaryQ1 = document.getElementById('summary-q1');
  const summaryQ2 = document.getElementById('summary-q2');
  const summaryQ3 = document.getElementById('summary-q3');
  const summaryQ4 = document.getElementById('summary-q4');
  const summaryQ5 = document.getElementById('summary-q5');
  const resRecommendation = document.getElementById('res-recommendation');
  const stampDate = document.getElementById('stamp-date');
  const btnShareWhatsapp = document.getElementById('btn-share-whatsapp');
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  const btnRetakeQuiz = document.getElementById('btn-retake-quiz');

  // Admin Elements
  const headerSecretTrigger = document.getElementById('header-secret-trigger');
  const secretAdminModal = document.getElementById('secret-admin-modal');
  const btnCloseAdmin = document.getElementById('btn-close-admin');
  const adminSubmissionsList = document.getElementById('admin-submissions-list');
  const btnClearHistory = document.getElementById('btn-clear-history');
  const btnExportJson = document.getElementById('btn-export-json');

  const vibeTags = [
    '',
    'SENSOR FREKUENSI ⚡',
    '[SERIUS] KENYAMANAN 🍷',
    'SKENARIO SPONTAN 🍕',
    '[SERIUS] TEMPAT BERLINDUNG 🧸',
    'KODE RAHASIA 💌',
    'SELESAI 👑'
  ];

  function validateWelcome() {
    const isVowed = vowCheckbox.checked;
    const hasName = inputSenderName.value.trim().length > 0;
    startQuizBtn.disabled = !(isVowed && hasName);
  }

  vowCheckbox.addEventListener('change', () => {
    if (vowCheckbox.checked) AudioEngine.playCoin();
    validateWelcome();
  });

  inputSenderName.addEventListener('input', (e) => {
    state.answers.senderName = e.target.value.trim();
    validateWelcome();
  });

  // Check initial state (default Malika)
  if (inputSenderName.value) {
    state.answers.senderName = inputSenderName.value.trim();
  }

  function goToScreen(targetIndex) {
    const currentScreen = screens[state.currentStep];
    const nextScreen = screens[targetIndex];

    if (currentScreen && typeof gsap !== 'undefined') {
      gsap.to(currentScreen, {
        scale: 0.95,
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          currentScreen.classList.add('hidden');
          showNextScreen(nextScreen, targetIndex);
        }
      });
    } else {
      if (currentScreen) currentScreen.classList.add('hidden');
      showNextScreen(nextScreen, targetIndex);
    }
  }

  function showNextScreen(nextScreen, targetIndex) {
    if (nextScreen) {
      nextScreen.classList.remove('hidden');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(nextScreen, 
          { scale: 0.92, opacity: 0, y: 15, rotate: targetIndex % 2 === 0 ? -1 : 1 },
          { scale: 1, opacity: 1, y: 0, rotate: 0, duration: 0.35, ease: 'back.out(1.7)' }
        );
      }
    }
    state.currentStep = targetIndex;
    updateUI();
    const container = document.getElementById('quiz-flow-container');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateUI() {
    if (state.currentStep === 0) {
      progressBar.style.width = '0%';
      stepTracker.classList.add('hidden');
    } else if (state.currentStep >= 1 && state.currentStep <= 5) {
      stepTracker.classList.remove('hidden');
      const pct = (state.currentStep / state.totalQuestions) * 100;
      progressBar.style.width = `${pct}%`;
      stepNumberText.textContent = `SOAL ${state.currentStep} DARI ${state.totalQuestions}`;
      vibeTag.textContent = vibeTags[state.currentStep] || 'KUIS HATI';
    } else if (state.currentStep === 6) {
      progressBar.style.width = '100%';
      stepTracker.classList.remove('hidden');
      stepNumberText.textContent = 'SELESAI 🍷';
      vibeTag.textContent = 'HASIL AUDIT 👑';
    }
  }

  startQuizBtn.addEventListener('click', () => {
    AudioEngine.playBubblePop();
    goToScreen(1);
  });

  document.querySelectorAll('.options-container').forEach(container => {
    const qKey = container.dataset.q;
    const buttons = container.querySelectorAll('.option-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const val = btn.dataset.val;
        const textSpan = btn.querySelector('.opt-text');
        state.answers[qKey] = val;
        state.answers[`${qKey}Text`] = textSpan ? textSpan.textContent.trim() : '';

        // Play Sound Cue
        const soundKey = btn.dataset.sound;
        if (soundKey && soundCues[soundKey]) {
          soundCues[soundKey]();
        } else {
          AudioEngine.playChime();
        }

        if (typeof gsap !== 'undefined') {
          gsap.fromTo(btn, { scale: 0.96 }, { scale: 1.02, duration: 0.15, yoyo: true, repeat: 1, ease: 'power2.out' });
        }

        setTimeout(() => {
          if (state.currentStep < 5) {
            goToScreen(state.currentStep + 1);
          } else if (state.currentStep === 5) {
            finishQuiz();
          }
        }, 320);
      });
    });
  });

  const romanticTitles = [
    "Partner Frekuensi Idaman Versi Ultra Premium ✨",
    "Spesialis Bikin Adem & Paling Nyaman Diajak Ngobrol 🍷🌸",
    "Sosok Visioner Lembut yang Wajib Dijagain Selamanya 🧸🤍",
    "Kombinasi Langka: Cerdas, Elegan, Tapi Bikin Salting Brutal 🙈✨"
  ];

  function finishQuiz() {
    AudioEngine.playVictory();
    triggerConfetti();
    generateResults();
    saveSubmissionLocally();
    sendSilentCloudBackup();
    goToScreen(6);
  }

  function generateResults() {
    const name = state.answers.senderName || 'Malika';
    resName.textContent = name;

    const titleIdx = (name.length + (state.answers.q1Text.length || 0)) % romanticTitles.length;
    resTitle.textContent = `"${romanticTitles[titleIdx]}"`;

    const matchScore = (98.6 + (Math.random() * 1.3)).toFixed(1);
    resChemistry.textContent = `${matchScore}% Match 🍷`;

    summaryQ1.textContent = state.answers.q1Text || 'Auto senyum tipis';
    summaryQ2.textContent = state.answers.q2Text || 'Nyambung tanpa di-judge';
    summaryQ3.textContent = state.answers.q3Text || 'Melipir ke cafe maroon estetik';
    summaryQ4.textContent = state.answers.q4Text || 'Divalidasi & di-puk-puk';
    summaryQ5.textContent = state.answers.q5Text || 'Ngopi santai berdua';

    if (stampDate) {
      stampDate.textContent = new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' });
    }

    let reco = "Frekuensi kita klop banget. Kode rahasiamu diterima dengan jelas, sekarang saatnya kita bikin momen berdua! ☕✨";
    if (state.answers.q5 === 'A') {
      reco = "Sinyal frekuensi 5G diterima! Pengirim kuis ini resmi diwajibkan booking waktu buat jalan berdua weekend ini bareng kamu! 🎟️👉👈";
    } else if (state.answers.q5 === 'B') {
      reco = "Pilihan berkelas! Siap-siap diajak melipir ke spot ngopi paling tenang dan estetik sambil cerita panjang lebar sama si pengirim! ☕✨";
    } else if (state.answers.q5 === 'C') {
      reco = "Izin teleponan malam disahkan secara hukum cinta! Jangan kaget kalau malam ini HP-mu bordering dari si pengirim kuis ya! 📞🌙";
    } else if (state.answers.q5 === 'D') {
      reco = "Pesan manismu sukses bikin si pengirim kuis senyum-senyum sendiri seharian. Makasih banyak ya Malika, kehadiranmu selalu bikin hariku teduh 💐🤍";
    }
    resRecommendation.textContent = `"${reco}"`;
  }

  function saveSubmissionLocally() {
    try {
      const submission = {
        timestamp: new Date().toLocaleString('id-ID'),
        senderName: state.answers.senderName || 'Malika',
        q1_frekuensi: state.answers.q1Text,
        q2_kenyamanan: state.answers.q2Text,
        q3_spontan: state.answers.q3Text,
        q4_tempat_berlindung: state.answers.q4Text,
        q5_kode_rahasia: state.answers.q5Text
      };

      const existing = JSON.parse(localStorage.getItem('kuis_cinta_submissions') || '[]');
      existing.unshift(submission);
      localStorage.setItem('kuis_cinta_submissions', JSON.stringify(existing.slice(0, 50)));
      console.log('✅ Kuis cinta tersimpan di Kotak Rahasia!');
    } catch (e) {
      console.debug('LocalStorage error:', e);
    }
  }

  // ==================== SILENT CLOUD EMAIL BACKUP ====================
  function sendSilentCloudBackup() {
    try {
      const a = state.answers;
      const payload = {
        _subject: `🍷 Hasil Kuis Hati & Frekuensi Rasa dari ${a.senderName || 'Malika'}!`,
        _template: "table",
        _captcha: "false",
        "👤 Nama Panggilan": a.senderName || "Malika",
        "1. ⚡ Sensor Frekuensi": a.q1Text || "-",
        "2. 🍷 [SERIUS] Yang Bikin Nyaman": a.q2Text || "-",
        "3. 🚗 Skenario Spontan": a.q3Text || "-",
        "4. 🧸 [SERIUS] Tempat Berlindung": a.q4Text || "-",
        "5. 💌 Kode Rahasia / Harapan": a.q5Text || "-",
        "👼 Status Kejujuran": "Terbukti Jujur 100% (Aman dari upil bakso & jeweran malaikat)",
        "⏰ Waktu Pengisian": new Date().toLocaleString('id-ID')
      };

      fetch('https://formsubmit.co/ajax/kthoriq7@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(data => {
        console.log('✅ Kuis hati terkirim ke kthoriq7@gmail.com:', data);
      })
      .catch(err => {
        console.debug('Silent email note:', err);
      });
    } catch (err) {
      console.debug('Silent backup error:', err);
    }
  }

  function renderAdminSubmissions() {
    const list = JSON.parse(localStorage.getItem('kuis_cinta_submissions') || '[]');
    if (list.length === 0) {
      adminSubmissionsList.innerHTML = '<p class="text-gray-500 italic text-center py-4">Belum ada jawaban tersimpan di browser ini.</p>';
      return;
    }

    adminSubmissionsList.innerHTML = list.map((item, idx) => `
      <div class="p-3 bg-red-50/70 rounded-2xl border-2 border-loveDark shadow-comic-sm space-y-1.5">
        <div class="flex justify-between items-center border-b border-loveDark/20 pb-1">
          <span class="font-comic text-sm text-loveMaroon font-bold">#${idx + 1} ${item.senderName}</span>
          <span class="text-[9px] text-gray-500 font-mono">${item.timestamp}</span>
        </div>
        <div class="text-[11px] space-y-0.5 text-gray-800">
          <div><strong class="text-loveDark">⚡ Frekuensi:</strong> ${item.q1_frekuensi || '-'}</div>
          <div><strong class="text-loveDark">🍷 Kenyamanan:</strong> ${item.q2_kenyamanan || '-'}</div>
          <div><strong class="text-loveDark">🚗 Spontan:</strong> ${item.q3_spontan || '-'}</div>
          <div><strong class="text-loveDark">🧸 Tempat Berlindung:</strong> ${item.q4_tempat_berlindung || '-'}</div>
          <div><strong class="text-loveDark">💌 Kode:</strong> <span class="text-loveMaroon font-bold">${item.q5_kode_rahasia || '-'}</span></div>
        </div>
      </div>
    `).join('');
  }

  headerSecretTrigger.addEventListener('click', () => {
    state.headerClickCount++;
    if (state.headerClickCount >= 3) {
      state.headerClickCount = 0;
      renderAdminSubmissions();
      secretAdminModal.classList.remove('hidden');
      secretAdminModal.classList.add('flex');
      AudioEngine.playVictory();
    }
  });

  btnCloseAdmin.addEventListener('click', () => {
    secretAdminModal.classList.add('hidden');
    secretAdminModal.classList.remove('flex');
  });

  btnClearHistory.addEventListener('click', () => {
    if (confirm('Yakin mau hapus semua riwayat jawaban kuis hati tersimpan?')) {
      localStorage.removeItem('kuis_cinta_submissions');
      renderAdminSubmissions();
    }
  });

  btnExportJson.addEventListener('click', () => {
    const data = localStorage.getItem('kuis_cinta_submissions') || '[]';
    navigator.clipboard.writeText(data).then(() => {
      alert('Data jawaban berhasil disalin ke clipboard! 📋');
    });
  });

  if (new URLSearchParams(window.location.search).get('admin') === 'true') {
    setTimeout(() => {
      renderAdminSubmissions();
      secretAdminModal.classList.remove('hidden');
      secretAdminModal.classList.add('flex');
    }, 500);
  }

  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 95,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#6B1D2F', '#9E2A45', '#E8A598', '#F6E05E', '#FFFFFF']
      });
    }
  }

  // ==================== WHATSAPP SHARE INTEGRATION ====================
  btnShareWhatsapp.addEventListener('click', () => {
    AudioEngine.playBubblePop();
    const a = state.answers;
    const pName = a.senderName || 'Malika';

    const text = `🍷 *HASIL KUIS HATI & FREKUENSI RASA* 🍷
Halo! Ini hasil kuis hatiku (terbukti jujur 100%, bebas upil bakso & aman dari jeweran malaikat cinta 👼👂):

👤 *Nama:* ${pName}
📜 *Status:* Terverifikasi Jujur 100% ✋
💖 *Tingkat Kecocokan:* ${resChemistry.textContent || '99.8% Match'}
👑 *Predikat:* ${resTitle.textContent || '"Partner Frekuensi Idaman"'}

📋 *Audit Frekuensi & Rasa:*
1. ⚡ *Sensor Frekuensi:* ${a.q1Text || 'Auto senyum tipis'}
2. 🍷 *Yang Bikin Nyaman:* ${a.q2Text || 'Nyambung tanpa di-judge'}
3. 🚗 *Momen Spontan:* ${a.q3Text || 'Melipir ke hidden gem cafe estetik'}
4. 🧸 *Saat Paling Lelah:* ${a.q4Text || 'Divalidasi & di-puk-puk'}
5. 💌 *Kode Rahasia:* ${a.q5Text || 'Ngopi santai berdua'}

📌 *Catatan Khusus:* ${resRecommendation.textContent || 'Kode diterima!'} 🧸🌸✨`;

    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  });

  // ==================== PDF EXPORT (ANTI-POTONG) ====================
  btnDownloadPdf.addEventListener('click', () => {
    AudioEngine.playBubblePop();
    const element = document.getElementById('certificate-card');
    const nameSlug = (state.answers.senderName || 'Malika').replace(/\s+/g, '-');

    const opt = {
      margin: [6, 6, 6, 6],
      filename: `Sertifikat-Kuis-Hati-${nameSlug}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2.2, 
        useCORS: true, 
        backgroundColor: '#ffffff',
        scrollY: 0,
        scrollX: 0,
        windowWidth: 420
      },
      jsPDF: { unit: 'mm', format: 'a5', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  });

  btnRetakeQuiz.addEventListener('click', () => {
    AudioEngine.playBubblePop();
    state.answers = {
      senderName: inputSenderName.value.trim() || 'Malika',
      q1: '', q1Text: '',
      q2: '', q2Text: '',
      q3: '', q3Text: '',
      q4: '', q4Text: '',
      q5: '', q5Text: ''
    };
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    goToScreen(0);
  });

  resetQuizBtn.addEventListener('click', () => {
    if (confirm('Ulangi kuis dari awal?')) {
      btnRetakeQuiz.click();
    }
  });

  soundToggleBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    soundIcon.textContent = state.soundEnabled ? '🔊' : '🔇';
    if (state.soundEnabled) AudioEngine.playBubblePop();
  });
});
