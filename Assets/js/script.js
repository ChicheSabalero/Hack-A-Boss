document.getElementById('link-shadows').addEventListener('click', function(event) {
    scrollToArticle('shadows', event);
  });
  
  document.getElementById('link-future').addEventListener('click', function(event) {
    scrollToArticle('future', event);
  });
  
  document.getElementById('link-interstellar').addEventListener('click', function(event) {
    scrollToArticle('interestelar', event);
  });
  
  document.getElementById('link-dogs').addEventListener('click', function(event) {
    scrollToArticle('dogs', event);
  });
  
  document.getElementById('link-shining').addEventListener('click', function(event) {
    scrollToArticle('shining', event);
  });
  
  function scrollToArticle(articleId, event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
    const article = document.getElementById(articleId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = article.offsetTop - headerHeight;
  
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  
    // Ajustar el desplazamiento para asegurarse de que el artículo esté completamente visible
    const headerOffset = headerHeight + 20; // Ajusta el valor si es necesario
    window.scrollBy(0, -headerOffset);
  }
  