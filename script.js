let noButtonClickCount = 0;
let noButtonState = 0;

document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Oh Siii! jajaja';

    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);

    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
});

document.getElementById('noBtn').addEventListener('click', function() {
    let siBtn = document.getElementById('siBtn');
    let noBtn = document.getElementById('noBtn');

    let newSiSize = 40 + (noButtonState * 20);
    let newNoSize = Math.max(20, 100 - (noButtonState * 10)); // Evita que el botón "No" desaparezca

    siBtn.style.fontSize = `${newSiSize}px`;
    siBtn.style.padding = `${newSiSize / 2}px ${newSiSize}px`;

    noBtn.style.fontSize = `${newNoSize}px`;
    noBtn.style.padding = `${newNoSize / 2}px ${newNoSize}px`;

    switch (noButtonState) {
        case 0:
            noBtn.innerHTML = '¡Oh no! ¿Estás segura?';
            document.getElementById('sadGifContainer').style.display = 'block';
            break;
        case 1:
            noBtn.innerHTML = '¡¿Realmente estás segura?!';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            break;
        case 2:
            noBtn.innerHTML = 'Estás segura de verdad, ¿eh?';
            document.getElementById('sadGifContainer1').style.display = 'block';
            break;
        case 3:
            noBtn.innerHTML = '¿Eres positiva?';
            break;
        case 4:
            noBtn.innerHTML = 'Di que sí, por favor 🥺';
            break;
        case 5:
            noBtn.innerHTML = 'Solo piénsalo...';
            break;
        case 6:
            noBtn.innerHTML = 'Si dices que no, estaré muy triste 😢';
            break;
        case 7:
            noBtn.innerHTML = 'Estaré muy muy triste 😭';
            break;
        case 8:
            noBtn.innerHTML = 'Romperás mi corazón 💔';
            break;
        case 9:
            noBtn.innerHTML = 'Vale... ya dejaré de preguntar...';
            break;
        case 10:
            noBtn.innerHTML = 'Es broma, ¡POR FAVOR DI SÍ! 🥹';
            break;
        case 11:
            noBtn.innerHTML = 'Por favoooooooor 🙏';
            break;
        case 12:
            noBtn.innerHTML = 'Anda di que sí, yaaaa';
            break;
        case 13:
            noBtn.innerHTML = 'Te haré muy feliz, lo prometo 🥰';
            break;
        case 14:
            noBtn.innerHTML = 'No... ya di que sí 😣';
            break;
        case 15:
            noBtn.innerHTML = '¡SIIIIIIIIIIIIIIIIIIIIII! 🎉';
            break;
        case 16:
            noBtn.innerHTML = 'Por favoooooor 🥹';
            document.getElementById('gifContainer').style.display = 'block';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            noButtonState = 0; // Reinicia el ciclo
            break;
    }

    noButtonState++;
});
