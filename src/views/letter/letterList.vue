<template>
	<div class="letterList">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="right_search">
				<span>用户名：</span>
				<input type="text" class="ipt_txt">
				<span>时间段：</span>
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
		<div class="letter_content">
			<el-table
			:data="tableData"
			stripe
			style="width: 100%">
			<el-table-column
			  label="信件编号"
			  prop="id">
			</el-table-column>
			<el-table-column
			  label="信件主题"
			  prop="theme">
			</el-table-column>
			<el-table-column
			  label="信件会员"
			  prop="vip">
			</el-table-column>
			<el-table-column
			  label="信件类型"
			  prop="type">
			</el-table-column>
			<el-table-column
			  label="当前状态"
			  prop="status">
			</el-table-column>
			<el-table-column
			  label="发送时间"
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
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部信件','收到的信件','发出的信件'],
				date: '',
				tableData: [
					// {
					//   id: '1',
					//   theme: '',
					//   vip: '',
					//   type: '',
					//   status: '',
					//   time: ''
					// },
				]
			}
		},
		methods:{
			clickNavInner(idx){
				this.navCurrent = idx;
			},
			onSearch(){
				console.log(this.date);
			},
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
	.letter_content{
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
