<template>
  <div class="sidebar">
    <transition name="slide">
      <div v-if="isPanelOpen" class="sidebar-panel">
        <ul class="sidebarList">
          <li>
            <a href="/dashboard">
              <i class="fa fa-tachometer" aria-hidden="true"></i>Dashboard
            </a>
          </li>
          <li>
            <a href="/expenselist">Expenses</a>
          </li>
          <li>
            <a href="/expenselist">Expenses</a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    isPanelOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  }
};
</script>
<style>
img {
  height: 20px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
.sidebar-panel {
  overflow-y: auto;
  background-color: #28334aff;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 250px;
}
ul.sidebarList {
  margin-top: 100px;
}
ul.sidebarList > li {
  text-decoration: none;
  list-style-type: none;
  padding: 10px 0;
}
ul.sidebarList > li > a {
  color: #ffffff;
  font-size: 15px;
}
ul.sidebarList > li > a:hover {
  color: #ffaf7b;
  font-size: 15px;
  text-decoration: none;
}
</style>