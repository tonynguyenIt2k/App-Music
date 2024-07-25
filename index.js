const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img'),
    lyricsContainer = document.getElementById('lyrics'),
    songList = document.getElementById('song-list');

const music = new Audio();

const songs = [
    {
        path: 'assets/1.mp3',
        displayName: 'Đừng Làm Trái Tim Anh Đau',
        cover: 'assets/1.jpg',
        artist: 'Sơn Tùng M-TP',
        lyrics: [
            { time: 0, text: "Hình như trong lòng em đã không còn hình bóng ai ngoài anh đâu" },
            { time: 10, text: "Hằng đêm em nằm thấu thức suy tư chẳng nhớ ai ngoài anh đâu" },
            { time: 20, text: "Vậy nên không cần nói nữa yêu mà đòi nói trong vài ba câu" },
            { time: 30, text: "Cứ cố quá đâm ra lại hầm, Ở đâu hết cả đau" },
            { time: 40, text: "Đợi chờ anh trước nhà từ sáng đến trời chiều tối mật màn này luôn" },
            { time: 50, text: "Ngược nắng hay là ngược gió biết em thấy anh tươi vui không buồn" },
            { time: 60, text: "Chỉ cần thấy thế thôi mây xanh tràn hòa" },
            { time: 70, text: "Thấy thế thôi vui hơn có quả" },
            { time: 80, text: "Bước kế tiếp em lại gần hơn chút đó nha" },
            { time: 90, text: "Rồi ngày ấy cuối cùng đã tìm đến ta nào đâu hay" },
            { time: 100, text: "Em sẽ không để vụt mất đi cơ duyên ông trời trao tay" },
            { time: 110, text: "Còn đất nước băn khoăn gì nữa, tiếp gần anh ấy" },
            { time: 120, text: "Cố gắng sẽ không để anh nghi ngờ dù một giây lúc này" },
            { time: 130, text: "Được đứng bên anh em hạnh phúc, tim loạn nhịp tung bay" },
            { time: 140, text: "Chắc chắn em thề em sẽ không bao giờ quên ngày hôm nay" },
            { time: 150, text: "Chính anh, chính anh tương tư mình anh thôi" },
            { time: 160, text: "Mãi theo sau mình anh thôi" },
            { time: 170, text: "Mãi si mê mình anh thôi" },
            { time: 180, text: "Mãi yêu thương mình anh" },
            { time: 190, text: "Vậy thì em xin chết vì người em thương" },
            { time: 200, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 210, text: "Dành cho anh dành hết ân tình em mang một đời" },
            { time: 220, text: "Đừng làm trái tim em đau" },
            { time: 230, text: "Vậy thì em xin chết vì người em thương" },
            { time: 240, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 250, text: "Dành cho anh dành hết ân tình em mang một đời" },
            { time: 260, text: "Đừng làm trái tim em đau" },
            { time: 270, text: "Ta nào đâu hay" },
            { time: 280, text: "Em sẽ không để vụt mất đi cơ duyên ông trời trao tay" },
            { time: 290, text: "Còn đánh đá băn khoăn gì nữa, tiếp cận anh ngay" },
            { time: 300, text: "Cố gắng sao không để anh nghi ngờ dù một giây lúc này" },
            { time: 310, text: "Được đứng bên anh em hạnh phúc, tim loạn nhịp tung bay" },
            { time: 320, text: "Chắc chắn em thề em sẽ không bao giờ quên ngày hôm nay" },
            { time: 330, text: "Chính anh, chính anh tương tư mình anh thôi" },
            { time: 340, text: "Mãi theo sau mình anh thôi" },
            { time: 350, text: "Mãi si mê mình anh thôi" },
            { time: 360, text: "Mãi yêu thương mình anh" },
            { time: 370, text: "Vậy thì em xin chết vì người em thương" },
            { time: 380, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 390, text: "Dành cho anh dành hết ân tình em mang một đời" },
            { time: 400, text: "Đừng làm trái tim em đau" },
            { time: 410, text: "Vậy thì em xin chết vì người em thương" },
            { time: 420, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 430, text: "Dành cho anh dành hết ân tình em mang một đời" },
            { time: 440, text: "Đừng làm trái tim em đau" },
            { time: 450, text: "Thì ra chính em đơn phương làm lời bài hát chạy theo nhạc" }
        ]
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Cẩm Tú Cầu',
        cover: 'assets/2.jpg',
        artist: 'Kiều Chi (Cover)',
        lyrics: [
            { time: 0, text: "Dáng ai dần xa xôi sánh vai người ta rồi" },
            { time: 5, text: "Trái tim vỡ ra làm đôi em hứa mãi bên anh mà" },
            { time: 10, text: "Tình đẹp là tình dang dở toàn làm người ta ngỡ" },
            { time: 15, text: "Ngỡ đâu lâu dài ngỡ bên nhau hoài" },
            { time: 20, text: "Tiếng ai vọng bên tai có phải người quay lại" },
            { time: 25, text: "Cứ ngày rồi đêm mong đợi trong lẻ loi vô vọng" },
            { time: 30, text: "Tình đẹp là tình dang dở toàn làm người ta ngỡ" },
            { time: 35, text: "Ngỡ không chia rời ngỡ đâu cả đời" },
            { time: 40, text: "Chờ người từ lúc nắng dần buông mưa trên cao vẫn cứ thế tuôn y như đang khóc thế nỗi buồn" },
            { time: 50, text: "Không cách nào để quên được đi em uống càng say thì lại càng nhớ thêm hey" },
            { time: 60, text: "Đời người được có mấy lần yêu nên đâu biết trước có bao điều khiến ta đau đớn rất rất nhiều" },
            { time: 70, text: "Cẩm tú cầu người thường nâng niu hon héo dần từ ngày em đi" },
            { time: 80, text: "Từng là bầu trời đầy nắng mà giờ mờ mịt mờ mây giăng" },
            { time: 90, text: "Đứng dưới ánh trăng tâm tình cùng kí ức vĩnh hằng" },
            { time: 100, text: "Người xưa có nhớ về nhau không choàng tay ôm lấy mỗi khi đông" },
            { time: 110, text: "Vai tựa vai môi kề môi thay lời nói" },
            { time: 120, text: "Từng là chuyện tình rực rỡ tàn cuộc lại về chơ vơ" },
            { time: 130, text: "Tỉnh thức giữa cơn mơ anh lại cuồng điên như gã khờ" },
            { time: 140, text: "Người đang yên giấc nồng bên ai ở đây mưa gió vẫn chưa phai" },
            { time: 150, text: "Qua ngày mai câu chuyện xưa xin cất lại" },
            { time: 160, text: "Chờ người từ lúc nắng dần buông mưa trên cao vẫn cứ thế tuôn y như đang khóc thế nỗi buồn" },
            { time: 170, text: "Không cách nào để quên được đi em uống càng say thì lại càng nhớ thêm hey" },
            { time: 180, text: "Đời người được có mấy lần yêu nên đâu biết trước có bao điều khiến ta đau đớn rất rất nhiều" },
            { time: 190, text: "Cẩm tú cầu người thường nâng niu hon héo dần từ ngày em đi" },
            { time: 200, text: "Chờ người từ lúc nắng dần buông mưa trên cao vẫn cứ thế tuôn y như đang khóc thế nỗi buồn" },
            { time: 210, text: "Không cách nào để quên được đi em uống càng say thì lại càng nhớ thêm hey" },
            { time: 220, text: "Đời người được có mấy lần yêu nên đâu biết trước có bao điều khiến ta đau đớn rất rất nhiều" },
            { time: 230, text: "Cẩm tú cầu người thường nâng niu hon héo dần từ ngày em đi" },
            { time: 240, text: "Đời người được có mấy lần yêu nên đâu biết trước có bao điều khiến ta đau đớn rất rất nhiều" },
            { time: 250, text: "Cẩm tú cầu người thường nâng niu hon héo dần từ ngày em đi" }
        ]
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Anh Thôi Nhân Nhượng',
        cover: 'assets/3.jpg',
        artist: 'Tony Nguyen',
        lyrics: [
            { time: 0, text: "Anh thôi nhân nhượng" },
            { time: 10, text: "Thậm thương chồm nhớ anh" },
            { time: 20, text: "Vẫn ngẫn ngơ đời trưa" },
            { time: 30, text: "Dẫu biết chân tình chưa đủ lớn" },
            { time: 40, text: "Còn giang dơ, ngậm đăng nuốt cành" },
            { time: 50, text: "Anh sợ mình chẳng thể nắm tay" },
            { time: 60, text: "Phải vùng bẫy nghi cách đứng dậy" },
            { time: 70, text: "Sao khó vậy? Anh dành cả tương lai" },
            { time: 80, text: "Nhưng em phải lòng yêu ai?" },
            { time: 90, text: "Sao gặp mạnh em phải to ra ngần ngại" },
            { time: 100, text: "Anh lùi lại một bước ngần ngờ nhìn người thân thương" },
            { time: 110, text: "Hợp thành đôi uyên nương sánh bước trên đường" },
            { time: 120, text: "Chẳng buồn thương tư làm chi nên anh chọn cách ngoanh đầu bước đi" },
            { time: 130, text: "Dành cho thanh xuân gửi trao mà em nỡ vô lơ là sao" },
            { time: 140, text: "Dừng lại anh cũng đau lắm nhưng anh không muốn mình phải phấn vương" },
            { time: 150, text: "Và anh cũng biết định hướng, người em thưa anh thôi nhẫn nhường" },
            { time: 160, text: "Kỷ niệm anh đâu nắt xóa anh sẽ gom góp gây vào nắng mai" },
            { time: 170, text: "Để được thăng hoa mãi mãi, to điểm nhấn không chút mơ phai" },
            { time: 180, text: "Dù sao cũng xin cảm ơn đã khiến cuộc sống anh ràng rơ hơn" },
            { time: 190, text: "Buồn bề anh xin nhận lấy, nhường cho em mạnh phúc đong đầy" },
            { time: 200, text: "Anh dành cả tương lai, nhưng em phải lòng yêu anh" },
            { time: 210, text: "Sao gặp mạnh em phải to dàng ngân ngại" },
            { time: 220, text: "Anh hồi lại một bước gần ngỡ nhìn người thân thương" },
            { time: 230, text: "Hợp thành đôi uyến nương sánh bước trên đường" },
            { time: 240, text: "Chẳng buồn thương tư làm chi nên anh chọn cách quanh đầu bước đi" },
            { time: 250, text: "Dành cho thanh xuân gửi trao mà em đã vô lơ là sao" },
            { time: 260, text: "Dừng lại anh cũng đau lắm nhưng anh không muốn mình phải phấn vương" },
            { time: 270, text: "Và anh cũng biết định hướng, để em thưa anh thôi nhẫn nhường" },
            { time: 280, text: "Kỷ niệm anh đâu nặt xóa anh sẽ gom góp gây vào nắng mai" },
            { time: 290, text: "Về được thăng hoa mãi mãi, to điểm nhấn không chút mơ phai" },
            { time: 300, text: "Dù sao cũng xin cảm ơn đã khiến cuộc sống anh ràng rơ hơn" },
            { time: 310, text: "Buồn bè anh xin nhận lấy, nhưng cho em anh phúc đó đây" },
            { time: 320, text: "Chẳng buồn thương tư làm chi nên anh chọn cách ngoanh đầu bước đi" },
            { time: 330, text: "Dành cho thanh xuân gửi trao và em đã vô lơ là sao" },
            { time: 340, text: "Dừng lại anh cũng đau lắm nhưng anh không muốn mình phải phấn vương" },
            { time: 350, text: "Và anh cũng bia định hưởng, người em thương anh thôi nhận nhớ" },
            { time: 360, text: "Kỷ niệm anh đâu đặt xóa, anh sẽ gom gọp người vào nắng mai" },
            { time: 370, text: "Để được thăng hoa mãi mãi, to điểm nhấn không chút mơ phai" },
            { time: 380, text: "Dù sao cũng xin cảm ơn đã khiến cuộc sống anh ràng rơ hơn" },
            { time: 390, text: "Bộn bề anh xin nhận lấy, đừng cho em bạnh phúc đâu đây" },
            { time: 400, text: "Bộn bề anh xin nhận lấy, nhưng cho em hạnh phúc đông đầy" }
        ]
    },
    {
        path: 'assets/4.mp3',
        displayName: 'Bồ Công Anh',
        cover: 'assets/4.jpg',
        artist: 'Phong Max',
        lyrics: [
            { time: 0, text: "Bồ công anh" },
            { time: 10, text: "Cánh trắng mong manh dần tàn phai nhành hoa bay" },
            { time: 20, text: "Chia nhau đưa em xa rời đi theo gió mây" },
            { time: 30, text: "Đừng buông tay" },
            { time: 40, text: "Con tim anh yêu em chẳng thiếu một ngày" },
            { time: 50, text: "Mặt trời hôm nay vỡ tan không còn đây" },
            { time: 60, text: "Giọt sầu trên mi cố níu lấy nhưng em chọn rời đi" },
            { time: 70, text: "Vì con tim bao lâu em vô tình lạnh lùng như đóng băng" },
            { time: 80, text: "Kẻ tình si yêu thương em không mong nhận lấy điều gì" },
            { time: 90, text: "Nhìn bồ công anh trắng bay theo người đi" },
            { time: 100, text: "Trăng lên soi bóng đơn côi đêm lặng thầm chia hai khung trời" },
            { time: 110, text: "Xôn xao cây lá đưa tôi đi lạc lối" },
            { time: 120, text: "Em ơi em có thương tôi tim chẳng còn mang em đi rồi" },
            { time: 130, text: "Theo mùa hạ thu ghé qua đông tàn hoa" },
            { time: 140, text: "Làm sao quên khi cô đơn bao trùm cả màn đêm" },
            { time: 150, text: "Ngồi đong đếm những kí ức hôm qua dường như đang kế bên" },
            { time: 160, text: "Gọi tên em trong cơn mưa đang tuôn chẳng ngớt ngoài thềm" },
            { time: 170, text: "Một ngàn cơn đau cứ thêm cũng vì em" },
            { time: 180, text: "Trăng lên soi bóng đơn côi đêm lặng thầm chia hai khung trời" },
            { time: 190, text: "Xôn xao cây lá đưa tôi đi lạc lối" },
            { time: 200, text: "Em ơi em có thương tôi tim chẳng còn mang em đi rồi" },
            { time: 210, text: "Theo mùa hạ thu ghé qua đông tàn hoa" },
            { time: 220, text: "Lah lah lah lah" },
            { time: 230, text: "Nhìn bầu trời hạt mưa rơi vào mắt" },
            { time: 240, text: "Lah lah lah lah" },
            { time: 250, text: "Nhặt lại từng cánh hoa phai tàn" },
            { time: 260, text: "Đoạn đường đi qua theo bóng mây trôi đi thật xa" },
            { time: 270, text: "Bay đến nơi đâu mang nhành hoa (anh tìm)" },
            { time: 280, text: "Tìm một con tim theo bóng cây em quên tình ta" },
            { time: 290, text: "Đi đến nơi đâu xa thật xa chẳng thấy" }
        ]
    }

];

