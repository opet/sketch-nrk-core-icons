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

  context.document.currentPage().addLayers([svgLayer]);

  //scale icon
  var frame = [svgLayer frame],
      width = [frame width],
      height = [frame height],
      dim = 30;
  var aspect = width/height;
  if (width>height) {
    [frame setWidth:(dim)];
    [frame setHeight:(dim/aspect)];
  } else {
    [frame setWidth:(dim)];
    [frame setHeight:(dim*aspect)];
  }


  log(svgLayer);
  //svgLayer setWidth:(100);
  //svgLayer.setHeight(100);

}
