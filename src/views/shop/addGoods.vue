<template>
	<div class="addGoods">
		<div class="nav_inner">
			<ul>
				<li :class="[navCurrent == index?'active':'']" v-for="(item,index) in navInners" @click="clickNavInner(index)" :key="index">
					{{item}}
				</li>
			</ul>
		</div>
		<!-- 产品信息 -->
		<div class="add_goods_content" v-if="navCurrent == 0">
			<el-form ref="form" class="form_box" :model="form">
				<div class="form_item">
					<span class="left_txt">商品名称</span>
					<input class="ipt_txt" v-model="form.goods_name"/>
				</div>
				<div class="form_item">
					<span class="left_txt">所属分类</span>
					<el-select v-model="form.type" placeholder="请选择">
						<el-option
						  v-for="item in selects"
						  :key="item.value"
						  :label="item.label"
						  :value="item.value">
						</el-option>
					  </el-select>
				</div>
				<div class="form_item">
					<span class="left_txt">特殊会员升级商品</span>
					<el-radio-group v-model="form.upgrade">
						<el-radio :label="1">开启</el-radio>
						<el-radio :label="2">关闭</el-radio>
					</el-radio-group>
					<div class="right_open" v-if="form.upgrade == 1">
						<span>特殊商品会员级别</span>
						<el-select v-model="form.upgrade_select" placeholder="请选择">
							<el-option
							  v-for="item in vip_levels"
							  :key="item.value"
							  :label="item.label"
							  :value="item.value">
							</el-option>
						  </el-select>
					</div>
				</div>
				<div class="form_item">
					<span class="left_txt">开启商品独立折扣</span>
					<el-radio-group v-model="form.discount">
						<el-radio :label="1">开启</el-radio>
						<el-radio :label="2">关闭</el-radio>
					</el-radio-group>
					<div class="right_open" v-if="form.discount == 1">
						 <div>
							 VIP会员：
							 <input class="ro_ipt" type="text"> <span>折</span>   
						 </div>
						 <div>
							 联创：  
							 <input class="ro_ipt" type="text"> <span>折</span>    
						 </div>
						 <div>
							 经理：  
							 <input class="ro_ipt" type="text"> <span>折</span>  
						 </div>  
						 <div>
							 主管：  
							 <input class="ro_ipt" type="text"> <span>折</span>    
						 </div>
						 <div>
							 分公司：  
							 <input class="ro_ipt" type="text"> <span>折</span>   
						 </div> 
						 <div>
							 游客：  
							 <input class="ro_ipt" type="text"> <span>折</span>   
						 </div>
					</div>
				</div>
				<div class="form_item">
					<span class="left_txt">重量</span>
					<input class="ipt_txt" v-model="form.weight"/> <b>克</b>
				</div>
				<div class="form_item">
					<span class="left_txt">原价</span>
					<input class="ipt_txt" v-model="form.original_price"/> <b>元</b>
				</div>
				<div class="form_item">
					<span class="left_txt">售价</span>
					<input class="ipt_txt" v-model="form.sale_price"/> <b>元</b>
				</div>
				<div class="form_item">
					<span class="left_txt">剩余库存</span>
					<input class="ipt_txt" v-model="form.stock"/> <b>件</b>
				</div>
				<div class="form_item">
					<span class="left_txt">每单限购</span>
					<input class="ipt_txt" v-model="form.order_limit"/> <b>件</b>
				</div>
				<div class="form_item">
					<span class="left_txt">每人限购</span>
					<input class="ipt_txt" v-model="form.person_limit"/> <b>件</b>
				</div>
				<div class="form_item">
					<span class="left_txt">积分抵扣最大值</span>
					<input class="ipt_txt" v-model="form.point_max"/> <b>元 （例如：填写40，表示该商品最多能用消费积分抵扣40元）</b>
				</div>
				<div class="form_item">
					<span class="left_txt">运费设置</span>
					<div class="right_open">
						<div><el-radio v-model="form.freight" :label="1">统一邮费</el-radio> <input class="ro_ipt" type="text">0为包邮；如果运费为到付请填 -1</div>
						<div><el-radio v-model="form.freight" :label="2">运费到付</el-radio></div>
						<div>
							<el-radio v-model="form.freight" :label="3">运费模板</el-radio>
							<el-select v-model="form.freight_template" placeholder="请选择">
								<el-option
								  v-for="item in freight_templates"
								  :key="item.value"
								  :label="item.label"
								  :value="item.value">
								</el-option>
							  </el-select>
						</div>
					</div>
				</div>
				<div class="form_item">
					<span class="left_txt">是否实体</span>
					<div class="right_open">
						<el-checkbox v-model="form.is_entity">打勾为实体商品，留空则此商品作为虚拟商品购买无需物流。</el-checkbox>
					</div>
				</div>
				<div class="form_item">
					<span class="left_txt">开启商品折扣</span>
					<el-radio-group v-model="form.discount_open">
						<el-radio :label="1">开启</el-radio>
						<el-radio :label="2">关闭</el-radio>
					</el-radio-group>
					<p>根据【会员级别】，【商品折扣】，发放佣金！</p>
				</div>
				<div class="form_item">
					<span class="left_txt">第几次为复购</span>
					<div class="right_open">
						第 <input type="text" class="ro_ipt"> 次为复购
					</div>
				</div>
				<div class="form_item">
					<span class="left_txt">商品复购奖</span>
					<el-radio-group v-model="form.award">
						<el-radio :label="1">开启</el-radio>
						<el-radio :label="2">关闭</el-radio>
					</el-radio-group>
				</div>
				<div class="form_item">
					<span class="left_txt">购买方式</span>
					<el-checkbox-group v-model="form.pay">
						<el-checkbox :label="1">在线</el-checkbox>
						<el-checkbox :label="2">线下</el-checkbox>
					</el-checkbox-group>
				</div>
				<div class="form_item">
					<span class="left_txt">产品类型</span>
					<el-checkbox-group v-model="form.product_type">
						<el-checkbox :label="1">热卖商品</el-checkbox>
						<el-checkbox :label="2">新品上架</el-checkbox>
						<el-checkbox :label="3">实惠热卖</el-checkbox>
						<el-checkbox :label="4">品质保证</el-checkbox>
						<el-checkbox :label="5">低价促销（勾选后游客等级不可见）</el-checkbox>
					</el-checkbox-group>
				</div>
				<div class="form_item">
					<span class="left_txt">是否上架</span>
					<div class="right_open">
						<el-checkbox v-model="form.is_shelf">打勾表示允许销售，否则不允许销售。</el-checkbox>
					</div>
				</div>
				<div class="form_item">
					<span class="left_txt">最小购买数量</span>
					<el-radio-group v-model="form.min_buy">
						<el-radio :label="1">开启</el-radio>
						<el-radio :label="2">关闭</el-radio>
					</el-radio-group>
					<div class="right_open" v-if="form.min_buy == 1">
						最小购买数量 
						<input class="ro_ipt" v-model="form.min_buy_num" type="text"> <span>件</span>
					</div>
				</div>
				<div class="form_item">
					<span class="left_txt">排序</span>
					<div class="right_open">
						<input class="ro_ipt" v-model="form.sort_num" type="text">
						数值大的排前面 
					</div>
				</div>
				
				<div class="form_item noborder">
					<span class="left_txt"></span>
					<el-button type="primary" class="submit_btn" @click="onSubmit">提交</el-button>
				</div>
			</el-form>
		</div>
		<!-- 详细介绍 -->
		<div class="add_goods_content" v-if="navCurrent == 1">
			<div class="introduce_box">
				<vue-ueditor-wrap
					v-model="introduce" 
					:config="editorConfig" 
					>
				</vue-ueditor-wrap>
			</div>
			<el-button type="primary" class="submit_btn" @click="onSubmit1">提交</el-button>
		</div>
		<!-- 产品相册 -->
		<div class="add_goods_content" v-if="navCurrent == 2">
			<div class="form_box">
				<div class="form_item">
					<span class="left_txt">商品相册</span>
					<div class="el-upload-box">
						<upload-img :productImgs="goods_photos"></upload-img>
					</div>
					<p class="right_till">该上传为批量上传，每张不超过200KB</p>
				</div>
				<div class="form_item noborder">
					<span class="left_txt"></span>
					<el-button type="primary" class="submit_btn" @click="onSubmit2">提交</el-button>
				</div>
			</div>
		</div>
		<!-- 商品规格 -->
		<div class="add_goods_content" v-if="navCurrent == 3">
			<el-button type="primary" size="small" @click="addAttr">+ 添加规格</el-button>
			<ul class="add_attr_box">
				<li v-for="(item,index) in attrList" :key="index">
					<span @click="delAttr(index)">x</span>
					规格名称：<input type="text" v-model="item.attr_name">
					<el-button type="primary" size="mini" @click="confimAttr(index)">+ 添加规格项</el-button>
				</li>
			</ul>
			<el-button type="primary" class="submit_btn" @click="onSubmit3">提交</el-button>
		</div>
	</div>
