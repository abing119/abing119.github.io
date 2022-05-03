const ap = new APlayer({
    container: document.getElementById('aplayer'),
	fixed: true,
    audio: [
		{
        name: '夜曲',
        artist: '周杰伦',
        url: '/music/夜曲.wav',
        cover: '/music/十一月的肖邦.jpg',
    },
	{
	        name: "人世间",
	        artist: '雷佳',
	        url: 'https://ws.stream.qqmusic.qq.com/C4000045tUPL4N0huG.m4a?guid=7078484&vkey=C4AD2A067BE3917378340A77239B38CEEC5C3190A88E8AF3E7A50D58CB56AFB8F7087E0743E77C70B9B94B254E10AE5CDE36E380B5FB7D14&uin=&fromtag=103002',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003UbE560Ml6gx.jpg',	
	    },
	{
	        name: "像我这样的人",
	        artist: '毛不易',
	        url: 'http://m701.music.126.net/20220503090203/cb26996d0323abbd893e88bdb97fff07/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096510869/06bc/dd8f/56a7/d62ff249ac4ebf9ab1f754f500bd2b7c.mp3',
	        cover: 'https://p1.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg',	
	    },
	{
	        name: "不知所措",
	        artist: '王靖雯不胖',
	        url: 'https://ws.stream.qqmusic.qq.com/C400001RKBzA4WY1iE.m4a?guid=79141243&vkey=763A9B16919E363254D40B9DE35128DA769CCE3EDE8C2A2D574E781CBEC51486A8A224C334DE73116440C16E8A9B976E1C7468465D1AFED5&uin=&fromtag=103002',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001N1sHC0KHx4s.jpg',	
	    },
	{
	        name: "特别的人",
	        artist: '方大同',
	        url: 'https://ws.stream.qqmusic.qq.com/C40000159wc43VgTEW.m4a?guid=955731&vkey=BCCC5305288BC07816953864DBD3E6C1783DFCA42756435B0CB111C0B0416C24D06205A91B48BBE2D7263BAC31B201D14783A7625F7422C7&uin=&fromtag=103002',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000GvdTR0qcKh8.jpg',	
	    },
	{
	        name: "飞机场的10:30",
	        artist: '陶喆',
	        url: 'https://www.hifini.com/get_music.php?key=xeuh3c+6LV9Us4DvyE6vy2GWV81g9xd6c7zMrK6oXP4jwyKfUYPZJdalQ9JOSnlNB6oCgdNZljYtlshAEZ0',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003ROVwj4PqLPa.jpg',	
	    },
	{
	        name: "特别来宾",
	        artist: '潘玮柏/许慧欣',
	        url: 'https://www.hifini.com/get_music.php?key=w+H0jZnpKFhUs4DvyE6vy2GWV81g9xd6c7zMrK6oXP4jwyKfUYPcNcyzYcJLSkUXGpQCgdNZljYtnc9BGJsmNg',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003vZ0PZ3eGU0d.jpg',	
	    }
	]
});