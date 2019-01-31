

function addPointLinePoly(){

    // add a point
    L.marker([51.5,-0.09]).addTo(mymap)
        .bindPopup("<b>Hello!</b><br/>I am a popup.").openPopup();

    // add a circle
    L.circle([51.5, -0.11], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity:0.5
    }).addTo(mymap).bindPopup("I am a circle")

    // add a polygon (triangle)
    var myPolygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ], {
        color:'red',
        fillColor: '#f03',
        fillOpacity: 0.5
        }
    ).addTo(mymap).bindPopup("I am a polygon");


}
