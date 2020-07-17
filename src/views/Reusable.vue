<template>
    <div>
        <ul>
            <li v-for="(datum, i) of data1" :key="i">
                {{ datum }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Reusable",
        props: {
            data: {
                type: Object,
                default: () => {}
            },
            data1: {
                type: Array,
                required: true,
                default: () => []
            },
            data2: String,
            data3: Number,
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>

</style>