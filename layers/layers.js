var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WarungPoint_1 = new ol.format.GeoJSON();
var features_WarungPoint_1 = format_WarungPoint_1.readFeatures(json_WarungPoint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WarungPoint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WarungPoint_1.addFeatures(features_WarungPoint_1);
var lyr_WarungPoint_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WarungPoint_1, 
                style: style_WarungPoint_1,
                popuplayertitle: 'WarungPoint',
                interactive: true,
                title: '<img src="styles/legend/WarungPoint_1.png" /> WarungPoint'
            });
var format_SekolahPoint_2 = new ol.format.GeoJSON();
var features_SekolahPoint_2 = format_SekolahPoint_2.readFeatures(json_SekolahPoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SekolahPoint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SekolahPoint_2.addFeatures(features_SekolahPoint_2);
var lyr_SekolahPoint_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SekolahPoint_2, 
                style: style_SekolahPoint_2,
                popuplayertitle: 'SekolahPoint',
                interactive: true,
                title: '<img src="styles/legend/SekolahPoint_2.png" /> SekolahPoint'
            });
var format_PondokPoint_3 = new ol.format.GeoJSON();
var features_PondokPoint_3 = format_PondokPoint_3.readFeatures(json_PondokPoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PondokPoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PondokPoint_3.addFeatures(features_PondokPoint_3);
var lyr_PondokPoint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PondokPoint_3, 
                style: style_PondokPoint_3,
                popuplayertitle: 'PondokPoint',
                interactive: true,
                title: '<img src="styles/legend/PondokPoint_3.png" /> PondokPoint'
            });
var format_Balai_4 = new ol.format.GeoJSON();
var features_Balai_4 = format_Balai_4.readFeatures(json_Balai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balai_4.addFeatures(features_Balai_4);
var lyr_Balai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balai_4, 
                style: style_Balai_4,
                popuplayertitle: 'Balai',
                interactive: true,
                title: '<img src="styles/legend/Balai_4.png" /> Balai'
            });
var format_Kolam_5 = new ol.format.GeoJSON();
var features_Kolam_5 = format_Kolam_5.readFeatures(json_Kolam_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kolam_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kolam_5.addFeatures(features_Kolam_5);
var lyr_Kolam_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kolam_5, 
                style: style_Kolam_5,
                popuplayertitle: 'Kolam',
                interactive: true,
                title: '<img src="styles/legend/Kolam_5.png" /> Kolam'
            });
var format_Kuburan_6 = new ol.format.GeoJSON();
var features_Kuburan_6 = format_Kuburan_6.readFeatures(json_Kuburan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_6.addFeatures(features_Kuburan_6);
var lyr_Kuburan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_6, 
                style: style_Kuburan_6,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_6.png" /> Kuburan'
            });
var format_Lapangan_7 = new ol.format.GeoJSON();
var features_Lapangan_7 = format_Lapangan_7.readFeatures(json_Lapangan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_7.addFeatures(features_Lapangan_7);
var lyr_Lapangan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_7, 
                style: style_Lapangan_7,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_7.png" /> Lapangan'
            });
var format_Masjid_8 = new ol.format.GeoJSON();
var features_Masjid_8 = format_Masjid_8.readFeatures(json_Masjid_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_8.addFeatures(features_Masjid_8);
var lyr_Masjid_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_8, 
                style: style_Masjid_8,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_8.png" /> Masjid'
            });
var format_JalanSekolahSMAN3_9 = new ol.format.GeoJSON();
var features_JalanSekolahSMAN3_9 = format_JalanSekolahSMAN3_9.readFeatures(json_JalanSekolahSMAN3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanSekolahSMAN3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanSekolahSMAN3_9.addFeatures(features_JalanSekolahSMAN3_9);
var lyr_JalanSekolahSMAN3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanSekolahSMAN3_9, 
                style: style_JalanSekolahSMAN3_9,
                popuplayertitle: 'Jalan Sekolah SMAN 3',
                interactive: true,
                title: '<img src="styles/legend/JalanSekolahSMAN3_9.png" /> Jalan Sekolah SMAN 3'
            });
