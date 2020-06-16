<template>
    <div>
        <div>
            <h4>Expenses</h4>
            <form @submit.prevent="logIn">
                <div class="input form-group" >
                    <label>Item  Purchased</label>
                    <input class="form-control" type="text" v-model="Item" placeholder="Enter Item Purchased" required>
                </div>
                <div class="input form-group">
                    <label>Cost Price</label>
                    <input class="form-control" type="text" v-model="C.P" placeholder="Cost Price of Item" required>
                </div>
                <div class="input form-group">
                    <label>Quantity Purchased</label>
                    <input class="form-control" type="text" v-model="Qty" placeholder="Enter Quantity Purchased" required>
                </div>
                <div class="input form-group">
                    <label>Cash Received</label>
                    <input class="form-control" type="text" v-model="C.Rec" placeholder="Amount Received" required>
                </div>
                <div class="input form-group">
                    <label>Cash Returned</label>
                    <input class="form-control" type="text" v-model="C.Ret" placeholder="Amount Returned" required>
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
data(){
    return{
        
    }
}
}
</script>