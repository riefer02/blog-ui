<template>
    <div>
        <h3>{{blog.title}}</h3>
        <h4>{{blog.topic}}</h4>
        <p>{{blog.summary}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            blog: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>