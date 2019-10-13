<template>
    <section>
        <div class="cards">
            <transition :name="this.actionAnimation" mode="out-in">
                <Person
                        v-for="person of currentPerson"
                        :key="person.id"
                        :person="person"/>
            </transition>
        </div>
    </section>
</template>

<script>
    import Person from "./Person";
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "People",
        components: {Person},

        computed: {
            ...mapGetters({
                currentPerson: "getCurrentPerson",
                actionAnimation: "getActionAnimation"
            })
        },

        mounted() {
            this.setCurrentPerson(0);
        },

        methods: {
            ...mapActions({
                setCurrentPerson: "currentPerson",

            })
        }
    }
</script>

<style lang="sass">
    //PEOPLE

    .top-enter-active,
    .left-enter-active,
    .right-enter-active
        transition: all .1s ease

    .top-leave-active,
    .left-leave-active,
    .right-leave-active
        transition: all .5s ease

    .top-enter,
    .top-leave-to
        transform: translateY(-900px) rotateZ(-50deg)
        opacity: 1

    .left-enter,
    .left-leave-to
        transform: translateX(-900px) rotateZ(-20deg)
        opacity: 1

    .right-enter,
    .right-leave-to
        transform: translateX(1000px) rotateZ(20deg)
        opacity: 1
</style>
