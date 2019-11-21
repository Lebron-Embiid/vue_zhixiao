<template>
	<div class="publicCode">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">微信公众号二维码</span>
				<div class="el-upload-box">
					<upload-img :productImgs="publicCodeList"></upload-img>
				</div>
				<p class="right_till">大小不超过200KB</p>
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
				publicCodeList: [],
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