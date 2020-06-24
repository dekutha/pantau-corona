class DataSource {
    
    static getGlobalCase() {
        return fetch(`https://covid19.mathdro.id/api`)
        .then(response =>  response.json())
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`is not found`);
            }
        })
    }

    static getIndonesiaCase() {
        return fetch(`https://covid19.mathdro.id/api/countries/Indonesia`)
        .then(response =>  response.json())
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`is not found`);
            }
        })
    }

    static getAllProvinsiCase() {
        return fetch(`https://indonesia-covid-19-api.now.sh/api/provinsi`)
        .then(response =>  response.json())
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`is not found`);
            }
        })
    }

    static getGeneralData() {
        return fetch(`https://indonesia-covid-19-api.now.sh/api/`)
        .then(response =>  response.json())
        .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`is not found`);
            }
        })
    }
}

export default DataSource;