<template>
	<div class="form_container">
		<div class="manage_tip">
			<span class="title">在线后台管理系统</span>
			<el-form status-icon ref="loginForm" class="loginForm" label-width="80px">
				<el-form-item label="邮箱">
					<el-input v-model="username" placeholder="请输入账号"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="submit_btn" @click="submitForm">登录</el-button>
				</el-form-item>
				<div class="info">
					<p>还没有账号,请先<router-link to="/register">注册?</router-link></p>
				</div>
			</el-form>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
	return {
		username: '',
		password: '',
	}
  },
  methods: {
	  submitForm () {
		this.$store.dispatch('setAuthenticated');
		this.$router.push('/index')
	  }
  }
}
</script>

<style scoped>
.form_container {
  position: relative;
  width: 100%;
  height: 100%;
  /* background: url(../../assets/bg.jpg) no-repeat center center; */
  background-size: 100% 100%;
}
.manage_tip {
  width: 370px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 5px 10px #cccccc;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}

.loginForm {
  margin-top: 20px;
  background-color: white;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
}
.submit_btn {
  width: 100%;
}
.info{
	float: right;
	font-size: 14px;
	color: #606266;
}
a{
	text-decoration: none;
}
</style>