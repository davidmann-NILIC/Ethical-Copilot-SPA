/**
 * MASTER BRAIN: ETHICAL USE OF COPILOT SPA
 * FINAL PRODUCTION BUILD: VERBATIM FEEDBACK + SYNCED ASSETS
 */

const scenarioData = {
    1: {
        title: "1. Understand Assignment Brief",
        icon: "Icon1.jpg",
        question: "<strong>When using your university Copilot account,</strong> can you upload your assignment brief or marking criteria to ask for a plain-English explanation of what is required?",
        videoQuest: "S1_Question.mp4",
        correctChoice: "yes",
        success: {
            header: "Yes, that's correct but with caution!",
            body: "You may use your university Copilot account to ask clarifying questions about your brief or criteria, <span class='highlight-pink'>provided your module allows AI support for this step.</span> Keep your questions focused on understanding the task (not getting AI to do the work), and do not include personal, sensitive or non-permitted data. These permissions only apply to your university Copilot account; do not use external GenAI tools for this, as they can create copyright and data-protection risks.",
            video: "S1_Success.mp4",
            audio: "S1_Success AUDIO FEEDBACK.wav"
        },
        correction: {
            header: "No, that's not correct.",
            body: "Actually, clarifying a brief is often permitted. However, these permissions only apply to your university Copilot account; do not use external GenAI tools for this, as they can create copyright and data-protection risks. Always check your module-specific guidance to ensure AI support is permitted for this stage of your assignment.",
            video: "S1_Correction.mp4",
            audio: "S1_Correction AUDIO FEEDBACK.wav"
        }
    },
    2: {
        title: "2. Generate Ideas and Plan",
        icon: "Icon2.jpg",
        question: "<strong>When using your university Copilot account,</strong> can you use it to map ideas or explore possible directions for your work, if you acknowledge this use?",
        videoQuest: "S2_Question.mp4",
        correctChoice: "yes",
        success: {
            header: "Yes, that's correct but with caution.",
            body: "If your module allows it, you may use your university Copilot account to support idea mapping or early planning. This can include asking for help to spark ideas, list possible angles, or sketch a mind-map. Treat anything Copilot produces as a starting point only - you must develop and express the ideas in your own words. This is important because AI should help you think, not think for you. If your course asks you to acknowledge AI support, do so clearly.",
            video: "S2_Success.mp4",
            audio: "S2_Success AUDIO FEEDBACK.wav"
        },
        correction: {
            header: "No, that's not correct.",
            body: "If your module allows it, you can use your university Copilot account to support idea mapping or early planning. Treat anything Copilot produces as a starting point only - you must develop and express the ideas in your own words. If your course asks you to acknowledge AI support, do so clearly in your declaration document.",
            video: "S2_Correction.mp4",
            audio: "S2_Correction AUDIO FEEDBACK.wav"
        }
    },
    3: {
        title: "3. Find and Evaluate Sources",
        icon: "Icon3.jpg",
        question: "<strong>When using your university Copilot account,</strong> can you rely on it as your main way to find academic sources, instead of using library databases or Google Scholar?",
        videoQuest: "S3_Question.mp4",
        correctChoice: "no", // VARIETY: "No" is the success path
        success: {
            header: "Yes, that's correct... but with caution.",
            body: "You shouldn't rely on Copilot as your main tool for finding academic sources. While it can suggest ideas or keywords, some references it provides may be incomplete, incorrect, or even non-existent. Always use library databases or Google Scholar to locate, read, and reference genuine academic sources yourself. This matters because it helps you build accurate, trustworthy research and practise essential academic skills.",
            video: "S3_Success.mp4",
            audio: "S3_Success AUDIO FEEDBACK.wav"
        },
        correction: {
            header: "No, I'm sorry but that's not correct.",
            body: "You shouldn't rely on Copilot as your main tool for finding academic sources. While it can suggest ideas or keywords, some references it provides may be incomplete, incorrect, or even non-existent. Always use library databases or Google Scholar to locate, read, and reference genuine academic sources yourself. This matters because it helps you build accurate, trustworthy research and practise essential academic skills.",
            video: "S3_Correction.mp4",
            audio: "S3_Correction AUDIO FEEDBACK.wav"
        }
    },
    4: {
        title: "4. Drafting and Structuring",
        icon: "Icon4.jpg",
        question: "<strong>Zara says that,</strong> when using your university Copilot account, you can't ask it to create a full, detailed plan for your assignment, without adding any of your own ideas. <strong>Do you agree?</strong>",
        videoQuest: "S4_Question.mp4",
        correctChoice: "yes",
        success: {
            header: "Well done, both you and Zara are correct... but with caution.",
            body: "Your assignment plan needs to show your own thinking and understanding. Your university Copilot account can help you organise or structure ideas you've already developed, but it shouldn't replace your input. If you let AI produce the full plan, it won't reflect your original thinking or how well you understand the task. This means the work isn't truly yours and could break your module's rules on fair use of AI.",
            video: "S4_Success.mp4",
            audio: "S4_Success AUDIO FEEDBACK.wav"
        },
        correction: {
            header: "No, I'm afraid that's not correct.",
            body: "Zara is correct because your plan needs to show your own thinking and understanding. Your university Copilot account can help you organise or structure ideas you've already developed, but it shouldn't replace your input. If you let AI produce the full plan, it won't reflect your original thinking or how well you understand the task.",
            video: "S4_Correction.mp4",
            audio: "S4_Correction AUDIO FEEDBACK.wav"
        }
    },
    5: {
        title: "5. Edit and Proofread",
        icon: "Icon5.jpg",
        question: "<strong>When using your university Copilot account,</strong> can you ask it to rewrite your draft or sections of your work to make it sound more academic?",
        videoQuest: "S5_Question.mp4",
        correctChoice: "no", // VARIETY: "No" is the success path
        success: {
            header: "You are correct... but with caution.",
            body: "You can use your university Copilot account for feedback (on spelling, grammar, vocabulary, or reference format) if your module allows it, but you must not ask it to rewrite or substantially change your draft. The ideas, structure, and wording should always be your own original work. In your assignments, the ideas and wording need to stay your own so the final piece genuinely shows your voice and understanding.",
            video: "S5_Success.mp4",
            audio: "S5_Success AUDIO FEEDBACK.wav"
        },
        correction: {
            header: "I'm afraid that's not correct.",
            body: "Although you may be able to use your university Copilot account for feedback (on spelling, grammar, vocabulary, or reference format) if your module allows it, you must not ask it to rewrite or substantially change your draft. The ideas, structure, and wording should always be your own original work. Rewriting assignment work using AI can carry a serious penalty.",
            video: "S5_Correction.mp4",
            audio: "S5_Correction AUDIO FEEDBACK.wav"
        }
    }
};

