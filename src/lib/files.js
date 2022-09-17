const baseUrl = `http://localhost:8080/browse/`
export { baseUrl }

export async function fetchFiles(path) {
  const res = await fetch(baseUrl + path)
  switch (res.status) {
    case 200:
      const json = await res.json()
      console.log(json)
      return [json, undefined]
    case 404:
      return [{}, 'This path do not exists']
    default:
      return [{}, 'Ops! Something went wrong.']
  }
}
export async function deleteFile(path) {
  console.log(path)
  const res = await fetch(baseUrl + path, {
    method: "delete",
  })
  switch (res.status) {
    case 200:
      return undefined
    default:
      return 'Ups! Something went wrong trying to delete the file.'
  }
}
export async function createFolder(path) {
  console.log({ baseUrl })
  const params = new URLSearchParams([['type', 'folder']])
  const _url = new URL(path, baseUrl)
  const url = `${_url}?${params}`
  const res = await fetch(url, {
    method: "post"
  })
  switch (res.status) {
    case 201:
      return
    case 400:
      return 'There is already a folder with that name'
    default:
      return 'Ups! Something went wrong trying create the folder.'
  }
}
