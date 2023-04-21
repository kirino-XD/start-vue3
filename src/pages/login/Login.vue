<template>
  <el-button type="primary" @click="toHome">返回首页</el-button>

  <el-divider content-position="left">表单示例：</el-divider>
  <el-form ref="formRef" :model="formData" label-width="80px" :rules="rules">
    <el-form-item label="账号" prop="username">
      <el-input v-model="formData.username" placeholder="请输入账号"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="formData.password"
        type="password"
        placeholder="请输入密码"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="formObj.updateCacheForm"
        >更新缓存表单</el-button
      >
      <el-button type="primary" @click="formObj.resetCacheForm"
        >重置到缓存表单</el-button
      >
      <el-button type="primary" @click="formObj.resetForm">重置表单</el-button>
      <el-button type="primary" @click="onFontSubmit">前端校验登录</el-button>
      <el-button type="primary" @click="onSubmit">后端校验登录</el-button>
    </el-form-item>
  </el-form>

  <el-divider content-position="left">组件示例：</el-divider>
  <TestComponent msg="外部关键字" />
</template>
<script setup lang="ts">
import { useFormData } from "@/hooks/useForm";
import axios from "axios";

const { formData, formObj } = useFormData({
  username: "",
  password: "",
});
const formRef = ref();
const rules = {
  username: [{ required: true, message: "请输入账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const onFontSubmit = async () => {
  formRef?.value
    ?.validate()
    .then(() => {
      ElMessage.success("提交成功");
    })
    .catch(() => ElMessage.warning("请填写完整信息"));
};

const onSubmit = () => {
  axios({
    url: "/login",
    method: "post",
    data: {
      username: formData.username,
      password: formData.password,
    },
  })
    .then((res: any) => {
      ElMessage.success(res?.message);
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};

const router = useRouter();
// 返回首页
const toHome = () => {
  router.push("/home");
};
</script>
