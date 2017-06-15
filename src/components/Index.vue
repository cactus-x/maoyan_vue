<template lang="html">
  <div>
      <header>
          <h1>LOGO</h1>
          <ul>
              <li><router-link to="reg">注册</router-link></li>
              <li><router-link to="login">登录</router-link></li>
              <li><router-link to="StudentManage">学生管理</router-link></li>
          </ul>
      </header>
      <div >
          <router-view ></router-view>
      </div>
      <footer></footer>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
