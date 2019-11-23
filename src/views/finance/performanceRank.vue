<template>
	<div class="performanceRank">
		<div class="letter_content">
			<table>
				<th>
					<td width="300">排名</td>
					<td width="350">总奖金</td>
					<td width="350">会员账号</td>
					<td width="350">会员姓名</td>
					<td width="350">会员级别</td>
				</th>
				<tr v-for="(item,index) in tableData" :key="index">
					<td v-if="item.rank == 1 || item.rank == 2 || item.rank == 3" width="300">
						<span v-if="item.rank == 1" class="span one">冠军</span>
						<span v-if="item.rank == 2" class="span two">亚军</span>
						<span v-if="item.rank == 3" class="span three">季军</span>
					</td>
					<td width="300" v-else>
						{{item.rank}}
					</td>
					<td width="350">{{item.awards}}</td>
					<td width="350">{{item.account}}</td>
					<td width="350">{{item.name}}</td>
					<td width="350">{{item.level}}</td>
				</tr>
			</table>
		  <p>0条记录 / 1页</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tableData: [
					{
						rank: 1,
						awards: '167406.85',
						account: 'A00005',
						name: 'AAAAA5',
						level: '联创'
					},{
						rank: 2,
						awards: '167406.85',
						account: 'A00005',
						name: 'AAAAA5',
						level: '联创'
					},{
						rank: 3,
						awards: '167406.85',
						account: 'A00005',
						name: 'AAAAA5',
						level: '联创'
					},{
						rank: 4,
						awards: '167406.85',
						account: 'A00005',
						name: 'AAAAA5',
						level: '联创'
					}
				]
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
			}
		}
	}
</script>

<style scoped lang="scss">
	.letter_content{
		padding: 30px;
		box-sizing: border-box;
		table{
			display: block;
			width: 100%;
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
				// td{
				// 	display: block;
				// 	width: 80%;
				// 	&:first-child{
				// 		width: 20%;
				// 	}
				// }
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
					// line-height: 42px;
					// width: 80%;
					color: #333;
					font-weight: normal;
					.span{
						display: inline-block;
						padding: 3px 8px;
						font-size: 14px;
						text-align: center;
						color: #fff;
						border-radius: 25px;
						&.one{
							background: #F3DF29;							
						}
						&.two{
							background: #DECF7C;
						}
						&.three{
							background: #D7DBC8;
						}
					}
				}
			}
		}
		p{
			text-align: right;
			margin: 15px 0 0;
			font-size: 14px;
			color: #999;
		}
	}
</style>