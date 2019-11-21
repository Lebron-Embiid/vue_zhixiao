<template>
	<div class="emailSettings">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">邮件发送方式</span>
				<el-select v-model="form.send" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			
			<div class="form_item">
				<span class="left_txt">SMTP服务器</span>
				<input class="ipt_txt" v-model="form.server"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">SMTP端口</span>
				<input class="ipt_txt" v-model="form.port"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">默认为 25</p>
			</div>
			<div class="form_item">
				<span class="left_txt">要求身份验证</span>
				<el-radio-group v-model="form.auth">
					<el-radio :label="1">是</el-radio>
					<el-radio :label="2">否</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">发信人地址</span>
				<input class="ipt_txt" v-model="form.send_address"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">system@woergo.com</p>
			</div>
			<div class="form_item">
				<span class="left_txt">SMTP用户名</span>
				<input class="ipt_txt" v-model="form.smtp_name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">SMTP密码</span>
				<input class="ipt_txt" v-model="form.smtp_pwd"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
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
				selects: [{
				  value: '0',
				  label: '使用sendmail发送(推荐此方式)'
				}, {
				  value: '1',
				  label: '使用socket连接服务器发送'
				}],
				form:{
					send: '',
					server: '',
					port: '',
					auth: 1,
					send_address: '',
					smtp_name: '',
					smtp_pwd: ''
				}
			}
		},
		methods:{
			onSubmit() {
				console.log(this.form);
			}
		}
	}
</script>

<style>
</style>
