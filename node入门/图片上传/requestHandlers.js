
    var exec = require("child_process").exec;
    var querystring = require("querystring");
    var fs = require("fs");
    var formidable = require("formidable");

    function start(res, data) {
        console.log("start方法被调用");

        var body = '<html>'
                    + '<head>'
                        + '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
                    + '</head>'
                    + '<body>'
                        + '<form action="/upload" enctype="multipart/form-data" method="post">'
                            + '<input type="file" name="upload">'
                            + '<input type="submit" value="Upload file" />'
                        + '</form>'
                    + '</body>'
                + '</html>';


                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(body);
                res.end();
    }

    function upload(res, req) {
        console.log("upload请求被开启");


        var form = new formidable.IncomingForm(); 
            console.log("接受了form表单提交图片");

            form.parse(req, function(error, fields, files) {
             console.log("parsing done"); 
             fs.renameSync(files.upload.path, "./tmp/test.png"); 
             res.writeHead(200, {"Content-Type": "text/html"}); 
             res.write("received image:<br/>"); 
             res.write("<img src='/show' />"); 
             res.end();
            });      
    }

    function show(res) {
        console.log("show方法被调用");

        fs.readFile("tmp/test.png", "binary", function(err, file) {
            if(err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(err +　"\n");
                res.end();
            }else {
                res.writeHead(200, {"Content-Type": "image/png"});
                res.write(file, "binary");
                res.end();
            }
        });
    }

    exports.start = start;
    exports.upload = upload;
    exports.show = show;