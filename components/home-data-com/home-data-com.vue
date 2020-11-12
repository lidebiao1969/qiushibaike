<template>
	<view>
		<view class="u-f-around u-margin-h-20upx">
			<block v-for="(item,index) in homeData " :key="index">
				<view class="u-f-col ">
					<view > {{item.num}}</view>
					<view >{{item.name}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			homeData:Array
		}
	}
</script>

<style>

</style>
