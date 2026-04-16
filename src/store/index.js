import { createStore } from 'vuex'
import authModule from '@/store/modules/auth'
import cartModule from '@/store/modules/cart'

export default createStore({
    modules: {
        auth: authModule,
        cart: cartModule,
    },
})
