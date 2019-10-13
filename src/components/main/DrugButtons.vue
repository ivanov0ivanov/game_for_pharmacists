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
                rest: null,
                current: null
            }
        },

        created() {
            this.rest = this.people.length - 1;
            this.setRestPeople(this.rest)
        },

        computed: mapGetters({
            people: 'getPeople',
            drugs: 'getDrugs',
            getRestPeople: 'getRestPeople'
        }),

        methods: {
            ...mapActions({
                setCurrentPerson: 'currentPerson',
                soldCounter: 'drugsSold',
                setRestPeople: 'restPeople',
                setAnimation: 'actionAnimation'
            }),

            setPeople() {
                if (this.getRestPeople > 0) {
                    this.rest = this.rest - 1;
                    this.setRestPeople(this.rest);

                    this.current = this.current + 1;
                    this.setCurrentPerson(this.current);

                } else {
                    this.$router.push({path: '/total'});
                }
            }
        }
    }
</script>
