<template>
	<div class="userList agent">
		<div class="agent_top">
			 是否开启区域提成级差：
			 <el-radio-group v-model="region_select">
			 	<el-radio :label="1">开启</el-radio>
			 	<el-radio :label="2">关闭</el-radio>
			 </el-radio-group>
			 省市区代理利润比例：
			 省：<input class="ipt_txt" type="text"> % 
			 市：<input class="ipt_txt" type="text"> % 
			 区：<input class="ipt_txt" type="text"> %  
		</div>
		<el-table
			:data="tableData"
			stripe
			style="width: 100%">
			<el-table-column
			  label="序号"
			  prop="number">
			</el-table-column>
			<el-table-column
			  label="会员账号"
			  prop="account">
			</el-table-column>
			<el-table-column
			  label="代理名称"
			  prop="name">
			</el-table-column>
			<el-table-column
			  label="代理地址"
			  prop="adress">
			</el-table-column>
			<el-table-column
			  label="目前状态"
			  prop="status">
			</el-table-column>
			<el-table-column
			  label="代理级别"
			  prop="level">
			</el-table-column>
			<el-table-column
			  label="申请时间"
			  prop="time">
			</el-table-column>
			<el-table-column label="中心操作" width="180">
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
				region_select: 1,
				tableData: [
					
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
	.agent_top{
		font-size: 14px;
		margin-bottom: 10px;
		.el-radio-group{
			margin-right: 50px;
		}
		.ipt_txt{
			width: 120px;
			height: 25px;
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
</style>
