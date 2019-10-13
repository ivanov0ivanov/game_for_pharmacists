<template>
    <main class="bg-main">
        <MaskBg/>
        <EllipseStart/>
    </main>
</template>

<script>
    import EllipseStart from "../components/home/EllipseStart";
    import MaskBg from "../components/MaskBg";

    export default {
        name: 'home',
        components: {MaskBg, EllipseStart},
    }
</script>

<style lang="sass" scoped>

</style>
