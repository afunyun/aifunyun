// Icon link hover effects are now handled by CSS

document.addEventListener('DOMContentLoaded', function () {
    // Icon link transitions are now handled by CSS

    const interestsToggle = document.getElementById('interests-toggle');
    const interestsPanel = document.getElementById('interests-panel');
    const mobileInterestsPanel = document.getElementById('mobile-interests-panel');
    const mainContent = document.getElementById('main-content');
    const closeButtons = document.querySelectorAll('.close-interests');

    function isMobile() {
        return window.innerWidth < 768;
    }

    function showInterests() {
        if (isMobile()) {
            document.body.classList.add('show-interests-mobile');
            mobileInterestsPanel.classList.remove('hidden', 'pointer-events-none');
        } else {
            const viewportWidth = window.innerWidth;
            const mainContentWidth = mainContent.offsetWidth;

            let shiftDistance;
            if (viewportWidth < 1024) {
                shiftDistance = Math.min(mainContentWidth * 0.4, 160);
            } else {
                shiftDistance = Math.min(mainContentWidth * 0.5, 200);
            }

            const panelWidth = Math.min(mainContentWidth * 0.8, 320);

            // Set CSS custom property for shift distance
            mainContent.style.setProperty('--shift-distance', `-${shiftDistance}px`);
            interestsPanel.style.width = `${panelWidth}px`;
            interestsPanel.style.position = 'relative';
            interestsPanel.style.left = '0';
            
            document.body.classList.add('show-interests');
        }
    }

    function hideInterests() {
        if (isMobile()) {
            document.body.classList.remove('show-interests-mobile');
            setTimeout(() => {
                mobileInterestsPanel.classList.add('hidden', 'pointer-events-none');
            }, 500);
        } else {
            document.body.classList.remove('show-interests');
            interestsPanel.style.width = '0';
            setTimeout(() => {
                interestsPanel.style.position = 'absolute';
                interestsPanel.style.left = '100%';
            }, 500);
        }
    }

    if (interestsToggle) {
        interestsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            showInterests();
        });
    }

    if (closeButtons.length > 0) {
        closeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                hideInterests();
            });
        });
    }

    window.addEventListener('resize', () => {
        document.body.classList.remove('show-interests', 'show-interests-mobile');
        mainContent.style.removeProperty('--shift-distance');
        if (interestsPanel) {
            interestsPanel.style.width = '0';
            interestsPanel.style.position = 'absolute';
            interestsPanel.style.left = '100%';
        }
        if (mobileInterestsPanel) {
            mobileInterestsPanel.classList.add('hidden', 'pointer-events-none');
        }
    });
});
