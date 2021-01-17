<template>
  <svg class="icon" @click="$emit('click',$event )">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">

// 声明一个叫importAll的方法，它等于requireContext对象，使用这个对象并调用它的keys和forEach进行requireContext
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
export default {
  props: ['name'],
  name: 'Icon'
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>