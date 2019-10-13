<template>
    <div class="action_header_container">
        <header class="action_header">
            <section>
                <header>
                    <div class="controls">
                        <router-link :to="{path: '/'}" class="btn-home">
                            <font-awesome-icon icon="home"></font-awesome-icon>
                        </router-link>
                        <button type="button" class="btn-update">
                            <font-awesome-icon icon="sync"></font-awesome-icon>
                        </button>
                    </div>
                </header>
                <main>
                    <div class="config">
                        <h2>Параметри:</h2>
                        <div class="counter">

                            <div class="wrap-line">
                                <div :class="drug.class" v-for="drug of drugs" :key="drug.id">
                                    <img :src="drug.icon" alt="ico">
                                    <div class="this-count">{{drug.sold}}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
                <footer>
                    <div class="left-in-line_container">
                        <div class="mask-footer"></div>
                        <div class="left-in-line">
                            <p>Залишилось в черзі:</p>
                            <p>
                                <span class="bold">{{restPeople}}</span>/<span>{{people.length}}</span>
                            </p>
                        </div>
                    </div>
                </footer>
            </section>
        </header>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Header",
        computed: mapGetters({
            people: 'getPeople',
            drugs: 'getDrugs',
            restPeople: 'getRestPeople'
        }),

        created(){
            this.cleanSold(0);
        },

        methods:{
            ...mapActions ({
                cleanSold: "cleanSold"
            })
        }
    }
</script>

<style lang="sass" scoped>
    .action_header_container
        background-color: #FFFFFF
        z-index: 3

    .mask-footer
        position: absolute
        width: 100%
        height: 100%
        background: #FFFFFF
        opacity: 0.15

    .bold
        font-family: "Avenir Next Cyr Bold", serif
</style>
