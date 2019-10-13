<template>
    <section>
        <router-link :to="{path: '/'}" class="btn-home gradient">
            <font-awesome-icon icon="home"></font-awesome-icon>
        </router-link>
        <div class="total_container">
            <div class="total-share_container">
                <div v-for="drug of drugs" :key="drug.id" class="total-share">
                    <p class="this-share">{{100 / people.length * drug.sold}}%</p>
                    <p class="this-drug">{{drug.name}}</p>
                </div>
            </div>
            <div class="total-header_container">
                <div class="total_title">
                    <p>Ваш результат:</p>
                    <h2>«Що я тут роблю?»</h2>
                </div>
                <div class="total_description">
                    <p>Это тестовое задание,
                        так что не будем углубляться в глубины проблем фармацевтов.</p>
                </div>
            </div>
            <router-link :to="{ path: 'main' }" class="btn-repeat">Спробувати ще</router-link>
        </div>
    </section>
</template>

<script>
    import {mapGetters} from "vuex"
    export default {
        name: "TotalShare",
        computed: mapGetters({
            people: 'getPeople',
            drugs: 'getDrugs'
        })
    }
</script>

<style scoped>

</style>
