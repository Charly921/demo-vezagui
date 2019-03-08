function showMyImage(fileInput) {
  var files = fileInput.files;
  for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var imageType = /image.*/;
      if (!file.type.match(imageType)) {
          continue;
      }
      var container = fileInput.parentNode;
      container.file = file;
      var reader = new FileReader();
      reader.onload = (function(aImg) {
          return function(e) {
              container.style.backgroundImage = `url(${e.target.result})`;
          };
      })(container);
      reader.readAsDataURL(file);
  }
}