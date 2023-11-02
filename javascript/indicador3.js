google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawIndicador1);

function drawIndicador1() {

    var data = google.visualization.arrayToDataTable([
        ['Faixa Etaria', 'Media de Consultas de Adultos'],
        ['19-44',    137],
        ['45-64',    158],
        ['65 e mais',337],
    ]);

    var options = {
        title: 'Populacao',
    };

    var chart = new google.visualization.PieChart(document.getElementById('indicador_3'));

    chart.draw(data, options);
}