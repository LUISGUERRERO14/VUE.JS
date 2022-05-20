<template>
    <div>
        <h1>Listado</h1>

        <router-link :to="{ name:'create' }">Crear</router-link>

        <ul>
            <li v-for="(anime, key) in $root.animes" :key="anime">
                <router-link :to="{name: 'detail', params: { anime: JSON.stringify(anime)}}">{{anime.title}}</router-link>
            
                - 

                <router-link :to="{ name: 'edit', params: { position: key }}">Editar</router-link>

                - 

                <button @click="remove(key)">Eliminar</button>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            animes: []
        }
    },
    async mounted() {
        await this.$root.getAnime()
        //console.log(this.$root.animes[1].title)
    },
    methods: {
       remove: function(index) {
           this.$root.animes.splice(index, 1)
       } 
    }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    padding: 0;
}
li{
    margin: 10px 0;
}
li a {
    color: rgb(3, 173, 40);
    font-weight: bold;
    text-decoration: none;
}
</style>