const classifier = ml5.imageClassifier("MobileNet");

function uploadImage(event) {
  const preview = document.querySelector('#preview')
  preview.innerHTML = "";
  const file = event.target.files[0];
  const img = document.createElement("img");
  img.src = URL.createObjectURL(file);
  img.onload = () => URL.revokeObjectURL(img.src);
  preview.appendChild(img);
  classifier.classify(img, showResult);
}

function showResult(results) {
  const result = document.querySelector('#result')
  let html = `<table stype="border: 1px solid"><tr><th>Label</th><th>Confidence</th></tr>`
  results.forEach(e => {
    html += `<tr><td>${e.label}</td><td>${(Number(e.confidence) * 100).toFixed(3)}%</td></tr>`
  });
  html += '</table>'
  result.innerHTML = html
}
