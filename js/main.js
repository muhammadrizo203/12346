fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(json =>{
  console.log(json[0].thumbnailUrl);

  var img = document.getElementById('img');
  var img1 = document.getElementById('img1');
  var img2 = document.getElementById('img2');
  var img3 = document.getElementById('img3');
  var img4 = document.getElementById('img4');
  var p = document.getElementById('p');
  var p1 = document.getElementById('p1');
  var p2 = document.getElementById('p2');
  var p3 = document.getElementById('p3');
  var p4 = document.getElementById('p4');

  var div1 = document.getElementById('div1');
  
  img4.setAttribute('src', json[0].thumbnailUrl);
  img3.setAttribute('src', json[0].thumbnailUrl);
  img2.setAttribute('src', json[0].thumbnailUrl);
  img1.setAttribute('src', json[0].thumbnailUrl);
  img.setAttribute('src', json[0].thumbnailUrl);

  p.innerText = json[0].title;
  p1.innerText = json[0].title;
  p2.innerText = json[0].title;
  p3.innerText = json[0].title;
  p4.innerText = json[0].title;

  img.style.width = "100%";
  img.style.height = "35vh";

  img1.style.width = "100%";
  img1.style.height = "35vh";

  img2.style.width = "100%";
  img2.style.height = "35vh";
  
  img3.style.width = "100%";
  img3.style.height = "35vh";
  
  img4.style.width = "100%";
  img4.style.height = "35vh";

  div1.appendChild(h1);
  div1.appendChild(img);
  div1.appendChild(img1);
  div1.appendChild(img2);
  div1.appendChild(img3);
  div1.appendChild(img4);
})
function qush(){
    var s = 0;
    var span1 = document.getElementById('span1')
    var s = span1.innerText * 1;
    span1.innerText = ++s;
}
function yoz(){
    var s = 0;
    var span2 = document.getElementById('span2')
    var s = span1.innerText * 1;
    span2.innerText = ++s;
}
