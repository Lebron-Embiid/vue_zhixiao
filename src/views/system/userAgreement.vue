<template>
	<div class="userAgreement">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">用户协议</span>
				<vue-ueditor-wrap 
					v-model="form.user_agree" 
					:config="editorConfig" 
					>
				</vue-ueditor-wrap>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			<div class="form_item">
				<span class="left_txt">协议开关</span>
				<el-radio-group v-model="form.agree_open">
					<el-radio :label="1">开启</el-radio>
					<el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">会员注册时控制显示。</p>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">确认修改</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	import VueUeditorWrap from 'vue-ueditor-wrap'
	export default{
		data(){
			return{
				form:{
					user_agree: '',
					agree_open: 1
				},
				// 简单配置
				editorConfig: {
					// 编辑器不自动被内容撑高
					autoHeightEnabled: false,
					// 初始容器高度
					initialFrameHeight: 300,
					// 初始容器宽度
					initialFrameWidth: '800',
					serverUrl: 'http://192.168.1.147:8080/controller.php',
					// 上传文件接口, 报错属于正常，若需要验证可使用(也是盗大神的)http://35.201.165.105:8000/controller.php
					// 调试完毕打包上线则切换回/static/UEditor/php/controller.php即可，不用做其他处理
					UEDITOR_HOME_URL: '/UEditor/'
				}
			}
		},
		components:{
			VueUeditorWrap
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