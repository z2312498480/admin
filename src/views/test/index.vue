<template>
  <div class="test-wrapper">
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <!-- 分页 -->
        <al-table
          :column="formData.column"
          :data="formData.list"
          :pagination="true"
        />
      </template>
    </list-layout>
  </div>
</template>
<script>
import { getTestList } from '@/api/test.js'
import ListLayout from '@/components/ListLayout/index.vue'
import AlTable from '@/components/lb-table/lb-table.vue'
import Conditions from './compponents/conditions/index.vue'
export default {
  components: {
    ListLayout,
    AlTable,
    Conditions
  },
  data() {
    return {
      formData: {
        column: [
          {
            prop: 'nick',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '真实姓名'
          },
          {
            prop: 'subject ',
            label: '所属学科'
          },
          {
            prop: 'job',
            label: '职位'
          },
          {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '录入时间'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (
                <div class='btn'>
                  <el-button size='mini'>编辑</el-button>
                  <el-button size='mini' type='danger'>
                    删除
                  </el-button>
                </div>
              )
            }
          }
        ],
        list: []
      }
    }
  },
  created() {
    getTestList().then((res) => {
      const { code, data } = res
      // 判断
      if (Number(code) === 20000) {
        const { items, total } = data
        this.formData.list = items
      }
      console.log('test', res)
    })
  }
}
</script>
<style lang="scss">
.cell {
  font-size: 12px;
  text-align: center;
}
.btn {
  font-size: 12px;
  display: flex;
}
.el-table th.is-leaf,
.el-table td {
  border-bottom: none;
  border-left: 1px solid #dfe6ec;
  border-top: 1px solid #dfe6ec;
}
.lb-table{
  width: 95%;
  border-right: 1px solid #dfe6ec;
}
</style>
