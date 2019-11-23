<template>
	<div class="createOrder">
		<div v-if="isCreate == 0">
			<div class="nav_inner">
				<div class="right_search">
					<span>商品分类：</span>
					<input type="text" class="ipt_txt">
					<el-button type="primary" class="submit_btn" @click="onSearch">立即搜索</el-button>
				</div>
			</div>
			<div class="letter_content">
				<el-table
				:data="tableData"
				stripe
				style="width: 100%">
				<el-table-column
				  label="商品编号"
				  prop="id">
				</el-table-column>
				<el-table-column
				  label="商品名称"
				  prop="name"
				  width="500">
				</el-table-column>
				<el-table-column
				  label="销售价格"
				  prop="price">
				</el-table-column>
				<el-table-column
				  label="剩余库存"
				  prop="num">
				</el-table-column>
				<el-table-column label="选择商品">
				  <template slot-scope="scope">
					<el-button
					  size="mini"
					  type="text"
					  @click="handleEdit(scope.$index, scope.row)">创建订单</el-button>
				  </template>
				</el-table-column>
			  </el-table>
			  <p>0条记录 / 1页</p>
			</div>
		</div>
		
		<el-form ref="form" class="form_box" v-else :model="form">
			<div class="form_item">
				<span class="left_txt">商品名称</span>
				<p>{{form.goods_name}}</p>
			</div>
			<div class="form_item">
				<span class="left_txt">商品编号</span>
				<p>{{form.goods_number}}</p>
			</div>
			<div class="form_item">
				<span class="left_txt">商品单价</span>
				<p>{{form.goods_price}}</p>
			</div>
			<div class="form_item">
				<span class="left_txt">小计</span>
				<p class="red">{{form.total}}</p>
			</div>
			<div class="form_item">
				<span class="left_txt">商品数量</span>
				<el-input-number v-model="form.num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
			</div>
			<div class="form_item">
				<span class="left_txt">运费</span>
				<input class="ipt_txt" v-model="form.freight"/>
			</div>
			<div class="form_item">
				<span class="left_txt">会员账号</span>
				<input class="ipt_txt" v-model="form.account"/>
			</div>
			
			<div class="form_item">
				<span class="left_txt">报单状态</span>
				<el-select v-model="form.status" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isCreate: 0,
				navCurrent: 0,
				navInners: ['全部记录'],
				date: '',
				tableData: [
					{
						id: 1,
						name: '1000元套餐包',
						price: '￥1000.00',
						num: 2147483567	
					},{
						id: 2,
						name: '2000套餐包',
						price: '￥2000.00',
						num: 99979	
					},{
						id: 5,
						name: '200000万套餐包',
						price: '￥200000.00',
						num: 999996	
					}
				],
				form:{
					goods_name: '',
					goods_number: '',
					goods_price: '',
					total: '',
					num: 1,
					freight: '10',
					account: '',
					status: ''
				},
				price: '',
				total: '',
				selects: [{
				  value: '0',
				  label: '未支付'
				}, {
				  value: '1',
				  label: '待发货'
				}, {
				  value: '2',
				  label: '已发货'
				}, {
				  value: '3',
				  label: '已完成'
				}, {
				  value: '4',
				  label: '退款中'
				}, {
				  value: '5',
				  label: '已退款'
				}]
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
				this.isCreate = 1;
				this.form.goods_name = this.tableData[index].name;
				this.form.goods_number = this.tableData[index].id;
				this.form.goods_price = this.tableData[index].price;
				this.form.total = this.tableData[index].price;
				this.price = parseInt(this.form.total.substring(1));
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			handleChange(value){
				console.log(value);
				this.form.total = '￥'+ this.price*value +'.00';
				this.total = this.price*value;
				console.log(this.price,this.total);
			},
			onSubmit(){
				console.log(this.form);
				this.$message({
					message: '创建订单成功！',
					type: 'success'
				});
				this.isCreate = 0;
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
	.form_box{
		.form_item{
			p{
				font-weight: normal;
				&.red{
					font-size: 20px;
					color: #f00;
				}
			}
		}
	}
</style>
