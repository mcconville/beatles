function initialize(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          
            console.log(xhttp.responseText);

            var carousel = document.getElementById('my-keen-slider');

            var data = JSON.parse(xhttp.response);

            data.forEach(function(item){

                var slide = document.createElement('div');
                slide.className = 'keen-slider__slide';

                var pic = document.createElement('bandpic-element');
                pic.setAttribute('image', './images/'+ item.image);
                // pic.image = './images/'+ item.image;

                slide.appendChild(pic);
                carousel.appendChild(slide);
            })

            var slider = new KeenSlider('#my-keen-slider', {
                loop: true,
                autoHeight:true,
                created: function(instance) {
                    var dots_wrapper = document.getElementById("dots");
                    var slides = document.querySelectorAll(".keen-slider__slide");
                    slides.forEach(function(t, idx) {
                      var dot = document.createElement("button");
                      dot.classList.add("dot");
                      dots_wrapper.appendChild(dot);
                      dot.addEventListener("click", function() {
                        instance.moveToSlide(idx);
                      });
                    });
                    updateClasses(instance);
                },
                slideChanged(instance) {
                    updateClasses(instance);
                }
            })
        }
    };
    xhttp.open("GET", "./data/timeline.json", true);
    xhttp.send();
}

function updateClasses(instance) {
    var slide = instance.details().relativeSlide;
    // var arrowLeft = document.getElementById("arrow-left");
    // var arrowRight = document.getElementById("arrow-right");
    // slide === 0
    //   ? arrowLeft.classList.add("arrow--disabled")
    //   : arrowLeft.classList.remove("arrow--disabled");
    // slide === instance.details().size - 1
    //   ? arrowRight.classList.add("arrow--disabled")
    //   : arrowRight.classList.remove("arrow--disabled");

    var dots = document.querySelectorAll(".dot");
    dots.forEach(function(dot, idx) {
      idx === slide
        ? dot.classList.add("dot--active")
        : dot.classList.remove("dot--active");
    });
  }