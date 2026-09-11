window.ZR_CONTENT = [
  {title:'为什么四十岁以后，越来越不想解释自己',type:'文章',category:'自己',summary:'关于边界、时间感与关系筛选。',url:'articles/why-stop-explaining.html',tags:['自己','年龄','边界','人与人']},
  {title:'孩子长大以后，我突然不知道自己是谁了',type:'文章',category:'家庭',summary:'当生活空下来，如何重新听见自己。',url:'articles/who-am-i-after-kids-grow-up.html',tags:['自己','孩子','家庭','身份']},
  {title:'人到中年以后，朋友为什么越来越少',type:'文章',category:'朋友',summary:'时间变少以后，关系如何重新选择。',url:'articles/fewer-friends-in-midlife.html',tags:['朋友','关系','年龄','独处']},
  {title:'明明生活没有出什么问题，为什么还是不快乐',type:'文章',category:'自己',summary:'生活没有出错，心里却提不起劲。',url:'articles/明明生活没有出什么问题，为什么还是不快乐.html',tags:['自己','年龄','女性']},
  {title:'为什么人明明知道不快乐，却迟迟不改变',type:'文章',category:'人生阶段',summary:'知道不快乐，为什么仍然不改变？',url:'articles/为什么人明明知道不快乐，却迟迟不改变.html',tags:['自己','选择','关系']},
  {title:'她48岁，第一次一个人去旅行',type:'故事',category:'故事',summary:'她想看看没有人等她做决定时，自己会走向哪里。',url:'articles/stories/她48岁，第一次一个人去旅行.html',tags:['独处','选择','女性']},
  {title:'她45岁重新开始工作',type:'故事',category:'故事',summary:'重新开始之前，她先面对生活留下的空白。',url:'articles/stories/她45岁重新开始工作.html',tags:['工作','女性','选择']},
  {title:'她突然发现，已经很久没有人问过她想要什么',type:'故事',category:'故事',summary:'一个很小的问题，让她停下了习惯性的回答。',url:'articles/stories/她突然发现，已经很久没有人问过她想要什么.html',tags:['自己','关系','女性']},
  {title:'为什么现在越来越不喜欢热闹',type:'随笔',category:'生活观察',summary:'有时一盏灯，比一整晚的寒暄更接近休息。',url:'discover.html?tag=独处',tags:['独处','关系']},
  {title:'成年人的友情为什么需要预约',type:'随笔',category:'朋友',summary:'把日期写进日历，有时比一句改天见更可靠。',url:'discover.html?tag=朋友',tags:['朋友','关系','时间']},
  {title:'孩子不需要你以后，你还剩下什么',type:'随笔',category:'身份',summary:'空出来的时间，交还给那些还没回答的问题。',url:'discover.html?tag=孩子',tags:['孩子','自己','身份']},
  {title:'有些婚姻没有问题，只是没有话说',type:'随笔',category:'婚姻',summary:'没有争吵不等于亲近，两个人也需要交换想法。',url:'discover.html?tag=婚姻',tags:['婚姻','关系']},
  {title:'有时候我们不是想离开，只是想安静一下',type:'随笔',category:'安静',summary:'问题没有消失，但人终于能听见别的声音。',url:'discover.html?tag=独处',tags:['独处','自己']},
  {title:'四十岁以后，我们还需要重新认识自己吗',type:'播客',category:'播客',summary:'节目筹备中 · 以下为文字版节目笔记。',url:'podcasts/01.html',tags:['自己','年龄','播客']},
  {title:'为什么人到中年以后，朋友越来越少',type:'播客',category:'播客',summary:'节目筹备中 · 以下为文字版节目笔记。',url:'podcasts/02.html',tags:['朋友','关系','播客']},
  {title:'如果重新活一次，你还会选择现在的人生吗',type:'播客',category:'播客',summary:'节目筹备中 · 以下为文字版节目笔记。',url:'podcasts/03.html',tags:['选择','人生阶段','播客']}
];
(function(){
  const page=document.body; if(!page) return;
  const all=window.ZR_CONTENT;
  document.querySelectorAll('.tag-list span').forEach(span=>{ const label=span.textContent.trim(); if(!all.some(x=>x.tags.includes(label))) return; const a=document.createElement('a'); a.href=''+(location.pathname.includes('/articles/stories/')?'../../':(location.pathname.includes('/articles/')||location.pathname.includes('/podcasts/')?'../':''))+'discover.html?tag='+encodeURIComponent(label); a.textContent=label; span.replaceWith(a); });
  if(!page.classList.contains('discover-page')) return;
  const params=new URLSearchParams(location.search), tag=params.get('tag'), type=params.get('type');
  const filtered=all.filter(x=>(!tag || x.tags.includes(tag)) && (!type || x.type===type));
  const wrap=document.querySelector('.article-wrap'); if(!wrap) return;
  const heading=wrap.querySelector('.article-title');
  const bar=document.createElement('nav'); bar.className='filter-bar'; bar.setAttribute('aria-label','内容筛选');
  const tags=['自己','关系','年龄','家庭','朋友','工作','影视','书籍','人物','传统文化','播客'].filter(t=>all.some(x=>x.tags.includes(t))); 
  bar.innerHTML='<a href="discover.html" class="'+(!tag&&!type?'active':'')+'">全部</a>'+tags.map(t=>'<a href="discover.html?tag='+encodeURIComponent(t)+'" class="'+(tag===t?'active':'')+'">'+t+'</a>').join('');
  heading.insertAdjacentElement('afterend',bar);
  const state=document.createElement('p'); state.className='filter-state'; state.innerHTML=(tag||type)?'关于「'+(tag||type)+'」 · <a href="discover.html">清除筛选</a>':'全部内容 · 可按主题继续阅读'; bar.insertAdjacentElement('afterend',state);
  const grid=wrap.querySelector('.short-grid');
  if(grid){grid.innerHTML=filtered.filter(x=>x.type==='随笔'||x.type==='文章'||x.type==='故事').map(x=>'<article class="short-item"><p class="section-label">'+x.category+'</p><h3><a href="'+x.url+'">'+x.title+'</a></h3><p>'+x.summary+'</p><p><a class="text-link" href="'+x.url+'">继续阅读 <span aria-hidden="true">↗</span></a></p></article>').join('') || '<p class="filter-empty">这个主题暂时没有内容，<a href="discover.html">查看全部</a>。</p>';}
  const resources=wrap.querySelector('.discover-resources');
  if(resources){resources.insertAdjacentHTML('beforebegin','<p class="section-label">编辑选读</p>');}
})();



