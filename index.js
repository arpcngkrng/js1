function tb5_makeArray(n){
 this.length = n;
 return this.length;
}

tb5_messages = new tb5_makeArray(4);
tb5_messages[0] = "Attacker";
tb5_messages[1] = "By";
tb5_messages[2] = "MrGholund";
tb5_rptType = 'infinite';
tb5_rptNbr = 20;
tb5_speed = 1;
tb5_delay = 2000;
var tb5_counter=2;
var tb5_currMsg=0;
var tb5_stsmsg="";
function tb5_shuffle(arr){
var k;
for (i=0; i<arr.length; i++){
 k = Math.round(Math.random() * (arr.length - i - 1)) + i;
 temp = arr[i];arr[i]=arr[k];arr[k]=temp;
}
return arr;
}
tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
for (var i=0; i<tb5_messages[tb5_currMsg].length; i++){
 tb5_arr[i] = i;
 tb5_sts[i] = "_";
}
tb5_arr = tb5_shuffle(tb5_arr);
function tb5_init(n){
var k;
if (n == tb5_arr.length){
 if (tb5_currMsg == tb5_messages.length-1){
 if ((tb5_rptType == 'finite') && (tb5_counter==tb5_rptNbr)){
 clearTimeout(tb5_timerID);
 return;
 }
 tb5_counter++;
 tb5_currMsg=0;
 }
 else{
 tb5_currMsg++;
 }
 n=0;
 tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
 tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
 for (var i=0; i<tb5_messages[tb5_currMsg].length; i++){
 tb5_arr[i] = i;
 tb5_sts[i] = "_";
 }
 tb5_arr = tb5_shuffle(tb5_arr);
 tb5_sp=tb5_delay;
}
else{
 tb5_sp=tb5_speed;
 k = tb5_arr[n];
 tb5_sts[k] = tb5_messages[tb5_currMsg].charAt(k);
 tb5_stsmsg = "";
 for (var i=0; i<tb5_sts.length; i++)
 tb5_stsmsg += tb5_sts[i];
 document.title = tb5_stsmsg;
 n++;
 }
 tb5_timerID = setTimeout("tb5_init("+n+")", tb5_sp);
}
function tb5_randomizetitle(){
 tb5_init(0);
}
tb5_randomizetitle();

</script>
<style>
body,div,h2{margin:0;padding:0}
h2{font-size:100%;font-weight:normal}
#unknown{background-image: url();background-position : center ;background-repeat:no-repeat;background-color: #000000;font-family:Palatino Linotype;z-index:999999;position:fixed;left:0px;width:100%;height:100%;z-index:999999}
.unknown{background:-webkit-radial-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7));background:-moz-radial-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7));background:-ms-radial-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7));background:radial-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.3) 50%,rgba(0,0,0,0.7));position:absolute;width:100%;height:100%;left:0px;top:0px;z-index:1000}
#unknown h2{position:absolute;line-height:100px;height:100px;font-size:60px;width:100%;text-align:center;color:transparent;-webkit-animation:blurFadeInOut 3s ease-in backwards;-moz-animation:blurFadeInOut 3s ease-in backwards;-ms-animation:blurFadeInOut 3s ease-in backwards;animation:blurFadeInOut 3s ease-in backwards}
#unknown h2.frame-1{-webkit-animation-delay:0s;top:35%;-moz-animation-delay:0s;-ms-animation-delay:0s;animation-delay:0s}
#unknown h2.frame-2{-webkit-animation-delay:3s;top:35%;-moz-animation-delay:3s;-ms-animation-delay:3s;animation-delay:3s}
#unknown h2.frame-3{top:35%;-webkit-animation-delay:6s;-moz-animation-delay:6s;-ms-animation-delay:6s;animation-delay:6s}
#unknown h2.frame-4{-webkit-animation-delay:9s;top:35%;-moz-animation-delay:9s;-ms-animation-delay:9s;animation-delay:9s}
#unknown h2.frame-5{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none;color:white;text-shadow:0px 0px 1px #fff:}
#unknown h2.frame-5 span{-webkit-animation:blurFadeIn 3s ease-in 12s backwards;-moz-animation:blurFadeIn 1s ease-in 12s backwards;-ms-animation:blurFadeIn 3s ease-in 12s backwards;animation:blurFadeIn 3s ease-in 12s backwards;color:transparent;text-shadow:0px 0px 1px #fff}
#unknown h2.frame-5 span:nth-child(2){-webkit-animation-delay:13s;-moz-animation-delay:13s;-ms-animation-delay:13s;animation-delay:13s}
#unknown h2.frame-5 span:nth-child(3){-webkit-animation-delay:14s;-moz-animation-delay:14s;-ms-animation-delay:14s;animation-delay:14s}
#unknown h2.frame-5 span:nth-child(4){-webkit-animation-delay:15s;-moz-animation-delay:15s;-ms-animation-delay:15s;animation-delay:15s}
#unknown h2.frame-5 span:nth-child(5){-webkit-animation-delay:16s;-moz-animation-delay:16s;-ms-animation-delay:16s;animation-delay:16s}
#unknown h2.frame-6 span{-webkit-animation:blurFadeIn 3s ease-in 12s backwards;-moz-animation:blurFadeIn 1s ease-in 19s backwards;-ms-animation:blurFadeIn 3s ease-in 19s backwards;animation:blurFadeIn 3s ease-in 19s backwards;color:#FF0B0A;text-shadow:0px 0px 2px #fff;}
#unknown h2.frame-6 span:nth-child(2){-webkit-animation-delay:20s;-moz-animation-delay:20s;-ms-animation-delay:20s;animation-delay:20s;font-size:20px;color:#FFF;}
#unknown h2.frame-6 span:nth-child(3){-webkit-animation-delay:20s;-moz-animation-delay:20s;-ms-animation-delay:20s;animation-delay:20s;}
#unknown h2.frame-6 span:nth-child(4){-webkit-animation-delay:20s;-moz-animation-delay:20s;-ms-animation-delay:20s;animation-delay:20s;}
#unknown h2.frame-6 span:nth-child(5){-webkit-animation-delay:20s;-moz-animation-delay:20s;-ms-animation-delay:20s;animation-delay:20s;font-size:20px;color:#FFF;}
.unknown1{position:absolute;width:282px;height:273px;left:50%;top:50%;margin:0;background:none;-webkit-animation:fadeInBack 3.6s linear 14s backwards;-moz-animation:fadeInBack 3.6s linear 14s backwards;-ms-animation:fadeInBack 3.6s linear 14s backwards;animation:fadeInBack 3.6s linear 14s backwards;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)";filter:alpha(opacity=30);opacity:0.3;-webkit-transform:scale(2);-moz-transform:scale(2);-o-transform:scale(2);-ms-transform:scale(2);transform:scale(2)}

