// 获取所有.item元素
let items=document.querySelectorAll('.item')

//设置选中态样式
function setActive(){
    //遍历所有item元素，移除active样式
    items.forEach((item)=>{
        item.classList.remove('active')
    })
    // 为当前选中项添加active样式
    this.classList.add('active')
}

// 遍历所有item元素，为其添加click事件
items.forEach((item)=>{
    item.addEventListener('click',setActive)
})