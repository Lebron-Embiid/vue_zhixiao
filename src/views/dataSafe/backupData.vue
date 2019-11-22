<template>
	<div class="backupData">
		<div class="backup_title">
			<span>每组备份大小：</span>
			<input type="text">
			<span class="mr50">KB (1 MB = 1024 KB)</span>
			<span>数据存放目录：	database / </span>
			<input type="text">
		</div>
		<el-table
		:data="tableData"
		stripe
		style="width: 100%">
		<el-table-column
		  prop="name"
		  label="表名"
		  width="400">
		</el-table-column>
		<el-table-column
		  prop="type"
		  label="类型"
		  width="180">
		</el-table-column>
		<el-table-column
		  prop="coding"
		  label="编码">
		</el-table-column>
		<el-table-column
		  prop="num"
		  label="记录数">
		</el-table-column>
		<el-table-column
		  prop="size"
		  label="大小">
		</el-table-column>
		<el-table-column
		  prop="chip"
		  label="碎片">
		</el-table-column>
	  </el-table>
	  <div class="btn_box">
		  <el-button type="primary" @click="backup">备份数据</el-button>
		  <el-button type="primary" @click="restore">修复数据表</el-button>
		  <el-button type="primary" @click="clear">优化数据表</el-button>
	  </div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData: [{
				  name: 'sinbegin_about',
				  type: 'MyISAM',
				  coding: 'utf8_general_ci',
				  num: 4,
				  size: '3.4KB',
				  chip: '0 B'
				},{
				  name: 'sinbegin_about',
				  type: 'MyISAM',
				  coding: 'utf8_general_ci',
				  num: 4,
				  size: '3.4KB',
				  chip: '0 B'
				},{
				  name: 'sinbegin_about',
				  type: 'MyISAM',
				  coding: 'utf8_general_ci',
				  num: 4,
				  size: '3.4KB',
				  chip: '0 B'
				},{
				  name: 'sinbegin_about',
				  type: 'MyISAM',
				  coding: 'utf8_general_ci',
				  num: 4,
				  size: '3.4KB',
				  chip: '0 B'
				}]
			}
		},
		methods:{
			backup(){
				
			},
			restore(){
				
			},
			clear(){
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.backupData{
		padding: 30px;
		box-sizing: border-box;
		font-size: 14px;
		.backup_title{
			margin-bottom: 20px;
		}
		span{
			margin-left: 5px;
		}
		input{
			height: 25px;
			border-radius: 4px;
			padding: 0 5px;
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
		.mr50{
			margin-right: 50px;
		}
	}
	.btn_box{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px auto;
	}
</style>
