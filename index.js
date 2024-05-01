const form = document.getElementById("form");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const img = document.getElementById("img");
const usernme = document.getElementById("name");
const loginn = document.getElementById("login");
const url = document.getElementById("url");
const blog = document.getElementById("blog");
const city = document.getElementById("city");
const email = document.getElementById("email");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const noneBox = document.getElementById("noneBox");
const infoBox = document.getElementById("infoBox");
const userNotFoundMessage = document.getElementById("userNotFoundMessage");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    noneBox.style.display = "block";
    const inputValue = input.value;
    console.log(inputValue);
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", `https://api.github.com/users/${inputValue}`);

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log(xhr.response);
        const responseData = xhr.response;
        img.src = responseData.avatar_url;
        usernme.innerHTML = responseData.name;
        loginn.innerHTML = responseData.login;
        url.href = responseData.url;
        url.textContent = responseData.url;
        blog.innerHTML = responseData.blog;
        city.innerHTML = responseData.location;
        email.innerHTML = responseData.email;
        followers.innerHTML = responseData.followers;
        following.innerHTML = responseData.following;
      } else {
        noneBox.style.display = "none";
        infoBox.style.display = "none";
        userNotFoundMessage.style.display = "block";
      }
    };

    xhr.send();
  });
});
