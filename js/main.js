 /**
  * as we scroll we need to check 
  * if a certain box is in the viewport
  * when a box comes visible we need it 
  * to come from the right/left
  * With JS we add dynamically a class 
  * called show which will add a transform
  * to bring it in. Initially hidden.
  */

const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

//Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);