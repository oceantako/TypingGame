const words = [["野良猫がたくさんいる","noranekogatakusanniru"],
                ["インドカレーを食べる","inndokare-wotaberu"],
                ["コロナウイルス対策","koronauirusutaisaku"],
                ["よちよちペンギン歩き","yotiyotipennginnaruki"],
                ["電子レンジで温める","dennsirennzideatatameru"],
                ["東京の天気は雨です","toukyounotennkihaamedesu"],
                ["自転車で旅に出る","zitennsyadetabinideru"],
                ["江の島の海鮮丼","enosimanokaisenndonn"],
                ["歩きスマホはダメ絶対","arukisumahohadamezettai"],
                ["家系ラーメンが食べたい","iekeira-menngatabetai"],
                ["次郎系ラーメンが食べたい","ziroukeira-menngatabetai"],
                ["ジムビームハイボール","zimubi-muhaibo-ru"],
                ["ベーコンレタスバーガー","be-konnretasuba-ga-"],
                ["築地で高級寿司を食べる","tukizidekoukyuuzusiwotaberu"],
                ["夕日がきれいな高台","yuuhigakireinatakadai"],
                ["沖縄で手作りシーサー","okinawadetedukurisi-sa-"],
                ["よさこいソーラン節","yosakoiso-rannbusi"],
                ["氷結ビターレモンサワー","hyouketubita-remonnsawa-"],
                ["湘南名物生シラス丼","syounannmeibutunamasirasudonn"],
                ["カワハギの煮つけ","kawahaginonituke"],
                ["瓶のコカコーラうまい","binnnokokako-raumai"],
                ["新宿駅東口歌舞伎町","sinnzyukuekihigasigutikabukityou"],
                ["地球は太陽系の惑星","tikyuuhataiyoukeinowakusei"],
                ["スポーツ飲料アクエリアス","supo-tuinnryouakueriasu"],
                ["シマアジのお刺身","simaazinoosasimi"],
                ["全力疾走しても遅刻確定","zennryokusissousitemotikokukakutei"],
                ["チョリソーペペロンチーノ","tyoriso-peperonnti-no"],
                ["こってりカルボナーラ","kotterikarubona-ra"],
                ["アサヒスーパードライ","asahisu-pa-dorai"],
                ["サントリープレミアムモルツ","sanntori-puremiamumorutu"],
                ["エベレスト登頂しました","eberesutotoutyousimasita"],
                ["爆音で音楽をきく","bakuonndeonngakuwokiku"],
                ["アコギで路上弾き語りライブ","akogiderozyouhikigatariraibu"],
                ["江ノ島水族館入館","enosimasuizokukannnyuukann"],
                ["おしゃれな街恵比寿","osyarenamatiebisu"],
                ["清水寺で食べ歩き","kiyomizuderadetabearuki"],
                ["四条烏丸駅","sizyoukarasumaeki"],
                ["北海道といったらカニでしょ","hokkaidoutoittarakanidesyo"],
                ["いつかはいきたいベネチア","itukahaikitaibenetia"],
                ["合唱コンクール優勝","gassyoukonnku-ruyuusyou"],
                ["沖縄の海へダイブする","okinawanoumihedaibusuru"],
                ["サランラップして冷蔵庫へ","sarannrappusitereizoukohe"],
                ["スバルインプレッサホワイト","subaruinnpuressahowaito"],
                ["タイピングはやくなりたい","taipinnguhayakunaritai"],
                ["巨大ゴリラのドラミング","kyodaigoriranodoraminngu"],
                ["2時間飲み放題二千円","2zikannnomihoudainisennenn"],
                ["壮大な歴史を感じる","soudainarekisiwokannziru"],
                ["インスタグラムを更新する","innsutaguramuwokousinnsuru"],
                ["ユーチューブに動画投稿","yu-tyu-bunidougatoukou"],
                ["新しい洋服を買いに行く","atarasiiyouhukuwokainiiku"],
                ["オリックスレンタカー","orikkusurenntaka-"],
                ["マックブックはかっこいい","makkubukkuhakakkoii"],
                ["今日はカップ麺でいいや","kyouhakappumenndeiiya"],
                ["最寄り駅徒歩十分","moyoriekitohozyuppunn"],
                ["冬に食べたいキムチ鍋","huyunitabetaikimutinabe"],
                ["携帯電話をなくした","keitaidennwawonakusita"],
                ["秋はさんまの季節","akihasannmanokisetu"],
                ["いつも通りの日常","itumodoorinonitizyou"],
                ["イヤホンガンガン伝言ゲーム","iyahonngannganndenngonnge-mu"],
                ["埼玉県さいたま市","saitamakennsaitamasi"],
                ["そこの醤油とってくれる","sokonosyouyutottekureru"],
                ["濃厚抹茶アイス","noukoumattyaaisu"],
                ["動画編集ソフト","dougahennsyuusohuto"],
                ["表計算ソフトエクセル","hyoukeisannsohutoekuseru"],
                ["限りなくゼロに近い数字","kagirinakuzeronitikaisuuzi"],
                ["自動車運転免許証","zidousyaunntennmennkyosyou"],
                ["ぜんぜん消えない消しゴム","zennzennkienaikesigomu"],
                ["ナマケモノの置物","namakemononookimono"],
                ["誕生日プレゼント","tannzyoubipurezennto"],
                ["生麦生米生卵","namamuginamagomenamatamago"],
                ["冬だからこたつを出そう","huyudakarakotatuwodasou"],
                ["待ちに待った給料日","matinimattakyuuryoubi"],
                ["ディズニーランド行きたい","dexizuni-randoikitai"],
                ["この予約キャンセルで","konoyoyakukyannserude"],
                ["なんてきれいな瞳だ","nanntekireinahitomida"],
                ["スーパーで買い物をする","su-pa-dekaimonowosuru"],
                ["2時間飲み放題二千円","2zikannnomihoudainisennenn"],
                ["幅跳び世界記録保持者","habatobisekaikirokuhozisya"],
                ["マンガを大人買いする","manngawootonagaisuru"],
                ["架空の生き物ドラゴン","kakuunoikimonodoragonn"],
                ["あたたかい玄米茶","atatakaigennmaitya"],
                ["冷たいジャスミン茶","tumetaizyasuminntya"],
                ["高速で三時間くらいだよ","kousokudesannzikannkuraidayo"],
                ["おしゃれなイタリアン","osyarenaitariann"],
                ["一日一膳を心掛ける","itinitiitizennwokokorogakeru"],
                ["人食いザメには気をつけろ","hitokuizamenihakiwotukero"],
                ["一か八かで飛び込む","itikabatikadetobikomu"],
                ["チャーハンは油多めがうまい","tya-hannhaaburaoomegaumai"],
                ["いつ会っても笑顔の人","ituattemoegaonohito"]];

