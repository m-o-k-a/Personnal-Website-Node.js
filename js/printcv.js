function printCV() {
  var w = window.open('', 'PRINTCV', 'width=1064');
  w.document.write(
    '<head>'+
    '<meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
    '<link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">'+
    '<title></title>'+
    '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">'+
    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>'+
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>'+
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>'+
    '<link href="/cv.css" rel="stylesheet">'+
    '</head>'+
    '<body>'+
    '<main role="main" class="inner cover">'
  );
  w.document.write(document.getElementById('cv').innerHTML.replaceAll('<details>', '<details open>'));
  w.document.write('</main></body></html>');
  w.document.close(); // necessary for IE >= 10
  w.focus(); // necessary for IE >= 10
  w.onload = () => {
    w.print();
  }
  return true;
}

function printCVShort() {
  var w = window.open('', 'PRINTCV', 'width=1064');
  w.document.write(
    '<head>'+
    '<meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
    '<link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">'+
    '<title></title>'+
    '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">'+
    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>'+
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>'+
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>'+
    '<link href="/cv.css" rel="stylesheet">'+
    '</head>'+
    '<body>'+
    '<main role="main" class="inner cover">'
  );
  w.document.write(document.getElementById('cv').innerHTML.replaceAll('<details', '<details hidden = "true" ').replaceAll('<div class="Simple" hidden="true">', '<div class="Simple">'));
  w.document.write('</main></body></html>');
  w.document.close(); // necessary for IE >= 10
  w.focus(); // necessary for IE >= 10
  w.onload = () => {
    w.print();
  }
  return true;
}