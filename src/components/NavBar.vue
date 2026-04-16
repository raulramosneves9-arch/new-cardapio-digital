<template>
    <nav class="navbar navbar-expand-lg custom-navbar">
        <div class="container">

            <a class="navbar-brand text-light fw-bold" href="#">
                🍽️ Cardápio Digital
            </a>

            <div class="collapse navbar-collapse justify-content-center">
                <ul class="navbar-nav gap-4">
                    <li class="nav-item"><a class="nav-link" href="#">Cardápio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Carrinho</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Sobre</a></li>
                </ul>
            </div>

            <button class="btn btn-login">Entrar</button>

        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>