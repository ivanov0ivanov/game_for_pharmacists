<template>
    <section>
        <div class="btn-drug_container">
            <button v-for="drug of drugs" :key="drug.id"
                    type="button"
                    :style="drug.background"
                    class="btn-drug"
                    @click="() => {
                    setPeople();
                    soldCounter(drug.id);
                    setAnimation(drug.action);
                    }">
                {{drug.name}}
            </button>
        </div>
    </section>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "DrugButtons",
        data() {
            return {
                rest: 0,
                current: 0
            }
        },

        created() {
            this.rest = this.people.length - 1;
            this.setRestPeople(this.rest);

            this.current = this.getNextPerson;
        },

        computed: mapGetters({
            people: 'getPeople',
            drugs: 'getDrugs',
            getRestPeople: 'getRestPeople',
            getNextPerson: 'getNextPerson'
        }),

        methods: {
            ...mapActions({
                setCurrentPerson: 'currentPerson',
                soldCounter: 'drugsSold',
                setRestPeople: 'restPeople',
                setAnimation: 'actionAnimation',
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
            }
        }
    }
</script>
