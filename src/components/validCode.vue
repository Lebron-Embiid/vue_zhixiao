<template>
	<div class="ValidCode disabled-select" @click="refreshCode">
		<span v-for="(item, index) in codeList" :key="index" :style="getStyle(item)">{{item.code}}</span>
	</div>
</template>

<script>
export default {
  name: 'validCode',
  props: {
    length: {
      type: Number,
      default: 4
    }
  },
  data () {
    return {
      codeList: []
    }
  },
  mounted () {
    this.createdCode()
  },
  methods: {
    refreshCode () {
      this.createdCode()
    },
    createdCode () {
      let len = this.length,
        codeList = [],
        chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789',
        charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `1${[Math.floor(Math.random() * 10)]}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      // 指向
      this.codeList = codeList
      // 将当前数据派发出去
      this.$emit('update:value', codeList.map(item => item.code).join(''))
    },
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
  }
}
</script>

<style scoped lang="scss">
  .ValidCode{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
	width: 120px !important;
	height: 40px;
	padding: 0 10px;
	// border: 1px solid #DCDFE6;
	border-radius: 4px;
	margin-left: 10px;
	background: #fff;
	overflow: hidden;
	box-sizing: border-box;
    span{
      display: inline-block;
    }
  }
</style>