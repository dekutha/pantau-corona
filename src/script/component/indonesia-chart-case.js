import '@google-web-components/google-chart';

class IndonesiaChartCase extends HTMLElement {

    constructor() {
        super();
    }

    set indicator(data) {
        this._data = data;
        this.render();
    }

    render() {
        let dataTmp = [
            ['Kasus', 'Orang'],
            ['Dalam Perawatan', this._data.perawatan],
            ['Sembuh',          this._data.sembuh],
            ['Meninggal',       this._data.meninggal],
        ]
        google.charts.load("current", {packages:["corechart"]});
        
        const drawChart = () => {
            const data = google.visualization.arrayToDataTable(dataTmp);

            const options = {
                legend: 'none',
                pieSliceText: 'label',
                pieStartAngle: 100,
                title: 'Persentasi Kasus Corona di Indonesia',
                colors: ['#344ceb', '#2a964e', '#eb4634']
            };

            const chart = new google.visualization.PieChart(document.querySelector('#chart_case'));
            chart.draw(data, options);
        }

        google.charts.setOnLoadCallback(drawChart);

        this.innerHTML = `<div id="chart_case" class="chart shadow mt-3 mb-1 rounded"></div>`;
    }
}

customElements.define("indonesia-chart-case", IndonesiaChartCase);