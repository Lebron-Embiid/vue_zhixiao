<template>
	<div class="userList levelList">
		<el-table
			:data="tableData"
			stripe
			style="width: 100%">
			<el-table-column
			  label="编号"
			  prop="id">
			</el-table-column>
			<el-table-column
			  label="级别名称"
			  prop="level_name">
			</el-table-column>
			<el-table-column
			  label="排序"
			  prop="sort">
			</el-table-column>
			<el-table-column label="操作">
			  <template slot-scope="scope">
				<el-button
				  size="mini"
				  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			  </template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData: [{
				  id: 1,
				  level_name: '游客',
				  sort: 5
				},{
				  id: 2,
				  level_name: 'VIP会员',
				  sort: 11
				},{
				  id: 3,
				  level_name: '联创',
				  sort: 22
				}]
			}
		},
		methods:{
			handleEdit(index, row) {
				console.log(index, row);
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>
