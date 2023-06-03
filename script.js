document.addEventListener("DOMContentLoaded", function handleCollapse() {
  let coll = document.getElementsByClassName("collapsible");
  let i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      console.log("hello");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
        content.style.maxHeight = content.scrollHeight + "px";
      }
      // if (content.style.maxHeight) {
      //   content.style.maxHeight = null;
      // } else {
      //   content.style.maxHeight = content.scrollHeight + "px";
      // }
    });
  }
});

///////////////////////////////////////////////////////////
// sticky navigation

const heroSectionEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);
