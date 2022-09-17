export function join(paths) {
  let out = ''
  for (let i = 0; i < paths.length; i++){
    if (out === '') {
      out = paths[i]
      continue
    }
    if (!out.endsWith('/')){
      out = out.concat('/')
    }
    out = out.concat(paths[i])
  }
  console.log({out })
  return out
}
