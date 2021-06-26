const profilePicture = document.querySelector("#pfp")
const username = document.querySelector("#username")
const joined = document.querySelector("#joined")
const viewOnScratch = document.querySelector("#view-on-scratch")
const bio = document.querySelector("#bio")
const wiwo = document.querySelector("#wiwo")
const body = document.querySelector("body")
if (!window.location.hash) {
  window.location.replace("./")
}

body.classList.add("loading")

fetch(`https://scratchembed.vercel.app/api/user?user=${location.hash.substring(1)}`)
.then(res => res.json())
.then(res => {
  profilePicture.src = `https://cdn2.scratch.mit.edu/get_image/user/${res.id}_90x90.png`
  username.innerText = res.username
  joined.innerText = "Joined " + (new Date(res.history.joined)).toLocaleString()
  viewOnScratch.href = `https://scratch.mit.edu/users/${res.username}`
  bio.innerText = res.profile.bio
  wiwo.innerText = res.profile.status
  body.classList.remove("loading")
})