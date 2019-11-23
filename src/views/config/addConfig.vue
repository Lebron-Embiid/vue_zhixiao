<template>
	<div class="addConfig">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">支付类型</span>
				<el-select v-model="form.payType" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
			</div>
			<div class="form_item">
				<span class="left_txt">用户ID</span>
				<input class="ipt_txt" v-model="form.user_id"/>
				<p class="right_till">会员ID，0为系统</p>
			</div>
			<div class="form_item">
				<span class="left_txt">APPID</span>
				<input class="ipt_txt" v-model="form.appid"/>
				<p class="right_till">开发者账户</p>
			</div>
			<div class="form_item">
				<span class="left_txt">APIKEY</span>
				<input class="ipt_txt" v-model="form.apikey"/>
				<p class="right_till">支付秘钥</p>
			</div>
			<div class="form_item">
				<span class="left_txt">STATUS</span>
				<input class="ipt_txt" v-model="form.status"/>
				<p class="right_till">配置状态</p>
			</div>
			<div class="form_item">
				<span class="left_txt">key_url</span>
				<input class="ipt_txt" v-model="form.key_url"/>
				<p class="right_till">ssl 证书key</p>
			</div>
			<div class="form_item">
				<span class="left_txt">cret_url</span>
				<input class="ipt_txt" v-model="form.cret_url"/>
				<p class="right_till">ssl 证书cret</p>
			</div>
			<div class="form_item">
				<span class="left_txt">return_url</span>
				<input class="ipt_txt" v-model="form.return_url"/>
				<p class="right_till">同步跳转地址</p>
			</div>
			<div class="form_item">
				<span class="left_txt">notify_url</span>
				<input class="ipt_txt" v-model="form.notify_url"/>
				<p class="right_till">异步回调地址</p>
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
					payType: '',
					user_id: '',
					appid: '',
					apikey: '',
					status: '',
					key_url: '',
					cret_url: '',
					return_url: '',
					notify_url: ''
				},
				selects: [{
				  value: '0',
				  label: '个人对个人'
				}, {
				  value: '1',
				  label: '环迅支付'
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
