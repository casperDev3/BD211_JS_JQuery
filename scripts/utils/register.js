const BASE_URL = "";

function initListenersOnPage() {
  //! get elements
  const REG_FORM = document.querySelector("#reg_form");
  //! add listeners to elemsnts
  //? actions after press "register"
  REG_FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const REG_DATA = getDataFromLoginForm();
    if (REG_DATA) {
      registerNewUser(REG_DATA);
    }
  });
}

function registerNewUser(data) {
  let requestOptions = {
    method: "POST",
    body: data,
    redirect: 'follow'
  };
  fetch(`${BASE_URL}/auth/local/register`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

function getDataFromLoginForm() {
  //! get elements
  const EMAIL = document.querySelector("#reg_email");
  const PASSWORD = document.querySelector("#reg_password");
  const CONFIRM_PASSWORD = document.querySelector("#reg_conf_password");

  //! check if passwords is twins:)
  if (CONFIRM_PASSWORD.value !== PASSWORD.value) {
    alert("Passwords aren't twins!");
    return null;
  }

  //! get and return data from elements
  return {
    email: EMAIL.value,
    password: PASSWORD.value,
    username: EMAIL.value,
  };
}

//! start point
document.addEventListener("DOMContentLoaded", () => {
  //! init
  initListenersOnPage();
});
