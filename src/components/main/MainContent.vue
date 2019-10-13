<template>
    <main>
        <div>
            <People/>
            <DrugButtons/>
        </div>
    </main>
</template>

<script>
    import People from "./People";
    import DrugButtons from "./DrugButtons";

    export default {
        name: "MainContent",
        components: {DrugButtons, People}
    }
</script>

<style lang="sass" scoped>
    main
        width: 100%
        display: flex
        flex-direction: column
        align-self: center

</style>
