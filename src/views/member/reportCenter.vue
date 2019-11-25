<template>
	<div class="userList reportCenter">
		<div class="agent_top">
			 用户名：<input class="ipt_txt" type="text">
			 <span>申请时间：</span>
			 <div class="right_search">
				 <el-date-picker
				   v-model="date"
				   type="daterange"
				   range-separator="至"
				   start-placeholder="开始日期"
				   end-placeholder="结束日期">
				 </el-date-picker>
				 <el-button type="primary" class="submit_btn" @click="onSearch">立即搜索</el-button>
			 </div>
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
					
				],
				date: '',
			}
		},
		methods:{
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			onSearch(){
				console.log(this.date);
			}
		}
	}
</script>

<style scoped lang="scss">
	.agent_top{
		font-size: 14px;
		margin-bottom: 10px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
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
			margin-right: 10px;
			&:focus{
				border-color: #66afe9;
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
			}
		}
		.right_search{
			font-size: 12px;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-right: 30px;
			margin-top: 0;
		}
	}
</style>
