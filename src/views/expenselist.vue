<template>
    <div>
        <div>
            <h4>Expenses</h4>
            <form @submit.prevent="logIn">
                <div class="input form-group" >
                    <label>Item  Purchased</label>
                    <input class="form-control" type="text" v-model="item" placeholder="Enter Item Purchased" required>
                </div>
                <div class="input form-group">
                    <label>Price</label>
                    <input class="form-control" type="text" v-model="price" placeholder="Price of Item" required>
                </div>
                <div class="input form-group">
                    <label>Quantity Purchased</label>
                    <input class="form-control" type="text" v-model="quantity" placeholder="Enter Quantity Purchased" required>
                </div>
                <div class="input form-group">
                    <label>Cash Received</label>
                    <input class="form-control" type="text" v-model="amount_received" placeholder="Amount Received" required>
                </div>
                <div class="input form-group">
                    <label>Cash Returned</label>
                    <input class="form-control" type="text" v-model="amount_returned" placeholder="Amount Returned" required>
                </div>
                <button type="button" class="btn shadow my-button" >Save</button>
                
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'expenselist',
    components: {
    },
    data() {
        return {
            item: '',
            price: 0,
            quantity: 0,
            amount_received: 0,
            amount_returned: 0
        }
    }
}
</script>