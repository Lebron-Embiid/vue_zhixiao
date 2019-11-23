<template>
	<div class="commentList">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="right_search">
				<span>会员名称：</span>
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
			  label="编号"
			  prop="id"
			  width="120">
			</el-table-column>
			<el-table-column
			  label="商品名称"
			  prop="name"
			  width="400">
			</el-table-column>
			<el-table-column
			  label="评论会员"
			  prop="vip">
			</el-table-column>
			<el-table-column
			  label="评论星级"
			  prop="star">
			</el-table-column>
			<el-table-column
			  label="评论内容"
			  prop="content">
			</el-table-column>
			<el-table-column
			  label="评论时间"
			  prop="time">
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
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部记录'],
				date: '',
				tableData: [
					
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
	.export_btn{
		margin-right: 10px;
	}
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
