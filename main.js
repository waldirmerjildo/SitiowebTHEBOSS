const app = document.getElementById('typewriter');


const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('peru capital de comidas')
    .pauseFor(200)
    .start();