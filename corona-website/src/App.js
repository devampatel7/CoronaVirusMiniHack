import React, {Component, useState} from "react";
import './App.css';
import LineChart from "./Components/LineChart";
import BarChart from "./Components/BarChart";
//import Country1 from "./Components/Country1";
//mport ReactDOM from "react-dom";
//import ReactTooltip from "react-tooltip";
//import MapChart from "./MapChart";

class App extends Component {
  state = {
    loading: true,
    country: null,
    totalConfirmed: null,
    country2: null,
    countryMax1: null,
    countryMax2: null,
    countryMax3: null,
    countryMax4: null,
    countryMax5: null,
    countryMax6: null,
    countryMax7: null,
    countryMax8: null,
    countryMax9: null,
    countryMax10: null
  };

  async componentDidMount(){ 
    const url = "https://api.covid19api.com/summary";
    const response = await fetch(url);
    const data = await response.json();
    
    //1st most
    let maxInd = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed){
        maxInd = i;
      }
    }
    
    //2nd most
    let maxInd2 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd2];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed && (i != maxInd)){
        maxInd2 = i;
      }
    } 

    // 3rd most
    let maxInd3 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd3];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed && (i != maxInd && i != maxInd2)){
        maxInd3 = i;
      }
    } 
    
    // 4th most
    let maxInd4 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd4];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed && (i != maxInd && i != maxInd2 && i != maxInd3)){
        maxInd4 = i;
      }
    }
    
    // 5th most 
    let maxInd5 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd5];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed && (i != maxInd && i != maxInd2 && i != maxInd3 && i != maxInd4)){
        maxInd5 = i;
      }
    }
    
    //6th most
    let maxInd6 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd6];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed && (i != maxInd && i != maxInd2 && i != maxInd3 && i != maxInd4 && i != maxInd5)){
        maxInd6 = i;
      }
    }

    // 7th most
    let maxInd7 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd7];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed && (i != maxInd && i != maxInd2 && i != maxInd3 && i != maxInd4 && i != maxInd5 && i != maxInd6)){
        maxInd7 = i;
      }
    }

    // 8th most 
    let maxInd8 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd8];
      if(cont1.TotalConfirmed > cont2.TotalConfirmed && (i != maxInd && i != maxInd2 && i != maxInd3 && i != maxInd4 && i != maxInd5 && i != maxInd6 && i != maxInd7)){
        maxInd8 = i;
      }
    }
    
    //9th most
    let maxInd9 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd9];
      if((cont1.TotalConfirmed > cont2.TotalConfirmed) && (i!=maxInd && i!=maxInd2 && i!=maxInd3 && i!=maxInd4 && i!=maxInd5 && i!=maxInd6 && i!=maxInd7 && i!=maxInd8)){
        maxInd9 = i;
      }
    }

    //10th most
    let maxInd10 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[maxInd10];
      if((cont1.TotalConfirmed > cont2.TotalConfirmed)&&(i!=maxInd && i!=maxInd2 && i!=maxInd3 && i!=maxInd4 && i!=maxInd5 && i!=maxInd6 && i!=maxInd7 && i!=maxInd8 && i!=maxInd9)){
        maxInd10 = i;
      }
    }
    
    this.setState({
      country: data.Countries[0],
      countryMax1: data.Countries[maxInd],
      countryMax2: data.Countries[maxInd2],
      countryMax3: data.Countries[maxInd3],
      countryMax4: data.Countries[maxInd4],
      countryMax5: data.Countries[maxInd5],
      countryMax6: data.Countries[maxInd6],
      countryMax7: data.Countries[maxInd7],
      countryMax8: data.Countries[maxInd8],
      countryMax9: data.Countries[maxInd9],
      countryMax10: data.Countries[maxInd10],
      loading: false
    });
  }


  render() {
    /*function App() {
      const [content, setContent] = useState("");
      return (
        <div>
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
      );
    }
    
    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);
    */

    return (
      <div>
        <div class="header">
          <h1>Corona Statistics</h1>
          <p>An updated list of current Corona virus statistics</p>
        </div>

        <div class="chart">
          {/*<LineChart />*/}
          <BarChart />
        </div>

        {this.state.loading || !this.state.country ? (
          <div>loading...</div>
        ) : (
          <div>
            <div> {this.state.country.Country} : {this.state.country.TotalConfirmed} </div>
            <div> {this.state.countryMax1.Country} : {this.state.countryMax1.TotalConfirmed} </div>
            <div> {this.state.countryMax2.Country} : {this.state.countryMax2.TotalConfirmed} </div>
            <div> {this.state.countryMax3.Country} : {this.state.countryMax3.TotalConfirmed} </div>
            <div> {this.state.countryMax4.Country} : {this.state.countryMax4.TotalConfirmed} </div>
            <div> {this.state.countryMax5.Country} : {this.state.countryMax5.TotalConfirmed} </div>
            <div> {this.state.countryMax6.Country} : {this.state.countryMax6.TotalConfirmed} </div>
            <div> {this.state.countryMax7.Country} : {this.state.countryMax7.TotalConfirmed} </div>
            <div> {this.state.countryMax8.Country} : {this.state.countryMax8.TotalConfirmed} </div>
            <div> {this.state.countryMax9.Country} : {this.state.countryMax9.TotalConfirmed} </div>
            <div> {this.state.countryMax10.Country} : {this.state.countryMax10.TotalConfirmed} </div>
          </div>
        )}

        <div class="footer">
          <p>This website is made for the USACS Minihacks Hackathon</p>
        </div>
      </div>
    );
  }
}

export default App;
