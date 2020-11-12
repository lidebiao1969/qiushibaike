<template>
    <view>
       
				<view class="uni-comment-list" :class="{'uni-comment-list-child':(item.fid>0)}">
                    <view class="uni-comment-face">
                        <image :src="item.userpic" mode="widthFix"></image>
                    </view>
                    <view class="uni-comment-body">
                        <view class="uni-comment-top">
                            <text>{{item.username}}</text>
                        </view>
                        <view class="uni-comment-content">{{item.data}}</view>
                        <view class="uni-comment-date">
                            <view>{{item.time}}</view>
                        </view>
                    </view>
                </view>
         
    </view>
</template>

<script>
    export default {
       props:{
		   item:Object,
		   index:Number
	   }
    }
</script>

<style>
    /* comment */
    page {
        background-color: #f8f8f8;
    }

  view {
      font-size: 28upx;
  }

    .uni-comment-list {
        flex-wrap: nowrap;
        padding: 10rpx 0;
        margin: 10rpx 0;
        width: 100%;
        display: flex;
    }
	.uni-comment-list-child{
		margin-left: 70upx;
		background: #F4F4F4;
		box-sizing: border-box;
		
	}
    .uni-comment-face {
        width: 70upx;
        height: 70upx;
        border-radius: 100%;
        margin-right: 20upx;
        flex-shrink: 0;
        overflow: hidden;
    }

    .uni-comment-face image {
        width: 100%;
        border-radius: 100%;
    }

    .uni-comment-body {
        width: 100%;
    }

    .uni-comment-top {
        line-height: 1.5em;
        justify-content: space-between;
    }

    .uni-comment-top text {
        color: #0A98D5;
        font-size: 24upx;
    }

    .uni-comment-date {
        line-height: 38upx;
        flex-direction: row;
        justify-content: space-between;
        display: flex !important;
        flex-grow: 1;
    }

    .uni-comment-date view {
        color: #666666;
        font-size: 24upx;
        line-height: 38upx;
    }

    .uni-comment-content {
        line-height: 1.6em;
        font-size: 28upx;
        padding: 8rpx 0;
    }

    .uni-comment-replay-btn {
        background: #FFF;
        font-size: 24upx;
        line-height: 28upx;
        padding: 5rpx 20upx;
        border-radius: 30upx;
        color: #333 !important;
        margin: 0 10upx;
    }
</style>
