function onRun(context){
  //input
  var doc = context.document;
  var svgName = [doc askForUserInput:"Hvilket ikon vil du ha?" initialValue:"nrk-bell--active"];

  var svgImporter = MSSVGImporter.svgImporter();
  //var svgName = 'nrk-bell--active';
  var svgURL = NSURL.URLWithString('https://static.nrk.no/core-icons/latest/' + svgName + '.svg');
  //var svgURL = NSURL.fileURLWithPath("/Users/n20729/Downloads/" +svgName + ".svg");
  svgImporter.prepareToImportFromURL(svgURL);
  var svgLayer = svgImporter.importAsLayer();
  svgLayer.setName(svgName);
  if (doc.currentPage().currentArtboard() == null) {
    doc.currentPage().addLayers([svgLayer]);
  }  else {
    doc.currentPage().currentArtboard().addLayers([svgLayer]);
  }

  //log(context.document.currentPage().name);

  //scale icon
  var frame = [svgLayer frame],
      width = [frame width],
      height = [frame height],
      dim = 30;

  if (width>height) {
    var aspect = width/height;
    [frame setWidth:(dim)];
    [frame setHeight:(dim/aspect)];
  } else {
    var aspect = height/width;
    [frame setWidth:(dim/aspect)];
    [frame setHeight:(dim)];
  }




}
