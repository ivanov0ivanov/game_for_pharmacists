<template xmlns:v-touch="http://www.w3.org/1999/xhtml">
    <div class="card_container"
         v-touch:swipe.left="swipeLeftHandler"
         v-touch:swipe.top="swipeTopHandler"
         v-touch:swipe.right="swipeRightHandler">
        <div class="card">
            <div class="card_header">
                <img :src="person.img" class="card_img" alt="person">
            </div>
            <div class="card_body">
                <h5 class="card_title">
                    <span class="name">{{person.name}}</span>,
                    <span class="years">{{person.years}} років</span>
                </h5>
                <p class="card_description">
                    {{person.description}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Person",
        props: {
            person: {
                type: Object,
                required: true
            },

        },
        data() {
            return {
                rest: 0,
                current: 0
            }
        },

        computed: mapGetters({
            people: 'getPeople',
            drugs: 'getDrugs',
            getRestPeople: 'getRestPeople',
            getCurrentPerson: 'getCurrentPerson',
            getNextPerson: 'getNextPerson'
        }),

        methods: {
            ...mapActions({
                setAnimation: 'actionAnimation',
                soldSwipeCounter: 'drugsSwipeSold',
                setCurrentPerson: 'currentPerson',
                setRestPeople: 'restPeople',
                nextPerson: 'nextPerson'
            }),

            setPeople() {
                if (this.getRestPeople > 0) {
                    this.rest = this.getRestPeople - 1;
                    this.setRestPeople(this.rest);

                    this.current = this.getNextPerson + 1;
                    this.nextPerson(this.current);

                    this.setCurrentPerson(this.current);

                } else {
                    this.$router.push({path: '/total'});
                }
            },

            swipeLeftHandler() {
                this.setPeople();
                this.setAnimation('left');
                this.soldSwipeCounter('left');
            },

            swipeTopHandler() {
                this.setPeople();
                this.setAnimation('top');
                this.soldSwipeCounter('top');
            },

            swipeRightHandler() {
                this.setPeople();
                this.setAnimation('right');
                this.soldSwipeCounter('right');
            }
        }
    }
</script>

