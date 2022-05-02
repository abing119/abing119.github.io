const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
		{
        name: '夜曲',
        artist: '周杰伦',
        url: 'https://ws.stream.qqmusic.qq.com/C4000024jrso28p8VA.m4a?guid=9298521&vkey=807F13A8E7F7B220C3A5E758B25C3DB666ABDFD10B7AD8BE64A9EF19EDEC74FD4219028CBAC2D98B5E0A6C048861CBC9CCFA26774BFAD7A7&uin=626567678&fromtag=103002',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg',
    },
	{
	        name: "暗号",
	        artist: '周杰伦',
	        url: 'https://ws.stream.qqmusic.qq.com/C400000w5Hsz0bO0bx.m4a?guid=140385&vkey=87F24EAE923F1D0008A0DA97646D46092DEF3AA04451F8BA9AD2668D812C4B003EDC3803F01FE208F7A2D8781653BD14D395DB5C15F75321&uin=626567678&fromtag=103002',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004MGitN0zEHpb.jpg',	
	    },
	{
	        name: "手写的从前",
	        artist: '周杰伦',
	        url: 'https://ws.stream.qqmusic.qq.com/C400002RQhEf3ZzXue.m4a?guid=84874296&vkey=37FA38832B9988EE4217D595925F5D6885737BF82A81F71F9016FE6D75A4D35E1DE99E930D61DD919DA8CF62F792F8FB271B88345394D5C2&uin=626567678&fromtag=103002',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001uqejs3d6EID.jpg',	
	    },
	{
	        name: "不知所措",
	        artist: '王靖雯不胖',
	        url: 'https://ws.stream.qqmusic.qq.com/C400001RKBzA4WY1iE.m4a?guid=79141243&vkey=763A9B16919E363254D40B9DE35128DA769CCE3EDE8C2A2D574E781CBEC51486A8A224C334DE73116440C16E8A9B976E1C7468465D1AFED5&uin=&fromtag=103002',
	        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001N1sHC0KHx4s.jpg',	
	    }
	]
});