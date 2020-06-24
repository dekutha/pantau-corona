class GlobalIndicator extends HTMLElement {

    toDecimal(number){
        return number.toLocaleString();
    }

    set indicatorG(data) {
        this._indiConfirm = data.confirmed;
        this._indiRecovered = data.recovered;
        this._indiDeath = data.deaths;
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <h2 class="font-weight-light text-center m-3">Kasus di Dunia</h2>
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
        </div>`;
    }
}

customElements.define("global-indicator", GlobalIndicator);