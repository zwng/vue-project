<template>
  <div class="goods-list">
    <div class="goods-item">
      <img
        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6b2a24ded35baf1b1e70f8cc875c0c.jpg"
        alt
      />
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6b2a24ded35baf1b1e70f8cc875c0c.jpg"
        alt
      />
      <h1 class="title">尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img
        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fe6b2a24ded35baf1b1e70f8cc875c0c.jpg"
        alt
      />
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
}
.goods-list .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
}
.goods-list .goods-item img {
    width: 100%;
}
.goods-list .goods-item .title {
    font-size: 14px;
}
.goods-list .goods-item .info {
    background-color: #eee;
}
.goods-list .goods-item .info p  {
    margin: 0;
    padding: 5px;
}
.goods-list .goods-item .info  .price .now {
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.goods-list .goods-item .info  .price .old {
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}
.goods-list .goods-item .info .sell {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}

</style>
