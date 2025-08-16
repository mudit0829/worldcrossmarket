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
  document.querySelectorAll('.has-sub').forEach(li => {
    if (li !== el.parentElement) li.classList.remove('open');
  });
  el.parentElement.classList.toggle('open');
}