let currentScenario = 1;

/**
 * Universal View Switcher
 */
function showView(viewId, scenarioNum = null) {
    if (scenarioNum) currentScenario = scenarioNum;

    document.querySelectorAll('.view').forEach(v => { 
        v.style.display = 'none'; 
        v.classList.remove('active'); 
    });

    const target = document.getElementById(viewId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active');
    }

    const headerNav = document.getElementById('header-nav');
    if (viewId === 'view-q1a') {
        headerNav.style.display = 'flex';
        updateQuestionUI();
    } else {
        headerNav.style.display = 'none';
    }

    closeDrawer();
    window.scrollTo(0, 0);
}

/**
 * Question UI Setup with 3-Second Interaction Delay
 */
function updateQuestionUI() {
    const data = scenarioData[currentScenario];
    
    document.getElementById('nav-title-text').innerText = data.title;
    document.getElementById('header-dynamic-icon').src = data.icon;
    document.getElementById('dynamic-watermark').innerText = `0${currentScenario}`;
    document.getElementById('dynamic-question-text').innerHTML = data.question;

    const vid = document.getElementById('q1a-video');
    vid.src = data.videoQuest;
    vid.load();
    vid.play().catch(e => console.log("Interaction required"));

    // 3-SECOND DELAY: Buttons disabled until video starts/paused
    const buttons = document.querySelectorAll('.timer-btn');
    buttons.forEach(btn => btn.disabled = true);

    setTimeout(() => {
        buttons.forEach(btn => btn.disabled = false);
    }, 3000); 
}

/**
 * State-Based Feedback Logic: Maps clicks to Success or Correction assets
 */
function triggerFeedback(choice) {
    const data = scenarioData[currentScenario];
    
    // Evaluation Logic: Compares student choice to the correct pedagogical state
    const isSuccess = (choice === data.correctChoice);
    const outcome = isSuccess ? data.success : data.correction;
    
    const extraNav = document.getElementById('extra-nav-buttons');
    const drawer = document.getElementById('feedback-drawer');

    document.getElementById('feedback-header').innerText = outcome.header;
    document.getElementById('feedback-body').innerHTML = outcome.body;
    
    const fvid = document.getElementById('feedback-video');
    fvid.src = outcome.video;
    fvid.load();
    fvid.play();

    document.getElementById('btn-listen').onclick = () => playAudio(outcome.audio);

    // INJECT MORE INFO BUTTON: Only appears if the choice was incorrect
    extraNav.innerHTML = ""; 
    if (!isSuccess) {
        const infoBtn = document.createElement('button');
        infoBtn.className = "pill-btn outline-navy active-btn"; 
        infoBtn.innerText = "More Information";
        infoBtn.style.marginTop = "15px";
        infoBtn.onclick = () => showView('view-i1');
        extraNav.appendChild(infoBtn);
    }

    document.getElementById('feedback-drawer').classList.add('open');
}

function closeDrawer() {
    document.getElementById('feedback-drawer').classList.remove('open');
    document.getElementById('feedback-video').pause();
}

/**
 * Linear Progress to X1 End Element
 */
function nextScenario() {
    closeDrawer();
    if (currentScenario < 5) {
        currentScenario++;
        showView('view-q1a');
    } else {
        showView('view-x1');
    }
}

/**
 * Return to Start Reset
 */
function resetApp() {
    currentScenario = 1;
    showView('view-h1');
}

/**
 * Global Audio Playback
 */
function playAudio(file) {
    const audio = document.getElementById('global-audio');
    audio.src = file;
    audio.play();
}