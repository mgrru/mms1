<template>
    <el-table :data="tableData" height="750px" style="width: 100%" table-layout="auto">
        <el-table-column label="Time" >
            <template #default="scope">
                <div style="display: flex; align-items: center">
                    <el-icon>
                        <timer />
                    </el-icon>
                    {{ scope.row.time }}
                </div>
            </template>
        </el-table-column>

        <el-table-column prop="desc" label="Desc" />
    </el-table>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

interface Log {
    time: string
    desc: string
}

let tableData: Log[] = reactive([]);

const selectLog = () => {
    axios.get("/api/log/select")
        .then(function (res) {
            tableData.splice(0, tableData.length, ...res.data);
        })
        .catch(function (err) {
            console.log(err)
        })
};

onMounted(() => {
    selectLog();
})

</script>