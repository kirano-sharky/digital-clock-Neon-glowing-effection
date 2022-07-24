setInterval(()=>{
    const 時間 = document.querySelector(".展示 #時間");
    let 日期 = new Date();
    let 小時 = 日期.getHours();
    let 分鐘 = 日期.getMinutes();
    let 秒 = 日期.getSeconds();
    let 時段 = "AM";
    if(小時 > 12){
      時段 = "PM";
      小時 = 小時 - 12;
    }
    if(秒 < 10){
      秒 = "0" + 秒;
    }
    if(分鐘 < 10){
      分鐘 = "0" + 分鐘;
    }
    if(小時 < 10){
      小時 = "0" + 小時;
    }
    時間.textContent = 小時 + ":" + 分鐘 + ":" + 秒 + " "+ 時段;
  });
