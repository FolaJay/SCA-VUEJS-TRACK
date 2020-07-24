<template>
    <!-- Modal -->
    <div :class="`modal fade ${show}`" id="exampleModal" tabindex="-1" role="dialog" style="display: block; padding-right: 12px;" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                    <button type="button" @click="closeModal()" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   {{message}}
                </div>
                <div class="modal-footer">
                    <button
                            type="button"
                            class="btn btn-secondary"
                            @click="closeModal()"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Alert",
        props: {
            title: {
                type: String,
                default: 'My Modal'
            },
            show: {
                type: String,
                default: ''
            },
            message: {
                type: String,
                default: 'Successful'
            }
        },
        data: () => ({
        }),
        methods: {
            closeModal() {
                this.$store.commit('SET_SHOW_MODAL', '')
            }
        }
    }
</script>

<style scoped>

</style>