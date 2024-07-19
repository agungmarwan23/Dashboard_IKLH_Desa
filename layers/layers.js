var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_IKLDesa2023_1 = new ol.format.GeoJSON();
var features_IKLDesa2023_1 = format_IKLDesa2023_1.readFeatures(json_IKLDesa2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKLDesa2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKLDesa2023_1.addFeatures(features_IKLDesa2023_1);
var lyr_IKLDesa2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKLDesa2023_1, 
                style: style_IKLDesa2023_1,
                popuplayertitle: "IKL Desa 2023",
                interactive: true,
    title: 'IKL Desa 2023<br />\
    <img src="styles/legend/IKLDesa2023_1_0.png" /> Sangat Baik<br />\
    <img src="styles/legend/IKLDesa2023_1_1.png" /> Baik<br />\
    <img src="styles/legend/IKLDesa2023_1_2.png" /> Sedang<br />\
    <img src="styles/legend/IKLDesa2023_1_3.png" /> Cukup<br />\
    <img src="styles/legend/IKLDesa2023_1_4.png" /> Kurang<br />'
        });
var format_IKLDesa2022_2 = new ol.format.GeoJSON();
var features_IKLDesa2022_2 = format_IKLDesa2022_2.readFeatures(json_IKLDesa2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKLDesa2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKLDesa2022_2.addFeatures(features_IKLDesa2022_2);
var lyr_IKLDesa2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKLDesa2022_2, 
                style: style_IKLDesa2022_2,
                popuplayertitle: "IKL Desa 2022",
                interactive: true,
    title: 'IKL Desa 2022<br />\
    <img src="styles/legend/IKLDesa2022_2_0.png" /> Sangat Baik<br />\
    <img src="styles/legend/IKLDesa2022_2_1.png" /> Baik<br />\
    <img src="styles/legend/IKLDesa2022_2_2.png" /> Sedang<br />\
    <img src="styles/legend/IKLDesa2022_2_3.png" /> Cukup<br />\
    <img src="styles/legend/IKLDesa2022_2_4.png" /> Kurang<br />'
        });
