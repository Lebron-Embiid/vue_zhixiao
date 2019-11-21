<template>
	<div class="loginLogo">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">产品相册</span>
				<div class="el-upload-box">
					<upload-img :productImgs="loginLogoPicList"></upload-img>
				</div>
				<p class="right_till">该上传为批量上传，每张不超过200KB (宽：120 高：120)</p>
			</div>
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import uploadImg from '../../components/uploadImg.vue'
	export default{
		data(){
			return{
				loginLogoPicList: [],
				form:{
					
				}
			}
		},
		components:{
			uploadImg
		},
		methods: {
			onSubmit() {
				console.log(this.form);
			}
		}
	}
</script>

<style scoped lang="scss">
	.el-upload-box{
		max-width: 70%;
	}
</style>