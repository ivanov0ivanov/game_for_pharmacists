<template>
    <main>
        <TotalShare/>
        <FinishImage/>
    </main>
</template>

<script>
    import TotalShare from "../components/finish/TotalShare";
    import FinishImage from "../components/finish/FinishImage";

    export default {
        name: "Finish",
        components: {FinishImage, TotalShare}
    }
</script>

<style lang="sass" scoped>
main
    display: flex
</style>
