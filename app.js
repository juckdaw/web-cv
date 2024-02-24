let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener('click', () => {
        if(card.classList.contains('active')) {
            card.classList.remove('active');
            document.querySelector('.instructions').classList.remove('hidden');
        } else {
            document.querySelector('.active')?.classList.remove('active');
            card.classList.add('active');
            document.querySelector('.instructions').classList.add('hidden');
        }
    });
});

cards.forEach(card => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        card.addEventListener('touchstart', () => {
            if(!card.classList.contains('active')) {
                card.classList.add('pulse');
            }
        });
        card.addEventListener('touchend', () => {
            card.classList.remove('pulse');
        });
    } else {
        card.addEventListener('mouseover', () => {
            if(!card.classList.contains('active')) {
                card.classList.add('pulse');
            }
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('pulse');
        });
    }
});