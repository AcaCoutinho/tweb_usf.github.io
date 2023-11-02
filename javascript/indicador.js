google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(Grafico1);
google.charts.setOnLoadCallback(Grafico2);
google.charts.setOnLoadCallback(Grafico3);
google.charts.setOnLoadCallback(Grafico4);
google.charts.setOnLoadCallback(Grafico5);
google.charts.setOnLoadCallback(Grafico6);


function Grafico1() {

 
    var data = google.visualization.arrayToDataTable([
        ['Faixa Etaria', 'Populacao'],
        ['Populacao Idosa',    2417],
        ['Populacao Jovem',    1458],
        ['Populacao Ativa',    6337],
    ]);


  var options = {title:'População',
                 is3D:true,
                 width:400,
                 height:300};


  var chart = new google.visualization.PieChart(document.getElementById('indicador_1'));
  chart.draw(data, options);
}
function Grafico2() {


    var data = google.visualization.arrayToDataTable([
        ['Faixa Etaria', 'Media de Consultas de Adultos'],
        ['19-44',    137],
        ['45-64',    158],
        ['65+',337],
    ]);

  
  var options = {title:'População',
                 width:400,
                 height:300};


  var chart = new google.visualization.PieChart(document.getElementById('indicador_2'));
  chart.draw(data, options);
}

function Grafico3() {
    var data = google.visualization.arrayToDataTable([
      ["Element", "População", { role: "style" } ],
      ["0-4", 56/*(37*1.5)*/, "#b87333"],
      ["5-64", 211, "silver"],
      ["65+", 674/*(337*2)*/ , "gold"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      title: "População",
      width: 500,
      height: 300,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("indicador_3"));
    chart.draw(view, options);
}

function Grafico4() {
    var data = google.visualization.arrayToDataTable([
      ['Idade', ''],
      ['0-4', 75  ],
      ['5-64',251 ],
      ['65+', 544 ],
    ]);

    var options = {
      title: 'População',
      pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('indicador_4'));
    chart.draw(data, options);
  }

  function Grafico5() {
    var data = google.visualization.arrayToDataTable([
      ["Element", "Percentagem", { role: "style" } ],
      ["3", 94, "color:#75FF33"],
      ["6", 95, "#FF5733"],
      ["13",98, "color: #33FFBD"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      title: "Percentagem de vacinação",
      width: 500,
      height: 300,
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("indicador_5"));
    chart.draw(view, options);
}

  function Grafico6() {

    var data = google.visualization.arrayToDataTable([
        ['Faixa Etaria', 'Populacao'],
        ['Mulheres',    437],
        ['Homens',    381],
    ]);

    
    var options = {title:'Sexo',
                   width:400,
                   height:300};
  
  
    var chart = new google.visualization.PieChart(document.getElementById('indicador_6'));
    chart.draw(data, options);
  }