const correctUsername = "admin@xtennynix2009";
const correctPassword = "admin@xtennynix2009123";

const loginForm = document.getElementById('loginForm');
const loginContainer = document.getElementById('loginContainer');
const categoryContainer = document.getElementById('categoryContainer');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === correctUsername && password === correctPassword) {
    loginContainer.classList.add('hidden');
    categoryContainer.classList.remove('hidden');
  } else {
    loginMessage.textContent = "Invalid username or password!";
  }
});

const entries = [];
const entryForm = document.getElementById('entryForm');
const resultList = document.getElementById('resultList');

entryForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const category = document.getElementById('category').value;
  const note = document.getElementById('note').value;

  entries.push({ name, category, note });

  updateResultList();
  entryForm.reset();
});

function updateResultList() {
  resultList.innerHTML = '';
  entries.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. [${entry.category}] ${entry.name}: ${entry.note}`;
    resultList.appendChild(listItem);
  });
}
