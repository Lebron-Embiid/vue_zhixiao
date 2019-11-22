<template>
	<div class="addUser pt30">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">用户账号</span>
				<input class="ipt_txt" v-model="form.user_name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">请输入要使用的用户名</p>
			</div>
			<div class="form_item">
				<span class="left_txt">用户角色</span>
				<el-select v-model="form.user_roles" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
			</div>
			<div class="form_item">
				<span class="left_txt">登录密码</span>
				<input class="ipt_txt" type="password" v-model="form.password"/>
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
					user_name: '',
					user_roles: '',
					password: ''
				},
				selects: [{
				  value: '0',
				  label: '超级管理员'
				}]
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
