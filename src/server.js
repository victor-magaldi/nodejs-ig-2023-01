import http from "node:http"

const users = []
const server = http.createServer(async (req, res) => {
  const { method, url } = req
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())

  } catch {
    req.body = null
  }


  if (method === "GET" && url === "/users") {
    return res
      .setHeader('content-type', 'application/json')
      .end(JSON.stringify(users))
  }
  if (method === "POST" && url === "/users") {
    const { name, email } = req.body

    const user = {
      id: 1,
      name: name,
      email: email
    }
    users.push(user)
    return res.writeHead(201).end()
  }
})
server.listen(3333)