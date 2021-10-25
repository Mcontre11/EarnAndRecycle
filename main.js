// html 5 can access location if user allows it ***

// not sure how to exactly go about this but here is an idea 
let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",  { fps: 10, qrbox: {width: 250, height: 250} },
  /* verbose= */ false);
  
// add event listener for two inputs. 
// 1 is the QRSCAN
// 2 is the BARCODESCAN
let QRSCAN = document.addEventListener('QRscan',onScanSuccess)
let BARCODESCAN= document.addEventListener('BarCdscan',onScanGo)


const html5QrCode = new Html5Qrcode(/* element id */ "reader");
html5QrCode.start(
  cameraId, 
  {
    fps: 10,    // Optional, frame per seconds for qr code scanning
    qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
  },
  (decodedText, decodedResult) => {
    // do something when code is read
  },
  (errorMessage) => {
    // parse error, ignore it.
  })
.catch((err) => {
  // Start failed, handle it.
});
// this is the fist scanner 
if (onScanSuccessOne){
function onScanSuccess(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}
// this is the 2nd scanner 
if (onScanSuccessTwo){
  function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }


function onScanFailure(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}
}
else if (onScanGo)
function onScanGo(decodedText, decodedResult) {
  // handle the scanned code as you like, for example:
  console.log(`Code matched = ${decodedText}`, decodedResult);
}

function onScanFai(error) {
  // handle scan failure, usually better to ignore and keep scanning.
  // for example:
  console.warn(`Code scan error = ${error}`);
}
 
// next I will create a true or false statement to check if the user succesfully scanned both items and if true then points will add up 

// if function onScanSuccessOne and
// if function onScanSuccesstwo are succesfull then fun function addPoints
function addPoints(){
  counter ++
}

// once both datas are retrieved we can output a point system
// // it will start at 0 and add on every time the functions run and match 
// fetch () $onScanSuccess $onScanGo = i++ count[0]

// the point system will be stored and after x amount of points then a reward can be redeemed
