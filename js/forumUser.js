const profilePicture = document.querySelector("#pfp")
const username = document.querySelector("#username")
const joined = document.querySelector("#joined")
const viewOnScratch = document.querySelector("#view-on-scratch")
const totalPosts = document.querySelector("#total-posts")
const flex = document.querySelector("#flex")

if (!window.location.hash) {
  window.location.replace("./")
}
fetch(`https://scratchembed.vercel.app/api/user?user=${location.hash.substring(1)}`)
.then(res => res.json())
.then(res => {
  profilePicture.src = `https://cdn2.scratch.mit.edu/get_image/user/${res.id}_90x90.png`
  username.innerText = res.username
  viewOnScratch.href = `https://scratch.mit.edu/users/${res.username}`
  fetch(`https://scratchdb.lefty.one/v3/forum/user/info/${location.hash.substring(1)}`)
  .then(response => response.json())
  .then(forumRes => {
    if (forumRes && !forumRes.error && forumRes.counts) {
      totalPosts.innerText = forumRes.counts.total.count + ' posts'

      // Create elements for ranks
      let i = 0;
      var row;
      for (let j in forumRes.counts) {
        if (i / 4 == Math.floor(i / 4)) {
          row = document.createElement("div")
          row.classList.add("row")
          flex.appendChild(row)
        }
        if (j == 'total') continue;
        let forum = forumRes.counts[j]
        
        let div = document.createElement("div")
        div.classList.add("col")
        div.classList.add("p-2")
        div.classList.add("w-1/2")
        div.classList.add("bg-blue-800")
        div.classList.add("m-2")


          let title = document.createElement("h3")
          title.classList.add("text-xl")
          title.classList.add("text-gray-100")
          title.innerText = j
          div.appendChild(title)

          let postCount = document.createElement("p")
          postCount.classList.add("text-md")
          postCount.classList.add("text-gray-900")
          postCount.innerText = forum.count
          div.appendChild(postCount)
        
        row.appendChild(div)
        i++
      }
    }
  })
})