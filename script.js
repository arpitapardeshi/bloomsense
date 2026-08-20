/* =========================
   LOGIN / SIGN UP TABS
========================= */

function showForm(form) {

  const login = form === "login";


  document
    .getElementById("loginForm")
    .classList
    .toggle("hidden", !login);


  document
    .getElementById("signupForm")
    .classList
    .toggle("hidden", login);


  document
    .getElementById("loginTab")
    .classList
    .toggle("active", login);


  document
    .getElementById("signupTab")
    .classList
    .toggle("active", !login);
}


/* =========================
   EMAIL VALIDATION
========================= */

function isValidEmail(email) {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}


/* =========================
   LOGIN
========================= */

function loginUser() {

  const email =
    document
      .getElementById("loginEmail")
      .value
      .trim();


  const password =
    document
      .getElementById("loginPassword")
      .value;


  /* Check empty fields */

  if (email === "" || password === "") {

    alert("Please fill in all the fields.");

    return;
  }


  /* Check email */

  if (!isValidEmail(email)) {

    alert(
      "Please enter a valid email address, for example: example@gmail.com"
    );

    return;
  }


  /* Login successful */

  alert("Login successful!");

  goToHome();
}


/* =========================
   SIGN UP
========================= */

function signupUser() {

  const name =
    document
      .getElementById("signupName")
      .value
      .trim();


  const email =
    document
      .getElementById("signupEmail")
      .value
      .trim();


  const password =
    document
      .getElementById("signupPassword")
      .value;


  const confirmPassword =
    document
      .getElementById("confirmPassword")
      .value;


  /* Check Full Name */

  if (name === "") {

    alert("Please enter your full name.");

    return;
  }


  /* Check Email */

  if (email === "") {

    alert("Please enter your email address.");

    return;
  }


  /* Check Email Format */

  if (!isValidEmail(email)) {

    alert(
      "Please enter a valid email address, for example: example@gmail.com"
    );

    return;
  }


  /* Check Password */

  if (password === "") {

    alert("Please enter a password.");

    return;
  }


  /* Check Confirm Password */

  if (confirmPassword === "") {

    alert("Please confirm your password.");

    return;
  }


  /* Check Password Match */

  if (password !== confirmPassword) {

    alert("Password and Confirm Password must match.");

    return;
  }


  /* Sign Up Successful */

  alert("Sign Up successful!");

  goToHome();
}


/* =========================
   GO TO HOME
========================= */

function goToHome() {

  window.location.href = "home.html";
}