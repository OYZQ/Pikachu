! function () {
    var duration = 20
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget) //button
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 20
                break
            case 'normal':
                duration = 10
                break
            case 'fast':
                duration = 5
                break
        }
    })

    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }
    let code = `
    /*
    * 首先，需要准备皮卡丘的皮
    */
    .preview {
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FEE433;
    }
    .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*
    * 接下来，画皮卡丘的鼻子
    */
    .wrapper .nose {
        width: 0px;
        height: 0px;
        border: 11px solid;
        border-width: 10px 12px;
        border-color: black transparent transparent transparent;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 28px;
    }
    /*
    * 接下来，画皮卡丘的眼睛
    */
    .wrapper .eye {
        height: 49px;
        width: 49px;
        background-color: #2e2e2e;
        position: absolute;
        border: 2px solid black;
        border-radius: 50%;
    
    }
    /*
    * 眼睛里面的珠子
     */
    .wrapper .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background-color: #fff;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -px;
        border: 2px solid #000;
    }
    /*
    * 左眼在左边
    */
    .wrapper .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    /*
    * 右眼在右边
    */
    .wrapper .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    /*
     * 然后，画皮卡丘的脸
    */
    .wrapper .face{
        width: 68px;
        height: 68px;
        top:85px;
        background-color: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
    }
    /*
    * 将脸放到正确的位置
    */
    .wrapper .face.left{
        right: 50%;
        margin-right: 116px;
    }
    .wrapper .face.right{
        left: 50%;
        margin-left:116px;
    }
    /*
     * 上嘴唇
    */
    .wrapper .upperLip{
        height: 25px;
        width: 80px;
        border: 2px solid black;
        border-top: none;
        position: absolute;
        top: 50px;
        background-color: #fde348;
        z-index: 1;
    }
    .wrapper .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px ;
        border-right: none;
        transform: rotate(-20deg);
    }
    .wrapper .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 20px ;
        border-left: none;
        transform: rotate(20deg);
    }
    /*
    * 下嘴唇
    */
    .lowerLip-wrapper{
        bottom: -45px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        position: absolute;
        height: 150px;
        overflow: hidden;
        width: 300px;
    }
    .lowerLip{
        width: 300px;
        height: 3500px;
        background-color: #990513;
        border-radius: 200px/2000px;
        border: 3px solid black;
        position: absolute;
        bottom: 0px;
        overflow: hidden;
    }
    /*
    * 小舌头
    */
    .lowerLip::after{
        content: '';
        position: absolute;
        bottom: 0px;
        width: 120px;
        height: 120px;
        background-color: #fc4a62;
        left: 50%;
        margin-left: -60px;
        border-radius: 50%;
    }
    /*
    * 好了，这只皮卡丘送给你
    */
    `
    writeCode('', code)

}.call()