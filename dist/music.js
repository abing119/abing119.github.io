const ap = new APlayer({
    container: document.getElementById('aplayer'),
	mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    volume: 0.8,
    mutex: true,
    listFolded: true,
    audio: [
		{
        name: '夜曲',
        artist: '周杰伦',
        url: 'http://music.mjiao.net/夜曲.flac',
        cover: '/music/十一月的肖邦.jpg',
    },
    {
        name: '漂移',
        artist: '周杰伦',
        url: 'http://music.mjiao.net/漂移.flac',
        cover: '/music/十一月的肖邦.jpg',
    },
    {
        name: '珊瑚海',
        artist: '周杰伦',
        url: 'http://music.mjiao.net/珊瑚海.flac',
        cover: '/music/十一月的肖邦.jpg',
    },
    {
        name: '枫',
        artist: '周杰伦',
        url: 'http://music.mjiao.net/枫.flac',
        cover: '/music/十一月的肖邦.jpg',
    },
    {
        name: '黑色毛衣',
        artist: '周杰伦',
        url: 'http://music.mjiao.net/黑色毛衣.flac',
        cover: '/music/十一月的肖邦.jpg',
    },
	
	]
});