var format_Parit_10 = new ol.format.GeoJSON();
var features_Parit_10 = format_Parit_10.readFeatures(json_Parit_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parit_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parit_10.addFeatures(features_Parit_10);
var lyr_Parit_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parit_10, 
                style: style_Parit_10,
                popuplayertitle: 'Parit',
                interactive: true,
                title: '<img src="styles/legend/Parit_10.png" /> Parit'
            });
var format_Pantai_11 = new ol.format.GeoJSON();
var features_Pantai_11 = format_Pantai_11.readFeatures(json_Pantai_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pantai_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pantai_11.addFeatures(features_Pantai_11);
var lyr_Pantai_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pantai_11, 
                style: style_Pantai_11,
                popuplayertitle: 'Pantai',
                interactive: true,
                title: '<img src="styles/legend/Pantai_11.png" /> Pantai'
            });
var format_Lorong_12 = new ol.format.GeoJSON();
var features_Lorong_12 = format_Lorong_12.readFeatures(json_Lorong_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lorong_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lorong_12.addFeatures(features_Lorong_12);
var lyr_Lorong_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lorong_12, 
                style: style_Lorong_12,
                popuplayertitle: 'Lorong',
                interactive: true,
                title: '<img src="styles/legend/Lorong_12.png" /> Lorong'
            });
var format_Jalan_13 = new ol.format.GeoJSON();
var features_Jalan_13 = format_Jalan_13.readFeatures(json_Jalan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_13.addFeatures(features_Jalan_13);
var lyr_Jalan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_13, 
                style: style_Jalan_13,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_13.png" /> Jalan'
            });
var format_Gang_14 = new ol.format.GeoJSON();
var features_Gang_14 = format_Gang_14.readFeatures(json_Gang_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gang_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gang_14.addFeatures(features_Gang_14);
var lyr_Gang_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gang_14, 
                style: style_Gang_14,
                popuplayertitle: 'Gang',
                interactive: true,
                title: '<img src="styles/legend/Gang_14.png" /> Gang'
            });
var format_Pondok_15 = new ol.format.GeoJSON();
var features_Pondok_15 = format_Pondok_15.readFeatures(json_Pondok_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pondok_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pondok_15.addFeatures(features_Pondok_15);
var lyr_Pondok_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pondok_15, 
                style: style_Pondok_15,
                popuplayertitle: 'Pondok',
                interactive: true,
                title: '<img src="styles/legend/Pondok_15.png" /> Pondok'
            });
var format_Puskesmas_16 = new ol.format.GeoJSON();
var features_Puskesmas_16 = format_Puskesmas_16.readFeatures(json_Puskesmas_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_16.addFeatures(features_Puskesmas_16);
var lyr_Puskesmas_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puskesmas_16, 
                style: style_Puskesmas_16,
                popuplayertitle: 'Puskesmas',
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_16.png" /> Puskesmas'
            });
var format_Rumah_17 = new ol.format.GeoJSON();
var features_Rumah_17 = format_Rumah_17.readFeatures(json_Rumah_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rumah_17.addFeatures(features_Rumah_17);
var lyr_Rumah_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rumah_17, 
                style: style_Rumah_17,
                popuplayertitle: 'Rumah',
                interactive: true,
                title: '<img src="styles/legend/Rumah_17.png" /> Rumah'
            });
var format_SDN19BandaSakti_18 = new ol.format.GeoJSON();
var features_SDN19BandaSakti_18 = format_SDN19BandaSakti_18.readFeatures(json_SDN19BandaSakti_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SDN19BandaSakti_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SDN19BandaSakti_18.addFeatures(features_SDN19BandaSakti_18);
var lyr_SDN19BandaSakti_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SDN19BandaSakti_18, 
                style: style_SDN19BandaSakti_18,
                popuplayertitle: 'SDN 19 Banda Sakti',
                interactive: true,
                title: '<img src="styles/legend/SDN19BandaSakti_18.png" /> SDN 19 Banda Sakti'
            });
var format_SMAN3Lhokseumawe_19 = new ol.format.GeoJSON();
var features_SMAN3Lhokseumawe_19 = format_SMAN3Lhokseumawe_19.readFeatures(json_SMAN3Lhokseumawe_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAN3Lhokseumawe_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAN3Lhokseumawe_19.addFeatures(features_SMAN3Lhokseumawe_19);
var lyr_SMAN3Lhokseumawe_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMAN3Lhokseumawe_19, 
                style: style_SMAN3Lhokseumawe_19,
                popuplayertitle: 'SMAN 3 Lhokseumawe  ',
                interactive: true,
                title: '<img src="styles/legend/SMAN3Lhokseumawe_19.png" /> SMAN 3 Lhokseumawe  '
            });
