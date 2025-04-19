javascript:(function() {
    // MCDTweaks Bookmarklet
    const style = document.createElement('style');
    style.textContent = `
        :root {
            --mcdtweaks-bg: #eeeeef;
            --mcdtweaks-navbar: #edeae6;
            --mcdtweaks-content: #fff;
            --mcdtweaks-content-secondary: #eeeeef;
            --mcdtweaks-menu: #fff;
            --mcdtweaks-button: #fff;
            --mcdtweaks-border: #cdcfd2;
            --mcdtweaks-border2: #adadad;
            --mcdtweaks-text: #282b31;
            --mcdtweaks-text-secondary: grey;
            --mcdtweaks-text-inverse: white;
            --mcdtweaks-link: #007ca6;
            --mcdtweaks-bulletin: #fff9c7;
            --mcdtweaks-important: #81d4f7;
            --mcdtweaks-important-secondary: #00b4f1;
            --mcdtweaks-input: white;
            --mcdtweaks-accent1: #000dff;
            --mcdtweaks-accent2: red;
        }

        body {
            background-color: var(--mcdtweaks-bg) !important;
            color: var(--mcdtweaks-text) !important;
        }

        .navbar {
            background-color: var(--mcdtweaks-navbar) !important;
        }

        .content {
            background-color: var(--mcdtweaks-content) !important;
        }

        .menu {
            background-color: var(--mcdtweaks-menu) !important;
        }

        button {
            background-color: var(--mcdtweaks-button) !important;
            border-color: var(--mcdtweaks-border) !important;
        }

        a {
            color: var(--mcdtweaks-link) !important;
        }

        .bulletin {
            background-color: var(--mcdtweaks-bulletin) !important;
        }

        .important {
            background-color: var(--mcdtweaks-important) !important;
        }

        input {
            background-color: var(--mcdtweaks-input) !important;
            border-color: var(--mcdtweaks-border) !important;
        }

        /* Ultrawide Mode */
        .ultrawide-mode .content {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 20px !important;
        }

        /* Better Messages Page */
        .message-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        .message-item {
            border: 1px solid var(--mcdtweaks-border);
            border-radius: 8px;
            padding: 15px;
            background: var(--mcdtweaks-content);
        }

        /* Better Directory */
        .directory-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            padding: 15px;
        }

        .directory-item {
            border: 1px solid var(--mcdtweaks-border);
            border-radius: 6px;
            padding: 12px;
            background: var(--mcdtweaks-content);
        }

        /* Old Assignment Center */
        .assignment-center {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 15px;
            padding: 15px;
        }

        .assignment-item {
            border: 1px solid var(--mcdtweaks-border);
            border-radius: 6px;
            padding: 12px;
            background: var(--mcdtweaks-content);
        }

        /* Classes in order by track */
        .class-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .class-item {
            order: var(--track-order);
        }
    `;
    document.head.appendChild(style);

    // Function to apply dark mode
    function applyDarkMode(isDark) {
        if (isDark) {
            document.documentElement.style.setProperty('--mcdtweaks-bg', '#1d1e22');
            document.documentElement.style.setProperty('--mcdtweaks-navbar', 'rgb(28, 28, 30)');
            document.documentElement.style.setProperty('--mcdtweaks-content', 'rgb(41, 41, 43)');
            document.documentElement.style.setProperty('--mcdtweaks-content-secondary', '#252525');
            document.documentElement.style.setProperty('--mcdtweaks-menu', '#252525');
            document.documentElement.style.setProperty('--mcdtweaks-button', '#373739');
            document.documentElement.style.setProperty('--mcdtweaks-border', '#2f2f2f');
            document.documentElement.style.setProperty('--mcdtweaks-border2', '#2f2f2f');
            document.documentElement.style.setProperty('--mcdtweaks-text', 'white');
            document.documentElement.style.setProperty('--mcdtweaks-text-secondary', '#999999');
            document.documentElement.style.setProperty('--mcdtweaks-link', '#00a5dd');
            document.documentElement.style.setProperty('--mcdtweaks-bulletin', '#454545');
            document.documentElement.style.setProperty('--mcdtweaks-important', '#454545');
            document.documentElement.style.setProperty('--mcdtweaks-important-secondary', '#373737');
            document.documentElement.style.setProperty('--mcdtweaks-input', '#252525');
            document.documentElement.style.setProperty('--mcdtweaks-accent1', '#272727');
            document.documentElement.style.setProperty('--mcdtweaks-accent2', '#181818');
        } else {
            document.documentElement.style.setProperty('--mcdtweaks-bg', '#eeeeef');
            document.documentElement.style.setProperty('--mcdtweaks-navbar', '#edeae6');
            document.documentElement.style.setProperty('--mcdtweaks-content', '#fff');
            document.documentElement.style.setProperty('--mcdtweaks-content-secondary', '#eeeeef');
            document.documentElement.style.setProperty('--mcdtweaks-menu', '#fff');
            document.documentElement.style.setProperty('--mcdtweaks-button', '#fff');
            document.documentElement.style.setProperty('--mcdtweaks-border', '#cdcfd2');
            document.documentElement.style.setProperty('--mcdtweaks-border2', '#adadad');
            document.documentElement.style.setProperty('--mcdtweaks-text', '#282b31');
            document.documentElement.style.setProperty('--mcdtweaks-text-secondary', 'grey');
            document.documentElement.style.setProperty('--mcdtweaks-link', '#007ca6');
            document.documentElement.style.setProperty('--mcdtweaks-bulletin', '#fff9c7');
            document.documentElement.style.setProperty('--mcdtweaks-important', '#81d4f7');
            document.documentElement.style.setProperty('--mcdtweaks-important-secondary', '#00b4f1');
            document.documentElement.style.setProperty('--mcdtweaks-input', 'white');
            document.documentElement.style.setProperty('--mcdtweaks-accent1', '#000dff');
            document.documentElement.style.setProperty('--mcdtweaks-accent2', 'red');
        }
    }

    // Function to apply ultrawide mode
    function applyUltrawideMode(isUltrawide) {
        if (isUltrawide) {
            document.body.classList.add('ultrawide-mode');
        } else {
            document.body.classList.remove('ultrawide-mode');
        }
    }

    // Function to sort classes by track
    function sortClassesByTrack() {
        const classList = document.querySelector('.class-list');
        if (classList) {
            const classes = Array.from(classList.children);
            classes.forEach((classItem, index) => {
                const track = classItem.getAttribute('data-track') || '0';
                classItem.style.setProperty('--track-order', track);
            });
        }
    }

    // Check if we should auto-apply on page load
    if (localStorage.getItem('mcdtweaks-autoapply') === 'true') {
        const isDark = localStorage.getItem('mcdtweaks-darkmode') === 'true';
        const isUltrawide = localStorage.getItem('mcdtweaks-ultrawide') === 'true';
        applyDarkMode(isDark);
        applyUltrawideMode(isUltrawide);
        sortClassesByTrack();
    }

    // Add toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle Dark Mode';
    toggleBtn.style.position = 'fixed';
    toggleBtn.style.top = '10px';
    toggleBtn.style.right = '10px';
    toggleBtn.style.zIndex = '9999';
    toggleBtn.onclick = function() {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('mcdtweaks-darkmode', isDark);
        applyDarkMode(isDark);
    };
    document.body.appendChild(toggleBtn);

    // Add auto-apply toggle button
    const autoApplyBtn = document.createElement('button');
    autoApplyBtn.textContent = 'Auto-Apply: ' + (localStorage.getItem('mcdtweaks-autoapply') === 'true' ? 'ON' : 'OFF');
    autoApplyBtn.style.position = 'fixed';
    autoApplyBtn.style.top = '40px';
    autoApplyBtn.style.right = '10px';
    autoApplyBtn.style.zIndex = '9999';
    autoApplyBtn.onclick = function() {
        const currentState = localStorage.getItem('mcdtweaks-autoapply') === 'true';
        const newState = !currentState;
        localStorage.setItem('mcdtweaks-autoapply', newState);
        autoApplyBtn.textContent = 'Auto-Apply: ' + (newState ? 'ON' : 'OFF');
    };
    document.body.appendChild(autoApplyBtn);

    // Add ultrawide mode toggle button
    const ultrawideBtn = document.createElement('button');
    ultrawideBtn.textContent = 'Ultrawide Mode: ' + (localStorage.getItem('mcdtweaks-ultrawide') === 'true' ? 'ON' : 'OFF');
    ultrawideBtn.style.position = 'fixed';
    ultrawideBtn.style.top = '70px';
    ultrawideBtn.style.right = '10px';
    ultrawideBtn.style.zIndex = '9999';
    ultrawideBtn.onclick = function() {
        const currentState = localStorage.getItem('mcdtweaks-ultrawide') === 'true';
        const newState = !currentState;
        localStorage.setItem('mcdtweaks-ultrawide', newState);
        ultrawideBtn.textContent = 'Ultrawide Mode: ' + (newState ? 'ON' : 'OFF');
        applyUltrawideMode(newState);
    };
    document.body.appendChild(ultrawideBtn);

    // Apply initial settings
    const isDark = localStorage.getItem('mcdtweaks-darkmode') === 'true';
    const isUltrawide = localStorage.getItem('mcdtweaks-ultrawide') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        applyDarkMode(true);
    }
    if (isUltrawide) {
        applyUltrawideMode(true);
    }
    sortClassesByTrack();
})(); 