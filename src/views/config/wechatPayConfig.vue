<template>
	<div class="wechatPayConfig">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">验证文件</span>
				<upload-file :fileList="fileList" @backFileName="getFileName"></upload-file>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">已上传</p>
			</div>
			<div class="form_item">
				<span class="left_txt">AppID</span>
				<input class="ipt_txt" v-model="form.appid"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">公众号AppID</p>
			</div>
			<div class="form_item">
				<span class="left_txt">AppSecret</span>
				<input class="ipt_txt" v-model="form.app_secret"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">公众号AppSecret</p>
			</div>
			<div class="form_item">
				<span class="left_txt">MCHID</span>
				<input class="ipt_txt" v-model="form.mch_id"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">商户号</p>
			</div>
			<div class="form_item">
				<span class="left_txt">商户key</span>
				<input class="ipt_txt" v-model="form.mch_key"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">支付秘钥</p>
			</div>
			<div class="form_item">
				<span class="left_txt">key_url</span>
				<upload-file :fileList="keyList" @backFileName="getKeyName"></upload-file>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">cret_url</span>
				<upload-file :fileList="cretList" @backFileName="getCretName"></upload-file>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
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
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import uploadFile from '../../components/uploadFile.vue'
	export default {
		data() {
			return {
				fileList: [],
				keyList: [],
				cretList: [],
				form: {
					appid: '',
					app_secret: '',
					mch_id: '',
					mch_key: '',
					return_url: '',
					file_url: '',
					key_url: '',
					cret_url: '',
					notify_url: ''
				}
			}
		},
		components:{
			uploadFile
		},
		methods: {
			onSubmit() {
				console.log(this.form);
			},
			getFileName(name){
				console.log(name);
				this.form.file_url = name;
			},
			getKeyName(name){
				this.form.key_url = name;
			},
			getCretName(name){
				this.form.cret_url = name;				
			}
		}
	}
</script>

<style scoped lang="scss">
	.wechatPayConfig{
		padding: 30px;
		box-sizing: border-box;
		font-size: 14px;
		.upload-demo{
			display: flex;
			align-items: center;
		}
		.select_file{
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
		.file_border{
			display: inline-block;
			min-width: 180px;
			height: 32px;
			line-height: 32px;
			font-size: 12px;
			padding: 0 10px;
			border: 1px solid #ccc;
			box-sizing: border-box;
			border-left: 0;
			border-radius: 0 4px 4px 0;
		}
	}
</style>
