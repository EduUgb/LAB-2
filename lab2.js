
function cambiafondo(element) {
    element.style.backgroundColor = '#61e7ff';
}

function sevafondo(element) {
    element.style.backgroundColor = '';
}

function showImage(element) {
    const img = element.querySelector('.hover-image');
    if (img) {
        img.style.display = 'block';
    }
}

function hideImage(element) {
    const img = element.querySelector('.hover-image');
    if (img) {
        img.style.display = 'none';
    }
}