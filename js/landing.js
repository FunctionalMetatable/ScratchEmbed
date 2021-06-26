let button = document.getElementById("changeIframeBtn")
let preview = document.getElementById("preview")
let textbox = document.getElementById("textbox")
let div = document.querySelector(".main")


button.addEventListener("click", (e) => {
  preview.innerHTML = ``
  let frame = document.createElement("iframe")
  frame.width = "500px"
  frame.height = "500px"
  frame.src = `user.html#${textbox.value}`

  frame.classList.add("rounded-xl")

  preview.appendChild(frame)
})

function resize() {
  div.style.height = window.innerHeight
}

resize()

window.addEventListener("resize", resize)