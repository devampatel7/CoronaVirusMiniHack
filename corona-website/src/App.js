import React, {Component, useState} from "react";
import './App.css';
import LineChart from "./Components/LineChart";
import HorizontalBarChart from "./Components/BarChart";
import DeathBarChart from "./Components/DeathChart";
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
    countryMax10: null,
    graph: null,
    lowcountryMax1: null,
    lowcountryMax2: null,
    lowcountryMax3: null,
    lowcountryMax4: null,
    lowcountryMax5: null,
    lowcountryMax6: null,
    lowcountryMax7: null,
    lowcountryMax8: null,
    lowcountryMax9: null,
    lowcountryMax10: null,
    lowgraph: null
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
    
    
    //1st min
    let minInd = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed){
        minInd = i;
      }
    }
    
    //2nd min
    let minInd2 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd2];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed && (i != minInd)){
        minInd2 = i;
      }
    } 

    // 3rd min
    let minInd3 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd3];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed && (i != minInd && i != minInd2)){
        minInd3 = i;
      }
    } 
    
    // 4th min
    let minInd4 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd4];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed && (i != minInd && i != minInd2 && i != minInd3)){
        minInd4 = i;
      }
    }
    
    // 5th min 
    let minInd5 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd5];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed && (i != minInd && i != minInd2 && i != minInd3 && i != minInd4)){
        minInd5 = i;
      }
    }
    
    //6th min
    let minInd6 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd6];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed && (i != minInd && i != minInd2 && i != minInd3 && i != minInd4 && i != minInd5)){
        minInd6 = i;
      }
    }

    // 7th min
    let minInd7 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd7];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed && (i != minInd && i != minInd2 && i != minInd3 && i != minInd4 && i != minInd5 && i != minInd6)){
        minInd7 = i;
      }
    }

    // 8th min 
    let minInd8 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd8];
      if(cont1.TotalConfirmed < cont2.TotalConfirmed && (i != minInd && i != minInd2 && i != minInd3 && i != minInd4 && i != minInd5 && i != minInd6 && i != minInd7)){
        minInd8 = i;
      }
    }
    
    //9th min
    let minInd9 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd9];
      if((cont1.TotalConfirmed < cont2.TotalConfirmed) && (i!=minInd && i!=minInd2 && i!=minInd3 && i!=minInd4 && i!=minInd5 && i!=minInd6 && i!=minInd7 && i!=minInd8)){
        minInd9 = i;
      }
    }

    //10th min
    let minInd10 = 0;
    for(let i = 1; i < 190; i++){
      const cont1 = data.Countries[i];
      const cont2 = data.Countries[minInd10];
      if((cont1.TotalConfirmed < cont2.TotalConfirmed)&&(i!=minInd && i!=minInd2 && i!=minInd3 && i!=minInd4 && i!=minInd5 && i!=minInd6 && i!=minInd7 && i!=minInd8 && i!=minInd9)){
        minInd10 = i;
      }
    }
    
    const f1 = data.Countries[minInd].Country;
    const f2 = data.Countries[minInd2].Country;
    const f3 = data.Countries[minInd3].Country;
    const f4 = data.Countries[minInd4].Country;
    const f5 = data.Countries[minInd5].Country;
    const f6 = data.Countries[minInd6].Country;
    const f7 = data.Countries[minInd7].Country;
    const f8 = data.Countries[minInd8].Country;
    const f9 = data.Countries[minInd9].Country;
    const f10 = data.Countries[minInd10].Country;
    
    const g1 = data.Countries[minInd].TotalConfirmed;
    const g2 = data.Countries[minInd2].TotalConfirmed;
    const g3 = data.Countries[minInd3].TotalConfirmed;
    const g4 = data.Countries[minInd4].TotalConfirmed;
    const g5 = data.Countries[minInd5].TotalConfirmed;
    const g6 = data.Countries[minInd6].TotalConfirmed;
    const g7 = data.Countries[minInd7].TotalConfirmed;
    const g8 = data.Countries[minInd8].TotalConfirmed;
    const g9 = data.Countries[minInd9].TotalConfirmed;
    const g10 = data.Countries[minInd10].TotalConfirmed;

    const c1 = data.Countries[maxInd].Country;
    const c2 = data.Countries[maxInd2].Country;
    const c3 = data.Countries[maxInd3].Country;
    const c4 = data.Countries[maxInd4].Country;
    const c5 = data.Countries[maxInd5].Country;
    const c6 = data.Countries[maxInd6].Country;  
    const c7 = data.Countries[maxInd7].Country;
    const c8 = data.Countries[maxInd8].Country;
    const c9 = data.Countries[maxInd9].Country;
    const c10 = data.Countries[maxInd10].Country;
    
    const d1 = data.Countries[maxInd].TotalConfirmed;
    const d2 = data.Countries[maxInd2].TotalConfirmed;
    const d3 = data.Countries[maxInd3].TotalConfirmed;
    const d4 = data.Countries[maxInd4].TotalConfirmed;
    const d5 = data.Countries[maxInd5].TotalConfirmed;
    const d6 = data.Countries[maxInd6].TotalConfirmed;
    const d7 = data.Countries[maxInd7].TotalConfirmed;
    const d8 = data.Countries[maxInd8].TotalConfirmed;
    const d9 = data.Countries[maxInd9].TotalConfirmed;
    const d10 = data.Countries[maxInd10].TotalConfirmed;

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
      graph: HorizontalBarChart(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, d1, d2, d3, d4, d5, d6, d7, d8, d9, d10),
      lowgraph: DeathBarChart(f1, f2, f3,f4, f5, f6, f7, f8, f9, f10, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10),
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
          {this.state.graph}
          {this.state.lowgraph}
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
