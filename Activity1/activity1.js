// 1
document.querySelector('#more-results') && (document.querySelector('#more-results').textContent = 'More redundant Results!');

// 2
console.log('Number of <li> tags:', document.querySelectorAll('li').length);

// 3
const searchInput = document.querySelector('#search_form_input') || document.querySelector('input[type="text"]');
console.log('Search bar value:', searchInput ? searchInput.value : 'Search input not found');

// 4
const logo = document.querySelector('.header__logo') || document.querySelector('img[alt*="DuckDuckGo"]');
if (logo) {
  logo.style.display = 'none';
  console.log('Duck logo hidden');
} else {
  console.log('Logo not found');
}