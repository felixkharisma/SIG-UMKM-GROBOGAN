var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_DataUMKMGrobogan_0 = new ol.format.GeoJSON();
var features_DataUMKMGrobogan_0 = format_DataUMKMGrobogan_0.readFeatures(json_DataUMKMGrobogan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataUMKMGrobogan_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DataUMKMGrobogan_0.addFeatures(features_DataUMKMGrobogan_0);var lyr_DataUMKMGrobogan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DataUMKMGrobogan_0, 
                style: style_DataUMKMGrobogan_0,
                title: '<img src="styles/legend/DataUMKMGrobogan_0.png" /> Data UMKM Grobogan'
            });

lyr_DataUMKMGrobogan_0.setVisible(true);
var layersList = [baseLayer,lyr_DataUMKMGrobogan_0];
lyr_DataUMKMGrobogan_0.set('fieldAliases', {'Penduduk': 'Penduduk', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_DataUMKMGrobogan_0.set('fieldImages', {'Penduduk': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_DataUMKMGrobogan_0.set('fieldLabels', {'Penduduk': 'inline label', 'Kecamatan': 'inline label', 'Kabupaten': 'inline label', 'Provinsi': 'inline label', });
lyr_DataUMKMGrobogan_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});