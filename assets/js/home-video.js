(function () {
  var list = document.getElementById('home-video-list');
  if (!list || !window.ZR_VIDEOS) return;

  var videos = [window.ZR_VIDEOS[0], window.ZR_VIDEOS[1], window.ZR_VIDEOS[2]];
  list.innerHTML = videos.map(function (video, index) {
    var source = video.sources[0];
    var thumbnail = video.thumbnail.indexOf('../') === 0 ? video.thumbnail.slice(3) : video.thumbnail;
    var ratioClass = index === 0 ? 'home-video-horizontal' : 'home-video-vertical';
    return '<article class="home-video-card ' + ratioClass + '" id="home-video-' + video.id + '">' +
      '<div class="home-video-frame" data-video-id="' + video.id + '">' +
      '<img src="' + thumbnail + '" alt="' + video.title + '" loading="lazy">' +
      '<button type="button" class="home-video-play ' + (source.embedAllowed ? '' : 'is-external') + '" aria-label="' + (source.embedAllowed ? '播放 ' : '去' + source.platform + '观看 ') + video.title + '">' + (source.embedAllowed ? '▶' : '↗') + '</button>' +
      '<span class="home-video-platform">' + source.platform + '</span></div>' +
      '<p class="section-label">' + video.type + ' · ' + video.duration + '</p>' +
      '<h3>' + video.title + '</h3><p>' + video.summary + '</p>' +
      '<a class="text-link" href="video/index.html#video-' + video.id + '">阅读全文 ↗</a>' +
      '</article>';
  }).join('');

  list.querySelectorAll('.home-video-frame img').forEach(function (img) {
    img.addEventListener('error', function () {
      var frame = img.parentElement;
      frame.classList.add('video-cover-fallback');
      img.removeAttribute('src');
    }, { once: true });
  });

  list.addEventListener('click', function (event) {
    var button = event.target.closest('.home-video-play');
    if (!button) return;
    var frame = button.closest('.home-video-frame');
      var video = videos.find(function (item) { return item.id === frame.dataset.videoId; });
      var source = video.sources[0];
      if (source.embedAllowed && source.embedUrl) {
        list.querySelectorAll('.home-video-frame iframe').forEach(function (iframe) {
          iframe.parentElement.innerHTML = '<img src="' + iframe.parentElement.dataset.poster + '" alt="视频封面" loading="lazy"><button type="button" class="home-video-play" aria-label="播放视频">▶</button>';
        });
        frame.dataset.poster = frame.querySelector('img').getAttribute('src');
        frame.innerHTML = '<iframe src="' + source.embedUrl + '" title="' + video.title + '" loading="lazy" allow="fullscreen" allowfullscreen></iframe>';
      } else if (source.url) {
        window.open(source.url, '_blank', 'noopener');
      }
  });
})();
