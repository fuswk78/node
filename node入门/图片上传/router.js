
    function router(handle, pathname, res, data) {
        console.log("router.js, 路由请求：" + pathname);

        if(typeof handle[pathname] == "function") {
            // var ress = handle[pathname](res);
            // console.log(ress);
            // 
            handle[pathname](res, data);
        }else {
            console.log("没有找到" + pathname);
            res.writeHead("404", {"Content-Type": "text/plain"});
            res.write("404页面访问有误");
            res.end();

        }
    }
    exports.route = router;