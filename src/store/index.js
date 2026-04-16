import { createStore } from 'vuex'
import authModule from './modules/auth'
import cartModule from './modules/cart'

export default createStore({
    modules: {
        auth: authModule,
        cart: cartModule,
    },
})
