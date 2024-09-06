document.addEventListener('DOMContentLoaded', function() {
    var barToggle = document.getElementById('barToggle');
    var sidePanel = document.getElementById('sidePanel');
    var overlay = document.getElementById('overlay');

    barToggle.addEventListener('click', function(e) {
        e.preventDefault();
        sidePanel.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('blur');
    });

    overlay.addEventListener('click', function() {
        sidePanel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('blur');
    });

    const toggleSwitch = document.querySelector('#checkbox');

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    const sidePanelLinks = document.querySelectorAll('#sidePanel .links');
    sidePanelLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidePanel.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('blur');
        });
    });
});