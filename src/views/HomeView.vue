<template>
    <div class="home">

        <!-- HERO -->
        <section class="hero">
            <h1 class="title">Bem-vindo ao Cardápio Digital</h1>
            <p class="subtitle">Gerencie seu pedido de forma prática e rápida!</p>
        </section>

        <!-- CARDS -->
        <div class="container">
            <div class="row g-4">

                <!-- CARD 1 -->
                <div class="col-md-4">
                    <div class="custom-card">
                        <img src="/src/assets/chef.png" class="icon-img" />
                        <h3>Cardápio</h3>
                        <p>Confira nosso menu completo</p>
                        <button class="btn gold w-100">Ver Cardápio</button>
                    </div>
                </div>

                <!-- CARD 2 -->
                <div class="col-md-4">
                    <div class="custom-card">
                        <img src="/src/assets/cart.png" class="icon-img" />
                        <h3>Carrinho</h3>
                        <p>Veja os itens do seu carrinho</p>
                        <button class="btn purple w-100">Ver Carrinho</button>
                    </div>
                </div>

                <!-- CARD 3 -->
                <div class="col-md-4">
                    <div class="custom-card">
                        <img src="/src/assets/info.png" class="icon-img" />
                        <h3>Sobre</h3>
                        <p>Saiba mais sobre nós</p>
                        <button class="btn gold w-100">Mais Informações</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>