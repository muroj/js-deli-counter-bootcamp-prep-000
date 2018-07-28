function takeANumber(deliLine, customerName) {
  deliLine.push(customerName);
  return 'Welcome, ' + customerName + ". You are number " + 
    (deliLine.length) + ' in line.';
}

function nowServing(deliLine) {
  
  if (deliLine.length > 0) {
    return `Currently serving ${deliLine.shift()}.`;
  } else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(deliLine) {
  
  if (deliLine.length > 0) {
    
    var announce = "The line is currently: ";
    
    for (let i = 0; i < deliLine.length; i++) {
      announce += (i + 1) + ". " + deliLine[i] + ", "
    }
    
    return announce;
    
  } else {
    return 'The line is currently empty.'
  }
}