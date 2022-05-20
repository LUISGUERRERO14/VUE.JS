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
    data() {
        return{
            form: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        submit: function() {
            this.$root.animes.push({
                id: this.$root.animes.length, 
                title: this.form.title,
                description: this.form.description
            })
        }
    }
}
</script>