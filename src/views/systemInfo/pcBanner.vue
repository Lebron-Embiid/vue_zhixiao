<template>
	<div class="pcBanner">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">产品相册</span>
				<div class="el-upload-box">
					<upload-img :productImgs="pcBannerList"></upload-img>
				</div>
				<p class="right_till">该上传为批量上传，每张不超过200KB (宽：1200 高：400)</p>
			</div>
			<div class="form_item">
				<span class="left_txt">链接添加-修改后点击提交保存</span>
				<table>
					<th>
						<td width="80">位置</td>
						<td width="300">链接</td>
					</th>
					<tr v-for="(item,index) in tableData" :key="index">
						<td width="80">{{item.index}}</td>
						<td width="300"><input type="text" v-model="item.link"></td>
					</tr>
				</table>
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
				pcBannerList: [],
				form:{
					
				},
				tableData: [{
				  index: 1,
				  link: ''
				}, {
				  index: 2,
				  link: ''
				}, {
				  index: 3,
				  link: ''
				}, {
				  index: 4,
				  link: ''
				}]
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
	table{
		display: block;
		width: 400px;
		margin: 0;
		padding: 0;
		th{
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			background: #F5F5F5;
			border-top: 1px solid #C3CED8;
			line-height: 32px;
			text-align: center;
			td{
				display: block;
				width: 80%;
				&:first-child{
					width: 20%;
				}
			}
		}
		tr{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #e8eef6;
			td{
				display: block;
				text-align: center;
				line-height: 42px;
				width: 80%;
				color: #333;
				font-weight: normal;
				&:first-child{
					width: 20%;
				}
				input{
					width: 60%;
					height: 30px;
					border: 1px solid #ccc;
					border-radius: 4px;
					outline: none;
					padding-left: 5px;
					box-sizing: border-box;
					transition: all .5s ease;
					&:focus{
						border-color: #66afe9;
						box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
					}
				}
			}
		}
	}
</style>