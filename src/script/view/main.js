import "../component/global-indicator-section.js";
import "../component/indonesia-indicator-section.js";
import "../component/list-provinsi-section.js";
import "../component/indonesia-chart-case.js";
import DataSource from '../data/data-source.js';

const main = () => {
    const globalIndicatorElement = document.querySelector("global-indicator");
    const indonesiaIndicatorElement = document.querySelector("indonesia-indicator");
    const provinsiElement = document.querySelector("list-provinsi-case");
    const indonesiaChartElement = document.querySelector("indonesia-chart-case");

    const globalShow = async () => {
        try{
            const responseJson = await DataSource.getGlobalCase();
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                globalIndicatorElement.indicatorG = responseJson;
            }
        } catch(error) {
            showResponseMessage(error);
        }
    };

    const indonesiaShow = async () => {
        try{
            const responseJson = await DataSource.getIndonesiaCase();
            indonesiaIndicatorElement.indicatorI = responseJson;
        } catch(error) {
            showResponseMessage(error);
        }
    };

    const provinsiCaseShow = async () => {
        try{
            const responseJson = await DataSource.getAllProvinsiCase();
            provinsiElement.indicator = responseJson.data;
        } catch(error) {
            showResponseMessage(error);
        }
    };

    const generalUse = async () => {
        try{
            const responseJson = await DataSource.getGeneralData();
            indonesiaChartElement.indicator = responseJson;
        } catch(error) {
            showResponseMessage(error);
        }
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    generalUse();
    globalShow();
    indonesiaShow();
    provinsiCaseShow();
 };

 export default main;