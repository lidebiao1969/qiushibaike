const dataInfo = {
	"CREATE_TIME": 1593502282.0,
	"DETAIL_DESC": "美好的一天从这里开始！",
	"PLACE": "济南市章丘市",
	"IS_FAVORITE": "0", //是否收藏
	"FAVORITE_NUM": "0", //收藏数
	"VIEW_NUM": "6", //查看数
	"IS_PRAISE": "0", //是否点赞
	"PRAISE_NUM": "1", //点赞数
	"COMMENT_NUM": "3", //评论数
	"CANDELETE": 1, //是否可删除
	"NICKNAME": "小五",
	"HEADIMGURL": "../../static/zzf/z1.png",
	"IMAG_ARR": [
		"@/static/zzf/z1.png", 
		"@/static/zzf/z1.png",
		 "@/static/zzf/z1.png"
	],

};
const commentList = [{
		"COMMENT_TIME": "2020-07-07 10:33:29",
		"FIRSTNICKNAME": "网友1271622",
		"CHILD_ANWSER_LIST": [],
		"IS_PRAISE": null,
		"COMMENT": "赞",
		"PRAISE_NUM": 0,
		"CANDELETE": 1,
		"HEADIMGURL": "../../static/zzf/z1.png",
		"SECONDNICKNAME": null
	},
	{
		"COMMENT_TIME": "2020-07-07 10:32:52",
		"FIRSTNICKNAME": "网友3778839",
		"IS_PRAISE": null,
		"COMMENT": "花好看",
		"PRAISE_NUM": 0,
		"CANDELETE": 0,
		"HEADIMGURL": "../../static/zzf/z1.png",
		"PARENTID": "1",
		"SECONDNICKNAME": null,
		"CHILD_ANWSER_LIST": [{
			"COMMENT_TIME": "2020-07-07 10:39:20",
			"FIRSTNICKNAME": "网友3778839",
			"IS_PRAISE": null,
			"COMMENT": "嘻嘻，真的很好看呀，很喜欢！",
			"PRAISE_NUM": 0,
			"CANDELETE": 1,
			"HEADIMGURL": "../../static/zzf/z1.png",
			"SECONDNICKNAME": "小五"
		},{
			"COMMENT_TIME": "2020-07-07 10:33:10",
			"FIRSTNICKNAME": "小五",
			"IS_PRAISE": null,
			"COMMENT": "谢谢",
			"PRAISE_NUM": 0,
			"CANDELETE": 1,
			"HEADIMGURL": "../../static/zzf/z1.png",
			"SECONDNICKNAME": null
		}]

	}
];
export default {
	dataInfo,
	commentList
}
