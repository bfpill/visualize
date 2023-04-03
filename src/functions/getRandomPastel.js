function getRandomPastelArray(numColors) {
    var colors = [];
    var hue = Math.floor(Math.random() * 360);
    var goldenRatio = 0.61803398875;
    
    for (var i = 0; i < numColors; i++) {
      var pastel = 'hsl(' + hue + ', 100%, 85%)';
      colors.push(pastel);
      
      hue += 360 * goldenRatio; // Increment the hue by the golden ratio
      hue %= 360; // Wrap the hue around if it goes over 360
    }
    
    return colors;
  }
  
  export default getRandomPastelArray;
  