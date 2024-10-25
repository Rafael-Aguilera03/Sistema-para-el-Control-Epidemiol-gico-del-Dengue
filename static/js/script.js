

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: JSON.parse(document.getElementById('labels').textContent),
        datasets: [{
            label: 'Grupo de Riesgo',
            data: JSON.parse(document.getElementById('values').textContent),
            backgroundColor: [
                'Lightgreen',
                'Lightyellow',
                'rgba(255, 99, 132)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});