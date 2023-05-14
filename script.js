function OpenNav() {
  var nav = document.getElementsByClassName("ul-nav");
  Array.from(nav).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
}

const observerOptions = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("inview");
      observer.unobserve(entry.target);
    }
  })
}, observerOptions);

window.addEventListener("DOMContentLoaded", (event) => {
  const sections = Array.from(document.querySelectorAll(".observable"));

  for(let section of sections){
    observer.observe(section);
  }
});