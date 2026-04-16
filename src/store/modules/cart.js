const state = {
    items: [],
    total: 0,
}

const getters = {
    cartItems: (state) => state.items,
    cartTotal: (state) => state.total,
    cartCount: (state) => state.items.length,
}

const mutations = {
    ADD_ITEM(state, item) {
        state.items.push(item)
        state.total += item.price * item.quantity
    },
    REMOVE_ITEM(state, index) {
        const item = state.items[index]
        state.total -= item.price * item.quantity
        state.items.splice(index, 1)
    },
    CLEAR_CART(state) {
        state.items = []
        state.total = 0
    },
    UPDATE_QUANTITY(state, { index, quantity }) {
        const item = state.items[index]
        const priceDifference = item.price * (quantity - item.quantity)
        item.quantity = quantity
        state.total += priceDifference
    },
}

const actions = {
    addItem({ commit }, item) {
        commit('ADD_ITEM', item)
    },
    removeItem({ commit }, index) {
        commit('REMOVE_ITEM', index)
    },
    clearCart({ commit }) {
        commit('CLEAR_CART')
    },
    updateQuantity({ commit }, payload) {
        commit('UPDATE_QUANTITY', payload)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
