// make use of these helper function
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc ;
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc = element;
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

//clicking on enter button in home page will lead to the welcoming page
document.getElementById("enter").onclick = function () {
        location.href = "Welcome.html";
    };


function setCity() {
    var img = document.getElementById("city-image");
    img.src = this.value;
    return false;
}
document.getElementById("city").innerHTML = setCity;
  