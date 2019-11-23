<template>
	<div class="upload_box">
		<el-upload
		  class="upload-demo"
		  ref="upload"
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :on-remove="handleRemove"
		  :on-change="handleChange"
		  :file-list="fileList" 
		  :show-file-list="false"
		  :auto-upload="false">
		  <el-button slot="trigger" class="select_file" size="small" type="primary">选取文件</el-button>
		  <span class="file_border">{{file_name}}</span>
		  <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">确定上传</el-button> -->
		</el-upload>
	</div>
</template>

<script>
	export default {
		name: 'uploadFile',
		data() {
			return {
				file_name: ''
			}
		},
		props:{
			fileList: {
				type: Array,
				default: []
			}
		},
		methods: {
			submitUpload() {
				this.$refs.upload.submit();
			},
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handleChange(file){
				this.file_name = file.name;
				this.$emit('backFileName',this.file_name);
				console.log(file,file.name);
			}
		}
	}
</script>

<style scoped lang="scss">
	.upload_box{
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