</template>

<script>
	import VueUeditorWrap from 'vue-ueditor-wrap'
	import uploadImg from '../../components/uploadImg.vue'
	export default{
		data(){
			return{
				navCurrent: 0,
				navInners: ['产品信息','详细介绍','产品相册','商品规格'],
				tableData: [
					
				],
				form: {
					goods_name: '',
					type: '0',
					upgrade: 2,
					upgrade_select: '',
					discount: 2,
					discount_open: 2,
					weight: '',
					original_price: '',
					sale_price: '',
					stock: '',
					order_limit: '',
					person_limit: '',
					point_max: '',
					freight: 1,
					freight_template: '0',
					is_entity: false,
					award: 2,
					pay: [],
					product_type: [],
					is_shelf: false,
					min_buy: 2,
					min_buy_num: '',
					sort_num: ''
				},
				selects: [{
				  value: '0',
				  label: '套餐包'
				}],
				freight_templates: [{
				  value: '0',
				  label: '默认模板'
				}],
				vip_levels: [{
				  value: '1',
				  label: '游客'
				},{
				  value: '2',
				  label: 'VIP会员'
				},{
				  value: '3',
				  label: '联创'
				},{
				  value: '4',
				  label: '经理'
				},{
				  value: '5',
				  label: '主管'
				},{
				  value: '6',
				  label: '分公司'
				}],
				introduce: '',
				editorConfig: {
					// 编辑器不自动被内容撑高
					autoHeightEnabled: false,
					// 初始容器高度
					initialFrameHeight: 300,
					// 初始容器宽度
					initialFrameWidth: '800',
					serverUrl: 'http://192.168.1.147:8080/controller.php',
					// 上传文件接口, 报错属于正常，若需要验证可使用(也是盗大神的)http://35.201.165.105:8000/controller.php
					// 调试完毕打包上线则切换回/static/UEditor/php/controller.php即可，不用做其他处理
					UEDITOR_HOME_URL: '/UEditor/'
				},
				goods_photos: [],
				attrList:[
					// {
					// 	id: 1,
					// 	attr_name: ''
					// }
				]
			}
		},
		components:{
			VueUeditorWrap,
			uploadImg
		},
		methods:{
			clickNavInner(idx){
				this.navCurrent = idx;
			},
			onSubmit() {
				console.log(this.form);
			},
			onSubmit1() {
				console.log(this.introduce);
			},
			onSubmit2() {
				console.log(this.goods_photos);
			},
			onSubmit3() {
				
			},
			addAttr(){
				this.attrList.push({
					attr_name: ''
				})
			},
			delAttr(idx){
				this.attrList.splice(idx,1)
			},
			confimAttr(idx){
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.add_goods_content{
		padding: 30px;
		box-sizing: border-box;
		p{
			font-weight: normal;
		}
	}
	.form_box .form_item b{
		font-weight: normal;
		margin-left: 10px;
	}
	.form_box .form_item .el-radio-group{
		width: 200px;
	}
	.right_open{
		font-weight: normal;
		max-width: 60%;
		div{
			margin-bottom: 10px;
			&:last-child{
				margin-bottom: 0;
			}
		}
		span{
			margin-right: 10px;
		}
		.ro_ipt{
			display: inline-block;
			width: 100px;
			height: 25px;
			border-radius: 4px;
			padding: 0 15px;
			box-sizing: border-box;
			font-size: 12px;
			outline: none;
			transition: all .5s ease;
			border: 1px solid #ccc;
			margin-right: 5px;
			&:focus{
				border-color: #66afe9;
				box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
			}
		}
		/deep/ .el-select{
			width: 200px;
		}
		/deep/ .el-input__inner{
			height: 30px;
			line-height: 30px;
		}
		/deep/ .el-input__icon{
			line-height: 30px;
		}
	}
	.introduce_box{
		margin-bottom: 20px;
	}
	.add_attr_box{
		margin: 10px 0;
		border-top: 1px solid #e8eef6;
		li{
			padding: 10px 0;
			border-bottom: 1px solid #e8eef6;
			font-size: 14px;
			span{
				font-size: 18px;
				color: red;
				font-family: '黑体';
				cursor: pointer;
				display: inline-block;
				padding: 0 5px;
			}
			input{
				width: 120px;
				height: 25px;
				border-radius: 4px;
				padding: 0 10px;
				box-sizing: border-box;
				font-size: 12px;
				outline: none;
				transition: all .5s ease;
				border: 1px solid #ccc;
				margin-right: 30px;
				&:focus{
					border-color: #66afe9;
					box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
				}
			}
		}
	}
</style>
