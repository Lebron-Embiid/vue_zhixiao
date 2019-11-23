<template>
	<div class="codePoster">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">产品相册</span>
				<div class="el-upload-box">
					<upload-img :productImgs="codePicList" @backImageUrl="getImage"></upload-img>
				</div>
				<p class="right_till">不超过200KB (宽：433 高：650)</p>
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
				codePicList: [],
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
			},
			getImage(url){
				console.log(url);
			}
		}
	}
</script>

<style scoped lang="scss">
	.el-upload-box{
		max-width: 70%;
	}
</style>