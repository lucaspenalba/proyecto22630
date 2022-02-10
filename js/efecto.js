var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
          nav.classList.add('navegacion');
        } else {
          nav.classList.remove('navegacion');
        }
      });