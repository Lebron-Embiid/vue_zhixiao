<template>
	<div class="newsList">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="right_search">
				<span>查询内容：</span>
				<input type="text" class="ipt_txt">
				<span>发布时间：</span>
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
			style="width: 100%"
			@selection-change="handleSelectionChange">
			<el-table-column
			  type="selection"
			  width="55">
			</el-table-column>
			<el-table-column
			  label="新闻编号"
			  prop="id"
			  width="120">
			</el-table-column>
			<el-table-column
			  label="新闻标题"
			  prop="title"
			  width="400">
			</el-table-column>
			<el-table-column
			  label="所属分类"
			  prop="type">
			</el-table-column>
			<el-table-column
			  label="发布时间"
			  prop="time">
			</el-table-column>
			<el-table-column label="新闻操作">
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
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部分类','系统公告','专业知识','知识讲解','行业新闻'],
				date: '',
				tableData: [
					
				],
				multipleSelection: []
			}
		},
		methods:{
			clickNavInner(idx){
				this.navCurrent = idx;
			},
			onExport(){
				
			},
			onSearch(){
				console.log(this.date);
			},
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
