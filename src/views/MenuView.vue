<script>
import MenuForm from '@/components/MenuForm.vue'
import { fetchSuggestions } from '@/services/api'
import { NOTIFY, ALL_CATEGORY } from '@/constants'

export default {
    name: 'MenuView',
}
</script>

<template>
    <div class="menu-view">
        <h1>Menu</h1>
    </div>
</template>

<style scoped></style>