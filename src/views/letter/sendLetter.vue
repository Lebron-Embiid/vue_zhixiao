<template>
	<div class="sendLetter">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">信件主题</span>
				<input class="ipt_txt" v-model="form.letter_theme"/>
			</div>
			<div class="form_item">
				<span class="left_txt">接收会员</span>
				<el-radio-group v-model="form.get_vip">
					<el-radio :label="1">全部会员</el-radio>
					<el-radio :label="2">按会员组</el-radio>
					<el-radio :label="3">手动输入</el-radio>
				</el-radio-group>
			</div>
			<div class="form_item">
				<span class="left_txt">信件内容</span>
				<textarea name="" id="" v-model="form.letter_content" cols="30" rows="10"></textarea>
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
					letter_theme: '',
					get_vip: 1,
					letter_content: ''
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

<style>
</style>
