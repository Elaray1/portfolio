window.onload = function() {
  var isFramed = false;
  try {
  	isFramed = window != window.top || document != top.document || self.location != top.location;
  } catch (e) {
  	isFramed = true;
  }
  const dmb = document.querySelector('.desctop-mobile-back');
  if (isFramed || (document.body.clientWidth + 17) <= 640) {
    dmb.style.display = 'none';
  }

  const dmButton = document.getElementById('desctop-mobile');
  const iframe = document.getElementById('mobile-wrapper');
  const text = document.querySelector('#desctop-mobile p');
  iframe.style.display = 'none';
  dmButton.addEventListener('click', () => {
    if (iframe.style.display == 'none') {
      iframe.style.display = 'block';
      text.textContent = 'Desktop';
    } else {
      iframe.style.display = 'none';
      text.textContent = 'Mobile';
    }
  });
}