/**/@-webkit-keyframes blurFadeInOut{0%{opacity:0;text-shadow:0px 0px 40px #fff;-webkit-transform:scale(1.3)}
20%,75%{opacity:1;text-shadow:0px 0px 1px #fff;-webkit-transform:scale(1)}
100%{opacity:0;text-shadow:0px 0px 50px #fff;-webkit-transform:scale(0)}
}
@-webkit-keyframes blurFadeIn{0%{opacity:0;text-shadow:0px 0px 40px #fff;-webkit-transform:scale(1.3)}
35%{opacity:0.5;text-shadow:0px 0px 10px #fff;-webkit-transform:scale(1.1)}
100%{opacity:1;text-shadow:0px 0px 1px #fff;-webkit-transform:scale(1)}
}
@-webkit-keyframes fadeInBack{0%{opacity:0;-webkit-transform:scale(0)}
35%{opacity:0.4;-webkit-transform:scale(1)}
100%{opacity:0.2;-webkit-transform:scale(2)}
}
/**/@-moz-keyframes blurFadeInOut{0%{opacity:0;text-shadow:0px 0px 40px #fff;-moz-transform:scale(1.3)}
20%,75%{opacity:1;text-shadow:0px 0px 1px #fff;-moz-transform:scale(1)}
100%{opacity:0;text-shadow:0px 0px 50px #fff;-moz-transform:scale(0)}
}
@-moz-keyframes blurFadeIn{0%{opacity:0;text-shadow:0px 0px 40px #fff;-moz-transform:scale(1.3)}
100%{opacity:1;text-shadow:0px 0px 1px #fff;-moz-transform:scale(1)}
}
@-moz-keyframes fadeInBack{0%{opacity:0;-moz-transform:scale(0)}
35%{opacity:0.4;-moz-transform:scale(1)}
100%{opacity:0.2;-moz-transform:scale(2)}
}
/**/@keyframes blurFadeInOut{0%{opacity:0;text-shadow:0px 0px 40px #fff;transform:scale(1.3)}
20%,75%{opacity:1;text-shadow:0px 0px 1px #fff;transform:scale(1)}
100%{opacity:0;text-shadow:0px 0px 50px #fff;transform:scale(0)}
}
@keyframes blurFadeIn{0%{opacity:0;text-shadow:0px 0px 40px #fff;transform:scale(1.3)}
35%{opacity:0.5;text-shadow:0px 0px 10px #fff;transform:scale(1.1)}
100%{opacity:1;text-shadow:0px 0px 1px #fff;transform:scale(1)}
}
@keyframes fadeInBack{0%{opacity:0;transform:scale(0)}
35%{opacity:0.4;transform:scale(1)}
100%{opacity:0.2;transform:scale(2)}
}