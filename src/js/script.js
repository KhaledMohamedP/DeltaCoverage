var precentageRegex = /[0-9\.]{0,}%/;

$('#send').click(function(e) {
  var result = [];
  var dev = $('#dev').val().split(/\n/);
  var branch = $('#branch').val().split(/\n/);
  for (var i = 0; i < dev.length; i++) {
    var devPrecentage = dev[i].match(precentageRegex);
    var branchPrecentage = branch[i].match(precentageRegex);

    if (devPrecentage && branchPrecentage) {
      // Remove Precentage
      devPrecentage = removePrecentageToNum(devPrecentage[0]);
      branchNumber = removePrecentageToNum(branchPrecentage[0]);
      // Get result
      var total = Number(branchNumber) - Number(devPrecentage);
      // Clean up the total
      total = total.toFixed(2);
      // Formating
      var totalStr = total > 0 ? '+' + total : total;
      totalStr = totalStr+'%';
      var loc;
      resultLine = dev[i].replace(precentageRegex, function(f, i){
        loc = i;
  return totalStr;
});
      result.push(resultLine.substring(0, loc+totalStr.length));
    }
  }

  $('#result').val(result.join('\n'));
});


function removePrecentageToNum(str) {
  return Number(str.substring(0, str.length - 1));
}

function strToNumber(str) {
  return Number(str);
}
