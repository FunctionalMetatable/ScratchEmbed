const profilePicture = document.querySelector("#pfp")
const username = document.querySelector("#username")
const joined = document.querySelector("#joined")
const viewOnScratch = document.querySelector("#view-on-scratch")
const bio = document.querySelector("#bio")
const wiwo = document.querySelector("#wiwo")

window.location.searchParams = new URLSearchParams(window.location.search)

if (!location.searchParams.get("user")) {
  window.location.replace("./")
}
fetch(`/api/user?user=${location.searchParams.get("user")}`)
.then(res => res.json())
.then(res => {
  profilePicture.src = `https://cdn2.scratch.mit.edu/get_image/user/${res.id}_90x90.png`
  username.innerText = res.username
  joined.innerText = "Joined " + (new Date(res.history.joined)).toLocaleString()
  viewOnScratch.href = `https://scratch.mit.edu/users/${res.username}`
  bio.innerText = res.bio
  wiwo.innerText = res.status
})