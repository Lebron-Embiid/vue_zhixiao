<template>
	<div class="resetPassword">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">会员账号</span>
				<input class="ipt_txt" v-model="form.account"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">请输入要重置密码的会员账号</p>
			</div>
			<div class="form_item">
				<span class="left_txt">登录密码</span>
				<input class="ipt_txt" type="password" v-model="form.password"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">登录密码，不修改请留空</p>
			</div>
			<div class="form_item">
				<span class="left_txt">安全密码</span>
				<input class="ipt_txt" type="password" v-model="form.safe_password"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">安全密码，不修改请留空</p>
			</div>
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					account: '',
					password: '',
					safe_password: ''
				}
			}
		},
		methods: {
		  onSubmit() {
			console.log(this.form);
		  }
		}
	}
</script>

<style>
</style>
