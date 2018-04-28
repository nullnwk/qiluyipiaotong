$(function () {
    let obj = {}
    $.ajax({
        url: "http://39.104.111.170/yptcms/webMUser/tologin.wo",
        type: "post",
        dataType: "json",
        success: function (data) {
            console.log(data)
            if (data.statusCode == "200") {
                obj = data;
            }
        },
        error: function () {
            console.log("错误加密");
        }
    })


    $("#dl").on("click", function () {
        var key = RSAUtils.getKeyPair(obj.data.exponent, '', obj.data.modulus);
        var password = RSAUtils.encryptedString(key, encodeURIComponent("123456"));
        var j = {
            tel: '18663995901',
            password: password,
            ssid: obj.data.ssid
        }
        // console.log(j);
        $.ajax({
            url: "http://39.104.111.170/yptcms/webMUser/go.wo",
            type: "post",
            data: j,
            dataType: "json",
            success: function (res) { 
                console.log(res)
                console.log(j)
                let search = window.location.search.substr(1);
                let a = res.ssid;
                if (res.statusCode == 200) {
                    window.location.href = `${search}?${a}`;
                }
            },
            error: function () {
                console.log("错误登陆");
            }
        })
    })
})


// 和登录页相关的页面，把页面的url传到地址栏，登陆成功,把ssid传到地址栏，回退到之前页面，请求数据(加上地址栏中的ssid);