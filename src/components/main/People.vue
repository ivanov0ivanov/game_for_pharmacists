<template>
    <section>
        <div class="cards">
            <transition :name="this.actionAnimation" mode="out-in">
                <Person
                        v-for="person of currentPerson"
                        :key="person.id"
                        :person="person"/>
            </transition>

            <transition :name="'seal-' + this.actionAnimation" mode="out-in">
                <img v-if="this.actionAnimation === 'left'" :key="1" class="seal_container" src="../../assets/img/png/seal-left.png"
                     alt="seal-left">
                <img v-else-if="this.actionAnimation === 'top'" :key="2" class="seal_container" src="../../assets/img/png/seal-top.png"
                     alt="seal-top">
                <img v-else-if="this.actionAnimation === 'right'" :key="3" class="seal_container" src="../../assets/img/png/seal-right.png"
                     alt="seal-right">
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
            this.nextPerson(0);
            this.cleanSeal('');
        },

        methods: {
            ...mapActions({
                setCurrentPerson: "currentPerson",
                cleanSeal: "cleanSeal",
                nextPerson: 'nextPerson'
            })
        }
    }
</script>
<style lang="sass">
    .seal_container
        display: none
        position: absolute
        top: 25%
</style>

<style lang="sass">
    //SEAL

    .seal-left-enter-active
        display: block
        animation: seal-left .8s

    @keyframes seal-left
        0%
            transform: scale(4)

        50%
            transform: scale(1)

        100%
            transform: translateX(-900px) rotateZ(-20deg)


    .seal-top-enter-active
        display: block
        animation: seal-top .8s

    @keyframes seal-top
        0%
            transform: scale(4)

        50%
            transform: scale(1)

        100%
            transform: translateY(-900px) rotateZ(-50deg)


    .seal-right-enter-active
        display: block
        animation: seal-right .8s

    @keyframes seal-right
        0%
            transform: scale(4)

        50%
            transform: scale(1)

        100%
            transform: translateX(900px) rotateZ(20deg)
</style>

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
        transition-delay: .4s

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
