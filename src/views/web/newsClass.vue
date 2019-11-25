<template>
	<div class="newsClass">
		<div class="letter_content">
			<table>
				<th>
					<td width="300">分类编码</td>
					<td width="350">分类名称</td>
					<td width="500">系统公告(0为不是、1为是，登录会员可查看)</td>
					<td width="350">分类排序</td>
					<td width="350">分类操作</td>
				</th>
				<tr v-for="(item,index) in tableData" :key="index">
					<td width="300">{{item.id}}</td>
					<td width="350"><input type="text" v-model="item.name"></td>
					<td width="500"><input type="text" v-model="item.type"></td>
					<td width="350"><input type="text" v-model="item.rank"></td>
					<td width="350">
						<el-button v-if="item.btn == 1" size="mini" type="danger" @click="handleDelete(index)">删除</el-button>
						<el-button v-else size="mini" type="text" @click="handleDel(index)">移除</el-button>
					</td>
				</tr>
			</table>
			<el-button size="mini" type="primary" @click="handleChange">确定修改</el-button>
			<el-button size="mini" type="primary" @click="handleAdd">添加一个分类</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData: [
					{
						id: 1,
						name: '系统公告',
						type: '1',
						rank: '0',
						btn: 1
					}
				]
			}
		},
		methods:{
			clickNavInner(idx){
				this.navCurrent = idx;
			},
			onExport(){
				
			},
			onSearch(){
				console.log(this.date);
			},
			handleChange(){
				
			},
			handleAdd(){
				this.tableData.push({
					id: '',
					name: '',
					type: '',
					rank: '',
					btn: 0
				})
			},
			handleDel(idx){
				this.tableData.splice(idx,1);
			},
			handleDelete(idx){
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				  confirmButtonText: '确定',
				  cancelButtonText: '取消'
				}).then(() => {
				  this.tableData.splice(idx,1);
				  this.$message({
					type: 'success',
					message: '删除成功!'
				  });
				}).catch(() => {
				  this.$message({
					type: 'info',
					message: '已取消删除'
				  });    
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.letter_content{
		padding: 30px;
		box-sizing: border-box;
		table{
			display: block;
			width: 100%;
			margin: 0 0 20px;
			padding: 0;
			th{
				margin: 0;
				padding: 0;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 100%;
				background: #F5F5F5;
				border-top: 1px solid #C3CED8;
				line-height: 32px;
				font-size: 12px;
				text-align: center;
				// td{
				// 	display: block;
				// 	width: 80%;
				// 	&:first-child{
				// 		width: 20%;
				// 	}
				// }
			}
			tr{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1px solid #e8eef6;
				td{
					display: block;
					vertical-align: middle;
					padding: 10px 0;
					text-align: center;
					// line-height: 42px;
					// width: 80%;
					color: #333;
					font-weight: normal;
					input{
						width: 120px;
						height: 30px;
						border-radius: 4px;
						padding: 0 15px;
						box-sizing: border-box;
						font-size: 12px;
						outline: none;
						transition: all .5s ease;
						border: 1px solid #ccc;
						&:focus{
							border-color: #66afe9;
							box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
						}
					}
				}
			}
		}
		p{
			text-align: right;
			margin: 15px 0 0;
			font-size: 14px;
			color: #999;
		}
	}
</style>