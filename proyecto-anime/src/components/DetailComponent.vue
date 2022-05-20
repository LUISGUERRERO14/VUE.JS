<template>
    <div>
        <img :src="anime.image" :alt="anime.title">

        <h2>{{ anime.title }}</h2>

        <p>{{ anime.description }}</p>

    </div>
</template>

<script>
export default {
    async mounted() {
        await this.$root.getAnime()
    },
    data() {
        return{
            anime: JSON.parse(this.$route.params.anime)
        }
    }
}
</script>