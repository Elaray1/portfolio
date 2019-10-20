window.onload = function() {

  let expansionPanel = document.getElementById('expansion-panel');
  let educationInfo = document.getElementById('education-info');
  educationInfo.style.display = 'none';

  expansionPanel.addEventListener('click', () => {
    if (educationInfo.style.display == 'none') {
      educationInfo.style.display = 'block';
    } else {
      educationInfo.style.display = 'none';
    }
  });

  var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

  const left = document.querySelector('.swiper-button-prev');
  const right = document.querySelector('.swiper-button-next');

  if (document.body.clientWidth <= 640) {
    left.style.display = 'none';
    right.style.display = 'none';
  }




  let descriptionButton = document.querySelectorAll('.show-description-button');
  let showHide = document.querySelectorAll('.show-description-mobile p span');
  console.log(showHide);
  let content = document.querySelectorAll('.slider_content_block div.content');
  let image = document.querySelectorAll('.slider_content_block a img');
  descriptionButton.forEach((btn) => {
    btn.addEventListener('click', () => {
      showHide.forEach((showHide) => {
        if (showHide.textContent == 'Show') {
          showHide.textContent = 'Hide';
          content.forEach((elem) => {
            elem.style.display = 'block';
          });
          image.forEach((elem) => {
            elem.style.display = 'none';
          });
        } else {
          showHide.textContent = 'Show';
          content.forEach((elem) => {
            elem.style.display = 'none';
          });
          image.forEach((elem) => {
            elem.style.display = 'block';
          });
        }
      })
    });
  });

}
