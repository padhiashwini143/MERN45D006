{/* <script>
  // Switch between login and register forms
  function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }

  function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
  }

  // Register form submit
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Store data in localStorage
    const userData = {
      name: name,
      email: email,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registration successful! Please login.");
    showLogin();
  });

  // Login form submit
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please register first.");
      return;
    }

    if (loginEmail === storedUser.email && loginPassword === storedUser.password) {
      alert(`Welcome, ${storedUser.name}! You have successfully logged in.`);
      // You can redirect or do something after login here
    } else {
      alert("Invalid email or password.");
    }
  });
</script> */}

































const form=document.querySelector("form");
const inputs=document.getElementsByTagName("input");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=inputs[0].value;
    const email=inputs[1].value;
    const pass=inputs[2].value;

    localStorage.setItem()
}