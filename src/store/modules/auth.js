const state = {
    user: null,
    isAuthenticated: false,
    token: null,
}

const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
}

const mutations = {
    SET_USER(state, user) {
        state.user = user
    },
    SET_AUTHENTICATED(state, isAuthenticated) {
        state.isAuthenticated = isAuthenticated
    },
    SET_TOKEN(state, token) {
        state.token = token
    },
    LOGOUT(state) {
        state.user = null
        state.isAuthenticated = false
        state.token = null
    },
}

const actions = {
    login({ commit }, { user, token }) {
        commit('SET_USER', user)
        commit('SET_TOKEN', token)
        commit('SET_AUTHENTICATED', true)
    },
    logout({ commit }) {
        commit('LOGOUT')
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
