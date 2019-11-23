<template>
	<div class="addCode">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">二维码类型</span>
				<el-radio-group v-model="form.codeType">
					<el-radio :label="1">微信</el-radio>
					<el-radio :label="2">支付宝</el-radio>
				</el-radio-group>
			</div>
			<div class="form_item">
				<span class="left_txt">二维码</span>
				<el-upload
					action="https://jsonplaceholder.typicode.com/posts/"
					list-type="picture-card"
					accept="image/*"
					:limit="imgLimit"
					:file-list="codeList"
					:multiple="isMultiple"
					:on-success="handleAvatarSuccess">
					<i class="el-icon-plus"></i>
				</el-upload>
			</div>
			<div class="form_item">
				<span class="left_txt">是否开启</span>
				<el-radio-group v-model="form.open">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
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
				isMultiple: false,
				imgLimit: 1,
				codeList: [],
				form:{
					codeType: 1,
					code_url: '',
					open: 1
				}
			}
		},
		methods: {
		  onSubmit() {
			console.log(this.form);
		  },
		  handleAvatarSuccess(res, file) {//图片上传成功
		  	console.log(res);
		  	console.log(file);
		  	this.form.code_url = URL.createObjectURL(file.raw);
		  },
		}
	}
</script>

<style>
</style>
