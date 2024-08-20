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
            { time: 46, text: "Hình như trong lòng anh đã không còn hình bóng ai ngoài em đâu" },
            { time: 50, text: "Hằng đêm, anh nằm thao thức suy tư chẳng nhớ ai ngoài em đâu" },
            { time: 54, text: "Vậy nên không cần nói nữa, yêu mà đòi nói trong vài ba câu" },
            { time: 58, text: "Cứ cố quá đâm ra lại hâm… Uh, đau hết cả đầu!" },
            { time: 62, text: "Đợi chờ em trước nhà từ sáng đến trưa chiều tối, mắc màn đây luôn" },
            { time: 65, text: "Ngược nắng hay là ngược gió miễn anh thấy em tươi vui không buồn" },
            { time: 69, text: "Chỉ cần có thấy thế thôi mây xanh chan hoà" },
            { time: 71, text: "Thấy thế thôi vui hơn có quà" },
            { time: 73, text: "Và bước kế tiếp anh lại gần hơn chút đó nha" },
            { time: 76, text: "Rồi ngày ấy cuối cùng đã tìm đến ta nào đâu hay" },
            { time: 80, text: "Anh sẽ không để vụt mất đi cơ duyên ông trời trao tay" },
            { time: 83, text: "Còn đắn đo băn khoăn gì nữa tiếp cận em ngay" },
            { time: 87, text: "Cố gắng sao không để em nghi ngờ dù 1 giây lúc này" },
            { time: 91, text: "Được đứng bên em anh hạnh phúc tim loạn nhịp tung bay" },
            { time: 95, text: "Chắc chắn anh thề anh sẽ không bao giờ quên ngày hôm nay" },
            { time: 99, text: "Chính em, chính em, tương tư mình em thôi" },
            { time: 101, text: "Mãi theo sau mình em thôi" },
            { time: 103, text: "Mãi si mê mình em thôi" },
            { time: 105, text: "Mãi yêu thương mình em" },
            { time: 107, text: "Vậy thì anh xin chết vì người anh thương" },
            { time: 111, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 114, text: "Dành cho em dành hết ân tình anh mang một đời" },
            { time: 119, text: "Đừng làm trái tim anh đau" },
            { time: 122, text: "Vậy thì anh xin chết vì người anh thương" },
            { time: 126, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 130, text: "Dành cho em dành hết ân tình anh mang một đời" },
            { time: 134, text: "Đừng làm trái tim anh đau" },
            { time: 138, text: "Tình cờ lọt vào" },
            { time: 139, text: "Nụ cười ngọt ngào" },
            { time: 140, text: "Anh thề không biết đường thoát ra làm sao" },
            { time: 142, text: "Lựa một lời chào" },
            { time: 143, text: "Phải thật là ngầu nào" },
            { time: 144, text: "Nay tự dưng sao toàn mấy câu tào lao" },
            { time: 146, text: "Lại gần một chút cho anh ngắm nhìn người vài phút, say trong cơn mơ thiên đàng" },
            { time: 150, text: "Quên đi chuyện của nhân gian" },
            { time: 152, text: "Hoà vào trăng sao tan theo miên man" },
            { time: 153, text: "Nhiều lời rồi đấy nhé" },
            { time: 154, text: "Dài dòng rồi đấy nhé" },
            { time: 155, text: "Rồi cứ thế" },
            { time: 156, text: "Vòng lặp lại cứ thế" },
            { time: 157, text: "Lại bối rối" },
            { time: 158, text: "Không xong là đến tối" },
            { time: 159, text: "Nói luôn đi: “Đời này chỉ cần mình em thôi”" },
            { time: 161, text: "Giấu hết nhớ nhung sâu trong lời nhạc" },
            { time: 163, text: "Nối tiếp những áng thơ ngô nghê rời rạc" },
            { time: 165, text: "Viết lên chuyện đôi ta vào một ngày không xa, ngày về chung một nhà" },
            { time: 168, text: "Rồi ngày ấy cuối cùng đã tìm đến ta nào đâu hay" },
            { time: 171, text: "Anh sẽ không để vụt mất đi cơ duyên ông trời trao tay" },
            { time: 175, text: "Còn đắn đo băn khoăn gì nữa tiếp cận em ngay" },
            { time: 179, text: "Cố gắng sao không để em nghi ngờ dù 1 giây lúc này" },
            { time: 183, text: "Được đứng bên em anh hạnh phúc tim loạn nhịp tung bay" },
            { time: 187, text: "Chắc chắn anh thề anh sẽ không bao giờ quên ngày hôm nay" },
            { time: 190, text: "Chính em, chính em, tương tư mình em thôi" },
            { time: 193, text: "Mãi theo sau mình em thôi" },
            { time: 195, text: "Mãi si mê mình em thôi" },
            { time: 196, text: "Mãi yêu thương mình em" },
            { time: 199, text: "Vậy thì anh xin chết vì người anh thương" },
            { time: 202, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 206, text: "Dành cho em dành hết ân tình anh mang một đời" },
            { time: 211, text: "Đừng làm trái tim anh đau" },
            { time: 214, text: "Vậy thì anh xin chết vì người anh thương" },
            { time: 218, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 222, text: "Dành cho em dành hết ân tình anh mang một đời" },
            { time: 226, text: "Đừng làm trái tim anh đau" },
            { time: 230, text: "Vậy thì anh xin chết vì người anh thương" },
            { time: 234, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 238, text: "Dành cho em dành hết ân tình anh mang một đời" },
            { time: 242, text: "Đừng làm trái tim anh đau" },
            { time: 246, text: "Vậy thì anh xin chết vì người anh thương" },
            { time: 250, text: "Có biết bao nhiêu điều còn đang vấn vương" },
            { time: 254, text: "Dành cho em dành hết ân tình anh mang một đời" },
            { time: 258, text: "Đừng làm trái tim anh đau" },
            { time: 262, text: "La la la la, la la la la la la la" },
            { time: 266, text: "La la la la, la la la la la la la" },
            { time: 270, text: "La la la la, la la la la la la la" },
            { time: 274, text: "Đừng làm trái tim anh đau" },
            { time: 278, text: "One more time (x3)" },
            { time: 280, text: "La la la la, la la la la la la la" },
            { time: 284, text: "La la la la, la la la la la la la" },
            { time: 287, text: "(Son Tung M-TP)" },
            { time: 289, text: "La la la la, la la la la la la la" },
            { time: 291, text: "Đừng làm trái tim anh đau" }
        ]
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Cẩm Tú Cầu',
        cover: 'assets/2.jpg',
        artist: 'Kiều Chi (Cover)',
        lyrics: [
            { time: 2, text: "Dáng ai dần xa xôi sánh vai người ta" },
            { time: 9, text: "Rồi trái tim vỡ ra làm đôi anh hứa mãi" },
            { time: 15, text: "Bên em mà tình đẹp là tình dang dở toàn làm" },
            { time: 23, text: "Người ta ngỡ ngàng đâu lâu dài" },
            { time: 30, text: "Ngỡ bên nhau hoài tiếng ai vọng bên tai có phải người" },
            { time: 40, text: "Quay lại cứ ngày rồi đêm mong đợi trong" },
            { time: 47, text: "Lẻ loi vô vọng tình đẹp là tình dang dở toàn làm người ta ngỡ" },
            { time: 53, text: "Dở toàn làm người ta ngỡ ngỡ không chia rời" },
            { time: 61, text: "Ngỡ đâu cả đời chờ người từ lúc nắng dần buông mưa" },
            { time: 69, text: "Trên cao vẫn cứ thế tuôn y như đang khóc thế nỗi buồn không cách nào để quên" },
            { time: 76, text: "Được đi anh uống càng say thì lại càng nhớ" },
            { time: 82, text: "Thêm đời người được có mấy lần yêu nên đâu biết trước có bao điều khiến ta đau" },
            { time: 88, text: "Đau rất nhiều cẩm tú cầu người thường nâng niu hôn héo dần từng ngày" },
            { time: 96, text: "Anh đi từng là bầu trời đầy nắng mà giờ mịt" },
            { time: 103, text: "Mở mây xám đứng dưới hàng trắng thâm tình cùng ký ức vĩnh hằng người xưa có" },
            { time: 110, text: "Nhớ về nhau không choàng tay ôm lấy mỗi khi đông vai tựa vai môi kề môi thay lời" },
            { time: 115, text: "Nói từng là chuyện tình rực rỡ tàn cuộc lại về cho vỡ tỉnh thức giữa cơn mơ em" },
            { time: 122, text: "Lại cuồng điếng như kẻ khờ người đang yên rất nồng bên ai ở đây mưa gió vẫn" },
            { time: 128, text: "Chưa phải qua ngày mai câu chuyện xưa xin cất lại" },
            { time: 150, text: "Chờ người từ lúc nắng dần buông mưa trên cao vẫn cứ thế tuôn y như đang khóc thế" },
            { time: 156, text: "Nỗi buồn không cách nào để quên được đi anh uống càng say thì lại càng nhớ" },
            { time: 166, text: "Thêm đời người được có mấy lần yêu nên đâu biết trước có bao điều khiến ta đau" },
            { time: 172, text: "Đau rất nhiều ôi cẩm tú cầu người thường nâng niu hôn héo dần từng ngày" },
            { time: 180, text: "Anh đi từ bầu trời đầy nắng mà giờ mịt mở mây xám đứng dưới hàng trắng thâm tình" },
            { time: 188, text: "Cùng ký ức vĩnh hằng người xưa có nhớ về nhau không choàng tay ôm lấy mỗi khi" },
            { time: 194, text: "Đau vậy tựa vai môi kề môi thay lời nói từng là chuyện tình rực rỡ tàn cuộc lại" },
            { time: 201, text: "Về cho vỡ tỉnh thức giữa cơn mơ em lại cuồng điếng như kẻ khờ người đang yên" },
            { time: 207, text: "Rất nồng bên ai ở đây mưa gió vẫn chưa phải qua ngày mai câu chuyện xưa xin cất" },
            { time: 213, text: "Em vẫn chẳng muốn tin rằng cho đến cuối cùng dừng chân kết thúc lại là" },
            { time: 221, text: "Người dưng chúng ta vô tình gặp rồi thương" },
            { time: 226, text: "Nhau để rồi niềm đau về sau đừng là bầu trời đầy đắng mà giờ mịt mở mây xám" },
            { time: 235, text: "Đứng dưới ánh trăng tâm tình cùng ký ức vĩnh hằng người đang yên giấc nồng bên" },
            { time: 241, text: "Ai từ đây mưa gió vẫn chưa phải qua ngày mai câu chuyện xưa xin cất lại" },
            { time: 253, text: "Xin cất lại" }
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
    image.classList.add('active1');
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    image.classList.remove('active1');
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

document.addEventListener('DOMContentLoaded', () => {
    const volumeSlider = document.getElementById('volume-slider');

    const updateSliderBackground = () => {
        const value = volumeSlider.value * 100;
        volumeSlider.style.background = `linear-gradient(to right, #fff ${value}%, #ffffff59 ${value}%)`;
    };

    // Khi người dùng thay đổi giá trị trên thanh trượt
    volumeSlider.addEventListener('input', () => {
        music.volume = volumeSlider.value; // Cập nhật âm lượng dựa trên giá trị của thanh trượt
        updateSliderBackground(); // Cập nhật màu nền của thanh trượt
    });

     // Hiệu ứng 3D Touch giả lập
     volumeSlider.addEventListener('mousedown', () => {
        volumeSlider.style.transform = 'scale(1.1)';
        volumeSlider.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    });

    volumeSlider.addEventListener('mouseup', () => {
        volumeSlider.style.transform = 'scale(1)';
        volumeSlider.style.boxShadow = 'none';
    });

    volumeSlider.addEventListener('mouseleave', () => {
        volumeSlider.style.transform = 'scale(1)';
        volumeSlider.style.boxShadow = 'none';
    });

    // Cập nhật màu nền thanh trượt khi trang được tải
    updateSliderBackground();
});

// Xử lý nút hiện/ẩn sidebar
document.getElementById('toggle-sidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var player = document.getElementById('player');
    var lyricsContainer = document.getElementById('lyrics-container');

    // Nếu sidebar đang ẩn hoặc không có kiểu hiển thị cụ thể
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block'; // Hiện sidebar
        player.style.display = 'none';   // Ẩn player
        lyricsContainer.style.display = 'none'; // Ẩn lời bài hát
        this.querySelector('i').classList.replace('fa-list', 'fa-play'); // Thay đổi icon thành "X"
        this.title = 'Hide Sidebar'; // Thay đổi tiêu đề của nút
    } else {
        sidebar.style.display = 'none';  // Ẩn sidebar
        player.style.display = 'block';  // Hiện player
        this.querySelector('i').classList.replace('fa-play', 'fa-list'); // Thay đổi icon thành "bars"
        this.title = 'Show Sidebar'; // Thay đổi tiêu đề của nút
    }
});

