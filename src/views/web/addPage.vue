<template>
	<div class="addPage">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">单页名称</span>
				<input type="text" v-model="form.title" class="ipt_txt">
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">单页的名称</p>
			</div>
			<div class="form_item">
				<span class="left_txt">连接地址</span>
				<input type="text" v-model="form.link" class="ipt_txt">
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">如果不填写就是连接地址是当前ID</p>
			</div>
			<div class="form_item">
				<span class="left_txt">所属分类</span>
				<el-select v-model="form.type" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
			</div>
			<div class="form_item">
				<span class="left_txt">详细内容</span>
				<div class="right_open">
					<vue-ueditor-wrap
						v-model="form.content" 
						:config="editorConfig" 
						>
					</vue-ueditor-wrap>
					<!-- <p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">单页的详细内容</p> -->
				</div>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>
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
					title: '',
					link: '',
					type: '',
					date: '',
					content: '',
					agree_open: 1
				},
				selects: [{
				  value: '0',
				  label: '系统公告'
				}, {
				  value: '1',
				  label: '专业知识'
				}, {
				  value: '2',
				  label: '知识讲解'
				}, {
				  value: '3',
				  label: '行业新闻'
				}],
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

<style scoped lang="scss">
	.right_open{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		.right_till{
			margin-top: 10px;
		}
	}
</style>