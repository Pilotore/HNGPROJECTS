window.onload = function(){
    function updateTime() {
        const now = new Date();
        const utcTime = now. toUTCString().slice(-12,-4);
        document.querySelector(`[data-testid="currentTimeUTC"]`).innerText = utcTime;
        img.width = img.naturalWidth;
        img.height = img.naturalHeight;
    }
    updateTime();
    setInterval(updateTime, 1000);


    const daysOfWeek =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay =daysOfWeek[new Date().getUTCDay()];
    document.querySelector(`[data-testid="currentDay"]`).innerText = currentDay;
}
