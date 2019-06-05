var map;

function initMap() {
    const loc = {
        lat: 42.365250,
        lng: -71.105011
    };
    const map = new google.maps.Map(document.querySelector('.map'), {
        center: {
            lat: 42.365250,
            lng: -71.105011
        },
        zoom: 14,
        center: loc
    });
    const marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}


//Sticky Menu Background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.6;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});



$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800);
    }
});