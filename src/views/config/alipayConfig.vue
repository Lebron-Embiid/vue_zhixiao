<template>
	<div class="alipayConfig">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">AppID</span>
				<input class="ipt_txt" v-model="form.appid"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">支付宝分配的应用ID</p>
			</div>
			<div class="form_item">
				<span class="left_txt">商户私钥</span>
				<textarea name="" v-model="form.mch_key" cols="30" rows="10"></textarea>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">商户私钥（<i>请使用 PKCS1和2048 进行签名的私钥</i>）</p>
			</div>
			<div class="form_item">
				<span class="left_txt">支付宝公钥</span>
				<textarea name="" v-model="form.ali_key" cols="30" rows="10"></textarea>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">支付宝公钥（<i>请使用 PKCS1和2048 进行签名的公钥</i>）</p>
			</div>
			<div class="form_item">
				<span class="left_txt">return_url</span>
				<input class="ipt_txt" v-model="form.return_url"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">同步跳转地址</p>
			</div>
			<div class="form_item">
				<span class="left_txt">notify_url</span>
				<input class="ipt_txt" v-model="form.notify_url"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">异步回调地址</p>
			</div>
			<div class="form_item">
				<span class="left_txt">签名工具下载</span>
				<a href="">WINDOWS版本</a>
				<a href="">MAC_OSX版本</a>
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
					appid: '',
					mch_key: '',
					ali_key: '',
					return_url: '',
					notify_url: '',
					
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
	.alipayConfig{
		a{
			color: #0a8ddf;
			font-weight: normal;
			margin-right: 20px;
		}
	}
</style>
