(function(A){function t(t){for(var n,r,o=t[0],i=t[1],u=t[2],c=0,d=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(A[n]=i[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var A,t=0;t<s.length;t++){for(var e=s[t],n=!0,o=1;o<e.length;o++){var i=e[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),A=r(r.s=e[0]))}return A}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return A[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=A,r.c=n,r.d=function(A,t,e){r.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:e})},r.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},r.t=function(A,t){if(1&t&&(A=r(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var n in A)r.d(e,n,function(t){return A[t]}.bind(null,n));return e},r.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return r.d(t,"a",t),t},r.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=i;s.push([0,"chunk-vendors"]),e()})({0:function(A,t,e){A.exports=e("56d7")},"034f":function(A,t,e){"use strict";var n=e("85ec"),a=e.n(n);a.a},1302:function(A,t,e){},1543:function(A,t,e){"use strict";e.r(t),e.d(t,"db",(function(){return o})),e.d(t,"auth",(function(){return i})),e.d(t,"user",(function(){return u})),e.d(t,"expensesCollection",(function(){return l}));var n=e("8aa5"),a=e.n(n),s=(e("e71f"),e("c0d6")),r={apiKey:"AIzaSyAs5K7YXyi3Jwaum0EAE6-gC3hvouL5ofw",authDomain:"expense-app-f21c2.firebaseapp.com",databaseURL:"https://expense-app-f21c2.firebaseio.com",projectId:"expense-app-f21c2",storageBucket:"expense-app-f21c2.appspot.com"};a.a.initializeApp(r);var o=a.a.firestore(),i=a.a.auth(),u=i.user;a.a.auth().onAuthStateChanged((function(A){s["a"].dispatch("login",A)}));var l=o.collection("Expenses")},"2c36":function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAYfSURBVHic7daxTQNBFEXRv5YjAhIkUkvugzJoiph66MS9kKxbmLF0z0le+sI7AwDkHOf+zcxt5xEAYJ3rubeZue88AgCsc9l9AABYTwAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACDrO/ZqZt51HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4BUd5/7MzOfOIwDAOs8AeMzMfecRAGCdy+4DAMB6AgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABAkAAAgCABAABBAgAAggQAAAQJAAAIEgAAECQAACBIAABA0PXc35n52HkEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXtFx7vfMvO88AgCs8wyAx8zcdx4BANa57D4AAKwnAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABAkAAAgSAAAQJAAAIAgAQAAQQIAAIIEAAAECQAACBIAABD0D8hBBqqUDn4tAAAAAElFTkSuQmCC"},"2d6b":function(A,t,e){"use strict";var n=e("1302"),a=e.n(n);a.a},3413:function(A,t,e){},"3b55":function(A,t,e){},"56d7":function(A,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),a=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("router-view")],1)},s=[],r={name:"App"},o=r,i=(e("034f"),e("2877")),u=Object(i["a"])(o,a,s,!1,null,null,null),l=u.exports,c=e("c0d6"),d=e("8c4f"),p=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"body"},[e("div",{staticClass:"form-div shadow"},[e("h4",[A._v("SIGNUP")]),e("form",{},[e("div",{staticClass:"input form-group"},[e("label",[A._v("USERNAME")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.username,expression:"username"}],staticClass:"form-control",attrs:{placeholder:"Enter your username"},domProps:{value:A.username},on:{input:function(t){t.target.composing||(A.username=t.target.value)}}})]),e("div",{staticClass:"input form-group"},[e("label",[A._v("EMAIL")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your Email",required:""},domProps:{value:A.email},on:{input:function(t){t.target.composing||(A.email=t.target.value)}}})]),e("div",{staticClass:"input form-group"},[e("label",[A._v("PASSWORD")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your password",required:""},domProps:{value:A.password},on:{input:function(t){t.target.composing||(A.password=t.target.value)}}})]),A._m(0),e("p",[A._v(" Already have an account "),e("router-link",{attrs:{to:"/"}},[A._v("Login")])],1),e("button",{staticClass:"btn shadow my-button",attrs:{type:"button"},on:{click:A.signUp}},[A._v("SignUp")])])])])},f=[function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"input form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox"}}),e("label",[A._v("I agree with Terms and Conditions")])])}],g=e("8aa5"),v=e.n(g),m={name:"signUp",data:function(){return{username:"",email:"",password:"",error:null}},methods:{signUp:function(){var A=this;console.log({username:this.username,email:this.email,password:this.password}),v.a.auth().createUserWithEmailAndPassword(this.email,this.password).then((function(t){alert("Your account has been created!"),t.user.updateProfile({displayName:A.username}).then((function(){A.$router.push({name:"login"})}))})).catch((function(t){A.error=t.message})),this.email="",this.password="",this.username=""}}},h=m,Q=(e("7e1f"),Object(i["a"])(h,p,f,!1,null,"ac8aa6fa",null)),C=Q.exports,w=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"body"},[e("div",{staticClass:"form-div shadow"},[e("h4",[A._v("LOGIN")]),e("form",{on:{submit:function(t){return t.preventDefault(),A.logIn(t)}}},[e("div",{staticClass:"input form-group"},[e("label",[A._v("EMAIL")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.loginForm.email,expression:"loginForm.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter your Email",required:""},domProps:{value:A.loginForm.email},on:{input:function(t){t.target.composing||A.$set(A.loginForm,"email",t.target.value)}}})]),e("div",{staticClass:"input form-group"},[e("label",[A._v("PASSWORD")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.loginForm.password,expression:"loginForm.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter your password",required:""},domProps:{value:A.loginForm.password},on:{input:function(t){t.target.composing||A.$set(A.loginForm,"password",t.target.value)}}})]),e("button",{staticClass:"btn shadow my-button",attrs:{type:"button"},on:{click:A.logIn}},[A._v("Login")]),e("div",[e("p",[A._v("Forgot Password")]),e("p",[e("router-link",{attrs:{to:"/signup"}},[A._v("Create an Account")])],1)])])])])},B=[];e("1543");var b={name:"login",data:function(){return{loginForm:{email:"",password:""},error:null}},methods:{logIn:function(){var A=this;v.a.auth().signInWithEmailAndPassword(this.loginForm.email,this.loginForm.password).then((function(){A.$router.push({name:"dashboard"})})).catch((function(t){console.log(t),A.error=t.message}))}}},I=b,P=(e("2d6b"),Object(i["a"])(I,w,B,!1,null,"6818669e",null)),E=P.exports,L=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("layout",[A._v(" "+A._s(A.message)+" ")])],1)},D=[],y=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("main",[e("sidebar",{attrs:{isPanelOpen:A.isPanelOpen}}),e("div",{staticClass:"app-layout"},[e("navbar",{on:{toggle:A.toggleSidebar}}),e("div",{staticClass:"app-layout_slot"},[A._t("default")],2)],1)],1)},x=[],S=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"sidebar"},[e("transition",{attrs:{name:"slide"}},[A.isPanelOpen?e("div",{staticClass:"sidebar-panel"},[e("ul",{staticClass:"sidebarList"},[e("li",[e("a",{attrs:{href:"/dashboard"}},[e("i",{staticClass:"fa fa-tachometer",attrs:{"aria-hidden":"true"}}),A._v("Dashboard ")])]),e("li",[e("a",{attrs:{href:"/expenselist"}},[A._v("Expenses")])]),e("li",[e("a",{attrs:{href:"/expenselist"}},[A._v("Expenses")])])])]):A._e()])],1)},F=[],_={props:{isPanelOpen:{type:Boolean,default:!1}},components:{},data:function(){return{}}},k=_,O=(e("eebf"),Object(i["a"])(k,S,F,!1,null,null,null)),X=O.exports,R=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{staticClass:"navbar-wrapper shadow "},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-2"},[n("router-link",{staticClass:"navbar-link",attrs:{to:"#"}},[A._v("Logo")])],1),n("div",{staticClass:"col-sm-1"},[A.isBurgerActive?n("div",[n("img",{attrs:{src:e("2c36")},on:{click:A.togglePanel}})]):n("div",[n("img",{attrs:{src:e("aea9")},on:{click:A.togglePanel}})])]),n("div",{staticClass:"col-sm-9"},[n("div",{staticClass:"navbar-menu"},[n("router-link",{staticClass:"navbar-link",attrs:{to:"/home"}},[A._v("Home")]),n("router-link",{staticClass:"navbar-link",attrs:{to:"/expenselist"}},[A._v("Expenses")]),n("router-link",{staticClass:"navbar-link",attrs:{to:"#"}},[A._v("Contact Us")]),n("router-link",{staticClass:"navbar-link",attrs:{to:"#"}},[A._v("About Us")]),A.user.loggedIn?n("router-link",{staticClass:"navbar-link",attrs:{to:"/"},nativeOn:{click:function(t){return A.logout(t)}}},[A._v("Logout")]):n("router-link",{staticClass:"navbar-link",attrs:{to:"/"}},[A._v("Login")]),A.user.loggedIn?A._e():n("router-link",{staticClass:"navbar-link3 shadow",attrs:{to:"/signup"}},[A._v("SignUp")])],1)])])])},N=[],j={props:{isOpen:{type:Boolean,default:!1}},data:function(){return{isBurgerActive:!0}},components:{},methods:{logout:function(){this.$store.commit("SET_LOGGED_OUT"),this.$router.push("/")},togglePanel:function(){this.$emit("toggle"),this.isBurgerActive=!this.isBurgerActive}},computed:{user:function(){return console.log(this.$store.getters.user),this.$store.getters.user}},watch:{user:function(A){if(null!==A)return A}},mounted:function(){return this.$store.getters.user}},U=j,q=(e("828c"),Object(i["a"])(U,R,N,!1,null,"7adfc770",null)),J=q.exports,M={name:"layout",components:{navbar:J,sidebar:X},data:function(){return{isPanelOpen:!1}},methods:{toggleSidebar:function(){this.isPanelOpen=!this.isPanelOpen}}},H=M,W=(e("8f2c"),Object(i["a"])(H,y,x,!1,null,null,null)),z=W.exports,T={name:"dashboard",data:function(){return{message:"Dashboard"}},components:{layout:z},created:function(){}},G=T,Y=Object(i["a"])(G,L,D,!1,null,null,null),V=Y.exports,Z=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("layout",[e("div",[e("button",{staticClass:"newExpense",on:{click:A.createNewExpense}},[A._v("New Expense")])]),e("div",[e("table",{staticClass:"table table-hover"},[e("thead",{staticClass:"thead-light"},[e("tr",[e("th",[A._v("#")]),e("th",{attrs:{scope:"col"}},[A._v("Item(s) Purchased")]),e("th",{attrs:{scope:"col"}},[A._v("Price")]),e("th",{attrs:{scope:"col"}},[A._v("Quantity")]),e("th",{attrs:{scope:"col"}},[A._v("Amount Collected")]),e("th",{attrs:{scope:"col"}},[A._v("Amount Returned")])])]),e("tbody",A._l(A.expenseLists,(function(t,n){return e("tr",{key:n},[e("th",{attrs:{scope:"row"}},[A._v(A._s(n))]),e("td",[A._v(A._s(t.item))]),e("td",[A._v(A._s(t.price))]),e("td",[A._v(A._s(t.quantity))]),e("td",[A._v(A._s(t.amountReceived))]),e("td",[A._v(A._s(t.amountReturned))])])})),0)])])])],1)},K=[],$=(e("4160"),e("159b"),e("1543")),AA={data:function(){return{expenseLists:[],totalExpense:0,data:{item:"",price:0,quantity:0,amountReceived:0,amountReturned:0}}},components:{layout:z},methods:{createNewExpense:function(){this.$router.push("/createExpense")},getExpenses:function(){var A=this;$["expensesCollection"].get().then((function(t){t.forEach((function(t){A.expenseLists.push(t.data())}))}))}},created:function(){this.getExpenses()}},tA=AA,eA=(e("dd89"),Object(i["a"])(tA,Z,K,!1,null,"0de87464",null)),nA=eA.exports,aA=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",[e("layout",[e("div",{staticClass:"expenseForm"},[e("h2",[A._v("Expenses")]),e("form",[e("div",{staticClass:"input form-group"},[e("label",[A._v("Item Purchased")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.item,expression:"item"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Item Purchased",required:""},domProps:{value:A.item},on:{input:function(t){t.target.composing||(A.item=t.target.value)}}})]),e("div",{staticClass:"input form-group"},[e("label",[A._v("Price")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.price,expression:"price"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Price of Item",required:""},domProps:{value:A.price},on:{input:function(t){t.target.composing||(A.price=t.target.value)}}})]),e("div",{staticClass:"input form-group"},[e("label",[A._v("Quantity Purchased")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Quantity Purchased",required:""},domProps:{value:A.quantity},on:{input:function(t){t.target.composing||(A.quantity=t.target.value)}}})]),e("div",{staticClass:"input form-group"},[e("label",[A._v("Cash Received")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.amountReceived,expression:"amountReceived"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Amount Received",required:""},domProps:{value:A.amountReceived},on:{input:function(t){t.target.composing||(A.amountReceived=t.target.value)}}})]),e("div",{staticClass:"input form-group"},[e("label",[A._v("Cash Returned")]),e("input",{directives:[{name:"model",rawName:"v-model",value:A.amountReturned,expression:"amountReturned"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Amount Returned",required:""},domProps:{value:A.amountReturned},on:{input:function(t){t.target.composing||(A.amountReturned=t.target.value)}}})]),e("button",{staticClass:"btn shadow my-button",attrs:{type:"button"},on:{click:A.OnSaveExpense}},[A._v("Save")])])])])],1)},sA=[],rA={name:"expenselist",components:{layout:z},data:function(){return{item:"",price:0,quantity:0,amountReceived:0,amountReturned:0}},methods:{OnSaveExpense:function(){$["expensesCollection"].doc().set({item:this.item,price:this.price,quantity:this.quantity,amountReceived:this.amountReceived,amountReturned:this.amountReturned}),alert("Items Purchased"),this.$router.push("/createExpense")}}},oA=rA,iA=(e("a222"),Object(i["a"])(oA,aA,sA,!1,null,"c5d27f6a",null)),uA=iA.exports;n["a"].use(d["a"]);var lA=[{path:"/signup",name:"signUp",component:C},{path:"/",name:"login",component:E},{path:"/dashboard",name:"dashboard",component:V},{path:"/expenselist",name:"expenselist",component:nA},{path:"/createExpense",name:"newExpense",component:uA}],cA=new d["a"]({mode:"history",routes:lA}),dA=cA;e("1543"),n["a"].config.productionTip=!1,new n["a"]({render:function(A){return A(l)},router:dA,store:c["a"]}).$mount("#app")},"7a66":function(A,t,e){},"7e1f":function(A,t,e){"use strict";var n=e("3b55"),a=e.n(n);a.a},"828c":function(A,t,e){"use strict";var n=e("3413"),a=e.n(n);a.a},"85ec":function(A,t,e){},"8f2c":function(A,t,e){"use strict";var n=e("7a66"),a=e.n(n);a.a},9824:function(A,t,e){},a222:function(A,t,e){"use strict";var n=e("acf8"),a=e.n(n);a.a},acf8:function(A,t,e){},aea9:function(A,t){A.exports="data:image/png;base64,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"},b0e2:function(A,t,e){},c0d6:function(A,t,e){"use strict";var n=e("2b0e"),a=e("2f62");e("1543"),n["a"].use(a["a"]);var s=n["a"].observable({isSidebarOpen:!1});t["a"]=new a["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(A){return A.user},isLoggedIn:function(A){return A.user.loggedIn}},actions:{login:function(A,t){var e=A.commit;e("SET_LOGGED_IN",null!==t),e("SET_USER",t?{data:{displayName:t.displayName,email:t.email},loggedIn:!0}:null)}},mutations:{SET_LOGGED_IN:function(A,t){A.user.loggedIn=t},SET_LOGGED_OUT:function(A){console.log(A),A.user={loggedIn:!1,data:null}},SET_USER:function(A,t){A.user.data=t},TOGGLE_SIDEBAR:function(){s.isSidebarOpen=!s.isSidebarOpen}}})},dd89:function(A,t,e){"use strict";var n=e("9824"),a=e.n(n);a.a},eebf:function(A,t,e){"use strict";var n=e("b0e2"),a=e.n(n);a.a}});
//# sourceMappingURL=app.d6abc8cf.js.map