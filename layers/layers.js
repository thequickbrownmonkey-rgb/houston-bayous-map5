ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-96.005732, 29.380000, -94.832993, 30.781641]);
var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Watersheds_1 = new ol.format.GeoJSON();
var features_Watersheds_1 = format_Watersheds_1.readFeatures(json_Watersheds_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Watersheds_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watersheds_1.addFeatures(features_Watersheds_1);
var lyr_Watersheds_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watersheds_1, 
                style: style_Watersheds_1,
                popuplayertitle: 'Watersheds',
                interactive: true,
                title: '<img src="styles/legend/Watersheds_1.png" /> Watersheds'
            });
var format_Waterways_2 = new ol.format.GeoJSON();
var features_Waterways_2 = format_Waterways_2.readFeatures(json_Waterways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waterways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterways_2.addFeatures(features_Waterways_2);
var lyr_Waterways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterways_2, 
                style: style_Waterways_2,
                popuplayertitle: 'Waterways',
                interactive: true,
                title: '<img src="styles/legend/Waterways_2.png" /> Waterways'
            });
var format_GREENWAYS_3 = new ol.format.GeoJSON();
var features_GREENWAYS_3 = format_GREENWAYS_3.readFeatures(json_GREENWAYS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GREENWAYS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GREENWAYS_3.addFeatures(features_GREENWAYS_3);
var lyr_GREENWAYS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GREENWAYS_3, 
                style: style_GREENWAYS_3,
                popuplayertitle: 'GREENWAYS',
                interactive: true,
                title: '<img src="styles/legend/GREENWAYS_3.png" /> GREENWAYS'
            });
var format_BikeRoutes_4 = new ol.format.GeoJSON();
var features_BikeRoutes_4 = format_BikeRoutes_4.readFeatures(json_BikeRoutes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BikeRoutes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeRoutes_4.addFeatures(features_BikeRoutes_4);
var lyr_BikeRoutes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeRoutes_4, 
                style: style_BikeRoutes_4,
                popuplayertitle: 'Bike Routes',
                interactive: true,
                title: '<img src="styles/legend/BikeRoutes_4.png" /> Bike Routes'
            });
var format_SurfaceWaterQualityMonitoringStations_5 = new ol.format.GeoJSON();
var features_SurfaceWaterQualityMonitoringStations_5 = format_SurfaceWaterQualityMonitoringStations_5.readFeatures(json_SurfaceWaterQualityMonitoringStations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SurfaceWaterQualityMonitoringStations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceWaterQualityMonitoringStations_5.addFeatures(features_SurfaceWaterQualityMonitoringStations_5);
var lyr_SurfaceWaterQualityMonitoringStations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurfaceWaterQualityMonitoringStations_5, 
                style: style_SurfaceWaterQualityMonitoringStations_5,
                popuplayertitle: 'Surface Water Quality Monitoring Stations',
                interactive: true,
    title: 'Surface Water Quality Monitoring Stations<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_0.png" /> UNKNOWN<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_1.png" /> CANAL<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_2.png" /> ESTURY<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_3.png" /> FWTLND<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_4.png" /> LAKE<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_5.png" /> OCEAN<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_6.png" /> PIPE<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_7.png" /> POND<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_8.png" /> RESERV<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_9.png" /> SPRING<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_10.png" /> STREAM<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_11.png" /> SWTLND<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_12.png" /> TDLSTR<br />\
    <img src="styles/legend/SurfaceWaterQualityMonitoringStations_5_13.png" /> WELL<br />' });
var format_CommunityCenters_6 = new ol.format.GeoJSON();
var features_CommunityCenters_6 = format_CommunityCenters_6.readFeatures(json_CommunityCenters_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CommunityCenters_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityCenters_6.addFeatures(features_CommunityCenters_6);
var lyr_CommunityCenters_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityCenters_6, 
                style: style_CommunityCenters_6,
                popuplayertitle: 'Community Centers',
                interactive: true,
                title: '<img src="styles/legend/CommunityCenters_6.png" /> Community Centers'
            });
var format_MF7_7 = new ol.format.GeoJSON();
var features_MF7_7 = format_MF7_7.readFeatures(json_MF7_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MF7_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MF7_7.addFeatures(features_MF7_7);
var lyr_MF7_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MF7_7, 
                style: style_MF7_7,
                popuplayertitle: 'MF7',
                interactive: true,
                title: '<img src="styles/legend/MF7_7.png" /> MF7'
            });

