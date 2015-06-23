var quickSort = function(arr){
  var pivot = arr.splice(0,1);
  var left = [];
  var right = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }
    else{
      right.push(arr[i]);
    }
  }

  if(left.length > 1){
      left = quickSort(left);
  }

  if(right.length > 1){
      right =   quickSort(right);
  }

  return left.concat(pivot, right);

}

module.exports = quickSort;