// Codigo que vai no formulario

<script>
    const scriptURL = ""
    const form = document.forms['google-sheet1']

    form.addEventListener('submit', e =>{
    e.preventDefault()

    fetch(scriptURL, {method: 'POST', body: FormData(form)})
    .then(response => $("#form_alerts").html("<div class='alert alert-success'> Mensagem enviada com sucesso </div> "))
    .catch(error => $("#form_alerts").html("<div class='alert alert-danger'> Erro ao enviar mensagem </div>"))
    })
</script>



// Codigo que vai no google

var sheetName = "sheet1"
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup(){
  var activeSpreadsheets = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheets.getId())
}

function doPost (e){
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try{
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1,1,1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var nextRow = headers.map(function(header){
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, nextRow.length).setvalues[header]

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow}))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch(e){
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error':e}))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}