// const cartButton = document.querySelector("#cart-button");
// const modal = document.querySelector(".modal");
// const close = document.querySelector(".close");

// cartButton.addEventListener("click", toggleModal);
// close.addEventListener("click", toggleModal);

// function toggleModal() {
//   modal.classList.toggle("is-open");
// }

// авторизация
const authorization = () => {
  const buttonAuth = document.querySelector('.button-auth'),
    modalAuth = document.querySelector('.modal-auth'),
    closeAuthBtn = document.querySelector('.close-auth'),
    loginForm = document.querySelector('#logInForm'),
    loginInput = document.querySelector('#login');

  let login = localStorage.getItem('login');

  const toggleAuth = () => {
    modalAuth.classList.toggle('is-open');
  };

  const authorized = () => {
    const username = document.querySelector('.user-name'),
      buttonOut = document.querySelector('.button-out');

    const logOut = () => {
      login = null;
      localStorage.removeItem('login');
      buttonAuth.style.display = '';
      username.style.display = '';
      buttonOut.style.display = '';
      buttonOut.removeEventListener('click', logOut)
      checkAuth();
    }

    username.textContent = login;

    buttonAuth.style.display = 'none';
    username.style.display = 'inline';
    buttonOut.style.display = 'block';

    buttonOut.addEventListener('click', logOut)

  };

  const notAuthorized = () => {
    const logIn = (event) => {
      event.preventDefault();

      if (loginInput.value === '') {
        const hint = document.createElement('div');
        hint.style.cssText = 'font-size: 10px; color: red;'
        hint.textContent = 'Введите ваш логин!'
        loginInput.insertAdjacentElement('afterend', hint);
        return;
      }


      login = loginInput.value;

      localStorage.setItem('login', login);

      toggleAuth();

      buttonAuth.removeEventListener('click', toggleAuth);
      closeAuthBtn.removeEventListener('click', toggleAuth);

      loginForm.removeEventListener('submit', logIn);
      loginForm.reset();
      checkAuth();
    }

    buttonAuth.addEventListener('click', toggleAuth);
    closeAuthBtn.addEventListener('click', toggleAuth);

    loginForm.addEventListener('submit', logIn);
  };

  const checkAuth = () => {
    if (login) {
      authorized();
    } else {
      notAuthorized();
    }
  }

  checkAuth();
};

authorization();