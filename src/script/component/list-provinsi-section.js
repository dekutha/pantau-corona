class ListProvinsiCase extends HTMLElement {

    toDecimal(number){
        return number.toLocaleString();
    }

    set indicator(data) {
        this._data = data;
        this.render();
    }
  
    render() {
        let i = 0;
        let content = `
        <style>
        .table-container {
            max-height:300px;
            overflow-x: hidden;
        }
        </style>
        <div class='shadow p-3 mb-1 rounded bg-white'>
        <p>Data Kasus Coronavirus di Indonesia Berdasarkan Provinsi</p>
        <div class="table-container">
        <table class='table table-bordered table-hover table-responsive-md mb-0'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Provinsi</th>
                <th scope='col'>Positif</th>
                <th scope='col'>Sembuh</th>
                <th scope='col'>Meninggal</th>
              </tr>
            </thead>
            <tbody>`;

            this._data.forEach(list => {
                i++;
                content += `
                    <tr>
                        <th scope="row">${i}</th>
                        <td>${list.provinsi}</td>
                        <td>${this.toDecimal(list.kasusPosi)}</td>
                        <td>${this.toDecimal(list.kasusSemb)}</td>
                        <td>${this.toDecimal(list.kasusMeni)}</td>
                    </tr>
                `;
            })

            content += `
            </tbody>
            </table>
            </div>
        </div>`;

        this.innerHTML = content;
    }
}

customElements.define("list-provinsi-case", ListProvinsiCase);