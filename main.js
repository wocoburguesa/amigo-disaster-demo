L.amigo.auth.setToken('R:mEqSRFEwKwFmi2ZtQUq7V6DrZEQaU06igfqfuK');

var base = L.tileLayer('http://server.arcgisonline.com' +
                         '/ArcGIS/rest/services/World_Imagery/' +
                         'MapServer/tile/{z}/{y}/{x}',
                         {
                             pane: 'swipePane'
                         });

var raster = L.tileLayer(
    'https://cdnamigocloud.global.ssl.fastly.net/api/v1' +
        '/users/3760/projects/14294/raster_datasets/87066/tiles' +
        '/{z}/{x}/{y}.png?c=de94ad5b&srs=3857'
);

var mymap = L.map('map', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [raster]
});

raster.addTo(mymap);
base.addTo(mymap);

L.control.swipe().addTo(mymap);

mymap.invalidateSize();

mymap.fitBounds([
    [-11.956876093184725,
     -76.87185287475587],
    [-11.998857076839938,
     -76.91476821899415]
]);

mymap.on('zoom', function (e) {
    console.log(mymap.getBounds());
});
