export default store => {
  console.log('触发了plugin')
  if (localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    console.log('处罚了subscribe')
    localStorage.state = JSON.stringify(state)
  })
}