// Xử lý nút hiện/ẩn lời bài hát
document.getElementById('toggle-lyrics').addEventListener('click', function() {
    var lyricsContainer = document.getElementById('lyrics-container');
    var sidebar = document.getElementById('sidebar');
    var player = document.getElementById('player');
    
    // Nếu lyricsContainer đang ẩn hoặc không có kiểu hiển thị cụ thể
    if (lyricsContainer.style.display === 'none' || lyricsContainer.style.display === '') {
        lyricsContainer.style.display = 'block'; // Hiện lời bài hát
        sidebar.style.display = 'none'; // Ẩn sidebar
        player.style.display = 'none';  // Ẩn player
        this.querySelector('i').classList.replace('fa-quote-left', 'fa-quote-right'); // Thay đổi icon thành "quote-right"
        this.title = 'Hide Lyrics'; // Thay đổi tiêu đề của nút
    } else {
        lyricsContainer.style.display = 'none';  // Ẩn lời bài hát
        player.style.display = 'block';  // Hiện player
        this.querySelector('i').classList.replace('fa-quote-right', 'fa-quote-left'); // Thay đổi icon thành "quote-left"
        this.title = 'Show Lyrics'; // Thay đổi tiêu đề của nút
    }
});



var touchStartX = null;
var touchStartY = null;

