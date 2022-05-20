<template>
    <div>
        <form @submit.prevent="submit">
            <input type="text" v-model="form.title">

            <textarea v-model="form.description"></textarea>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    mounted(){
        this.position = this.$route.params.position || -1

        this.form.title = this.position !== -1 ? this.$root.animes[this.position].title : ""
        this.form.description = this.position !== -1 ? this.$root.animes[this.position].description : ""
    },
    data() {
        return{
            position: 0,
            form: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        submit: function() {

            if(this.position !== -1){
                this.$root.animes[this.position].title = this.form.title
                this.$root.animes[this.position].description = this.form.description
            } else{
                this.$root.animes.push({
                    id: this.$root.animes.length, 
                    title: this.form.title,
                    description: this.form.description
                })
            }
        }
    }
}
</script>