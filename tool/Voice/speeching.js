function speeching(inputBox,speechBtn) {
    var inputBox = document.querySelector(inputBox),
        speechBtn = document.querySelector(speechBtn);
    // voiceChange = document.querySelector('.speech');

    var inputText = '';

    speechBtn.onclick = function () {
        var msg = null;
        var text = inputBox.value;
        msg = new SpeechSynthesisUtterance(text); //Google 原生API
        window.speechSynthesis.speak(msg);
    }
}


/*
		javaScript  java

		基于原型的动态解释性脚本语言

			原型  词法作用域  执行上下文

		页面特效 前端页面特效

		view  server      DB

		typeS  nodeJS v8  mongoDB

		需求分析

			1. 界面DOM桥接
				1. 文本框输入监听
					1. 获取元素
					2. 事件绑定 onkeydown
				2. 降频操作
					1. setTimeout 延时定时器 setInterval

			2. ajax 通过 翻译API 实现实时翻译
				1. ajax 获取数据
					1. 地址
					2. 参数
					3. 回调函数
				2. 渲染到页面上

			3. 翻译好的文本 对接 google speech接口 实现语音合成
				1. SpeechSynthesisUtterance
				2. speechSynthesis.speak
			4. 语音合成变音效果

				1. voiceChanger
	*/





/*    var timeOut;
    var speed = 1;
    //事件监听 -> 事件委托
    inputBox.addEventListener('keydown',function(e){
        clearTimeout(timeOut); // 0 未找到 不执行
        timeOut = setTimeout(function(){
            inputText = e.target.value;
            speech(inputText);
        },1000);
    },false);

    //翻译模块
    // function translate(text){
    //     $.ajax({
    //         url:'http://route.showapi.com/32-9',
    //         data:{
    //             showapi_appid:'30603',
    //             showapi_sign:'98960666afeb4992ae91971d13494090',
    //             q:text,
    //             fromLanguage:'auto',
    //             oLanguage:'auto'
    //         },
    //         success:function(res){
    //             console.log(res);
    //             //var result = JSON.parse(res).showapi_res_body.translation[0];
    //             showBox.innerHTML = text;
    //             speech(text);
    //             voiceChange.addEventListener('click',function(){
    //                 voiceChanger(text);
    //             })
    //         }
    //
    //     })
    // }

    function speech(text){
        var msg = new SpeechSynthesisUtterance(text); //Google 原生API
        window.speechSynthesis.speak(msg);

    }


    function voiceChanger(text){
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[0]; //语音包 21 微软 小娜
        msg.voiceURI = 'native'; //选择语音和平台类型
        msg.volume = 1; // 0 - 1 音量
        msg.rate = speed; // 0.1 - 10 语速
        msg.pitch = 2; //0 - 2 声调
        msg.text = text; //合成文本
        msg.lang = 'zh-cn'; //使用的语言
        msg.onend= function(e){
            console.log(`花费的时间${event.elapsedTime}s.`)
        }
        speechSynthesis.speak(msg); //朗读
    }
/*

    sliding.addEventListener('mousedown',speedAdjustment,false);
    document.addEventListener('mousemove',speedAdjustment,false);
    document.addEventListener('mouseup',speedAdjustment,false);

    var startX = 0;
    var toggle = false;
    function speedAdjustment(e){
        switch(e.type){
            case 'mousedown':
                toggle = true;
                break;
            case 'mousemove':
                if(toggle){
                    slidingMove(e);
                    speed = ratio(e)*10;
                }
                break;
            case 'mouseup':
                toggle = false;
                break;
        }
    }

    function ratio(e){
        var offsetX = progressBar.offsetLeft;

        // (按钮left - 进度条left )/进度条长度
        var slidingRatio = (e.clientX - progressBar.offsetLeft)/progressBar.offsetWidth;
        slidingRatio = Math.max(slidingRatio,0);
        slidingRatio = Math.min(slidingRatio,1);
        return slidingRatio;

    }

    function slidingMove(e){
        //滑块 物理位置 left
        var left = e.clientX - progressBar.offsetLeft;
        //限制滑块left 左边界
        left = Math.max(0,left);
        //限制滑块right 右边界
        left = Math.min(left,progressBar.offsetWidth);
        console.log(left)
        sliding.style.left = left + 'px';


    }
*/

