<template>
	<div class="form_container">
		<div class="manage_tip">
			<span class="title">后台管理系统</span>
			<el-form status-icon ref="loginForm" class="loginForm" label-width="80px">
				<el-form-item label="账号">
					<el-input v-model="username" placeholder="请输入账号"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
				</el-form-item>
				<el-form-item label="验证码">
					<div class="valid_box">
						<el-input v-model="code" placeholder="请输入验证码"></el-input>
						<valid-code :value.sync="validCode" @update:value="getCode"></valid-code>
					</div>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="submit_btn" @click="submitForm">登录</el-button>
				</el-form-item>
				<!-- <div class="info">
					<p>还没有账号,请先<router-link to="/register">注册?</router-link></p>
				</div> -->
			</el-form>
		</div>
	</div>
</template>

<script>
import validCode from '../components/validCode.vue'
export default {
  name: 'Login',
  data () {
	return {
		username: '',
		password: '',
		code: '',
		validCode: '',
		id: 0
	}
  },
  components:{
	  validCode
  },
  methods: {
	  submitForm () {
		// if(this.code.toLowerCase() != this.validCode){
		// 	this.$message.error('请输入正确的验证码！');
		// 	return;
		// }
		// this.$store.dispatch('setAuthenticated');
		this.$router.push({
          path: '/index',
          query: {
            id: 0
          }
        })
	  },
	  getCode(value){
		  // console.log(value);
		  this.validCode = value.toLowerCase();
	  }
  }
}
</script>

<style scoped lang="scss">
.form_container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../assets/images/login_bg.jpg);
  /* background: url(../../assets/bg.jpg) no-repeat center center; */
  background-size: 100% 100%;
}
.manage_tip {
  width: 370px;
  position: absolute;
  top: 45%;
  right: 5%;
  transform: translate(-40%,-50%);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  /* box-shadow: 0px 5px 10px #cccccc; */
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 28px;
  background-image:-webkit-linear-gradient(left,#1d95c6,#76c0bc,#0dc7ff);
  -webkit-background-clip:text; 
  -webkit-text-fill-color:transparent; 
}

.loginForm {
  margin-top: 40px;
  /* background-color: white; */
  padding: 40px 40px 20px 20px;
  background: url(../assets/images/kuang.png) no-repeat;
  background-size: 100% 100%;
  border-radius: 5px;
}
/deep/ .el-form-item__label{
  color: rgba(255,255,255,.8);
}
/deep/ .el-input__inner{
  background: rgba(0,0,0,0);
  border-color: #1b66a0;
  &:hover,&:active{
	  border-color: #36aed2;
  }
}
.submit_btn {
  width: 100%;
  background: rgba(64,158,255,.5);
  &:hover{
	  background: rgba(64,158,255,1);;
  }
}
.info{
	float: right;
	font-size: 14px;
	color: #606266;
}
a{
	text-decoration: none;
}
.valid_box{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>