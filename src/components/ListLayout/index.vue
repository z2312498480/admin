<template>
  <div class="list-layout-wrapper">
    <div class="conditions">
      <slot name="header" />
    </div>
    <div class="list-box">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.list-layout-wrapper {
  padding-top: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.conditions {
  width: 100%;
  margin-bottom: 20px;
}
.list-box {
  width: 100%;
}
</style>
