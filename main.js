// NAVIGATION JS
const list = document.querySelectorAll( ".list" );

  function activeLink ()
  {
    list.forEach( ( item ) =>
      item.classList.remove( "active" ) );
    this.classList.add( "active" );
  }

  list.forEach( ( item ) =>
  item.addEventListener( "click", activeLink ) );
// NAVIGATION JS END

const layers = document.querySelectorAll(".layer");

// The column transition animation.
function collapse() {
  layers.forEach((layer) => {
    if (layer.classList.contains("active")) {
      layer.classList.remove("active");
    }
  });
}

function home() {
  collapse();
  layers[0].classList.add("active");
}

function about() {
  collapse();
  layers[1].classList.add("active");
}

function services() {
  collapse();
  layers[2].classList.add("active");
}

function portfolio() {
  collapse();
  layers[3].classList.add("active");
}

function blog() {
  collapse();
  layers[4].classList.add("active");
}

function contact() {
  collapse();
  layers[5].classList.add("active");
}

