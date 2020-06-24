const moment = require("moment");
require('moment/locale/id');
require('moment-timezone');

class IndonesiaIndicator extends HTMLElement {

    toDecimal(number){
        return number.toLocaleString();
    }

    dateFormatter(data){
        let formatter = moment(data)
        return formatter.tz('Asia/Makassar').format('dddd Do MMMM YYYY, HH:mm:ss')
    }

    set indicatorI(data) {
        this._indiConfirm = data.confirmed;
        this._indiRecovered = data.recovered;
        this._indiDeath = data.deaths;
        this._lastUpdate = data.lastUpdate;
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <h2 class="font-weight-light text-center m-3">Kasus di Indonesia</h2>
        <div class="row">
            <div class="col-md-4 col-12">
                <div class="alert alert-warning text-center">
                    <h5 class="alert-heading">Total Kasus</h4>
                    <h3>${this.toDecimal(this._indiConfirm.value)}</h3>
                    <small class="text-muted">Orang</small>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="alert alert-success text-center">
                    <h5 class="alert-heading">Total Sembuh</h4> 
                    <h3>${this.toDecimal(this._indiRecovered.value)}</h3>
                    <small class="text-muted">Orang</small>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div class="alert alert-dark text-center">
                    <h5 class="alert-heading">Total Meninggal</h4>
                    <h3>${this.toDecimal(this._indiDeath.value)}</h3>
                    <small class="text-muted">Orang</small>
                </div>
            </div>
            <div class="col-12">
                <p class="text-center small">Update Terakhir : ${this.dateFormatter(this._lastUpdate)}<p>
            </div>
        </div>`;
    }
}

customElements.define("indonesia-indicator", IndonesiaIndicator);