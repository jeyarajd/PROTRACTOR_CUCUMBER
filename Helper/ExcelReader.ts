import {Workbook, Worksheet, Row, Cell} from 'exceljs';
// const { Readable } = require("stream")

var wb: Workbook = new Workbook();
        // read xlsx file type
          export class ExcelReader{
          exl = async function(path){
            let strs: string[];
            // var s = new Readable();
            // s._read = () => {};
		await wb.xlsx.readFile(path).then(async function(){
			let sheet:Worksheet = wb.getWorksheet("Sheet1");
            strs=new Array(sheet.rowCount)  ;
            for(let i=2; i<= sheet.rowCount;i++)
            {

                let RowObject:Row = sheet.getRow(i);
                for(let j = 1; j <= RowObject.cellCount; j++ )
                {
                    
                    let CellObject: Cell = RowObject.getCell(j);
                    // s.push(CellObject.value.toString());
                    strs.push(CellObject.value.toString());


                }
            }
            // s.push(null);
        });
     
        return strs;
    }
}
