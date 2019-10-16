<template>
    <main class="main_content">
        <div class="content_blocks">
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
    .main_content
        width: 100%
        display: flex
        flex-direction: column
        align-self: center

</style>
