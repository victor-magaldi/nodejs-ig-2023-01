export function buildRoutePath(path) {
  const routeParamsRegex = /:([a-zA-Z]+)/g

  console.log(Array.from(path.matchAll(routeParamsRegex)))
}