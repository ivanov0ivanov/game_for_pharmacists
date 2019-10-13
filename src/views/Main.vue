<template>
    <div class="main_container">
        <Header/>
        <MainContent/>
    </div>
</template>

<script>
    import Header from "../components/main/Header";
    import MainContent from "../components/main/MainContent";

    export default {
        name: "Main",
        components: {MainContent, Header}
    }
</script>

<style lang="sass" scoped>
.main_container
    display: flex
</style>
