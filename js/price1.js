google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day',         'MRP', 'Current Price'],
          ['23.06.2022',  10000,      9000],
          ['24.07.2022',  11700,      10000],
          ['25.08.2022',  6600,       5000],
          ['Today',       10300,      8000]
        ]);

        var options = {
          title: 'NMD R1 Price',
          hAxis: {title: 'Day',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }