function takeANumber(deliLine, customerName) {
  deliLine.push(customerName);
  return deliLine.length + 1;
}

function nowServing(deliLine) {
  
  if (deliLine.length > 0) {
    return 'Currently serving ' + deliLine.shift();
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(deliLine) {
  if (deliLine.length > 0) {
    var prefix = "The line is currently: ";
    for (let i = 0; i < deliLine.length; i++) {
      prefix += i + ". " + deliLine[i] + ","
    }
  } else {
    return 'The line is currently empty.'
  }
}