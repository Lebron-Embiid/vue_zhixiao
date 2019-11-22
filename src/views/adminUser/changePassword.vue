<template>
	<div class="changePassword pt30">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">用户名</span>
				<div class="div_txt">{{form.user_name}}</div>
			</div>
			<div class="form_item">
				<span class="left_txt">原始密码</span>
				<input class="ipt_txt" type="password" v-model="form.old_password"/>
			</div>
			<div class="form_item">
				<span class="left_txt">新密码</span>
				<input class="ipt_txt" type="password" v-model="form.new_password"/>
			</div>
			<div class="form_item">
				<span class="left_txt">确认密码</span>
				<input class="ipt_txt" type="password" v-model="form.again_password"/>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">确认修改</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					user_name: 'admin',
					old_password: '',
					new_password: '',
					again_password: ''
				},
				selects: [{
				  value: '0',
				  label: '是'
				}, {
				  value: '1',
				  label: '否'
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
