import xlrd from 'node-xlrd'

export function readExcelFile(filename, callback) {
  let datas = []
  console.log('Excel文件', filename)
	xlrd.open(filename, function(err, data) {
		if(err) {
			return console.log(err.name, err.message)
		}
		//解析Excel文件
		let shtCount = data.sheet.count
		for(let sIdx = 0; sIdx < shtCount; sIdx++) {
			console.log('check loaded: %s', data.sheet.loaded(sIdx))
			let sht = data.sheets[sIdx]
			let rCount = sht.row.count
			var cCount = sht.column.count
			console.log(' name= %s; index= %d; rowCount= %d; columnCount= %d', sht.name, sIdx, rCount, cCount)
			for(let rIdx = 0; rIdx < rCount; rIdx++) {
				let rData = []
				for(let cIdx = 0; cIdx < cCount; cIdx++) {
					try{
						rData[cIdx] = sht.cell(rIdx, cIdx)
						console.log('cell: row=%d, col=%d, value="%s"', rIdx, cIdx, sht.cell(rIdx, cIdx))
					}catch(e) {
						console.log('解析Excel文件失败: ', e.message)
					}
				}
				datas[rIdx] = rData
			}
		}
		callback(datas)
	})
}