lyr_BaseMap_0.setVisible(true);lyr_Watersheds_1.setVisible(true);lyr_Waterways_2.setVisible(true);lyr_GREENWAYS_3.setVisible(true);lyr_BikeRoutes_4.setVisible(true);lyr_SurfaceWaterQualityMonitoringStations_5.setVisible(true);lyr_CommunityCenters_6.setVisible(true);lyr_MF7_7.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Watersheds_1,lyr_Waterways_2,lyr_GREENWAYS_3,lyr_BikeRoutes_4,lyr_SurfaceWaterQualityMonitoringStations_5,lyr_CommunityCenters_6,lyr_MF7_7];
lyr_Watersheds_1.set('fieldAliases', {'WTSHNAME': 'WTSHNAME', 'STLength': 'STLength', 'STArea': 'STArea', 'WTSHUNIT': 'WTSHUNIT', 'Shape_STLe': 'Shape_STLe', 'Shape_STAr': 'Shape_STAr', });
lyr_Waterways_2.set('fieldAliases', {'Length': 'Length', 'Type': 'Type', 'Name': 'Name', });
lyr_GREENWAYS_3.set('fieldAliases', {'Bayou': 'Bayou', 'Name': 'Name', 'OBJECTID': 'OBJECTID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'HPB_Project': 'HPB_Project', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_BikeRoutes_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Unique_ID': 'Unique_ID', 'Full_Name': 'Full_Name', 'Length_Miles': 'Length_Miles', 'Council_District': 'Council_District', 'KeyConnect': 'KeyConnect', 'Maintenance': 'Maintenance', 'HoustonBikePlan_FundSource': 'HoustonBikePlan_FundSource', 'URL': 'URL', 'HC_Status': 'HC_Status', 'HC_Class': 'HC_Class', 'LC_Status': 'LC_Status', 'LC_Class': 'LC_Class', 'Description': 'Description', 'Implementer': 'Implementer', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'Proposed_Date': 'Proposed_Date', 'Programmed_Date': 'Programmed_Date', 'Existing_Date': 'Existing_Date', });
lyr_SurfaceWaterQualityMonitoringStations_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Station_ID': 'Station_ID', 'Short_Desc': 'Short_Desc', 'Long_Desc': 'Long_Desc', 'Basin_ID': 'Basin_ID', 'Segment_ID': 'Segment_ID', 'StreamType': 'StreamType', 'StreamCond': 'StreamCond', 'OnSegFlag': 'OnSegFlag', 'County_ID': 'County_ID', 'County': 'County', 'TCEQRegion': 'TCEQRegion', 'USGS_GID': 'USGS_GID', 'USGS_NHDID': 'USGS_NHDID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'URL': 'URL', 'Collecting': 'Collecting', 'FY': 'FY', 'Active_Ind': 'Active_Ind', });
lyr_CommunityCenters_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PICNO': 'PICNO', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'ZIPCODE': 'ZIPCODE', 'BLDSQFT': 'BLDSQFT', 'PHONE': 'PHONE', 'ORIG_FID': 'ORIG_FID', 'FAX': 'FAX', 'SUPERVISOR': 'SUPERVISOR', 'BUILT': 'BUILT', 'FORMER_NAME': 'FORMER_NAME', 'Site_No': 'Site_No', 'FEATURE_ID': 'FEATURE_ID', });
lyr_MF7_7.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Name': 'Name', 'Year': 'Year', 'Description': 'Description', 'url': 'url', });
lyr_Watersheds_1.set('fieldImages', {'WTSHNAME': 'TextEdit', 'STLength': 'TextEdit', 'STArea': 'TextEdit', 'WTSHUNIT': 'TextEdit', 'Shape_STLe': 'TextEdit', 'Shape_STAr': 'TextEdit', });
lyr_Waterways_2.set('fieldImages', {'Length': 'TextEdit', 'Type': 'Range', 'Name': 'TextEdit', });
lyr_GREENWAYS_3.set('fieldImages', {'Bayou': 'TextEdit', 'Name': 'TextEdit', 'OBJECTID': 'Range', 'created_user': 'TextEdit', 'created_date': 'DateTime', 'last_edited_user': 'TextEdit', 'last_edited_date': 'DateTime', 'HPB_Project': 'TextEdit', 'CreationDate': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_BikeRoutes_4.set('fieldImages', {'OBJECTID': '', 'Unique_ID': '', 'Full_Name': '', 'Length_Miles': '', 'Council_District': '', 'KeyConnect': '', 'Maintenance': '', 'HoustonBikePlan_FundSource': '', 'URL': '', 'HC_Status': '', 'HC_Class': '', 'LC_Status': '', 'LC_Class': '', 'Description': '', 'Implementer': '', 'created_user': '', 'created_date': '', 'last_edited_user': '', 'last_edited_date': '', 'Proposed_Date': '', 'Programmed_Date': '', 'Existing_Date': '', });
lyr_SurfaceWaterQualityMonitoringStations_5.set('fieldImages', {'OBJECTID': '', 'Station_ID': '', 'Short_Desc': '', 'Long_Desc': '', 'Basin_ID': '', 'Segment_ID': '', 'StreamType': '', 'StreamCond': '', 'OnSegFlag': '', 'County_ID': '', 'County': '', 'TCEQRegion': '', 'USGS_GID': '', 'USGS_NHDID': '', 'Latitude': '', 'Longitude': '', 'URL': '', 'Collecting': '', 'FY': '', 'Active_Ind': '', });
lyr_CommunityCenters_6.set('fieldImages', {'OBJECTID': 'Range', 'PICNO': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'ZIPCODE': 'TextEdit', 'BLDSQFT': 'TextEdit', 'PHONE': 'TextEdit', 'ORIG_FID': 'Range', 'FAX': 'TextEdit', 'SUPERVISOR': 'TextEdit', 'BUILT': 'TextEdit', 'FORMER_NAME': 'TextEdit', 'Site_No': 'Range', 'FEATURE_ID': 'TextEdit', });
lyr_MF7_7.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Name': 'TextEdit', 'Year': 'TextEdit', 'Description': 'TextEdit', 'url': 'TextEdit', });
lyr_Watersheds_1.set('fieldLabels', {'WTSHNAME': 'no label', 'STLength': 'hidden field', 'STArea': 'hidden field', 'WTSHUNIT': 'hidden field', 'Shape_STLe': 'hidden field', 'Shape_STAr': 'hidden field', });
lyr_Waterways_2.set('fieldLabels', {'Length': 'hidden field', 'Type': 'hidden field', 'Name': 'no label', });
lyr_GREENWAYS_3.set('fieldLabels', {'Bayou': 'hidden field', 'Name': 'no label', 'OBJECTID': 'hidden field', 'created_user': 'hidden field', 'created_date': 'hidden field', 'last_edited_user': 'hidden field', 'last_edited_date': 'hidden field', 'HPB_Project': 'hidden field', 'CreationDate': 'hidden field', 'Creator': 'hidden field', 'EditDate': 'hidden field', 'Editor': 'hidden field', 'Shape__Area': 'hidden field', 'Shape__Length': 'hidden field', });
lyr_BikeRoutes_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'Unique_ID': 'hidden field', 'Full_Name': 'no label', 'Length_Miles': 'hidden field', 'Council_District': 'hidden field', 'KeyConnect': 'hidden field', 'Maintenance': 'hidden field', 'HoustonBikePlan_FundSource': 'hidden field', 'URL': 'hidden field', 'HC_Status': 'hidden field', 'HC_Class': 'hidden field', 'LC_Status': 'hidden field', 'LC_Class': 'hidden field', 'Description': 'hidden field', 'Implementer': 'hidden field', 'created_user': 'hidden field', 'created_date': 'hidden field', 'last_edited_user': 'hidden field', 'last_edited_date': 'hidden field', 'Proposed_Date': 'hidden field', 'Programmed_Date': 'hidden field', 'Existing_Date': 'hidden field', });
lyr_SurfaceWaterQualityMonitoringStations_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Station_ID': 'hidden field', 'Short_Desc': 'no label', 'Long_Desc': 'hidden field', 'Basin_ID': 'hidden field', 'Segment_ID': 'hidden field', 'StreamType': 'hidden field', 'StreamCond': 'hidden field', 'OnSegFlag': 'hidden field', 'County_ID': 'hidden field', 'County': 'hidden field', 'TCEQRegion': 'hidden field', 'USGS_GID': 'hidden field', 'USGS_NHDID': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'URL': 'hidden field', 'Collecting': 'hidden field', 'FY': 'hidden field', 'Active_Ind': 'hidden field', });
lyr_CommunityCenters_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'PICNO': 'hidden field', 'NAME': 'no label', 'ADDRESS': 'no label', 'ZIPCODE': 'no label', 'BLDSQFT': 'hidden field', 'PHONE': 'hidden field', 'ORIG_FID': 'hidden field', 'FAX': 'hidden field', 'SUPERVISOR': 'hidden field', 'BUILT': 'hidden field', 'FORMER_NAME': 'hidden field', 'Site_No': 'hidden field', 'FEATURE_ID': 'hidden field', });
lyr_MF7_7.set('fieldLabels', {'X': 'no label', 'Y': 'hidden field', 'Name': 'no label', 'Year': 'no label', 'Description': 'no label', 'url': 'no label', });
lyr_MF7_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});