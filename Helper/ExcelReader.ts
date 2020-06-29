import {Workbook, Worksheet, Row, Cell} from 'exceljs';
import * as Collections from 'typescript-collections';
// const { Readable } = require("stream")

var wb: Workbook = new Workbook();
        // read xlsx file type
          export class ExcelReader{
          exl = async function(path){
            let strs: string[];
            var mySet = new Collections.Set<Collections.Dictionary<string,string>>();
            // var s = new Readable();
            // s._read = () => {};
		await wb.xlsx.readFile(path).then(async function(){
			let sheet:Worksheet = wb.getWorksheet("Sheet1");
            strs=new Array(sheet.rowCount)  ;
           
            for(let i=1; i<= sheet.rowCount;i++)
            {

                let RowObject:Row = sheet.getRow(i);
                
           
                var dict = new Collections.Dictionary<string,string>();
           
                    for(let j = 1; j <= RowObject.cellCount; j++ )
                  {  
                       let CellObject: Cell = RowObject.getCell(j);
                   
                    if( i != 1){
                    // s.push(CellObject.value.toString());
                    //strs.push(CellObject.value.toString());
                  
                    dict.setValue(strs[j],CellObject.value.toString());
                    }
                    else {
                     
                        //strs.push(CellObject.value.toString());
                        strs[j]=CellObject.value.toString();
                    }
                
                }
             //   console.log(strs)
             if( i != 1){
                mySet.add(dict);
             }
                
                }
            // s.push(null);
        });
        return mySet;
    }
}
