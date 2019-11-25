<template>
	<div class="orderList">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
			<div class="right_search">
				<span>订单号：</span>
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
		<div class="order_content_box">
		  <div class="order_content_item" v-for="(item,index) in orderList" :key="index">
				<div class="order_top"><span>订单编号:{{item.order_id}}</span><span>会员：{{item.order_name}}</span><span>时间：{{item.order_time}}</span><span>物流信息：{{item.order_info}}</span></div>
				<div class="order_center">汇款备注：{{item.order_remark}}</div>
				<div class="order_bottom">
					<div class="order_p_box order_type">
						<p>{{item.order_type}}</p>
					</div>
					<div class="order_p_box order_unit">
						<p>商品单价</p>
						<p>{{item.order_price}} x {{item.order_num}}</p>
					</div>
					<div class="order_p_box order_price">
						<p>折扣价格</p>
						<p>￥{{item.order_price}}</p>
					</div>
					<div class="order_p_box order_format">
						<p>商品规格</p>
						<p>{{item.order_attr}}</p>
					</div>
					<div class="order_p_box order_pay">
						<p>商品总价：<span>¥{{item.order_total}}</span> 运费：¥{{item.order_fare}}</p>
						<p>应付：<span>¥{{item.order_price}}</span></p>
					</div>
					<div class="order_p_box order_status">
						<p>{{item.order_status}}</p>
					</div>
					<div class="order_p_box order_way">
						<p>付款方式： {{item.order_way}}</p>
					</div>
				</div>
		  </div>
		  <p class="page_p">0条记录 / 1页</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['全部记录','待发货','已发货','退款中','已退款','已成交'],
				date: '',
				orderList: [
					{
						order_id: '201911122003511644',
						order_name: 'A00008',
						order_time: '2019-11-12 20:03',
						order_info: '该商品为虚拟物品',
						order_remark: '',
						order_type: '1000元套餐包',
						order_price: '1000',
						order_num: 1,
						order_total: '1000.00',
						order_fare: '0.00',
						order_attr: '默认属性',
						order_status: '已成交',
						order_way: '佣金'
					},{
						order_id: '201911122003511644',
						order_name: 'A00008',
						order_time: '2019-11-12 20:03',
						order_info: '该商品为虚拟物品',
						order_remark: '',
						order_type: '1000元套餐包',
						order_price: '1000',
						order_num: 1,
						order_total: '1000.00',
						order_fare: '0.00',
						order_attr: '默认属性',
						order_status: '已成交',
						order_way: '佣金'
					}
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
	.page_p{
		text-align: right;
		margin: 15px 0 0;
		font-size: 14px;
		color: #999;
	}
	.order_content_box{
		padding: 30px;
		box-sizing: border-box;
		.order_content_item{
			border: 1px solid #c5c5c5;
			box-sizing: border-box;
			margin-bottom: 15px;
			font-size: 12px;
			.order_top,.order_center{
				background: #f5f5f5;
				border-bottom: 1px solid #ddd;
				padding: 10px;
				box-sizing: border-box;
				span{
					display: inline-block;
					margin-right: 20px;
				}
			}
			.order_bottom{
				display: flex;
				justify-content: flex-start;
				align-items: stretch;
				padding: 0 10px;
				box-sizing: border-box;
				.order_p_box{
					display: flex;
					justify-content: center;
					align-items: center;
					flex-wrap: wrap;
					padding: 25px 0;
					text-align: center;
					box-sizing: border-box;
					color: #6f6f6f;
					&.order_type{
						width: 20%;
						text-align: left;
					}
					&.order_unit,&.order_price{
						width: 10%;
					}
					&.order_format{
						width: 12%;
						border-right: 1px solid #e8eef6;
					}
					&.order_pay{
						width: 28%;
						border-right: 1px solid #e8eef6;
						span{
							color: #f30;
							font-weight: bold;
						}
					}
					&.order_status{
						border-right: 1px solid #e8eef6;
					}
					&.order_status,&.order_way{
						width: 15%;
					}
					p{
						width: 100%;
						margin: 0 0 15px;
						&:last-child{
							margin: 0;
						}
					}
				}
			}
		}
	}
</style>
