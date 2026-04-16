<script>
import { NOTIFICATION_TYPES, ALL_CATEGORY } from '@/constants'

export default {
    name: 'MenuView',
    data() {
        return {
            ALL_CATEGORY
        }
    }
}
</script>

<template>
    <div class="menu-view">
        <h1>Menu</h1>
        <p>Categoria padrão: {{ ALL_CATEGORY }}</p>
    </div>
</template>

<style scoped>
.menu-view {
    padding: 20px;
    color: white;
}
</style>