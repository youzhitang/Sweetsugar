<template>
  <div class="nav">
    <Icon name="money"/>
    <router-link to="/money">记账</router-link>
    |
    <Icon name="labels"/>
    <router-link to="/labels">标签</router-link>
    |
    <Icon name="statistics"/>
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">

import Icon from '@/components/Icon.vue';
export default {
  name: 'Nav',
  components: {Icon}
};
</script>

<style lang="scss" scoped>
.nav{
  border: 1px solid red;
}
</style>