// Hàm xử lý bắt đầu chạm
function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    touchStartX = firstTouch.clientX;
    touchStartY = firstTouch.clientY;
}

// Hàm xử lý di chuyển chạm
function handleTouchMove(event) {
    if (!touchStartX || !touchStartY) {
        return;
    }

    const touchEndX = event.touches[0].clientX;
    const touchEndY = event.touches[0].clientY;

    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Kiểm tra xem cử chỉ là lướt ngang hay không (ưu tiên lướt ngang)
    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
            // Lướt sang trái
            if (document.getElementById('player').style.display === 'block') {
                showLyricsContainer();
            } else if (document.getElementById('sidebar').style.display === 'block') {
                showPlayer();
            }
        } else {
            // Lướt sang phải
            if (document.getElementById('player').style.display === 'block') {
                showSidebar();
            } else if (document.getElementById('lyrics-container').style.display === 'block') {
                showPlayer();
            }
        }
    }

    // Đặt lại giá trị ban đầu
    touchStartX = null;
    touchStartY = null;
}

// Hàm hiển thị player
function showPlayer() {
    var sidebar = document.getElementById('sidebar');
    var player = document.getElementById('player');
    var lyricsContainer = document.getElementById('lyrics-container');

    sidebar.style.display = 'none'; // Ẩn sidebar
    player.style.display = 'block'; // Hiện player
    lyricsContainer.style.display = 'none'; // Ẩn lyrics
    document.getElementById('toggle-sidebar').querySelector('i').classList.replace('fa-times', 'fa-bars'); // Thay đổi icon
    document.getElementById('toggle-sidebar').title = 'Show Sidebar'; // Thay đổi tiêu đề của nút
    document.getElementById('toggle-lyrics').querySelector('i').classList.replace('fa-quote-right', 'fa-quote-left'); // Thay đổi icon
    document.getElementById('toggle-lyrics').title = 'Show Lyrics'; // Thay đổi tiêu đề của nút
}

