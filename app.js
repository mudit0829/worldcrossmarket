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

function toggleDropdown(elem) {
  const submenu = elem.nextElementSibling;
  document.querySelectorAll('.submenu').forEach(sm => {
    if (sm !== submenu) sm.style.display = 'none';
  });
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}
