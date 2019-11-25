<template>
	<div class="deliveryType">
		<div class="delivery_content">
			<el-table
			:data="tableData"
			stripe
			style="width: 100%">
			<el-table-column
			  label="ID"
			  prop="id">
			</el-table-column>
			<el-table-column
			  label="配送方式名称"
			  prop="name">
			</el-table-column>
			<el-table-column
			  label="计费方式"
			  prop="way">
			</el-table-column>
			<el-table-column
			  label="首重(首件)价格"
			  prop="first_price">
			</el-table-column>
			<el-table-column
			  label="续重(续件)价格"
			  prop="continue_price">
			</el-table-column>
			<el-table-column
			  label="状态"
			  prop="status">
			</el-table-column>
			<el-table-column
			  label="默认快递"
			  prop="express">
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
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData: [
					{
						id: '8',
						name: '运费模板1',
						way: '按重量计费',
						first_price: '10.00',
						continue_price: '3.00',
						status: '显示',
						express: '是'
					}
				]
			}
		},
		methods:{
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			}
		}
	}
</script>

<style scoped lang="scss">
	.delivery_content{
		padding: 30px;
		box-sizing: border-box;
	}
</style>