// Hàm hiển thị sidebar
function showSidebar() {
    var sidebar = document.getElementById('sidebar');
    var player = document.getElementById('player');
    var lyricsContainer = document.getElementById('lyrics-container');

    sidebar.style.display = 'block'; // Hiện sidebar
    player.style.display = 'none';   // Ẩn player
    lyricsContainer.style.display = 'none'; // Ẩn lyrics
    document.getElementById('toggle-sidebar').querySelector('i').classList.replace('fa-bars', 'fa-times'); // Thay đổi icon
    document.getElementById('toggle-sidebar').title = 'Hide Sidebar'; // Thay đổi tiêu đề của nút
}

// Hàm hiển thị lyricsContainer
function showLyricsContainer() {
    var lyricsContainer = document.getElementById('lyrics-container');
    var sidebar = document.getElementById('sidebar');
    var player = document.getElementById('player');

    lyricsContainer.style.display = 'block'; // Hiện lyricsContainer
    sidebar.style.display = 'none'; // Ẩn sidebar
    player.style.display = 'none';  // Ẩn player
    document.getElementById('toggle-lyrics').querySelector('i').classList.replace('fa-quote-left', 'fa-quote-right'); // Thay đổi icon
    document.getElementById('toggle-lyrics').title = 'Hide Lyrics'; // Thay đổi tiêu đề của nút
}

// // Thêm sự kiện cảm ứng vào player
// var playerElement = document.getElementById('player');
// playerElement.addEventListener('touchstart', handleTouchStart, false);
// playerElement.addEventListener('touchmove', handleTouchMove, false);

// Thêm sự kiện cảm ứng vào sidebar
var sidebarElement = document.getElementById('sidebar');
sidebarElement.addEventListener('touchstart', handleTouchStart, false);
sidebarElement.addEventListener('touchmove', handleTouchMove, false);

// Thêm sự kiện cảm ứng vào lyricsContainer
var lyricsContainerElement = document.getElementById('lyrics-container');
lyricsContainerElement.addEventListener('touchstart', handleTouchStart, false);
lyricsContainerElement.addEventListener('touchmove', handleTouchMove, false);

// Đặt trạng thái mặc định khi tải trang
document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var player = document.getElementById('player');
    var lyricsContainer = document.getElementById('lyrics-container');

    // Đảm bảo các phần tử bắt đầu ở trạng thái chính xác
    sidebar.style.display = 'none';
    player.style.display = 'block';
    lyricsContainer.style.display = 'none';
});




