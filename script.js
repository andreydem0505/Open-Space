function onOkClick() {
    let password = document.getElementById("password").value;
    if (password === "TrustNo1") {
        document.querySelectorAll('input[type="checkbox"]').forEach(el => {
            el.disabled = false;
            el.onchange = function () {
                onCheckClick();
            };
        });
        document.querySelectorAll('input[type="range"]').forEach(el => {
            el.disabled = false;
            el.onchange = function () {
                onCheckClick();
            };
        });
    }
}

function onCheckClick() {
    let result = true;
    document.querySelectorAll('input[type="checkbox"]').forEach(el => {
        if (el.checked !== true) result = false;
    });
    document.querySelectorAll('input[type="range"]').forEach(el => {
        if (el.value !== "100") result = false;
    });
    if (result) {
        let btn = document.querySelector('input[value="Launch"]');
        btn.disabled = false;
        let rocket = document.querySelector(".rocket");
        let rocketStyle = getComputedStyle(rocket);
        let deg = 30.0;
        btn.addEventListener("click", function () {
            let left = parseInt(rocketStyle.getPropertyValue("left").replace("px", ''));
            let bottom = parseInt(rocketStyle.getPropertyValue("bottom").replace("px", ''));
            let timer = setInterval(function() {
                deg += 0.2;
                left += Math.cos((90-deg) * Math.PI / 180.0) * 6;
                bottom += Math.sin((90-deg) * Math.PI / 180.0) * 5;
                rocket.style.left = left + "px";
                rocket.style.bottom = bottom + "px";
                rocket.style.transform = "rotate("+deg+"deg)";
                if (innerHeight < bottom || innerWidth < left) {
                    clearInterval(timer);
                }
            }, 10);
        });
    }
}