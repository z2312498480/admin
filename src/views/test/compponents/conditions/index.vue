<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper-item">
      <span>昵称</span>
      <el-input placeholder="昵称" />
    </div>
    <div class="conditions-wrapper-item">
      <span>所属学</span>
      <el-select>
        <el-option label="前端开发" />
        <el-option label="产品助理" />
        <el-option label="数据分析" />
      </el-select>
    </div>
    <div class="conditions-wrapper-item">
      <span>职位</span>
      <el-input placeholder="职位" />
    </div>
    <div class="conditions-wrapper-item">
      <span>工作年限:</span>
      <p>起</p>
      <p>止</p>
    </div>
    <div class="conditions-wrapper-item">
      <span>手机号</span>
      <el-input placeholder="手机号" />
    </div>
    <div class="conditions-wrapper-item">
      <el-button type="primary">搜索</el-button>
      <el-button>重置</el-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.conditions-wrapper {
  display: flex;
  align-items: center;
  &-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;
    border-radius: 0px;
  }
}
span {
  display: inline-block;
  width: 65px;
  height: 36px;
  line-height: 36px;
  border: 1px solid #dcdfe6;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
  text-align: center;
  font-size: 9px;
}
p{
  width: 70px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border: 1px solid #dcdfe6;
}
.el-input--medium {
  font-size: 12px;
}
.el-button--medium {
    padding: 10px 20px;
    font-size: 12px;
    border-radius: 4px;
}
</style>
