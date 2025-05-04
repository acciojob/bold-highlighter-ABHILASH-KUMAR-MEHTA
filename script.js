function highlight() {
  const strongTags = document.querySelectorAll('strong');
  strongTags.forEach(tag => {
    tag.style.color = 'rgb(0, 128, 0)'; // green
  });
}

function return_normal() {
  const strongTags = document.querySelectorAll('strong');
  strongTags.forEach(tag => {
    tag.style.color = 'rgb(0, 0, 0)'; // black
  });
}
