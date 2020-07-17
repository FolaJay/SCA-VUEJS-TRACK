
export default {
    // Add the properties to the state object.
    user: {
        loggedIn: false, // tells us whether the user has been authenticated or not
        data: null   // holds information about the logged-in user
    },
    show_modal: '',
    loading: false,
    error: false,
    error_message: ''
}