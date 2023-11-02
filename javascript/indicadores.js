google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawIndicador1);

function drawIndicador1() {

    var data = google.visualization.arrayToDataTable([
        ['Faixa Etaria', 'Populacao'],
        ['Populacao Idosa',    2417],
        ['Populacao Jovem',    1458],
        ['Populacao Ativa',    6337],
    ]);

    var options = {
        title: 'Populacao',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('indicador_1'));

    chart.draw(data, options);
}