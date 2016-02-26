export default async (id) => {
  return (await doit(id)) || (await doit(1))
}

async function doit (id) {
  return await Promise.resolve(id)
}
