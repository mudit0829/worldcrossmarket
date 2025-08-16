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
  const li = el.parentElement;
  li.classList.toggle('open');

  // Optional: Close others
  document.querySelectorAll('.sidebar-menu > li.open').forEach(otherLi => {
    if (otherLi !== li) {
      otherLi.classList.remove('open');
    }
  });
}