let nowwords = [];

let starttime;

let wordcounter = 0;

let misscounter = 0;

/////スタートボタン押下時/////
function  startbuttom() {

    $(".zikan, .misstype, .ranker, .nihongo, .romazi").remove();
    $(".typegame").prepend('<div class="nihongo"></div><div class="romazi"></div?');

    wordsselect();

    wordsTOpage();

    starttime = Date.now();

    wordcounter = 1;

    misscounter = 0;

    window.addEventListener('keydown', keyDown, true);
}

/////文字列をランダムに選択する/////
function wordsselect() {
    let number;
    let math = words.length;
    number = Math.floor( Math.random() * math );
    nowwords = words[number].slice();
}

/////残りの文字列を画面に表示する/////
function wordsTOpage() {
    $(".nihongo").text(nowwords[0]);
    $(".romazi").text(nowwords[1]);
}

/////キー入力受け取り/////
function keyDown(event) {
    var code = event.key;
    if (code == "press") {
        code = "-";
    }

    let longs = nowwords[1].length;
    let firstwd = nowwords[1].substring( 0, 1 );

    if (code == firstwd ) {
        nowwords[1] = nowwords[1].substring( 1, longs );
        if (nowwords[1].length == 0) {
            if (wordcounter == 20) {
                KEKKA();
            }
            wordsselect();
            wordcounter++;
        }
    }else{
        misscounter++;
        $("body").removeClass("typepage");
        $("body").addClass("typepagered");
        setTimeout(function(){
            $("body").removeClass("typepagered");
            $("body").addClass("typepage");
        },50);
    }

    wordsTOpage();
}

/////結果を表示する/////
function KEKKA() {
    let endtime = Date.now();
    let kekkazikan_m = endtime - starttime;
    let kekkazikan = Math.floor(kekkazikan_m / 1000);
    let Rank_m = kekkazikan + misscounter / 5
    let Rank

    if ( Rank_m < 70 ) {
        Rank = "神";
    }else if ( Rank_m < 74 ) {
        Rank = "S+";
    }else if ( Rank_m < 78 ) {
        Rank = "S";
    }else if ( Rank_m < 82 ) {
        Rank = "A+";
    }else if ( Rank_m < 86 ) {
        Rank = "A";
    }else if ( Rank_m < 90 ) {
        Rank = "A-";
    }else if ( Rank_m < 94 ) {
        Rank = "B+";
    }else if ( Rank_m < 98 ) {
        Rank = "B";
    }else if ( Rank_m < 102 ) {
        Rank = "B-";
    }else if ( Rank_m < 106 ) {
        Rank = "C+";
    }else if ( Rank_m < 110 ) {
        Rank = "C";
    }else if ( Rank_m < 114 ) {
        Rank = "C-";
    }else if ( Rank_m < 118 ) {
        Rank = "D+";
    }else if ( Rank_m < 122 ) {
        Rank = "D";
    }else if ( Rank_m < 126 ) {
        Rank = "D-";
    }else if ( Rank_m < 130 ) {
        Rank = "E";
    }else if ( Rank_m < 134 ) {
        Rank = "F";
    }else{
        Rank = "くそ";
    }

    let add1 = '<div class="zikan">Time：' + kekkazikan + ' second</div>';
    let add2 = '<div class="misstype">Misstype：' + misscounter + '</div>';
    let add3 = '<div class="ranker">Rank：' + Rank + '</div>';

    $(".nihongo, .romazi").remove();
    $(".typegame").prepend(add1,add2,add3);
    
}