var format_IKLDesa2021_3 = new ol.format.GeoJSON();
var features_IKLDesa2021_3 = format_IKLDesa2021_3.readFeatures(json_IKLDesa2021_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IKLDesa2021_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKLDesa2021_3.addFeatures(features_IKLDesa2021_3);
var lyr_IKLDesa2021_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKLDesa2021_3, 
                style: style_IKLDesa2021_3,
                popuplayertitle: "IKL Desa 2021",
                interactive: true,
    title: 'IKL Desa 2021<br />\
    <img src="styles/legend/IKLDesa2021_3_0.png" /> Ssangat Baik<br />\
    <img src="styles/legend/IKLDesa2021_3_1.png" /> Baik<br />\
    <img src="styles/legend/IKLDesa2021_3_2.png" /> Sedang<br />\
    <img src="styles/legend/IKLDesa2021_3_3.png" /> Cukup<br />\
    <img src="styles/legend/IKLDesa2021_3_4.png" /> Kurang<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_IKLDesa2023_1.setVisible(true);lyr_IKLDesa2022_2.setVisible(true);lyr_IKLDesa2021_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_IKLDesa2023_1,lyr_IKLDesa2022_2,lyr_IKLDesa2021_3];
lyr_IKLDesa2023_1.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'KabKota': 'KabKota', 'Kec': 'Kec', 'DesKel': 'DesKel', 'CC_4': 'CC_4', 'AOD_2023': 'AOD_2023', 'NO2_2023': 'NO2_2023', 'CO_2023': 'CO_2023', 'SO2_2023': 'SO2_2023', 'NDVI_2023': 'NDVI_2023', 'NTL_2023': 'NTL_2023', 'LST_2023': 'LST_2023', 'TSS_2023': 'TSS_2023', 'IKL_2023': 'IKL_2023', 'cl_2023': 'cl_2023', });
lyr_IKLDesa2022_2.set('fieldAliases', {'Negara': 'Negara', 'Provinsi': 'Provinsi', 'KabKota': 'KabKota', 'Kec': 'Kec', 'DesKel': 'DesKel', 'CC_4': 'CC_4', 'AOD_2022': 'AOD_2022', 'NO2_2022': 'NO2_2022', 'CO_2022': 'CO_2022', 'SO2_2022': 'SO2_2022', 'NDVI_2022': 'NDVI_2022', 'NTL_2022': 'NTL_2022', 'LST_2022': 'LST_2022', 'TSS_2022': 'TSS_2022', 'IKL_2022': 'IKL_2022', 'cl_2022': 'cl_2022', });
lyr_IKLDesa2021_3.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'Kabkota': 'Kabkota', 'Kec': 'Kec', 'DesKel': 'DesKel', 'CC_4': 'CC_4', 'AOD_2021': 'AOD_2021', 'NO2_2021': 'NO2_2021', 'CO_2021': 'CO_2021', 'SO2_2021': 'SO2_2021', 'NDVI_2021': 'NDVI_2021', 'NTL_2021': 'NTL_2021', 'LST_2021': 'LST_2021', 'TSS_2021': 'TSS_2021', 'IKL_2021': 'IKL_2021', 'cl_2021': 'cl_2021', 'luas': 'luas', });
lyr_IKLDesa2023_1.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'KabKota': 'TextEdit', 'Kec': 'TextEdit', 'DesKel': 'TextEdit', 'CC_4': 'TextEdit', 'AOD_2023': 'TextEdit', 'NO2_2023': 'TextEdit', 'CO_2023': 'TextEdit', 'SO2_2023': 'TextEdit', 'NDVI_2023': 'TextEdit', 'NTL_2023': 'TextEdit', 'LST_2023': 'TextEdit', 'TSS_2023': 'TextEdit', 'IKL_2023': 'TextEdit', 'cl_2023': 'TextEdit', });
lyr_IKLDesa2022_2.set('fieldImages', {'Negara': 'TextEdit', 'Provinsi': 'TextEdit', 'KabKota': 'TextEdit', 'Kec': 'TextEdit', 'DesKel': 'TextEdit', 'CC_4': 'TextEdit', 'AOD_2022': 'TextEdit', 'NO2_2022': 'TextEdit', 'CO_2022': 'TextEdit', 'SO2_2022': 'TextEdit', 'NDVI_2022': 'TextEdit', 'NTL_2022': 'TextEdit', 'LST_2022': 'TextEdit', 'TSS_2022': 'TextEdit', 'IKL_2022': 'TextEdit', 'cl_2022': 'TextEdit', });
lyr_IKLDesa2021_3.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'Kabkota': 'TextEdit', 'Kec': 'TextEdit', 'DesKel': 'TextEdit', 'CC_4': 'TextEdit', 'AOD_2021': 'TextEdit', 'NO2_2021': 'TextEdit', 'CO_2021': 'TextEdit', 'SO2_2021': 'TextEdit', 'NDVI_2021': 'TextEdit', 'NTL_2021': 'TextEdit', 'LST_2021': 'TextEdit', 'TSS_2021': 'TextEdit', 'IKL_2021': 'TextEdit', 'cl_2021': 'TextEdit', 'luas': 'TextEdit', });
lyr_IKLDesa2023_1.set('fieldLabels', {'COUNTRY': 'hidden field', 'NAME_1': 'hidden field', 'KabKota': 'inline label - visible with data', 'Kec': 'inline label - visible with data', 'DesKel': 'inline label - visible with data', 'CC_4': 'hidden field', 'AOD_2023': 'inline label - visible with data', 'NO2_2023': 'inline label - visible with data', 'CO_2023': 'inline label - visible with data', 'SO2_2023': 'inline label - visible with data', 'NDVI_2023': 'inline label - visible with data', 'NTL_2023': 'inline label - visible with data', 'LST_2023': 'inline label - visible with data', 'TSS_2023': 'inline label - visible with data', 'IKL_2023': 'inline label - visible with data', 'cl_2023': 'hidden field', });
lyr_IKLDesa2022_2.set('fieldLabels', {'Negara': 'hidden field', 'Provinsi': 'hidden field', 'KabKota': 'inline label - visible with data', 'Kec': 'inline label - visible with data', 'DesKel': 'inline label - visible with data', 'CC_4': 'hidden field', 'AOD_2022': 'inline label - visible with data', 'NO2_2022': 'inline label - visible with data', 'CO_2022': 'inline label - visible with data', 'SO2_2022': 'inline label - visible with data', 'NDVI_2022': 'inline label - visible with data', 'NTL_2022': 'inline label - visible with data', 'LST_2022': 'inline label - visible with data', 'TSS_2022': 'inline label - visible with data', 'IKL_2022': 'inline label - visible with data', 'cl_2022': 'hidden field', });
lyr_IKLDesa2021_3.set('fieldLabels', {'COUNTRY': 'hidden field', 'NAME_1': 'hidden field', 'Kabkota': 'inline label - visible with data', 'Kec': 'inline label - visible with data', 'DesKel': 'inline label - visible with data', 'CC_4': 'hidden field', 'AOD_2021': 'inline label - visible with data', 'NO2_2021': 'inline label - visible with data', 'CO_2021': 'inline label - visible with data', 'SO2_2021': 'inline label - visible with data', 'NDVI_2021': 'inline label - visible with data', 'NTL_2021': 'inline label - visible with data', 'LST_2021': 'inline label - visible with data', 'TSS_2021': 'inline label - visible with data', 'IKL_2021': 'inline label - visible with data', 'cl_2021': 'hidden field', 'luas': 'hidden field', });
lyr_IKLDesa2021_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});