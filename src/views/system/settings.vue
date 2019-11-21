<template>
	<div class="settings">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">网站名称</span>
				<input class="ipt_txt" v-model="form.name"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">网站的名称。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">网站域名</span>
				<input class="ipt_txt" v-model="form.domain"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">网站的名称，前面带http://。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">备案号码</span>
				<input class="ipt_txt" v-model="form.record_number"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">网址的备案号。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">网站描述</span>
				<textarea name="" id="" v-model="form.description" cols="30" rows="10"></textarea>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">搜索引擎抓取到的网站的描述。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">Android下载链接</span>
				<input class="ipt_txt" v-model="form.android_link"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">Android下载链接,当android与iPhone地址都不填时，页面关闭APP下载链接。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">iPhone下载链接</span>
				<input class="ipt_txt" v-model="form.ios_link"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">iPhone 下载链接,当android与iPhone地址都不填时，页面关闭APP下载链接。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">公司地址</span>
				<input class="ipt_txt" v-model="form.address"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">客服电话</span>
				<input class="ipt_txt" v-model="form.phone"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">客服邮箱</span>
				<input class="ipt_txt" v-model="form.email"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			
			<div class="form_item">
				<span class="left_txt">外部商城</span>
				<el-radio-group v-model="form.radio">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否允许未登录会员查看商城及未邀请会员注册。</p>
			</div>
			
			<div class="form_item">
				<span class="left_txt">登陆设备数</span>
				<input class="ipt_txt" v-model="form.login_num"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">同时允许多少台设备同时登陆同一个账号。</p>
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
				form: {
				  name: '',
				  domain: '',
				  record_number: '',
				  description: '',
				  android_link: '',
				  ios_link: '',
				  address: '',
				  phone: '',
				  email: '',
				  radio: 1,
				  login_num: ''
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
	
</style>
