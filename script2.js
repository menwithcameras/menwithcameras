document.addEventListener('DOMContentLoaded', function () {
    const flakes = document.querySelectorAll('.snowflake');
    flakes.forEach(flake => {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let size = Math.random() * 4;

        flake.style.left = x + 'px';
        flake.style.top = y + 'px';
        flake.style.fontSize = size + 'em';

        let animationDuration = Math.random() * 5 + 5;

        flake.style.animation = `snow-fall ${animationDuration}s linear infinite`;
    });
});