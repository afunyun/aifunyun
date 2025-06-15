document.querySelectorAll('.icon-link').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const iconLinks = document.querySelectorAll('.icon-link');
    iconLinks.forEach(link => {
        link.style.transition = 'transform 0.2s ease';
    });
});

document.addEventListener('DOMContentLoaded', function () {
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
            mainContent.style.transform = 'translateY(-100vh)';
            mobileInterestsPanel.classList.remove('hidden', 'pointer-events-none');
            mobileInterestsPanel.style.opacity = '1';
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

            mainContent.style.transform = `translateX(-${shiftDistance}px)`;
            interestsPanel.style.width = `${panelWidth}px`;
            interestsPanel.style.opacity = '1';
            interestsPanel.style.position = 'relative';
            interestsPanel.style.left = '0';
        }
    }

    function hideInterests() {
        if (isMobile()) {
            mainContent.style.transform = 'translateY(0)';
            mobileInterestsPanel.style.opacity = '0';
            setTimeout(() => {
                mobileInterestsPanel.classList.add('hidden', 'pointer-events-none');
            }, 500);
        } else {
            mainContent.style.transform = 'translateX(0)';
            interestsPanel.style.width = '0';
            interestsPanel.style.opacity = '0';
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
        if (mainContent) mainContent.style.transform = 'translateX(0)';
        if (interestsPanel) {
            interestsPanel.style.width = '0';
            interestsPanel.style.opacity = '0';
            interestsPanel.style.position = 'absolute';
            interestsPanel.style.left = '100%';
        }
        if (mobileInterestsPanel) {
            mobileInterestsPanel.style.opacity = '0';
            mobileInterestsPanel.classList.add('hidden', 'pointer-events-none');

        }
    });

});
