<template>
    <el-form label-position="top" label-width="auto" :model="formData" style="max-width: 300px">
        <el-form-item label="Name">
            <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="Photo">
            <Upload v-model="formData.file" />
        </el-form-item>
        <el-button type="primary" @click="submit()">提交</el-button>
        <el-button type="primary"  @click="reset()">重置</el-button>
    </el-form>
</template>

<script setup lang="ts">
import axios from 'axios';
import Upload from './extra/upload.vue';
import { reactive } from 'vue';

const formData = reactive({
    name: '',
    file: null,
})

const submit = () => {
    axios.postForm("/api/user/add", {
        name: formData.name,
        file: formData.file,
    })
}

const reset = () => {
    formData.name = ''
}
</script>