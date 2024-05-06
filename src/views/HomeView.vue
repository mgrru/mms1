<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu active-text-color="#ffcce5" background-color="#808080" text-color="#000" default-active="1" router=true
          class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">

          <el-menu-item index="1" route="/log/select">
            <el-icon>
              <Histogram />
            </el-icon>
            <span>日志</span>
          </el-menu-item>


          <el-sub-menu index="2">

            <template #title>
              <el-icon>
                <User />
              </el-icon>
              用户
            </template>

            <el-menu-item index="2-1" route="/user/select">
              <el-icon>
                <List />
              </el-icon>
              查询
            </el-menu-item>
            <el-menu-item index="2-2" route="/user/add">
              <el-icon>
                <Plus />
              </el-icon>
              添加
            </el-menu-item>
          </el-sub-menu>

          <el-menu-item index="3" route="/about">
            <el-icon>
              <Promotion />
            </el-icon>
            关于
          </el-menu-item>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <span>Mgrru</span>
        </div>
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>


const handleOpen = (key: string, keyPath: string[]) => {
  console.log("handleOpen", key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log("handleClose", key, keyPath)
}
</script>

<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
}


.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>