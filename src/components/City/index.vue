<template>
  <div class="city_body">
    <!-- <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>北京</li>
          <li>上海</li>
          <li>深圳</li>
          <li>天津</li>
          <li>广州</li>
          <li>杭州</li>
        </ul>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>鞍山</li>
            <li>安徽</li>
            <li>安庆</li>
            <li>安阳</li>
            <li>安顺</li>
            <li>安吉</li>
          </ul>
        </div>
        <div>
          <h2>B</h2>
          <ul>
            <li>保定</li>
            <li>北京</li>
            <li>白山</li>
            <li>包头</li>
            <li>北海</li>
            <li>滨州</li>
          </ul>
        </div>
        <div>
          <h2>C</h2>
          <ul>
            <li>长春</li>
            <li>长沙</li>
            <li>朝阳</li>
            <li>重庆</li>
            <li>沧州</li>
            <li>承德</li>
          </ul>
        </div>
        <div>
          <h2>D</h2>
          <ul>
            <li>丹阳</li>
            <li>大连</li>
            <li>丹东</li>
            <li>大庆</li>
            <li>大理</li>
            <li>德州</li>
          </ul>
        </div>
        <div>
          <h2>E</h2>
          <ul>
            <li>鄂尔多斯</li>
            <li>恩施</li>
          </ul>
        </div>
        <div>
          <h2>F</h2>
          <ul>
            <li>抚顺</li>
            <li>阜阳</li>
            <li>佛山</li>
            <li>奉节</li>
          </ul>
        </div>
        <div>
          <h2>G</h2>
          <ul>
            <li>广州</li>
            <li>广安</li>
            <li>桂林</li>
            <li>贵阳</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="city_index">
      <ul>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
      </ul>
    </div> -->
      <div class="city_list">
        <div class="city_hot">
          <h2>热门城市</h2>
          <ul class="clearfix">
            <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
          </ul>
        </div>
      </div>
      <div class="city_sort">
        <div>
          <h2>A</h2>
          <ul>
            <li>鞍山</li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data(){
    return{
      cityList: [],
      hotList : []
    }
  },
  mounted() {
    this.axios.get('/api/cityList').then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        var cities = res.data.data.cities;
        var{cityList,hotList} = this.formatCityList(cities);
        this.cityList = cityList;
        this.hotList = hotList;
      }
    });
  },
  methods: {
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];


      for(var i = 0; i<cities.length; i++){
        if(cities[i].isHot ===1){
          hotList.push(cities[i]);
        }
      }
      //判断是否热门 然后push到cities

      for (var i = 0; i < cities.length; i++) {
        var fristLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (toCom(firstLetter)) {
          cityList.push({
            index: firseLetter,
            list: [{ nm: cities[i].nm, id: cities[i].id }]
          });
        } else {
          for (var j = 0; j < cityList.length; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: cities[i].nm, is: cities[i].id });
            }
          }
        }
      }

      cityList.sort((n1,n2)=>{
        if(n1.index > n2.index){
          return 1;
        }
        else if(n1.index < n2.index){
          return -1;
        }
        else{
          return 0;
        }
      })

      function toCom(firstLetter) {
        for (var i = 0; i < citiList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false;
          }
        }
        return true;
      }
      return{
        cityList,
        hotList
      }
    }
  }
};
</script>

<style scoped>
#content .city_body {
  margin-top: 45px;
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.city_body .city_list {
  flex: 1;
  overflow: auto;
  background: #fff5f0;
}
.city_body .city_list::webkit-scrollbar {
  background-color: transparent;
  width: 0;
}
.city_body .city_hot {
  margin-top: 20px;
}
.city_body .city_hot h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_hot ul li {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 3%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
}
.city_body .city_sort div {
  margin-top: 20px;
}
.city_body .city_sort h2 {
  padding-left: 15px;
  line-height: 30px;
  font-size: 14px;
  background: #f0f0f0;
  font-weight: normal;
}
.city_body .city_sort ul {
  padding-left: 10px;
  margin-top: 10px;
}
.city_body .city_sort ul li {
  line-height: 30px;
  line-height: 30px;
}
.city_body .city_index {
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px #e6e6e6 solid;
}
</style>