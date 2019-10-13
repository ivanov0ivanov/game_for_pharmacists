<template>
    <div class="card_container">
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
    export default {
        name: "Person",
        props:{
            person: {
                type: Object,
                required: true
            }
        }
    }
</script>

