<template>
    <el-table :data="tableData" height="250" style="width: 100%" table-layout="auto">
        <el-table-column label="ID">
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    {{ scope.row.id }}
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="photo" label="Photo" />
        <el-table-column prop="path" label="Path" />

        <el-table-column label="Operations">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                    Edit
                </el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                    Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

interface User {
    id: number
    name: string
    photo: string
    path: string
}

const handleEdit = (index: number, row: User) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
    console.log(index, row)
}

let tableData: User[] = reactive([]);

const selectUser = () => {
    axios.get("/api/user/select")
        .then(function (res) {
            tableData.splice(0, tableData.length, ...res.data);
        })
        .catch(function (err) {
            console.log(err)
        })
};

onMounted(() => {
    selectUser();
})

</script>