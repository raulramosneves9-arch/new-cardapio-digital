<template>
    <div class="home">

        <!-- HERO -->
        <section class="hero text-center">
            <div class="container">
                <h1 class="title">Bem-vindo ao Cardápio Digital</h1>
                <p class="subtitle">Gerencie seu pedido de forma prática e rápida!</p>
            </div>
        </section>

        <!-- CARDS -->
        <section class="container mt-5">
            <div class="row g-4">

                <div class="col-md-4">
                    <div class="custom-card text-center">
                        <div class="icon">👨‍🍳</div>
                        <h3>Cardápio</h3>
                        <p>Confira nosso menu completo</p>
                        <button class="btn gold w-100">Ver Cardápio</button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="custom-card text-center">
                        <div class="icon">🛒</div>
                        <h3>Carrinho</h3>
                        <p>Veja os itens do seu carrinho</p>
                        <button class="btn purple w-100">Ver Carrinho</button>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="custom-card text-center">
                        <div class="icon">ℹ️</div>
                        <h3>Sobre</h3>
                        <p>Saiba mais sobre nós</p>
                        <button class="btn gold w-100">Mais Informações</button>
                    </div>
                </div>

            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>

<style scoped></style>
