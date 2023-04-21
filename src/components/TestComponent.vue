<script setup lang="ts">
import { useFormData } from "@/hooks/useForm";
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();

const props = defineProps<{ msg?: string }>();
const { formData, formObj } = useFormData({
  keyword: props.msg,
  select: "",
});

const options = [
  {
    value: "Option1",
    label: "类型一",
  },
  {
    value: "Option2",
    label: "类型二",
  },
  {
    value: "Option3",
    label: "类型三",
  },
  {
    value: "Option4",
    label: "类型四",
  },
  {
    value: "Option5",
    label: "类型五",
  },
];

const tableData = mainStore.tableData;

// 发起搜索
const handleSearch = ({
  current,
  size,
}: {
  current?: number;
  size?: number;
}) => {
  mainStore.getTableInfo({
    keyword: formData.keyword,
    select: formData.select,
    current,
    size,
  });
};
const handleSizeChange = (size: number) => {
  handleSearch({
    current: 1,
    size,
  });
};
const handleCurrentChange = (current: number) => {
  handleSearch({
    current: current,
    size: tableData.size,
  });
};
const AppTitle = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <div class="component-container">
    <el-form :model="formData" label-width="80px" inline>
      <el-form-item label="关键字">
        <el-input
          v-model="formData.keyword"
          placeholder="请输入关键字"
        ></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select
          v-model="formData.select"
          type="password"
          placeholder="请选择类型"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSearch({ current: 1, size: 10 })"
        >
          <el-icon>
            <IconSearch />
          </el-icon>
          搜索</el-button
        >
      </el-form-item>
    </el-form>
    <el-table
      v-loading="tableData.loading"
      :data="tableData.list"
      class="table"
    >
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="desc" label="描述" />
      <el-table-column prop="count" label="次数" width="180" />
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="address" label="地址" width="180" />
      <el-table-column prop="job" label="工作" width="180" />
    </el-table>
    <el-pagination
      v-model:current-page="tableData.current"
      v-model:page-size="tableData.size"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <div>
      env中的环境变量的标题 <span>{{ AppTitle }}</span>
    </div>
  </div>
</template>
<style scoped lang="scss">
.component-container {
  .table {
    padding: 10px 20px;
    width: 100%;
  }
}
</style>
