<template>
	<div class="configList">
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
			  label="支付方式"
			  prop="pay">
			</el-table-column>
			<el-table-column
			  label="用户ID"
			  prop="user_id">
			</el-table-column>
			<el-table-column
			  label="API_ID"
			  prop="api_id">
			</el-table-column>
			<el-table-column
			  label="API_KEY"
			  prop="api_key">
			</el-table-column>
			<el-table-column
			  label="状态"
			  prop="status">
			</el-table-column>
			<el-table-column
			  label="使用次数"
			  prop="count">
			</el-table-column>
			<el-table-column
			  label="证书key"
			  prop="zs_key">
			</el-table-column>
			<el-table-column
			  label="证书cret"
			  prop="zs_cret">
			</el-table-column>
			<el-table-column
			  label="return_url"
			  width="100"
			  prop="return_url">
			</el-table-column>
			<el-table-column
			  label="notify_url"
			  width="100"
			  prop="notify_url">
			</el-table-column>
			<el-table-column
			  label="添加时间"
			  prop="time">
			</el-table-column>
			<el-table-column label="操作" width="180">
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
			<el-button class="multiple_btn" size="mini" type="primary">删除</el-button>
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
	.configList{
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