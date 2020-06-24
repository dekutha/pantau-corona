class FooterSection extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 80%;
                font-weight: 400;
                padding: 20px 0;
            }
            a {
                text-decoration: none;
            }
        </style>
        <p>© 2020 Dewa Made Kutha
        Powered by <a href="https://github.com/mathdroid/covid-19-api" class="text-decoration-none">COVID-19 API.</a></p>`;
    }
}

customElements.define("footer-section", FooterSection);