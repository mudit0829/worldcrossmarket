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
  li.classList.toggle('open');
  // Optionally, close others:
  document.querySelectorAll('.has-sub').forEach(function(other) {
    if (other !== li) other.classList.remove('open');
  });
}
