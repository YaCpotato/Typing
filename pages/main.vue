<template>
    <div class="container">
        <keymap />
        <section class="section has-background-primary">
        {{ lastLetter }}
        <p>{{ words }}</p>
        <p>{{ key }}</p>
        <input class="input" v-model="userInput" v-on:keyup.enter="pushEnter">
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
                "animation": "bg-color 1s",
                "-webkit-animation":"bg-color 1s"
            })
        setTimeout(function reset(){
            $('#key'+val).css({
                "background-color": "",
                "animation": "",
                "-webkit-animation":""
            })
        }, 1000);
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
@-webkit-keyframes bg-color {
  0% { background-color: #FF0000; }
  10% { background-color: #FF0461; }
  20% { background-color: #FF1A6F; }
  30% { background-color: #FF367F; }
  40% { background-color: #FF5192; }
  50% { background-color: #FF69A3; }
  60% { background-color: #FF82B2; }
  70% { background-color: #FF97C2; }
  80% { background-color: #FFABCE; }
  90% { background-color: #FFBEDA; }
  100% { background-color: #FFD5EC; }
}
</style>
