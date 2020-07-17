<template>
    <input
            type="text"
            :placeholder="placeholder"
            v-model="new_value"
            v-if="is_text"
            @
    />
    <button
            v-else
            type="button"
            :class="`btn shadow my-button ${color}`"
    >
        {{ title }}
    </button>
</template>

<script>
    export default {
        name: "ReusableButton",
        props: {
            title: {
                type: String
            },
            color: {
                type: String,
                default: ''
            },
            is_text: {
                type: Boolean,
                default: false
            },
            placeholder: String,
            value: String
        },
        data() {
            return {
                new_value: ''
            }
        },
        watch: {
            new_value(val) {
                this.$emit('input', val);
                return val
            }
        },
        created() {
            this.new_value = this.value; // set prop value to new_value
        }
    }
</script>

<style scoped>

</style>