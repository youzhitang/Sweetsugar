<template>
<div class="nav-wrapper">
  <div>
    <p>
      Statistics.Vue
    </p>
  </div>
  <Nav/>
</div>
</template>

<script lang="ts">
export default {
name: "Statistics",
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content{
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>