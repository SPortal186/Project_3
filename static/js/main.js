function init(){
    const url = "http://127.0.0.1:5000/get-data";
    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
    let locations = []
    let mxMale1981 = []
    let mxFemale1981 = []
    for (let i = 0; i < data.length; i += 70) {
      row = data[i];
      locations.push(row.Location);
      mxMale1981.push(row.Mx);
    }
    for (let i = 35; i < data.length; i += 70) {
      row = data[i];
      mxFemale1981.push(row.Mx);
    }
    let trace1 = {
      x: locations,
      y: mxMale1981,
      name: "1981, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1981,
      name: "1981, Female",
      type: "bar"
    };
    // Create data array
    let chartData = [trace1, trace2];
    // Apply a title to the layout
    let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
    };
    // Render the plot to the div tag with id “plot”
    Plotly.newPlot("plot", chartData, layout);
  });
  }
  d3.selectAll("#selDataset").on('change', updatePlotly);
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    const url = "http://127.0.0.1:5000/get-data";
    // Fetch the JSON data and console log it
    d3.json(url).then(function(data) {
      console.log("changed")
      let locations = []
      let mxMale1981 = []
      let mxMale1982 = []
      let mxMale1983 = []
      let mxMale1984 = []
      let mxMale1985 = []
      let mxMale1986 = []
      let mxMale1987 = []
      let mxMale1988 = []
      let mxMale1989 = []
      let mxMale1990 = []
      let mxMale1991 = []
      let mxFemale1980 = []
      let mxFemale1981 = []
      let mxFemale1982 = []
      let mxFemale1983 = []
      let mxFemale1984 = []
      let mxFemale1985 = []
      let mxFemale1986 = []
      let mxFemale1987 = []
      let mxFemale1988 = []
      let mxFemale1989 = []
      let mxFemale1990 = []
      let mxFemale1991 = []
      for (let i = 0; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1981.push(row.Mx);
      }
      for (let i = 1; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1982.push(row.Mx);
      }
      for (let i = 2; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1983.push(row.Mx);
      }
      for (let i = 3; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1984.push(row.Mx);
      }
      for (let i = 4; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1985.push(row.Mx);
      }
      for (let i = 5; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1986.push(row.Mx);
      }
      for (let i = 6; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1987.push(row.Mx);
      }
      for (let i = 7; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1988.push(row.Mx);
      }
      for (let i = 8; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1989.push(row.Mx);
      }
      for (let i = 9; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1990.push(row.Mx);
      }
      for (let i = 10; i < data.length; i += 70) {
        row = data[i];
        locations.push(row.Location);
        mxMale1991.push(row.Mx);
      }
      for (let i = 34; i < data.length; i += 70) {
        row = data[i];
        mxFemale1980.push(row.Mx);
      }
      for (let i = 35; i < data.length; i += 70) {
        row = data[i];
        mxFemale1981.push(row.Mx);
      }
      for (let i = 36; i < data.length; i += 70) {
        row = data[i];
        mxFemale1982.push(row.Mx);
      }
      for (let i = 37; i < data.length; i += 70) {
        row = data[i];
        mxFemale1983.push(row.Mx);
      }
      for (let i = 38; i < data.length; i += 70) {
        row = data[i];
        mxFemale1984.push(row.Mx);
      }
      for (let i = 39; i < data.length; i += 70) {
        row = data[i];
        mxFemale1985.push(row.Mx);
      }
      for (let i = 40; i < data.length; i += 70) {
        row = data[i];
        mxFemale1986.push(row.Mx);
      }
      for (let i = 41; i < data.length; i += 70) {
        row = data[i];
        mxFemale1987.push(row.Mx);
      }
      for (let i = 42; i < data.length; i += 70) {
        row = data[i];
        mxFemale1988.push(row.Mx);
      }
      for (let i = 43; i < data.length; i += 70) {
        row = data[i];
        mxFemale1989.push(row.Mx);
      }
      for (let i = 44; i < data.length; i += 70) {
        row = data[i];
        mxFemale1990.push(row.Mx);
      }
      for (let i = 45; i < data.length; i += 70) {
        row = data[i];
        mxFemale1991.push(row.Mx);
      }
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");
    // Initialize x and y arrays
    var x = [];
    var y = [];
    if (dataset === "dataset1") {
      let trace1 = {
        x: locations,
        y: mxMale1981,
        name: "1981, Male",
        type: "bar"
      };
      let trace2 = {
        x: locations,
        y: mxFemale1981,
        name: "1981, Female",
        type: "bar"
      };
      // Create data array
      let chartData = [trace1, trace2];
      // Apply a title to the layout
      let layout = {
      title: "US Cancer Mortality Rates 1981 - 1991"
      };
    Plotly.newPlot("plot", chartData, layout);
    }
    else if (dataset === 'dataset2') {
        let trace1 = {
          x: locations,
          y: mxMale1982,
          name: "1982, Male",
          type: "bar"
        };
        let trace2 = {
          x: locations,
          y: mxFemale1982,
          name: "1982, Female",
          type: "bar"
        };
      // Create data array
      let chartData = [trace1, trace2];
      let layout = {
        title: "US Cancer Mortality Rates 1981 - 1991"
       };
      Plotly.newPlot("plot", chartData, layout);
    }
    else if (dataset === 'dataset3') {
      let trace1 = {
        x: locations,
        y: mxMale1983,
        name: "1983, Male",
        type: "bar"
      };
      let trace2 = {
        x: locations,
        y: mxFemale1983,
        name: "1983, Female",
        type: "bar"
      };
    // Create data array
    let chartData = [trace1, trace2];
    let layout = {
      title: "US Cancer Mortality Rates 1981 - 1991"
     };
    Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset4') {
    let trace1 = {
      x: locations,
      y: mxMale1984,
      name: "1984, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1984,
      name: "1984, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset5') {
    let trace1 = {
      x: locations,
      y: mxMale1985,
      name: "1985, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1985,
      name: "1985, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset6') {
    let trace1 = {
      x: locations,
      y: mxMale1986,
      name: "1986, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1986,
      name: "1986, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset7') {
    let trace1 = {
      x: locations,
      y: mxMale1987,
      name: "1987, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1987,
      name: "1987, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset8') {
    let trace1 = {
      x: locations,
      y: mxMale1988,
      name: "1988, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1988,
      name: "1988, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset9') {
    let trace1 = {
      x: locations,
      y: mxMale1989,
      name: "1989, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1989,
      name: "1989, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset10') {
    let trace1 = {
      x: locations,
      y: mxMale1990,
      name: "1990, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1990,
      name: "1990, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  else if (dataset === 'dataset11') {
    let trace1 = {
      x: locations,
      y: mxMale1991,
      name: "1991, Male",
      type: "bar"
    };
    let trace2 = {
      x: locations,
      y: mxFemale1991,
      name: "1991, Female",
      type: "bar"
    };
  // Create data array
  let chartData = [trace1, trace2];
  let layout = {
    title: "US Cancer Mortality Rates 1981 - 1991"
   };
  Plotly.newPlot("plot", chartData, layout);
  }
  });
  }
  init();

  const url = "http://127.0.0.1:5000/get-data";
  // Fetch the JSON data and console log it
  d3.json(url).then(function(data) {
    console.log(data);
    // console.log(data);
    
  function selectOnlyFemale(Female) {
    return Female.Sex == "Female";
  }
  let MxFemale = data.filter(selectOnlyFemale);
  //console.log(MxFemale);
  
  function selectOnlyMale(Male) {
    return Male.Sex == "Male";
  }
  let MxMale = data.filter(selectOnlyMale);
  //console.log(MxMale);
  
  function selectOnlyFemaleGA(FemaleGA) {
    return FemaleGA.Location == "Georgia";
  }
  let GeoriaF = MxFemale.filter(selectOnlyFemaleGA);
  //console.log(GeoriaF);
  
  function selectOnlyMaleGA(MaleGA) {
    return MaleGA.Location == "Georgia";
  }
  let GeoriaM = MxMale.filter(selectOnlyMaleGA);
  //console.log(GeoriaM);
  
  //CREATING 1ST PLOT "GEORGIA F VS M"
  //Find x-value (Years)
  let YearGA = GeoriaF.map(function(date) {
    return date.Year;
  })
    //console.log(YearGA);
  //Mx Value for Female (y-value) trace1 
  let MxFemaleGA = GeoriaF.map(function(mxvaluefemale) {
    return mxvaluefemale.Mx;
  })
    //console.log(MxFemaleGA);
  //Mx Value for Male (y-value)trace2
  let MxMaleGA = GeoriaM.map(function(mxvaluemale) {
    return mxvaluemale.Mx;
  })
   var trace1 = {
      x: YearGA,
      y: MxFemaleGA,
      type: 'bar',
      name: 'Female',
      marker: {
        color: 'rgb(49,130,189)',
        opacity: 0.7,
        }
      };
    var trace2 = {
      x: YearGA,
      y: MxMaleGA,
      type: 'bar',
      name: 'Male',
      marker: {
        color: 'rgb(204,204,204)',
        opacity: 0.5,
        }
      };
    
    var rows = [trace1, trace2];
      
    var layout = {
      title: 'Georgia State Cancer Mortality Rate Female vs Male Over Time',
      xaxis: {
        tickangle: -45
      },
      barmode: 'group'
    };
    
    Plotly.newPlot("myplot", rows, layout);
       
function selectOnlyMale(Male) {
  return Male.Sex == "Male";
}
let MxMale1999 = data.filter(selectOnlyMale);
console.log(MxMale1999)

function selectonly1999(year1999) {
  return year1999.Year == "1/1/99";
}
let year1999 = MxMale1999.filter(selectonly1999);
console.log(year1999)
let LOCArray = []
let MxArray = []
let LocationArray = []
for (let i = 0; i < year1999.length; i++){
  if (year1999[i] === -1) {
    break;
  }
  let rows = year1999[i];
   
  LOCArray.push(rows.LOC);
  MxArray.push(rows.Mx);
  LocationArray.push(rows.Location)
}
console.log(LOCArray);
console.log(MxArray);
console.log(LocationArray);


var data = [
  {
    value: 333,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "1999 Alaska's Data"
},
{
  value: 314,
  color: "#4D5360",
  highlight: "#616774",
  label: "1999 Tennessee's Data"
  
},
{
    value: 223,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "1999 Hawaii's Data"
},
{
    value: 299,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "199 Indiana's Data"
},
{
    value: 224,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "1999 Colorado's Data"
    
},
{
  value: 315,
  color:"#bd081c",
  highlight: "#FF5A5E",
  label: "1999 West Virginia's Data"
},
{
  value: 251,
  color: "#a6b1b7",
  highlight: "#5AD3D1",
  label: "1999 Washington's Data"
},
];
var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).PolarArea(data);


/// 1999 Female Data
function selectOnlyFemale(Female) {
  return Female.Sex == "Female";
}
let MxFemale1999 = data.filter(selectOnlyFemale);
console.log(MxFemale1999)

function selectonly1999F(year1999F) {
  return year1999F.Year == "1/1/99";
}
let year1999F = MxFemale1999.filter(selectonly1999F);
console.log(year1999F)

let LOCArrayF = []
let MxArrayF = []
let LocationArrayF = []
for (let i = 0; i < year1999F.length; i++){
  if (year1999F[i] === -1) {
    break;
  }
  let rows = year1999F[i];
   
  LOCArrayF.push(rows.LOC);
  MxArrayF.push(rows.Mx);
  LocationArrayF.push(rows.Location)
}
console.log(LOCArrayF);
console.log(MxArrayF);
console.log(LocationArrayF);

var data = [
  {
    value: 195,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "1999 Alaska's Data"
},
{
  value: 187,
  color: "#4D5360",
  highlight: "#616774",
  label: "1999 Tennessee's Data"
  
},
{
    value: 144,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "1999 Hawaii's Data"
},
{
    value: 192,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "199 Indiana's Data"
},
{
    value: 158,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "1999 Colorado's Data"
    
},
{
  value: 205,
  color:"#bd081c",
  highlight: "#FF5A5E",
  label: "1999 West Virginia's Data"
},
{
  value: 177,
  color: "#a6b1b7",
  highlight: "#5AD3D1",
  label: "1999 Washington's Data"
},
];
var ctx = document.getElementById("myChart2").getContext("2d");
var myNewChart = new Chart(ctx).PolarArea(data);
}
);

  
  

