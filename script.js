
import fetch from 'node-fetch'


async function getData(){
  
    const ids = await (await fetch('https://restcountries.com/v3.1/all')).json()
    const data = Promise.all(
      ids.map(async (i) => await (await fetch(`https://restcountries.com/v3.1/all`)).json()),

     
    )
    return data
   
  }
  
getData()
  .then(data => {
    console.log(data)
     data[0].map((countries => { countries = countries
      //console.log(countries)
      const countriesNames = countries.name.common
      console.log(countriesNames);

      const countriesCapitals = countries.capital
      console.log(countriesCapitals);

      const countriesArea = countries.area
      console.log(countriesArea); 

      const countriesCurrencies = Object.keys(countries.currencies)
      console.log(countriesCurrencies);
      
      countriesNames.forEach(writeExcelLine1(countriesNames));
      countriesCapitals.forEach(writeExcelLine2(countriesCapitals));
      countriesArea.forEach(writeExcelLine3(countriesArea));
      countriesCurrencies.forEach(writeExcelLine4(countriesCurrencies));
      

      writeExcel();

      
      
      
      
      }));
     
      
    })

function writeExcel() {
  var xl = require('excel4node');
  var wb = new xl.Workbook();
  var ws = wb.addWorksheet('Sheet 1');

  //STYLES// 

  var styleHead = wb.createStyle({
    font: {
        color: '#4F4F4F', 
        size: 16, 
        bold: true,
    },
    
    alignment: {
            horizontal: 'center',
            wrapText: true
    }   
});

var styleCollums = wb.createStyle({
    font: { 
        color: '#808080', 
        size: 12, 
        bold: true,
    }
});

var style = wb.createStyle({
  font: {
    color: '#FF0800',
    size: 12,
  },
  numberFormat: '$#,##0.00; ($#,##0.00); -',
});

// COLLUM HEAD // 

ws.cell(1, 1, 1, 4, true)
.string('Countries List')
.style(styleHead);


// COLLUMS // 

ws.cell(2,1)
.string('Name')
.style(styleCollums)

ws.cell(2,2)
.string('Capital')
.style(styleCollums)

ws.cell(2,3)
.string('Area')
.style(styleCollums)

ws.cell(2,4)
.string('Name')
.style(styleCollums)

// SAVE EXCEL // 

wb.write('Countries.xlsx');
}


function writeExcelLine1(Object) {
   wb.cell(3,1)
  .string(Object)
  .style(style)
  i++;
}

function writeExcelLine2(Object) {
  wb.cell(3,2)
 .string(Object)
 .style(style)
 i++;
}

function writeExcelLine3(Object) {
  wb.cell(3,3)
 .string(Object)
 .style(style)
 i++;
}

function writeExcelLine4(Object) {
  wb.cell(3,4)
 .string(Object)
 .style(style)
 i++;
}