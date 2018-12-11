// 获取购物车数据
var cart = new ShoppingCart();
console.log(cart);
console.log(cart.getDataFromLocalStorage());
function displayOrderList(){
// 获取购物车列表
    let cartData=cart.getDataFromLocalStorage();
    let orderList=cartData.orderList;
    console.log(orderList);
// 找订单列表父元素
let cartList=document.querySelector('#cartList');
// 找到样本节点
let exmapleNode = document.querySelector('#orderExample');
// 遍历订单列表
for(let i =0;i <orderList,length;i++){
    // 当前订单数据
    let order =orderList[i];
    console.log(order);
// 克隆样本节点形成当前订单节点
    node=exmapleNode.cloneNode(true);
// 连接到父元素
    cartList.appendChild(node);
// 设置数据
// 节点id
    node.id=order.id;
// 图像地址
// 找到图像节点
    let imgNode=node.querySelector('[data-name-"imgSrc"]');
    imgNode.src='images/'+order.imgSrc;
    
// 设选中状态
// 找选中节点
    let selectNode=node.querySelector('[data-operator="checkItem"]');
    selectNode.checked=order.selectStaus;
    // console.log(selectNode);
    // console.log(node);

    
}
displayOrderList();
}
//     for(const i in orderList){
//         var cartContainer=document.getElementsByName('cartContainer');
//         var orderExample=document.getElementById('orderExample');
//     }
    
// }
// getShoppingcar();