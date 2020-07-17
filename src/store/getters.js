
export default {
    user(state) {
        return state.user
    },
    loading(state) {
        return state.loading
    },
    error(state) {
        return state.error
    },
    error_message(state) {
        return state.error_message
    },
    isLoggedIn(state) {
        return state.user.loggedIn; // get logged in from user
    },
    show_modal(state) {
        return state.show_modal
    }
}