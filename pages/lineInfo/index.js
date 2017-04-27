/**
 *	HMT Bus GO! (WXSS VER.)
 *
 *	@author CRH380A-2722 <609657831@qq.com>
 *	@copyright 2016-2017 CRH380A-2722
 *	@license MIT
 *	@note 页面逻辑
 */

var interval = null;

Page({

	data: {switchChecked: false},

	onLoad: function(options) {
		wx.showLoading({
			title: 'Loading',
			mask: true
		});
		var instance = this;
		var lineId = options.id;
		wx.request({
			url: 'https://hbus.scau.edu.cn/wxss/wxss.getLineInfo.php',
			method: 'GET',
			data: {id: lineId},
			success: function(res) {
				instance.setData({
					lineInfo: res.data.lineInfo,
					totalStops: res.data.totalStops,
					stops: res.data.stops
				});
				wx.hideLoading();
			}
		});
	},

	onReady: function() {},

	onShow: function() {},

	onHide: function() {
		clearInterval(interval);
		this.setData({
			switchChecked: false
		});
	},

	onUnload: function() {
		clearInterval(interval);
		this.setData({
			switchChecked: false
		});
	},

	onPullDownRefresh: function() {},

	onReachBottom: function() {},

	onShareAppMessage: function() {},

	refresh: function(e) {
		var lineId = e.currentTarget.id;
		var instance = this;
		wx.showLoading({
			title: 'Loading',
			mask: true
		});
		wx.request({
			url: 'https://hbus.scau.edu.cn/wxss/wxss.refreshStop.php',
			method: 'GET',
			data: {id: lineId},
			success: function(res) {
				instance.setData({stops: res.data.stops});
				wx.hideLoading();
			}
		});
	},

	autoRefresh: function(e) {
		var lineId = e.currentTarget.id;
		var instance = this;
		if (e.detail.value) {
			interval = setInterval(function() {
				wx.showLoading({
					title: 'Loading',
					mask: true
				});
				wx.request({
					url: 'https://hbus.scau.edu.cn/wxss/wxss.refreshStop.php',
					method: 'GET',
					data: {id: lineId},
					success: function(res) {
						instance.setData({stops: res.data.stops});
						wx.hideLoading();
					}
				});
			}, 15000);
		} else {
			clearInterval(interval);
		}
	}

});