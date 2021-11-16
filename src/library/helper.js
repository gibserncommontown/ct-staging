export function getReq(param) {
  if (typeof window === `undefined` || typeof param !== "string") return ""

  let urlString = window.location.href
  let breakUrl = urlString.split("?", 1)
  if (breakUrl.length === 1) return ""

  let paramsString = breakUrl[1].split("&")
  let value = ""

  paramsString.map(paramString => {
    let inputx = paramString.split("=", 1)
    if (inputx.length === 2 && inputx[0] === param) value = inputx[1]

    return null
  })

  return value
}

export function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function getPathClass() {
  if (typeof window === `undefined`) return ""

  let { pathname } = window.location
  let paths = pathname.split("/").filter(p => p.trim() !== "")
  return paths.join(" ")
}
