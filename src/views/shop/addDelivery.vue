<template>
	<div class="addDelivery">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt"><i>* </i>配送方式名称</span>
				<input class="ipt_txt" v-model="form.delivery_name"/>
			</div>
			<div class="form_item">
				<span class="left_txt">是否为默认快递模板</span>
				<el-radio-group v-model="form.is_default">
					<el-radio :label="1">是</el-radio>
					<el-radio :label="2">否</el-radio>
				</el-radio-group>
			</div>
			<div class="form_item">
				<span class="left_txt">计费方式</span>
				<el-radio-group v-model="form.bill_method">
					<el-radio :label="1">按重量计费</el-radio>
					<el-radio :label="2">按件计费</el-radio>
				</el-radio-group>
			</div>
			<div class="form_item">
				<span class="left_txt">配送价格</span>
				<div class="right_open">
					<table>
						<th>
							<td width="400">运送到</td>
							<td width="300">首{{form.bill_method==1?'重(克)':'件(个)'}}</td>
							<td width="300">{{form.bill_method==1?'首费':'运费'}}(元)</td>
							<td width="300">续{{form.bill_method==1?'重(克)':'件(个)'}}</td>
							<td width="300">续费(元)</td>
							<td width="300">操作</td>
						</th>
						<tr v-for="(item,index) in tableData" :key="index">
							<td width="400">
								<span v-if="item.is_btn == 0">全国 [默认运费]</span>
								<!-- <el-button v-else type="text" size="mini">编辑</el-button> -->
								<el-cascader
									v-else
									size="mini"
								    :options="options"
								    :props="props"
								    collapse-tags
									v-model="item.transport_to"
									@change="changeCascader($event,index)"></el-cascader>
							</td>
							<td width="300">
								<input type="number" v-if="form.bill_method==1" v-model="item.first_weight">
								<input type="number" v-else v-model="item.first_item">
							</td>
							<td width="300">
								<input type="number" v-if="form.bill_method==1" v-model="item.first_price">
								<input type="number" v-else v-model="item.freight">								
							</td>
							<td width="300">
								<input type="number" v-if="form.bill_method==1" v-model="item.continue_weight">
								<input type="number" v-else v-model="item.continue_item">								
							</td>
							<td width="300">
								<input type="number" v-model="item.continue_price">								
							</td>
							<td width="300">
								<el-button
								  size="mini"
								  type="danger"
								  v-if="item.is_btn != 0"
								  @click="handleDelete(index)">删除</el-button>
							</td>
						</tr>
					</table>
					<el-button type="primary" class="new_area_btn" size="mini" @click="addDeliveryArea">新增配送区域</el-button>
					<h6>根据{{form.bill_method==1?'重量':'件数'}}来计算运费，当物品不足《首{{form.bill_method==1?'重重':'件数'}}量》时，按照《首{{form.bill_method==1?'重':'件'}}费用》计算，超过部分按照《续{{form.bill_method==1?'重重':'件数'}}量》和《续{{form.bill_method==1?'重':'件'}}费用》乘积来计算</h6>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">特殊区域设置</span>
				<div class="right_open">
					<el-radio-group v-model="form.area_setting">
						<el-radio :label="1">只配送区域</el-radio>
						<el-radio :label="2">不配送区域</el-radio>
					</el-radio-group>
					<p>只配送区域:只配送选择的区域,不配送未选择的区域不配送区域:不配送选择的区域,只配送未选择的区域(只能选择一种类型)</p>
					<el-button type="primary" size="mini">选择地区</el-button>
				</div>
			</div>
			<div class="form_item">
				<span class="left_txt">是否显示</span>
				<el-radio-group v-model="form.is_show">
					<el-radio :label="1">是</el-radio>
					<el-radio :label="2">否</el-radio>
				</el-radio-group>
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
				form:{
					delivery_name: '',
					is_default: 2,
					bill_method: 1,
					area_setting: 2,
					is_show: 2
				},
				tableData: [
					{
						transport_to: [],	//运送地区
						first_weight: '',	//首重
						first_item: '',		//首件
						first_price: '',	//首费
						freight: '',		//运费
						continue_weight: '',//续重
						continue_item: '',	//续件
						continue_price: '',	//续费
						is_btn: 0			//是否显示删除按钮 0：不显示  1：显示
					}
				],
				props: { multiple: true },
				options: [{
				  value: 1,
				  label: '东南',
				  children: [{
					value: 2,
					label: '上海',
					children: [
					  { value: 3, label: '普陀' },
					  { value: 4, label: '黄埔' },
					  { value: 5, label: '徐汇' }
					]
				  }, {
					value: 7,
					label: '江苏',
					children: [
					  { value: 8, label: '南京' },
					  { value: 9, label: '苏州' },
					  { value: 10, label: '无锡' }
					]
				  }, {
					value: 12,
					label: '浙江',
					children: [
					  { value: 13, label: '杭州' },
					  { value: 14, label: '宁波' },
					  { value: 15, label: '嘉兴' }
					]
				  }]
				}, {
				  value: 17,
				  label: '西北',
				  children: [{
					value: 18,
					label: '陕西',
					children: [
					  { value: 19, label: '西安' },
					  { value: 20, label: '延安' }
					]
				  }, {
					value: 21,
					label: '新疆维吾尔族自治区',
					children: [
					  { value: 22, label: '乌鲁木齐' },
					  { value: 23, label: '克拉玛依' }
					]
				  }]
				}]
			}
		},
		methods: {
		  onSubmit() {
			console.log(this.form);
		  },
		  addDeliveryArea(){
			  this.tableData.push({
				  transport_to: [],
				  first_weight: '1000',
				  first_item: '1',
				  first_price: '0.00',
				  freight: '0.00',
				  continue_weight: '1000',
				  continue_item: '1',
				  continue_price: '0.00',
				  is_btn: 1	
			  })
		  },
		  handleDelete(idx){
			  this.tableData.splice(idx,1);
		  },
		  changeCascader(e,idx){
			  console.log(e,idx);
			  this.tableData[idx].transport_to = e;
		  }
		}
	}
</script>

<style scoped lang="scss">
	.form_box .form_item .left_txt i{
		color: #f00;
	}
	.right_open{
		font-weight: normal;
		table{
			display: block;
			width: 820px;
			margin: 0;
			padding: 0;
			th{
				margin: 0;
				padding: 0;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: 100%;
				background: #F5F5F5;
				border-top: 1px solid #C3CED8;
				line-height: 32px;
				font-size: 12px;
				text-align: center;
			}
			tr{
				display: flex;
				justify-content: flex-start;
				align-items: center;
				border-bottom: 1px solid #e8eef6;
				td{
					display: block;
					vertical-align: middle;
					padding: 10px 0;
					text-align: center;
					font-size: 14px;
					color: #333;
					font-weight: normal;
					input{
						width: 100px;
						height: 25px;
						border: 1px solid #ccc;
						border-radius: 4px;
						outline: none;
						padding-left: 5px;
						box-sizing: border-box;
						transition: all .5s ease;
						&:focus{
							border-color: #66afe9;
							box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
						}
					}
				}
			}
		}
		.new_area_btn{
			margin: 10px 0 15px;
		}
		p{
			width: 320px;
			font-size: 14px;
		}
		h6{
			font-weight: normal;
			font-size: 14px;
			margin: 0;
		}
	}
</style>