var format_Warung_20 = new ol.format.GeoJSON();
var features_Warung_20 = format_Warung_20.readFeatures(json_Warung_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warung_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Warung_20.addFeatures(features_Warung_20);
var lyr_Warung_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Warung_20, 
                style: style_Warung_20,
                popuplayertitle: 'Warung',
                interactive: true,
                title: '<img src="styles/legend/Warung_20.png" /> Warung'
            });
var format_MasjidPoints_21 = new ol.format.GeoJSON();
var features_MasjidPoints_21 = format_MasjidPoints_21.readFeatures(json_MasjidPoints_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidPoints_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidPoints_21.addFeatures(features_MasjidPoints_21);
var lyr_MasjidPoints_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjidPoints_21, 
                style: style_MasjidPoints_21,
                popuplayertitle: 'MasjidPoints',
                interactive: true,
                title: '<img src="styles/legend/MasjidPoints_21.png" /> MasjidPoints'
            });
var format_MasjidPoint_22 = new ol.format.GeoJSON();
var features_MasjidPoint_22 = format_MasjidPoint_22.readFeatures(json_MasjidPoint_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasjidPoint_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasjidPoint_22.addFeatures(features_MasjidPoint_22);
var lyr_MasjidPoint_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasjidPoint_22, 
                style: style_MasjidPoint_22,
                popuplayertitle: 'MasjidPoint',
                interactive: true,
                title: '<img src="styles/legend/MasjidPoint_22.png" /> MasjidPoint'
            });
var format_LapanganPoint_23 = new ol.format.GeoJSON();
var features_LapanganPoint_23 = format_LapanganPoint_23.readFeatures(json_LapanganPoint_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapanganPoint_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LapanganPoint_23.addFeatures(features_LapanganPoint_23);
var lyr_LapanganPoint_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LapanganPoint_23, 
                style: style_LapanganPoint_23,
                popuplayertitle: 'LapanganPoint',
                interactive: true,
                title: '<img src="styles/legend/LapanganPoint_23.png" /> LapanganPoint'
            });
var format_KuburanPoint_24 = new ol.format.GeoJSON();
var features_KuburanPoint_24 = format_KuburanPoint_24.readFeatures(json_KuburanPoint_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KuburanPoint_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KuburanPoint_24.addFeatures(features_KuburanPoint_24);
var lyr_KuburanPoint_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KuburanPoint_24, 
                style: style_KuburanPoint_24,
                popuplayertitle: 'KuburanPoint',
                interactive: true,
                title: '<img src="styles/legend/KuburanPoint_24.png" /> KuburanPoint'
            });
var format_KolamPoint_25 = new ol.format.GeoJSON();
var features_KolamPoint_25 = format_KolamPoint_25.readFeatures(json_KolamPoint_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KolamPoint_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KolamPoint_25.addFeatures(features_KolamPoint_25);
var lyr_KolamPoint_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KolamPoint_25, 
                style: style_KolamPoint_25,
                popuplayertitle: 'KolamPoint',
                interactive: true,
                title: '<img src="styles/legend/KolamPoint_25.png" /> KolamPoint'
            });
