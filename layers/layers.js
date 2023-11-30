var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PenggunaanLahan_1 = new ol.format.GeoJSON();
var features_PenggunaanLahan_1 = format_PenggunaanLahan_1.readFeatures(json_PenggunaanLahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PenggunaanLahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PenggunaanLahan_1.addFeatures(features_PenggunaanLahan_1);
var lyr_PenggunaanLahan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PenggunaanLahan_1, 
                style: style_PenggunaanLahan_1,
                interactive: true,
    title: 'Penggunaan Lahan<br />\
    <img src="styles/legend/PenggunaanLahan_1_0.png" /> Sawah<br />\
    <img src="styles/legend/PenggunaanLahan_1_1.png" /> Vegetasi<br />\
    <img src="styles/legend/PenggunaanLahan_1_2.png" /> Lahan Kosong<br />\
    <img src="styles/legend/PenggunaanLahan_1_3.png" /> Pabrik<br />\
    <img src="styles/legend/PenggunaanLahan_1_4.png" /> Pemukiman<br />\
    <img src="styles/legend/PenggunaanLahan_1_5.png" /> Bandara<br />\
    <img src="styles/legend/PenggunaanLahan_1_6.png" /> Tambak<br />'
        });
var format_SHP3Kecamatan_2 = new ol.format.GeoJSON();
var features_SHP3Kecamatan_2 = format_SHP3Kecamatan_2.readFeatures(json_SHP3Kecamatan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHP3Kecamatan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHP3Kecamatan_2.addFeatures(features_SHP3Kecamatan_2);
var lyr_SHP3Kecamatan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHP3Kecamatan_2, 
                style: style_SHP3Kecamatan_2,
                interactive: true,
    title: 'SHP 3 Kecamatan<br />\
    <img src="styles/legend/SHP3Kecamatan_2_0.png" /> BUDURAN<br />\
    <img src="styles/legend/SHP3Kecamatan_2_1.png" /> GEDANGAN<br />\
    <img src="styles/legend/SHP3Kecamatan_2_2.png" /> SEDATI<br />'
        });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                interactive: true,
    title: 'Sungai<br />\
    <img src="styles/legend/Sungai_3_0.png" /> Alur Sungai<br />\
    <img src="styles/legend/Sungai_3_1.png" /> Sungai<br />\
    <img src="styles/legend/Sungai_3_2.png" /> Sungai Satu Garis<br />'
        });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_4_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_4_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_4_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_4_3.png" /> Jalan Setapak<br />'
        });
var format_Titiksurvey_5 = new ol.format.GeoJSON();
var features_Titiksurvey_5 = format_Titiksurvey_5.readFeatures(json_Titiksurvey_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titiksurvey_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titiksurvey_5.addFeatures(features_Titiksurvey_5);
var lyr_Titiksurvey_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titiksurvey_5, 
                style: style_Titiksurvey_5,
                interactive: true,
                title: '<img src="styles/legend/Titiksurvey_5.png" /> Titik survey'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PenggunaanLahan_1.setVisible(true);lyr_SHP3Kecamatan_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_Jalan_4.setVisible(true);lyr_Titiksurvey_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PenggunaanLahan_1,lyr_SHP3Kecamatan_2,lyr_Sungai_3,lyr_Jalan_4,lyr_Titiksurvey_5];
lyr_PenggunaanLahan_1.set('fieldAliases', {'id': 'id', 'PL': 'PL', 'Luas': 'Luas', });
lyr_SHP3Kecamatan_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_3.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Jalan_4.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Titiksurvey_5.set('fieldAliases', {'id': 'id', 'titik': 'titik', 'X': 'X', 'Y': 'Y', });
lyr_PenggunaanLahan_1.set('fieldImages', {'id': 'TextEdit', 'PL': 'TextEdit', 'Luas': 'TextEdit', });
lyr_SHP3Kecamatan_2.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Jalan_4.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Titiksurvey_5.set('fieldImages', {'id': 'TextEdit', 'titik': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PenggunaanLahan_1.set('fieldLabels', {'id': 'no label', 'PL': 'inline label', 'Luas': 'no label', });
lyr_SHP3Kecamatan_2.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_3.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Titiksurvey_5.set('fieldLabels', {'id': 'no label', 'titik': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Titiksurvey_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});