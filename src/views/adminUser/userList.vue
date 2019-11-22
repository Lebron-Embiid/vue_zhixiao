<template>
	<div class="userList">
		<el-table
			:data="tableData"
			stripe
			style="width: 100%">
			<el-table-column
			  label="编号"
			  prop="id">
			</el-table-column>
			<el-table-column
			  label="用户名"
			  prop="user_name">
			</el-table-column>
			<el-table-column
			  label="用户角色"
			  prop="user_roles">
			</el-table-column>
			<el-table-column
			  label="登录次数"
			  prop="login_num">
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
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部信件','收到的信件','发出的信件'],
				date: '',
				tableData: [{
				  id: '1',
				  user_name: 'admin',
				  user_roles: '超级管理员',
				  login_num: '3744次'
				}]
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
	
</style>
