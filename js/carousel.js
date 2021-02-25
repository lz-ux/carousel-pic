var items = document.getElementsByClassName('item');
var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');

// 第一张图片
// 第几个点
var index = 0;

// 排他思想 清除active类
var clearActive = function() {
  for(var i = 0; i < items.length; i++){
    points[i].className = 'point';
  }
  for(var i = 0; i < items.length; i++){
    items[i].className = 'item';
  }
}

// 当前第几张图片 添加 item active类
var goIndex = function() {
  clearActive();
  points[index].className = 'point active';
  items[index].className = 'item active';
}

// goNext 调用一次 index + 1
var goNext = function () {
  // 限制 index 
  if(index < 4) {
    index++;
  }else {
    index = 0;
  }
  goIndex();
}

// goPre 调用一次 index - 1
var goPre = function () {
  // 限制 index 
  if(index == 0) {
    index = 4;
  }else {
    index--;
  }
  goIndex();
}

// goNextBtn添加监听事件
goNextBtn.addEventListener('click',function() {
  goNext();
})

// goPreBtn添加监听事件
goPreBtn.addEventListener('click',function() {
  goPre();
})

// 获取点
 var points = document.getElementsByClassName('point');

 // 给点添加事件
 for(var i = 0; i < points.length; i++){
   points[i].addEventListener('click',function(){
      // 获取 data-index
      var pointIndex = this.getAttribute('data-index');
      index = pointIndex;
      goIndex();
   })
 }