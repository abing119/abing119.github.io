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
    lrcType: 3,
    audio: [
		{
        name: '夜曲',
        artist: '周杰伦',
        url: '/music/夜曲.flac',
        cover: '/music/十一月的肖邦.jpg',
        lrc: '/music/夜曲.lrc',
    },
    {
        name: '漂移',
        artist: '周杰伦',
        url: '/music/漂移.flac',
        cover: '/music/十一月的肖邦.jpg',
        lrc: '/music/漂移.lrc',
    },
    {
        name: '枫',
        artist: '周杰伦',
        url: '/music/枫.flac',
        cover: '/music/十一月的肖邦.jpg',
        lrc: '/music/枫.lrc',
    },
    {
        name: '危险派对',
        artist: '王以太.刘至佳',
        url: '/music/危险派对.flac',
        cover: '/music/危险派对.jpg',
        lrc: '/music/危险派对.lrc',
    },
	]
});