let musicIndex = 0;
let isPlaying = false;

function playMusic() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

playBtn.addEventListener('click', () => (isPlaying ? pauseMusic() : playMusic()));

function loadMusic(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = song.path;
    changeCover(song.cover);
    background.src = song.cover;
    loadLyrics(song.lyrics);
}

function changeCover(cover) {
    image.classList.remove('active');
    setTimeout(() => {
        image.src = cover;
        image.classList.add('active');
    }, 100);
}

function loadLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    lyrics.forEach(line => {
        const p = document.createElement('p');
        p.textContent = line.text;
        p.setAttribute('data-time', line.time);
        p.addEventListener('click', () => {
            music.currentTime = line.time;
            if (!isPlaying) {
                playMusic();
            }
        });
        lyricsContainer.appendChild(p);
    });
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

loadMusic(songs[musicIndex]);

prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));

function updateProgressBar() {
    if (isPlaying) {
        const duration = music.duration;
        const currentTime = music.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        const durationMinutes = Math.floor(duration / 60);
        const durationSeconds = Math.floor(duration % 60);
        const durationFormatted = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
        if (durationSeconds) {
            durationEl.textContent = durationFormatted;
        }

        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime % 60);
        const currentFormatted = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        currentTimeEl.textContent = currentFormatted;
        highlightLyrics(currentTime);
    }
}

function highlightLyrics(currentTime) {
    const lines = lyricsContainer.getElementsByTagName('p');
    for (let i = 0; i < lines.length; i++) {
        const lineTime = lines[i].getAttribute('data-time');
        if (lineTime <= currentTime) {
            if (i < lines.length - 1 && lines[i + 1].getAttribute('data-time') > currentTime) {
                lines[i].classList.add('active');
                lines[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                lines[i].classList.remove('active');
            }
        } else {
            lines[i].classList.remove('active');
        }
    }
}

music.addEventListener('timeupdate', updateProgressBar);

function setProgressBar(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = music.duration;
    music.currentTime = (clickX / width) * duration;
}

playerProgress.addEventListener('click', setProgressBar);

// Display the song list
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.displayName;
    li.addEventListener('click', () => {
        musicIndex = index;
        loadMusic(songs[musicIndex]);
        playMusic();
    });
    songList.appendChild(li);
});

