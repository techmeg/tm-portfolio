const slidingElements = document.querySelectorAll('.project-snippet-info');
const projects = document.querySelectorAll('.project-snippet');

    // limits the number of times scroll listener is called
    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

    const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    
    return (
        elementTop <= (window.innerHeight-100 || document.documentElement.clientHeight-100)
    );
    };
function slideElement(e) {


      projects.forEach(project => {
          const projInView = elementInView(project);
          const info = project.lastElementChild;

          if(projInView){
            info.classList.add('reveal')
          }
        // const projBottom = project.offsetTop + project.clientHeight;
        // const slideInAt = (window.scrollY + window.innerHeight) - project.clientHeight / 2;
        // const isHalfShown = slideInAt > PromiseRejectionEvent.offsetTop;
        // const isNotScrolledPast = window.scrollY < projBottom;
        // const info = project.lastElementChild;
        // if(isHalfShown && isNotScrolledPast) {
        //    info.classList.add('revealed')
        // } 
    });

}

window.addEventListener('scroll', debounce(slideElement));