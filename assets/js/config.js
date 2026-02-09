let biicore = {
  templatePremium: true,
  isPremium: true,
  bgMusic:
    'https://cdn.jsdelivr.net/gh/hungtrang20111501/hungtrang20111501.github.io/assets/audio/BeautifulInWhite-ShaneFilan.mp3',
  alert: '[]',
  effect: { type: 'heart' },
  isAutoPlay: false,
};

var photoGalleries = [
  {
    src: 'assets/images/tudiem-2.jpg',
    thumb:
      'assets/images/tudiem-2.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần thiết cho chính bạn</h4></div>`,
  },
  {
    src: 'assets/images/tudiem-3.jpg',
    thumb:
      'assets/images/tudiem-3.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh</h4></div>`,
  },
  {
    src: 'assets/images/tudiem-5.jpg',
    thumb:
      'assets/images/tudiem-5.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Vì vậy, để được ai đó nhìn thấy đầy đủ và được yêu mến dù thế nào đi nữa — đây là một sự dâng hiến của con người có thể là điều kỳ diệu</h4></div>`,
  },
  {
    src: 'assets/images/tudiem-6.jpg',
    thumb:
      'assets/images/tudiem-6.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá</h4></div>`,
  },
  {
    src: 'assets/images/tudiem-7.jpg',
    thumb:
      'assets/images/tudiem-7.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tình yêu không có rào cản. Nó nhảy rào, nhảy rào, xuyên tường để đến đích với đầy hy vọng</h4></div>`,
  },
  {
    src: './assets/images/tudiem-9.jpg',
    thumb:
      './assets/images/tudiem-9.jpg',
    subHtml: `<div class="lg-sub-html"><h4>Tôi yêu bạn vì tất cả những gì bạn đang có, tất cả những gì bạn đã có, và tất cả những gì bạn chưa hiện hữu</h4></div>`,
  },
];

function formatDateTime(dateStr) {
  if (!dateStr) return '';

  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear());
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
