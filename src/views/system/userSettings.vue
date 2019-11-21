<template>
	<div class="user_settings">
		<el-form ref="form" class="form_box" :model="form">
			<div class="form_item">
				<span class="left_txt">会员轨数</span>
				<input class="ipt_txt" v-model="form.tracks"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">1为太阳线2轨即双规多轨则填写相应数字。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">滑落方式</span>
				<el-radio-group v-model="form.slide">
				  <el-radio :label="1">自网滑落</el-radio>
				  <el-radio :label="2">全网滑落</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否允许新会员从系统顶部往下滑落排序。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">手动选位</span>
				<el-radio-group v-model="form.select">
				  <el-radio :label="1">是</el-radio>
				  <el-radio :label="2">否</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">是否允许自己选择新会员安置点位。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">升级方式</span>
				<el-select v-model="form.level_val" placeholder="请选择">
					<el-option
					  v-for="item in levels"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">搜索引擎抓取到的网站的描述。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">积分比值</span>
				<input class="ipt_txt" v-model="form.integral"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">（佣金积分:积分）例如：填写2,即1个佣金积分等于2个购物积分。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">用户账号起始</span>
				<input class="ipt_txt" v-model="form.prefix"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">账号前缀。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">删除无效会员</span>
				<el-radio-group v-model="form.del_vip">
				  <el-radio :label="1">开启</el-radio>
				  <el-radio :label="2">关闭</el-radio>
				</el-radio-group>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">开启【删除时间】功能对应设置x小时后，无银行信息，无开通时间会员被删除，关闭【删除时间】功能关闭。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">删除时间</span>
				<input class="ipt_txt" v-model="form.del_time"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">小时 未激活会员过期自动删除 例如:24 即为24小时后删除。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">平台收款账号</span>
				<textarea name="" id="" v-model="form.account" cols="30" rows="10"></textarea>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">会员支付订单时显示。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">提现银行</span>
				<textarea name="" id="" v-model="form.bank" cols="30" rows="10"></textarea>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">提现支持银行列表，每个以","隔开。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">提现手续费</span>
				<input class="ipt_txt" v-model="form.prefix"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">提现将扣除综合税金如：10%，不收手续费请留空。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">提现最低金额</span>
				<input class="ipt_txt" v-model="form.min_price"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">提现最低限制：300。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">提现倍数基数</span>
				<input class="ipt_txt" v-model="form.multiple"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">提现最低基数：1。</p>
			</div>
			<div class="form_item">
				<span class="left_txt">支付激活需要支付的钱数</span>
				<input class="ipt_txt" v-model="form.money"/>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt="">支付激活将扣除的数目，不能小于0，填写1，则表示只需支付1元即可激活。</p>
			</div>
			
			<div class="form_item">
				<span class="left_txt">是否强制升级</span>
				<el-select v-model="form.update" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			
			<div class="form_item">
				<span class="left_txt">是否可关闭</span>
				<el-select v-model="form.close" placeholder="请选择">
					<el-option
					  v-for="item in selects"
					  :key="item.value"
					  :label="item.label"
					  :value="item.value">
					</el-option>
				  </el-select>
				<p class="right_till"><img src="../../assets/images/cuo2.gif" alt=""></p>
			</div>
			
			<div class="form_item noborder">
				<span class="left_txt"></span>
				<el-button type="primary" class="submit_btn" @click="onSubmit">确认修改</el-button>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				form: {
					tracks: '',
					slide: 1,
					select: 1,
					integral: '',
					prefix: '',
					level_val: '',
					del_vip: 1,
					del_time: '',
					account: '',
					bank: '',
					fee: '',
					min_price: '',
					multiple: '',
					money: '',
					update: '',
					close: ''
				},
				levels: [{
				  value: '0',
				  label: '补差价'
				}, {
				  value: '1',
				  label: '全价升级'
				}],
				selects: [{
				  value: '0',
				  label: '是'
				}, {
				  value: '1',
				  label: '否'
				}]
			}
		},
		methods: {
		  onSubmit() {
			console.log(this.form);
		  }
		}
	}
</script>

<style scoped lang="scss">
	
</style>