var format_BalaiPoint_26 = new ol.format.GeoJSON();
var features_BalaiPoint_26 = format_BalaiPoint_26.readFeatures(json_BalaiPoint_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiPoint_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiPoint_26.addFeatures(features_BalaiPoint_26);
var lyr_BalaiPoint_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiPoint_26, 
                style: style_BalaiPoint_26,
                popuplayertitle: 'BalaiPoint',
                interactive: true,
                title: '<img src="styles/legend/BalaiPoint_26.png" /> BalaiPoint'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_WarungPoint_1.setVisible(true);lyr_SekolahPoint_2.setVisible(true);lyr_PondokPoint_3.setVisible(true);lyr_Balai_4.setVisible(true);lyr_Kolam_5.setVisible(true);lyr_Kuburan_6.setVisible(true);lyr_Lapangan_7.setVisible(true);lyr_Masjid_8.setVisible(true);lyr_JalanSekolahSMAN3_9.setVisible(true);lyr_Parit_10.setVisible(true);lyr_Pantai_11.setVisible(true);lyr_Lorong_12.setVisible(true);lyr_Jalan_13.setVisible(true);lyr_Gang_14.setVisible(true);lyr_Pondok_15.setVisible(true);lyr_Puskesmas_16.setVisible(true);lyr_Rumah_17.setVisible(true);lyr_SDN19BandaSakti_18.setVisible(true);lyr_SMAN3Lhokseumawe_19.setVisible(true);lyr_Warung_20.setVisible(true);lyr_MasjidPoints_21.setVisible(true);lyr_MasjidPoint_22.setVisible(true);lyr_LapanganPoint_23.setVisible(true);lyr_KuburanPoint_24.setVisible(true);lyr_KolamPoint_25.setVisible(true);lyr_BalaiPoint_26.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WarungPoint_1,lyr_SekolahPoint_2,lyr_PondokPoint_3,lyr_Balai_4,lyr_Kolam_5,lyr_Kuburan_6,lyr_Lapangan_7,lyr_Masjid_8,lyr_JalanSekolahSMAN3_9,lyr_Parit_10,lyr_Pantai_11,lyr_Lorong_12,lyr_Jalan_13,lyr_Gang_14,lyr_Pondok_15,lyr_Puskesmas_16,lyr_Rumah_17,lyr_SDN19BandaSakti_18,lyr_SMAN3Lhokseumawe_19,lyr_Warung_20,lyr_MasjidPoints_21,lyr_MasjidPoint_22,lyr_LapanganPoint_23,lyr_KuburanPoint_24,lyr_KolamPoint_25,lyr_BalaiPoint_26];
