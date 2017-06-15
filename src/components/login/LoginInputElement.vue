<template lang="html">
    <div>
                  <span><slot></slot></span>
                  <input :type="type"/>
                  <label></label>
                  </div>
</template>

<script>
export default {
     props:['type']
}
</script>

<style lang="css">
</style>
