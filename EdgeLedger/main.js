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