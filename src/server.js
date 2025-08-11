import http from "node:http"

const users = []
const server = http.createServer((req, res) => {
  const { method, url } = req
  console.log(method, url)
  if (method === "GET" && url === "/users") {
    return res
      .setHeader('content-type', 'application/json')
      .end(JSON.stringify(users))
  }
  if (method === "POST" && url === "/users") {
    const user = {
      id: 1,
      name: "John Doe",
      email: "john@teste.com"
    }
    users.push(user)
    return res.writeHead(201).end()
  }
})
server.listen(3333)