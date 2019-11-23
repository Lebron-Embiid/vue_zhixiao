<template>
	<div class="codeList">
		<el-table
			:data="tableData"
			stripe
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column
			  type="selection"
			  width="55">
			</el-table-column>
			<el-table-column
			  label="编号"
			  prop="id">
			</el-table-column>
			<el-table-column
			  label="二维码类型"
			  prop="type">
			</el-table-column>
			<el-table-column
			  label="二维码"
			  prop="code">
			</el-table-column>
			<el-table-column
			  label="是否开启"
			  prop="open">
			</el-table-column>
			<el-table-column label="操作">
			  <template slot-scope="scope">
				<el-button
				  size="mini"
				  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				<el-button
				  size="mini"
				  type="danger"
				  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			  </template>
			</el-table-column>
		</el-table>
		<p>0条记录 / 1页</p>
		<div class="form_item">
			<el-button class="multiple_btn" size="mini" type="primary">批量删除</el-button>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				tableData: [
					
				],
				multipleSelection: []
			}
		},
		methods:{
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			  }
		}
	}
</script>

<style scoped lang="scss">
	.codeList{
		padding: 30px;
		box-sizing: border-box;
		p{
			text-align: right;
			margin: 15px 0 0;
			font-size: 14px;
			color: #999;
		}
	}
</style>