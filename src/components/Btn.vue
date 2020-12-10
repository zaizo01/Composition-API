<template>
  <!-- <button @click="$emit('accion')">{{ textButton }}</button> -->
  <button @click="accionChildren">{{ textButton }}</button>
</template>

<script>
export default {
    props: ['textButton'],
    setup(props, context) {
        const accionChildren = () => {
            context.emit('accion')
        }

        return { accionChildren }
    }
}
</script>

<style>

</style>