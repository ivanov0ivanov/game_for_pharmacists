<template>
    <section>
        <div class="ellipse_container">
            <div>
                <p class="welcome">Ласкаво просимо до гри</p>
                <h2 class="title">Допоможи <br> <span>фармацевту</span></h2>
            </div>
            <router-link :to="{ path: 'main' }" class="btn-start">Почати</router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: "EllipseStart"
    }
</script>

