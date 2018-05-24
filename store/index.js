export const state = () => ({
  online: false,
  drawer: false,
  students: [],
})

export const mutations = {
  setOnline(state, status) {
    state.online = status
  },
  setDrawer(state, status) {
    state.drawer = status
  },
  setstudents(state, data) {
    state.setstudents = data
  },
}

export const actions = {
}
