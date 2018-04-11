// initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта:, Долгота:
	var centerLatLng = new google.maps.LatLng(-6.223627, 106.864354);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: {lat: -6.230215, lng: 106.833143}, // Координаты центра мы берем из переменной centerLatLng
		zoom: 12.8, // Зум по умолчанию. Возможные значения от 0 до 21
        disableDefaultUI: true // убирает элементы управления
	};
    
    // Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map__background"), mapOptions);
    
    // Инициализация маркера
    var marker = new google.maps.Marker({
            position: centerLatLng,
            map: map,
            icon: "image/contact/map-marker.png"
        });
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);