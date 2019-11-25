<template>
	<div class="smsConfig">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">短信开关</span>
				<el-radio-group v-model="form.sms_open">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">APIID</span>
				<input class="ipt_txt" v-model="form.api_id"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">互亿无线-APPID</p>
			</div>
			<div class="form_item">
				<span class="left_txt">APIKEY</span>
				<input class="ipt_txt" v-model="form.api_key"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">互亿无线-APIKEY</p>
			</div>
			<div class="form_item">
				<span class="left_txt">短信模板</span>
				<input class="ipt_txt" v-model="form.sms_template"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">互亿无线-短信模板【验证码】为短信验证码部分,例如 "您的验证码是：【验证码】。请不要把验证码泄露给其他人。</p>
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
					sms_open: 1,
					api_id: '',
					api_key: '',
					sms_template: ''
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

<style scoped lang="scss">
	.form_box .form_item .right_till{
		max-width: 50%;
	}
</style>
