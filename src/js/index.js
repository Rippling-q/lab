window.onload = function(){
    document.onscroll = function(){
        //获取滚动条位置
        let s1 = document.documentElement.scrollTop;
        let s2 = document.body.scrollTop;
        let scroll = s1==0?s2:s1;
        let width = document.documentElement.clientWidth;
        let search = document.getElementById('fixedBox');
        let placeholder = document.getElementById('fixedBoxPlaceholder'); // 获取占位元素
        //判断滚动条超过视口宽度的10%时，搜索块变固定定位
        if(scroll>width*0.10){
            search.style.position = 'fixed';
            search.style.left = '0';
            search.style.top = '0';
            placeholder.style.height = search.offsetHeight + 'px'; // 设置占位元素的高度
        }else{
            search.style.position = 'static';
            placeholder.style.height = '0'; // 恢复占位元素的高度为0
        }
    }
}