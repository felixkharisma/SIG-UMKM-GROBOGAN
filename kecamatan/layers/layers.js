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
var format_DataPenduduk_0 = new ol.format.GeoJSON();
var features_DataPenduduk_0 = format_DataPenduduk_0.readFeatures(json_DataPenduduk_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataPenduduk_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DataPenduduk_0.addFeatures(features_DataPenduduk_0);var lyr_DataPenduduk_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DataPenduduk_0, 
                style: style_DataPenduduk_0,
                title: '<img src="styles/legend/DataPenduduk_0.png" /> Data Penduduk'
            });

lyr_DataPenduduk_0.setVisible(true);
var layersList = [baseLayer,lyr_DataPenduduk_0];
lyr_DataPenduduk_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'Provinsi': 'Provinsi', });
lyr_DataPenduduk_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kabupaten': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_DataPenduduk_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Kabupaten': 'inline label', 'Provinsi': 'inline label', });
lyr_DataPenduduk_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});