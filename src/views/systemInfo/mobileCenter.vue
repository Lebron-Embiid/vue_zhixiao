<template>
	<div class="mobileCenter">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">背景图片</span>
				<div class="el-upload-box">
					<upload-img :productImgs="mobileCenterPicList"></upload-img>
				</div>
				<p class="right_till">图片单个上传，参考尺寸 (宽：598 高：317)</p>
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
				mobileCenterPicList: [],
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