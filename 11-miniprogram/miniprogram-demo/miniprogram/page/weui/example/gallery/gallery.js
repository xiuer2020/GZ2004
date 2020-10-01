Page({
    data: {
        imgUrls: [
            'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
            'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg',
            'http://desk-fd.zol-img.com.cn/g5/M00/02/05/ChMkJ1bKyZmIWCwZABEwe5zfvyMAALIQABa1z4AETCT730.jpg'
        ],
        show: true
    },
    change(e) {
        
    },
    delete(e) {
        
    },
    hide() {
        
        setTimeout(() => {
            
            this.setData({
                show: true
            })
        }, 1000)
    }
});