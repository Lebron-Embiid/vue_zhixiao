<template>
	<div class="uploadImg pt30">
		<!-- :on-preview="handlePictureCardPreview" -->
		<el-upload
			action="https://jsonplaceholder.typicode.com/posts/"
			list-type="picture-card"
			accept="image/*"
			:limit="imgLimit"
			:file-list="productImgs"
			:multiple="isMultiple"
			:on-remove="handleRemove"
			:on-success="handleAvatarSuccess"
			:before-upload="beforeAvatarUpload"
			:on-exceed="handleExceed"
			:on-error="imgUploadError">
			<i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
	</div>
</template>

<script>
	export default{
		name: "uploadImg",
		data(){
			return{
				imageUrl: '',
				dialogImageUrl: '',
				dialogVisible: false,
				isMultiple: true,
				imgLimit: 6
			}
		},
		props:{
			productImgs: {
				type: Array,
				default: []
			}
		},
		methods:{
			handleRemove(file, fileList) {//移除图片
				console.log(file, fileList);
			},
			// handlePictureCardPreview(file) {//预览图片时调用
			// 	console.log(file);
			// 	this.dialogImageUrl = file.url;
			// 	this.dialogVisible = true;
			// },
			beforeAvatarUpload(file) {//文件上传之前调用做一些拦截限制
				console.log(file);
				const isJPG = true;
				// const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

			// if (!isJPG) {
			//   this.$message.error('上传头像图片只能是 JPG 格式!');
			// }
				if (!isLt2M) {
					this.$message.error('上传图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			handleAvatarSuccess(res, file) {//图片上传成功
				console.log(res);
				console.log(file);
				this.imageUrl = URL.createObjectURL(file.raw);
				this.$emit('backImageUrl',this.imageUrl);
			},
			handleExceed(files, fileList) {//图片上传超过数量限制
				this.$message.error('上传图片不能超过6张!');
				console.log(file, fileList);
			},
			imgUploadError(err, file, fileList){//图片上传失败调用
				console.log(err)
				this.$message.error('上传图片失败!');
			}
		}
	}
</script>

<style>
</style>
