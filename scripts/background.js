

function inYuFaBu() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('【进入】调试模式', {
            icon: 'https://tinyzh.github.io/gitcat.jpg'
        });

        setTimeout(function(){
            notification.close();
        },1500);
    }

}


function outYuFaBu() {
    if (Notification.permission !== "granted")
        Notification.requestPermission();
    else {
        var notification = new Notification('【退出】调试模式', {
            icon: 'https://tinyzh.github.io/gitcat.jpg'
        });
        setTimeout(function(){
            notification.close();
        },1500);
    }

}
