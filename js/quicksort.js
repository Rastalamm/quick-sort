var quickSortingApp = (function(){

  var sortingInputValue = [];
  var numberInput;
  var dotHouse = document.getElementById('dot_house');
  var arrayInput = [];
  var sortedInput = [];
  var colorArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];;
  var colorArrayLength = colorArray.length;

  document.getElementById('sort_button').addEventListener('click', function (){

    arrayInput = [];

    if(typeof document.getElementById('numbers_to_sort').value === 'number' || document.getElementById('numbers_to_sort').value <1 ){
      alert('I need to be big number!')
    }

    _randomArray(Number(document.getElementById('numbers_to_sort').value))

    _display(arrayInput);

    // setInterval(function(){
    //   _quickSort(arrayInput);

    // } , 100);

  });



  function _randomArray(num){

    num = num > 600 ? 600 : num;

    for( var i = 0; i < num; i++){
      arrayInput.push(Math.floor(Math.random()* num));
    }
  }


  function _display(sortedArr){

    dotHouse.innerHTML = '';

    for(var i = 0; i < sortedArr.length; i++){
      var aBox = document.createElement('div');
      aBox.setAttribute('id', 'box' + i );
      aBox.setAttribute('class', 'a_box');
      randomColor = Math.floor(Math.random() * (colorArrayLength + 1))
      aBox.style.backgroundColor = colorArray[randomColor];
      aBox.style.height = sortedArr[i] + 'px';
      dotHouse.appendChild(aBox);
    }
  }


  var _quickSort = function(arr){

    if(!(Array.isArray(arr))){
      return false;
    }

    if(arr.length <= 1){
      return arr;
    }

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
        left = _quickSort(left);
    }

    if(right.length > 1){
        right =   _quickSort(right);
    }

    return left.concat(pivot, right);

  }

  return {
    quickSort : _quickSort
  }


})();