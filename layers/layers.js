var wms_layers = [];


        var lyr_Esri_0 = new ol.layer.Tile({
            'title': 'Esri',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Varianten_2 = new ol.format.GeoJSON();
var features_Varianten_2 = format_Varianten_2.readFeatures(json_Varianten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Varianten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Varianten_2.addFeatures(features_Varianten_2);
var lyr_Varianten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Varianten_2, 
                style: style_Varianten_2,
                popuplayertitle: "Varianten",
                interactive: true,
    title: 'Varianten<br />\
    <img src="styles/legend/Varianten_2_0.png" /> Raingarden B<br />\
    <img src="styles/legend/Varianten_2_1.png" /> Raingarden C<br />\
    <img src="styles/legend/Varianten_2_2.png" /> Raingarden D<br />\
    <img src="styles/legend/Varianten_2_3.png" /> Waterplein A<br />\
    <img src="styles/legend/Varianten_2_4.png" /> Waterplein B<br />\
    <img src="styles/legend/Varianten_2_5.png" /> <br />'
        });

lyr_Esri_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Varianten_2.setVisible(true);
var layersList = [lyr_Esri_0,lyr_OpenStreetMap_1,lyr_Varianten_2];
lyr_Varianten_2.set('fieldAliases', {'Variant': 'Variant', 'Oppervlak': 'Oppervlak', });
lyr_Varianten_2.set('fieldImages', {'Variant': 'TextEdit', 'Oppervlak': 'Range', });
lyr_Varianten_2.set('fieldLabels', {'Variant': 'inline label - visible with data', 'Oppervlak': 'inline label - always visible', });
lyr_Varianten_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});