lyr_WarungPoint_1.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_cntc': 'no_cntc', 'jns_usaha': 'jns_usaha', 'status_usa': 'status_usa', 'luas_bgn': 'luas_bgn', 'luas_lhn': 'luas_lhn', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_SekolahPoint_2.set('fieldAliases', {'Id': 'Id', 'nama_sekol': 'nama_sekol', 'nama_kep': 'nama_kep', 'no_cntc': 'no_cntc', 'luas_bgn': 'luas_bgn', 'luas_tanah': 'luas_tanah', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_PondokPoint_3.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_cntc': 'no_cntc', 'Jns_usaha': 'Jns_usaha', 'luas_bgn': 'luas_bgn', 'luas_lhn': 'luas_lhn', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_Balai_4.set('fieldAliases', {'Id': 'Id', 'nama_balai': 'nama_balai', 'luas_bgn': 'luas_bgn', 'luas_tnh': 'luas_tnh', 'nama_imam': 'nama_imam', 'no_cntc': 'no_cntc', });
lyr_Kolam_5.set('fieldAliases', {'Id': 'Id', 'nama_pmlik': 'nama_pmlik', 'no_cntc': 'no_cntc', 'jenis_ikan': 'jenis_ikan', 'status_usa': 'status_usa', 'luas_bgn': 'luas_bgn', 'luas_lhn': 'luas_lhn', });
lyr_Kuburan_6.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_cntc': 'no_cntc', 'luas_lhn': 'luas_lhn', });
lyr_Lapangan_7.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'Jns_kegiat': 'Jns_kegiat', 'luas_lhn': 'luas_lhn', 'luas_bgn': 'luas_bgn', });
lyr_Masjid_8.set('fieldAliases', {'Id': 'Id', 'nama_msjd': 'nama_msjd', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', 'nama_imam': 'nama_imam', 'no_contact': 'no_contact', });
lyr_JalanSekolahSMAN3_9.set('fieldAliases', {'Id': 'Id', });
lyr_Parit_10.set('fieldAliases', {'Id': 'Id', });
lyr_Pantai_11.set('fieldAliases', {'Id': 'Id', });
lyr_Lorong_12.set('fieldAliases', {'Id': 'Id', 'Nama_lor': 'Nama_lor', 'Panjang': 'Panjang', 'Status': 'Status', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', });
lyr_Jalan_13.set('fieldAliases', {'Id': 'Id', 'Nama_Jalan': 'Nama_Jalan', 'Panjang': 'Panjang', 'Lebar': 'Lebar', 'Status_jl': 'Status_jl', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_repair': 'Thn_repair', });
lyr_Gang_14.set('fieldAliases', {'Id': 'Id', });
lyr_Pondok_15.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_cntc': 'no_cntc', 'Jns_usaha': 'Jns_usaha', 'luas_bgn': 'luas_bgn', 'luas_lhn': 'luas_lhn', });
lyr_Puskesmas_16.set('fieldAliases', {'Id': 'Id', 'Nama_puske': 'Nama_puske', 'Nama_kepal': 'Nama_kepal', 'Contact': 'Contact', 'Luas_lahan': 'Luas_lahan', 'Luas_bangu': 'Luas_bangu', });
lyr_Rumah_17.set('fieldAliases', {'Id': 'Id', 'No_Rumah': 'No_Rumah', 'stastus_ke': 'stastus_ke', 'Jenis_bang': 'Jenis_bang', 'Jenis_lant': 'Jenis_lant', 'nama_pengh': 'nama_pengh', 'pendidikan': 'pendidikan', 'pekerjaan': 'pekerjaan', 'No_telp': 'No_telp', 'No_KTP': 'No_KTP', 'Jlh_laki': 'Jlh_laki', 'Jlh_per': 'Jlh_per', 'total_huni': 'total_huni', 'luas_bgn': 'luas_bgn', });
lyr_SDN19BandaSakti_18.set('fieldAliases', {'Id': 'Id', 'nama_sekol': 'nama_sekol', 'nama_kep': 'nama_kep', 'no_cntc': 'no_cntc', 'luas_bgn': 'luas_bgn', 'luas_tanah': 'luas_tanah', });
lyr_SMAN3Lhokseumawe_19.set('fieldAliases', {'Id': 'Id', });
lyr_Warung_20.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_cntc': 'no_cntc', 'jns_usaha': 'jns_usaha', 'status_usa': 'status_usa', 'luas_bgn': 'luas_bgn', 'luas_lhn': 'luas_lhn', });
lyr_MasjidPoints_21.set('fieldAliases', {'Id': 'Id', 'nama_msjd': 'nama_msjd', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', 'nama_imam': 'nama_imam', 'no_contact': 'no_contact', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_MasjidPoint_22.set('fieldAliases', {'Id': 'Id', 'nama_msjd': 'nama_msjd', 'luas_bangu': 'luas_bangu', 'luas_tanah': 'luas_tanah', 'nama_imam': 'nama_imam', 'no_contact': 'no_contact', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_LapanganPoint_23.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_contact': 'no_contact', 'Jns_kegiat': 'Jns_kegiat', 'luas_lhn': 'luas_lhn', 'luas_bgn': 'luas_bgn', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_KuburanPoint_24.set('fieldAliases', {'Id': 'Id', 'nama_pemil': 'nama_pemil', 'no_cntc': 'no_cntc', 'luas_lhn': 'luas_lhn', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_KolamPoint_25.set('fieldAliases', {'Id': 'Id', 'nama_pmlik': 'nama_pmlik', 'no_cntc': 'no_cntc', 'jenis_ikan': 'jenis_ikan', 'status_usa': 'status_usa', 'luas_bgn': 'luas_bgn', 'luas_lhn': 'luas_lhn', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_BalaiPoint_26.set('fieldAliases', {'Id': 'Id', 'nama_balai': 'nama_balai', 'luas_bgn': 'luas_bgn', 'luas_tnh': 'luas_tnh', 'nama_imam': 'nama_imam', 'no_cntc': 'no_cntc', 'ORIG_FID': 'ORIG_FID', 'X': 'X', 'Y': 'Y', });
lyr_WarungPoint_1.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_cntc': '', 'jns_usaha': '', 'status_usa': '', 'luas_bgn': '', 'luas_lhn': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_SekolahPoint_2.set('fieldImages', {'Id': '', 'nama_sekol': '', 'nama_kep': '', 'no_cntc': '', 'luas_bgn': '', 'luas_tanah': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_PondokPoint_3.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_cntc': '', 'Jns_usaha': '', 'luas_bgn': '', 'luas_lhn': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_Balai_4.set('fieldImages', {'Id': '', 'nama_balai': '', 'luas_bgn': '', 'luas_tnh': '', 'nama_imam': '', 'no_cntc': '', });
lyr_Kolam_5.set('fieldImages', {'Id': '', 'nama_pmlik': '', 'no_cntc': '', 'jenis_ikan': '', 'status_usa': '', 'luas_bgn': '', 'luas_lhn': '', });
lyr_Kuburan_6.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_cntc': '', 'luas_lhn': '', });
lyr_Lapangan_7.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'Jns_kegiat': '', 'luas_lhn': '', 'luas_bgn': '', });
lyr_Masjid_8.set('fieldImages', {'Id': '', 'nama_msjd': '', 'luas_bangu': '', 'luas_tanah': '', 'nama_imam': '', 'no_contact': '', });
lyr_JalanSekolahSMAN3_9.set('fieldImages', {'Id': '', });
lyr_Parit_10.set('fieldImages', {'Id': '', });
lyr_Pantai_11.set('fieldImages', {'Id': '', });
lyr_Lorong_12.set('fieldImages', {'Id': '', 'Nama_lor': '', 'Panjang': '', 'Status': '', 'Kondisi': '', 'Kategori': '', });
lyr_Jalan_13.set('fieldImages', {'Id': '', 'Nama_Jalan': '', 'Panjang': '', 'Lebar': '', 'Status_jl': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_repair': '', });
lyr_Gang_14.set('fieldImages', {'Id': '', });
lyr_Pondok_15.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_cntc': '', 'Jns_usaha': '', 'luas_bgn': '', 'luas_lhn': '', });
lyr_Puskesmas_16.set('fieldImages', {'Id': '', 'Nama_puske': '', 'Nama_kepal': '', 'Contact': '', 'Luas_lahan': '', 'Luas_bangu': '', });
lyr_Rumah_17.set('fieldImages', {'Id': '', 'No_Rumah': '', 'stastus_ke': '', 'Jenis_bang': '', 'Jenis_lant': '', 'nama_pengh': '', 'pendidikan': '', 'pekerjaan': '', 'No_telp': '', 'No_KTP': '', 'Jlh_laki': '', 'Jlh_per': '', 'total_huni': '', 'luas_bgn': '', });
lyr_SDN19BandaSakti_18.set('fieldImages', {'Id': '', 'nama_sekol': '', 'nama_kep': '', 'no_cntc': '', 'luas_bgn': '', 'luas_tanah': '', });
lyr_SMAN3Lhokseumawe_19.set('fieldImages', {'Id': '', });
lyr_Warung_20.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_cntc': '', 'jns_usaha': '', 'status_usa': '', 'luas_bgn': '', 'luas_lhn': '', });
lyr_MasjidPoints_21.set('fieldImages', {'Id': '', 'nama_msjd': '', 'luas_bangu': '', 'luas_tanah': '', 'nama_imam': '', 'no_contact': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_MasjidPoint_22.set('fieldImages', {'Id': '', 'nama_msjd': '', 'luas_bangu': '', 'luas_tanah': '', 'nama_imam': '', 'no_contact': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_LapanganPoint_23.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_contact': '', 'Jns_kegiat': '', 'luas_lhn': '', 'luas_bgn': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_KuburanPoint_24.set('fieldImages', {'Id': '', 'nama_pemil': '', 'no_cntc': '', 'luas_lhn': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_KolamPoint_25.set('fieldImages', {'Id': '', 'nama_pmlik': '', 'no_cntc': '', 'jenis_ikan': '', 'status_usa': '', 'luas_bgn': '', 'luas_lhn': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_BalaiPoint_26.set('fieldImages', {'Id': '', 'nama_balai': '', 'luas_bgn': '', 'luas_tnh': '', 'nama_imam': '', 'no_cntc': '', 'ORIG_FID': '', 'X': '', 'Y': '', });
lyr_WarungPoint_1.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_cntc': 'no label', 'jns_usaha': 'no label', 'status_usa': 'no label', 'luas_bgn': 'no label', 'luas_lhn': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_SekolahPoint_2.set('fieldLabels', {'Id': 'no label', 'nama_sekol': 'no label', 'nama_kep': 'no label', 'no_cntc': 'no label', 'luas_bgn': 'no label', 'luas_tanah': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PondokPoint_3.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_cntc': 'no label', 'Jns_usaha': 'no label', 'luas_bgn': 'no label', 'luas_lhn': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Balai_4.set('fieldLabels', {'Id': 'no label', 'nama_balai': 'no label', 'luas_bgn': 'no label', 'luas_tnh': 'no label', 'nama_imam': 'no label', 'no_cntc': 'no label', });
lyr_Kolam_5.set('fieldLabels', {'Id': 'no label', 'nama_pmlik': 'no label', 'no_cntc': 'no label', 'jenis_ikan': 'no label', 'status_usa': 'no label', 'luas_bgn': 'no label', 'luas_lhn': 'no label', });
lyr_Kuburan_6.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_cntc': 'no label', 'luas_lhn': 'no label', });
lyr_Lapangan_7.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'Jns_kegiat': 'no label', 'luas_lhn': 'no label', 'luas_bgn': 'no label', });
lyr_Masjid_8.set('fieldLabels', {'Id': 'no label', 'nama_msjd': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', 'nama_imam': 'no label', 'no_contact': 'no label', });
lyr_JalanSekolahSMAN3_9.set('fieldLabels', {'Id': 'no label', });
lyr_Parit_10.set('fieldLabels', {'Id': 'no label', });
lyr_Pantai_11.set('fieldLabels', {'Id': 'no label', });
lyr_Lorong_12.set('fieldLabels', {'Id': 'no label', 'Nama_lor': 'no label', 'Panjang': 'no label', 'Status': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', });
lyr_Jalan_13.set('fieldLabels', {'Id': 'no label', 'Nama_Jalan': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', 'Status_jl': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_repair': 'no label', });
lyr_Gang_14.set('fieldLabels', {'Id': 'no label', });
lyr_Pondok_15.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_cntc': 'no label', 'Jns_usaha': 'no label', 'luas_bgn': 'no label', 'luas_lhn': 'no label', });
lyr_Puskesmas_16.set('fieldLabels', {'Id': 'no label', 'Nama_puske': 'no label', 'Nama_kepal': 'no label', 'Contact': 'no label', 'Luas_lahan': 'no label', 'Luas_bangu': 'no label', });
lyr_Rumah_17.set('fieldLabels', {'Id': 'no label', 'No_Rumah': 'no label', 'stastus_ke': 'no label', 'Jenis_bang': 'no label', 'Jenis_lant': 'no label', 'nama_pengh': 'no label', 'pendidikan': 'no label', 'pekerjaan': 'no label', 'No_telp': 'no label', 'No_KTP': 'no label', 'Jlh_laki': 'no label', 'Jlh_per': 'no label', 'total_huni': 'no label', 'luas_bgn': 'no label', });
lyr_SDN19BandaSakti_18.set('fieldLabels', {'Id': 'no label', 'nama_sekol': 'no label', 'nama_kep': 'no label', 'no_cntc': 'no label', 'luas_bgn': 'no label', 'luas_tanah': 'no label', });
lyr_SMAN3Lhokseumawe_19.set('fieldLabels', {'Id': 'no label', });
lyr_Warung_20.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_cntc': 'no label', 'jns_usaha': 'no label', 'status_usa': 'no label', 'luas_bgn': 'no label', 'luas_lhn': 'no label', });
lyr_MasjidPoints_21.set('fieldLabels', {'Id': 'no label', 'nama_msjd': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', 'nama_imam': 'no label', 'no_contact': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_MasjidPoint_22.set('fieldLabels', {'Id': 'no label', 'nama_msjd': 'no label', 'luas_bangu': 'no label', 'luas_tanah': 'no label', 'nama_imam': 'no label', 'no_contact': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_LapanganPoint_23.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_contact': 'no label', 'Jns_kegiat': 'no label', 'luas_lhn': 'no label', 'luas_bgn': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_KuburanPoint_24.set('fieldLabels', {'Id': 'no label', 'nama_pemil': 'no label', 'no_cntc': 'no label', 'luas_lhn': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_KolamPoint_25.set('fieldLabels', {'Id': 'no label', 'nama_pmlik': 'no label', 'no_cntc': 'no label', 'jenis_ikan': 'no label', 'status_usa': 'no label', 'luas_bgn': 'no label', 'luas_lhn': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_BalaiPoint_26.set('fieldLabels', {'Id': 'no label', 'nama_balai': 'no label', 'luas_bgn': 'no label', 'luas_tnh': 'no label', 'nama_imam': 'no label', 'no_cntc': 'no label', 'ORIG_FID': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_BalaiPoint_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});