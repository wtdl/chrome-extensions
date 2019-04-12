$(function () {
    $(".search").click(function () {
        $(".express").hide();
        $(".reg").show();

        // $.ajax({
        //     type:"POST",
        //     url: "https://www.szwtdl.cn",
        //     data:{'username':'pengjian','password':"12345678"},
        //     dataType: "json",
        //     success:function (res) {
        //         alert(res);
        //     }
        // });

    });
});