
module.exports = function towelSort (matrix) {
  if(matrix == undefined){
    return []
  }
  let mainArr = []
  for(let i = 0; i < matrix.length; i++){
    let row = matrix[i]
    if(i % 2 != 0){
      row = row.reverse()
    }
    mainArr = mainArr.concat(row)
  }

  return mainArr
}