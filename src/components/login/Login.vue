<template lang="html">
    <div>
                 <h1>用户登录</h1>
                 <LoginInputElement type="text">账号:</LoginInputElement>
                 <LoginInputElement type="password">密码:</LoginInputElement>
                 <input type="button" value="登录"/>
                 </div>
</template>

<script>
import LoginInputElement from "./LoginInputElement"
export default {
    
    components:{
        LoginInputElement
    }
}
</script>

<style lang="css">
</style>
