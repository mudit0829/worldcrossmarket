function loadPage(page) {
  fetch('pages/' + page)
    .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
      window.scrollTo(0, 0);
    })
    .catch(err => {
      document.getElementById('main-content').innerHTML = "<p>Error loading page.</p>";
    });
}

function toggleDropdown(el) {
  var li = el.parentElement;
  // If you want only one dropdown open at a time:
  document.querySelectorAll('.has-sub').forEach(function(other) {
    if(other !== li) other.classList.remove('open');
  });
  li.classList.toggle('open');
}
