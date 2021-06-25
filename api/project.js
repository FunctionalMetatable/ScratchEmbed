const fetch = require("node-fetch")

export default async function(req, res) {
  let resp = await fetch(`https://api.scratch.mit.edu/projects/${req.query.id}`)
  let json = await resp.json()

  res.setHeader("Access-Control-Allow-Origin", "*")
  res.json(json)
}