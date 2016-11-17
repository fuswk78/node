
    var exec = require("child_process").exec;
    var querystring = require("querystring");

    function start(res, data) {
        console.log("start请求被开启");

            // 2解决阻塞问题，利用回调
        // var content = "empty";
        // exec(
        //         // "ls -lah", 
        //         "find/"
        //         {
        //             timeout: 10000,
        //             maxBuffer: 2000*1024
        //         },
        //         function (error, stdout, stderr) {
        //             res.writeHead("200", {"Content-Type":"text/plain;charset=utf-8"});
        //             res.write(stdout);
        //             res.end();
        //                 // content = stdout;
        //         }
        //     );
            

        // return content;

            //1 测试阻塞
        // function sleep(mili) {
        //     var startTime = new Date().getTime();
        //     while(new Date().getTime() < startTime + mili);
        // }
        // // 此时他将花费10秒时间加载
        // // 同时upload也需要10秒
        // // 发生了阻塞
        // sleep(10000);

        // return "start方法被调用";
        // 
        // 
        // 
        
        // form表单
        var body = '<html>'
                        + '<head>'
                            + '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
                        + '</head>'
                        + '<body>'
                            + '<form action="/upload" method="post">'
                                + '<textarea name="text" rows="20" cols="60"></textarea>'
                                + '<input type="submit" value="Submit text" />'
                            + '</form>'
                        + '</body>'
                    + '</html>';

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(body);
        res.end();

    }

    function upload(res, data) {
        console.log("upload请求被开启");
        res.writeHead("200", {
            "Content-Type": "text/plain;charset=utf-8"
        })
        res.write("你发送了 " + querystring.parse(data).text);
        
        res.end();
    }

    exports.start = start;
    exports.upload = upload;