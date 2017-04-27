/**
 *	HMT Bus GO! (WXSS VER.)
 *
 *	@author CRH380A-2722 <609657831@qq.com>
 *	@copyright 2016-2017 CRH380A-2722
 *	@license MIT
 *	@note 页面逻辑
 */

Page({

	data: {},

	onLoad: function(options) {
		wx.showLoading({
			title: 'Loading',
			mask: true
		});
		var instance = this;
		var stopId = options.id;
		wx.request({
			url: 'https://hbus.scau.edu.cn/wxss/wxss.getStopInfo.php',
			method: 'GET',
			data: {
				id: stopId
			},
			success: function(res) {
				instance.setData({
					stopInfo: res.data.stopInfo,
					totalLine: res.data.totalLine,
					lineList: res.data.lineList
				});
				wx.hideLoading();
			}
		});
	},

	onReady: function() {},

	onShow: function() {},

	onHide: function() {},

	onUnload: function() {},

	onPullDownRefresh: function() {},

	onReachBottom: function() {},

	onShareAppMessage: function() {}

});