// Require library
var xl = require('excel4node');































// Create a new instance of a Workbook class
var wb = new xl.Workbook();

// Add Worksheets to the workbook
var ws = wb.addWorksheet('Sheet 1');


// STYLES // 

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

// Set value of cell A1 to 100 as a number type styled with paramaters of style
ws.cell(1, 1, 1, 4, true)
.string('Countries List')
.style(styleHead);

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

ws.cell(3,1)
.string(ul)
.style(styleCollums)



  wb.write('Countries.xlsx', function(err, stats) {
    if (err) {
      console.error(err);
    } else {
      console.log(stats); // Prints out an instance of a node.js fs.Stats object
    }
  });