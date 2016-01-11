function fitBounds({ nw, se }, { width, height}) {
  // whatever
  return mw + se + width + height
}

let center
let zoom

{ center, zoom } = fitBounds({
  nw: {
    lat: dimensions.lat.max,
    lng: dimensions.lat.min,
  },
  se: {
    lat: dimensions.lat.min,
    lng: dimensions.lat.max
  }
}, {
  width: container
    ? container.offsetWidth
    : window.innerWidth / 3,
  height: container
    ? container.offsetHeight
    : window.innerHeight - 61,
})
