<template>
<div>
        <section class="section has-background-black has-text-info" style="justify-content: center;align-items: center;text-align: center;">
          <keymap />
        {{ score }}
        <p>{{ words }}</p>
        <p>{{ key }}</p>
        <input class="input has-text-info has-background-black" style="width:500px;" v-model="userInput" v-on:keyup.enter="pushEnter">
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
            words:'startと入力してEnterを押せばスタート！',
            key:'start',
            wordsList:[
                'のび太の恐竜',
                'のび太の宇宙開拓史',
                'のび太の大魔境',
                'のび太の海底鬼岩城',
                'のび太の魔界大冒険',
                'のび太の宇宙小戦争',
                'のび太と鉄人兵団',
                'のび太の竜の騎士',
                'のび太のパラレル西遊記',
                'のび太の日本誕生',
                'のび太とアニマル惑星',
                'のび太のドラビアンナイト',
                'のび太と雲の王国',
                'のび太のブリキの王宮',
                'のび太の夢幻三剣士',
                'のび太の創世日記',
                'のび太と銀河超特急',
                'のび太のねじ巻き都市冒険記',
                'のび太の南海大冒険',
                'のび太の宇宙漂流記',
                'のび太と翼の王者たち',
                'のび太のワンニャン時空伝',
                'のび太の恐竜2006',
                'のび太と緑の巨人伝',
                'のび太と人魚大海戦',
                'のび太と奇跡の島',
                'のび太のひみつ道具博物館',
                'のび太の宇宙英雄記',
                'のび太の南極カチコチ大冒険',
                'のび太の宝島',
                'のび太の月面探査記'
            ],
            keyList:[
                'nobitanokyouryuu',
                'nobitanoutyuukaitakusi',
                'nobitanodaimakyou',
                'nobitanokaiteikigannzyou',
                'nobitanomakaidaibouken',
                'nobitanoutyuusyousennsou',
                'nobitatotetuzinheidann',
                'nobitanoryuunokisi',
                'nobitanopararerusaiyuuki',
                'nobitanonihontanzyou',
                'nobitatoanimaruwakusei',
                'nobitanodorabiannnnaito',
                'nobitatokumonnooukoku',
                'nobitanoburikinnorabirinsu',
                'nobitanomugennsankensi',
                'nobitanosouseinnikki',
                'nobitatogingatyoutokkyuu',
                'nobitanonezimakisiteliboukenki',
                'nobitanonankaidaibouken',
                'nobitanoutyuuhyouryuuki',
                'nobitatotubasanooujatati',
                'nobitanowannyanzikuudenn',
                'nobitanokyouryuu2006',
                'nobitatomidorinokyozinden',
                'nobitatoningyodaikaisen',
                'nobitatokisekinosima',
                'nobitanohimitudouguhakubutukan',
                'nobitanoutyuueiyuuki',
                'nobitanonankyokukatikotidaibouken',
                'nobitanotakarazima',
                'nobitanogetumentansaki'
            ],
            kureyonList:[
              "アクション仮面VSハイグレ魔王",
              "ブリブリ王国の秘宝",
              "雲黒斎の野望",
              "ヘンダーランドの大冒険",
              "暗黒タマタマ大追跡",
              "電撃!ブタのヒヅメ大作戦",
              "爆発!温泉わくわく大決戦",
              "嵐を呼ぶジャングル",
              "嵐を呼ぶ モーレツ!オトナ帝国の逆襲",
              "嵐を呼ぶ アッパレ!戦国大合戦",
              "嵐を呼ぶ 栄光のヤキニクロード",
              "嵐を呼ぶ!夕陽のカスカベボーイズ",
              "伝説を呼ぶブリブリ 3分ポッキリ大進撃",
              "伝説を呼ぶ 踊れ!アミーゴ!",
              "嵐を呼ぶ 歌うケツだけ爆弾!",
              "ちょー嵐を呼ぶ 金矛の勇者",
              "オタケベ!カスカベ野生王国",
              "超時空!嵐を呼ぶオラの花嫁",
              "嵐を呼ぶ黄金のスパイ大作戦",
              "嵐を呼ぶ!オラと宇宙のプリンセス",
              "バカうまっ!B級グルメサバイバル!!",
              "ガチンコ!逆襲のロボとーちゃん",
              "オラの引越し物語～サボテン大襲撃～",
              "爆睡！ユメミーワールド大突撃",
              "襲来!!宇宙人シリリ",
            ],
            kureyonkeyList:[
              "akusyonkamenVShaiguremaou" ,
              "buriburioukokunohihou" ,
              "unkokusainoyabou" ,
              "henda-randonodaibouken" ,
              "ankokutamatamadaituiseki",
              "dengeki!butanohizumetaisakusen" ,
              "bakuhatu!onsenwakuwakudaikessen" ,
              "arasiwoyobuzyanguru" ,
              "arasiwoyobumo-retu!otonateikokunogyakusyuu" ,
              "arasiwoyobuappare!sengokudaikassen",
              "arasiwoyobueikounoyakinikuro-do",
              "arasiwoyobu!yuuhinokasukabebo-izu" ,
              "densetuwoyobuburiburi3hunpokkiridaisingeki" ,
              "densetuwoyobuodore!ami-go!",
              "arasiwoyobuutauketudakebakudan!",
              "tyo-arasiwoyobukinhokonoyuusya" ,
              "otakebe!kasukabeyaseioukoku" ,
              "tyouzikuu!arasiwoyobuoranohanayome",
              "arasiwoyobuougonnosupaidaisakusen" ,
              "arasiwoyobu!oratoutyuunopurinsesu" ,
              "bakaumaxtu!Bkyuugurumesabaibaru!!" ,
              "gatinko!gyakusyuunoroboto-tyan" ,
              "oranohikkosimonogatarisabotendaisyuugeki" ,
              "bakusui!yumemi-wa-rudodaitotugeki" ,
              "syuurai!!utyuuzinsiriri" ,

            ],
            pokemonList:[
              "フシギダネ",
              "フシギソウ",
              "フシギバナ",
              "ヒトカゲ",
              "リザード",
              "リザードン",
              "ゼニガメ",
              "カメール",
              "カメックス",
              "キャタピー",
              "トランセル",
              "バタフリー",
              "ビードル",
              "コクーン",
              "スピアー",
              "ポッポ",
              "ピジョン",
              "ピジョット",
              "コラッタ",
              "ラッタ",
              "オニスズメ",
              "オニドリル",
              "アーボ",
              "アーボック",
              "ピカチュウ",
              "ライチュウ",
              "サンド",
              "サンドパン",
              "ニドラン♀",
              "ニドリーナ",
              "ニドクイン",
              "ニドラン♂",
              "ニドリーノ",
              "ニドキング",
              "ピッピ",
              "ピクシー",
              "ロコン",
              "キュウコン",
              "プリン",
              "プクリン",
              "ズバット",
              "ゴルバット",
              "ナゾノクサ",
              "クサイハナ",
              "ラフレシア",
              "パラス",
              "パラセクト",
              "コンパン",
              "モルフォン",
              "ディグダ",
              "ダグトリオ",
              "ニャース",
              "ペルシアン",
              "コダック",
              "ゴルダック",
              "マンキー",
              "オコリザル",
              "ガーディ",
              "ウインディ",
              "ニョロモ",
              "ニョロゾ",
              "ニョロボン",
              "ケーシィ",
              "ユンゲラー",
              "フーディン",
              "ワンリキー",
              "ゴーリキー",
              "カイリキー",
              "マダツボミ",
              "ウツドン",
              "ウツボット",
              "メノクラゲ",
              "ドククラゲ",
              "イシツブテ",
              "ゴローン",
              "ゴローニャ",
              "ポニータ",
              "ギャロップ",
              "ヤドン",
              "ヤドラン",
              "コイル",
              "レアコイル",
              "カモネギ",
              "ドードー",
              "ドードリオ",
              "パウワウ",
              "ジュゴン",
              "ベトベター",
              "ベトベトン",
              "シェルダー",
              "パルシェン",
              "ゴース",
              "ゴースト",
              "ゲンガー",
              "イワーク",
              "スリープ",
              "スリーパー",
              "クラブ",
              "キングラー",
              "ビリリダマ",
              "マルマイン",
              "タマタマ",
              "ナッシー",
              "カラカラ",
              "ガラガラ",
              "サワムラー",
              "エビワラー",
              "ベロリンガ",
              "ドガース",
              "マタドガス",
              "サイホーン",
              "サイドン",
              "ラッキー",
              "モンジャラ",
              "ガルーラ",
              "タッツー",
              "シードラ",
              "トサキント",
              "アズマオウ",
              "ヒトデマン",
              "スターミー",
              "バリヤード",
              "ストライク",
              "ルージュラ",
              "エレブー",
              "ブーバー",
              "カイロス",
              "ケンタロス",
              "コイキング",
              "ギャラドス",
              "ラプラス",
              "メタモン",
              "イーブイ",
              "シャワーズ",
              "サンダース",
              "ブースター",
              "ポリゴン",
              "オムナイト",
              "オムスター",
              "カブト",
              "カブトプス",
              "プテラ",
              "カビゴン",
              "フリーザー",
              "サンダー",
              "ファイヤー",
              "ミニリュウ",
              "ハクリュー",
              "カイリュー",
              "ミュウツー",
              "ミュウ",
            ],
            pokemonkeyList:[
              "husigidane" ,
              "husigisou" ,
              "husigibana" ,
              "hitokage" ,
              "riza-do" ,
              "riza-don" ,
              "zenigame" ,
              "kame-ru" ,
              "kamekkusu" ,
              "kyatapi-" ,
              "toranseru" ,
              "batahuri-" ,
              "bi-doru" ,
              "koku-n" ,
              "supia-" ,
              "poppo" ,
              "pizyon" ,
              "pizyotto" ,
              "koratta" ,
              "ratta" ,
              "onisuzume" ,
              "onidoriru" ,
              "a-bo" ,
              "a- bokku" ,
              "pikatyuu" ,
              "raityuu" ,
              "sando" ,
              "sandopan" ,
              "nidoranmesu" ,
              "nidori-na" ,
              "nidokuin" ,
              "nidoranosu" ,
              "nidori-no" ,
              "nidokingu" ,
              "pippi" ,
              "pikusi-" ,
              "rokon" ,
              "kyuukon" ,
              "purin" ,
              "pukurin" ,
              "zubatto" ,
              "gorubatto" ,
              "nazonokusa" ,
              "kusaihana" ,
              "rahuresia" ,
              "parasu" ,
              "parasekuto" ,
              "konpan" ,
              "morufon" ,
              "dhiguda" ,
              "dagutorio" ,
              "nya-su" ,
              "perusian" ,
              "kodakku" ,
              "gorudakku" ,
              "manki-" ,
              "okorizaru" ,
              "ga-dhi" ,
              "uindhi" ,
              "nyoromo" ,
              "nyorozo" ,
              "nyorobon" ,
              "ke-syi" ,
              "yungera-" ,
              "hu-dhin" ,
              "wanriki-" ,
              "go-riki-" ,
              "kairiki-" ,
              "madatubomi" ,
              "utudon" ,
              "utubotto" ,
              "menokurage" ,
              "dokukurage" ,
              "isitubute" ,
              "goro-n" ,
              "goro-nya" ,
              "poni-ta" ,
              "gyaroppu" ,
              "yadon" ,
              "yadoran" ,
              "koiru" ,
              "reakoiru" ,
              "kamonegi" ,
              "do-do-" ,
              "do-dorio" ,
              "pauwau" ,
              "zyugon" ,
              "betobeta-" ,
              "betobeton" ,
              "sheruda-" ,
              "parushen" ,
              "go-su" ,
              "go-suto" ,
              "genga-" ,
              "iwa-ku" ,
              "suri-pu" ,
              "suri-pa-" ,
              "kurabu" ,
              "kingura-" ,
              "biriridama" ,
              "marumain" ,
              "tamatama" ,
              "nassi-" ,
              "karakara" ,
              "garagara" ,
              "sawamura-" ,
              "ebiwara-" ,
              "beroringa" ,
              "doga-su" ,
              "matadogasu" ,
              "saiho-n" ,
              "saidon" ,
              "rakki-" ,
              "monzyara" ,
              "garu-ra" ,
              "tattu-" ,
              "si-dora" ,
              "tosakinto " ,
              "azumaou" ,
              "hitodeman" ,
              "suta-mi-" ,
              "bariya-do" ,
              "sutoraiku" ,
              "ru-zyura" ,
              "erebu-" ,
              "bu-ba-" ,
              "kairosu" ,
              "kentarosu" ,
              "koikingu" ,
              "gyaradosu" ,
              "rapurasu" ,
              "metamon" ,
              "i-bui" ,
              "syawa-zu" ,
              "sanda-su" ,
              "bu-suta-" ,
              "porigon" ,
              "omunaito" ,
              "omusuta-" ,
              "kabuto" ,
              "kabutopusu" ,
              "putera" ,
              "kabigon" ,
              "huri-za-" ,
              "sanda-" ,
              "faiya-" ,
              "miniryuu" ,
              "hakuryu-" ,
              "kairyu-" ,
              "myuutu-" ,
              "myuu" ,
           ],
            lastLetter:'',
            score:0,
            startTime:'',
            endTime:''
        }
    },
    watch: {
      score: function(val, oldVal){
        if(oldVal == 0){

        }
      },
      userInput: function (val, oldVal) {
        this.lastLetter = val.slice(-1)
      },
      lastLetter: function(val,oldVal){
        try{
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
        }catch{
          return
        }
      }
    },
    methods:{
        pushEnter:function(){
        if(this.key ==='start'){
          this.changeWords()
        }else if((this.userInput === this.key) && (this.endTime!='' && this.startTime!=''&&this.endTime.getTime() - this.startTime.getTime() <= 5000)){
          this.endTime = new Date()
          this.score += 100
          this.changeWords()
        }else if(this.userInput === this.key){
            this.score += 10
            this.changeWords()
        }else{
          alert('No!')
        }
      },
      changeWords:function(){
        this.userInput = ''
        var num = Math.floor(Math.random() * this.pokemonList.length)
        console.log(num)
        this.words = this.pokemonList[num]
        console.log(this.words)
        this.key = this.pokemonkeyList[num]
        console.log(this.key)
        this.startTime = new Date()
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
