<template>
<div>
        <section class="section has-background-black has-text-info" style="justify-content: center;align-items: center;text-align: center;">
          <keymap />
        {{ lastLetter }}
        <p>{{ words }}</p>
        <p>{{ key }}</p>
        <input class="input has-text-info has-background-black" style="width:300px;" v-model="userInput" v-on:keyup.enter="pushEnter">
        </section>
</div>
</template>
<script>
import keymap from '~/layouts/keymap.vue'
import $ from 'jquery'
export default {
    components:{
        keymap
    },
    data(){
        return{
            userInput:'',
            words:'りんご',
            key:'ringo',
            wordsList:[
                'ばなな',
                'りんご',
                'いちご',
                'れもん',
                'メロン',
                'スイカ',
                'ドラゴンフルーツ',
                'ライム',
                'かぼちゃ',
                'マンゴー',
            ],
            keyList:[
                'banana',
                'ringo',
                'itigo',
                'remon',
                'meron',
                'suika',
                'doragonhuru-tu',
                'raimu',
                'kabotya',
                'mango-'
            ],
            lastLetter:''
        }
    },
    watch: {
      userInput: function (val, oldVal) {
        this.lastLetter = val.slice(-1)
      },
      lastLetter: function(val,oldVal){
          $('#key'+val).css({
                "background-color": "#e74c3c",
                "animation": "bg-color 0.5s",
                "-webkit-animation":"bg-color 0.5s"
            })
        setTimeout(function reset(){
            $('#key'+val).css({
                "background-color": "",
                "animation": "",
                "-webkit-animation":""
            })
        }, 500);
      }
    },
    methods:{
        pushEnter:function(){
        if(this.userInput === this.key){
          this.changeWords()
        }else{
          console.log('No!')
        }
      },
      changeWords:function(){
        this.userInput = ''
        var num = Math.floor(Math.random() * this.wordsList.length)
        console.log(num)
        this.words = this.wordsList[num]
        this.key = this.keyList[num]
        console.log(this.words,this.key)
      }
    }
}
</script>
<style>
body{
  width:100%;
  height:100%;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@-webkit-keyframes bg-color {
  0% { background-color: #FF0000; }
  10% { background-color: #EE0000; }
  20% { background-color: #DD0000; }
  30% { background-color: #CC0000; }
  40% { background-color: #BB0000; }
  50% { background-color: #AA0000; }
  60% { background-color: #990000; }
  70% { background-color: #770000; }
  80% { background-color: #550000; }
  90% { background-color: #330000; }
  100% { background-color: #110000; }
}
</style>
