function doGet(){
  var template = HtmlService.createTemplateFromFile('principalView');
  template.appUrl = 'https://script.google.com/macros/s/AKfycbxoAK-CfVyU87ACzplnMRbTF2_W_T762yQrCrPgEUsm/dev';
  var output = template.evaluate();
  return output;
}

function include(filename) { 
  //Esta función nos permite inyectar los archivos adicionales html de CSS y JS al principal nuevoIngreso.html
  return HtmlService.createHtmlOutputFromFile(filename) //se devuelve el archivo html de css o js al principal
  .getContent(); //Se obtiene el contenido
}