<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
<head>
    <meta name="renderer" content="webkit"/>
    <meta name="keywords" content="平通,平通网,网址导航,网址大全,上网导航,portal,门户,云平台,信息平台,信息门户,导航,搜索,导航软件,信息集成,企业云,云服务,云"/>
    <meta name="description"
          content="平通网致力于打造企业及个人的信息门户，构建企业及个人的地址图谱，通过集成技术实现单点登录、信息集成，并与企业内部系统进行互通，实现信息共享，打造个人一个网页所有应用的平台(OPAA)"/>
    <meta http-equiv="imagetoolbar" content="no"/>
    <meta name="baidu-site-verification" content="GZU70K0VRo"/>
    <base href="<%=basePath%>">
    <script type="text/javascript" src="style/other/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="style/other/bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="style/common/userjs/index2.js"></script>
    <link rel="stylesheet" href="style/other/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="style/common/userCSS/base.css"/>
    <link rel='icon' href='style/common/img/fivelogo.ico' type=‘image/x-ico’/>
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <title>企业云信息门户（SSO）,网址导航,打造自己的独立桌面-平通网</title>

</head>
<body style="background-color: #f9f9f9">

<div class="container">
    <!-- 最上方黑条  style="display:none;" -->
    <div class="row"  style="float: left;z-index: 20;"><%@ include file="black_on_top.jsp" %></div>
    <!-- 单位logo -->

    <div class="row">
        <div class="col-md-12">
            <div class="navbar navbar-default navbar-fixed-top nav-tabs" style="position: fixed;top: 50px;">
                <div class="col-md-1 logo-bar"><a href="http://www.ptsso.com"><img src="style/common/img/logoxztm.gif" alt="平通网"></a></div>
                <!-- 导航栏 -->
                <div id="menu-Bar" class="col-md-5">
                    <div>
                        <div>
                            <ul class="nav nav-tabs">
                                <li><a href="#">我的消息</a></li>
                                <li><a href="#">我的企业</a></li>
                                <li><a href="#">我的应用</a></li>
                                <li><a href="#">我的社区</a></li>
                                <li><a href="#">帮助中心</a></li>
                            </ul>
                        </div>
                        <!-- 未登录 -->
                        <div id="userLogin" class="col-md-6 user-bar" style="display:block;"><a id="login" href="javascript:void(0);">登录</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
    <!-- 用户信息 -->


    <!-- 搜索引擎 -->
    <div style="margin-top: 140px;position: fixed;left: 400px;">
        <form action="http://www.baidu.com/baidu" target="_blank">
            <table>
                <tr>
                    <td>
                        <input name=tn type=hidden value=baidu>
                        <a href="http://www.baidu.com/" target="_blank"></a>
                        <input type="text" name="word" size="90px" style="width:540px;height: 36px;font-size:22px;border: 1px #5bc0de solid;" autofocus="autofocus"/>
                        <input type="submit" value="搜一下" class="btn btn-info btn-lg">
                    </td>
                </tr>
            </table>
        </form>

    </div>
    <div id="funcMenu" class="appclass">
        <!-- 后台生成，此处先写出来 -->
        <ul>
            <li class="btn btn-danger">酷&nbsp;&nbsp;&nbsp;&nbsp;站</li>
            <li class="btn btn-info">爱常用</li>
            <li class="btn btn-success">爱工作</li>
            <li class="btn btn-default">爱生活</li>
            <li class="btn btn-warning">平通云</li>
        </ul>
    </div>

    <!-- 主要内容展示区 -->
    <div id="mainContent">
        <!-- 未登录用户使用，由系统推送 -->
        <div id="none_login" style="display:none;">

        </div>
        <!-- 爱常用中内容 -->
        <div id="love_common" style="display:none;">

        </div>
        <div id="love_work" style="display:none;"></div>
        <div id="love_life" style="display:none;"></div>
        <div id="pt_yun" style="display:none;"></div>
    </div>
    <!-- 侧边回到页首和帮助 -->
    <div id="side">
        <ul>
            <li></li>
        </ul>
    </div>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    <br/>
    <br/><br/>

    <div id="sidediv" class="side">
        <ul>
            <li><a href="javascript:void(0);"><div class="sidebox"><img src="style/common/img/side_icon01.png">客服中心</div></a></li>
            <li><a href="javascript:void(0);"><div class="sidebox"><img src="style/common/img/side_icon02.png">客户案例</div></a></li>
            <li><a href="javascript:void(0);" ><div class="sidebox"><img src="style/common/img/side_icon04.png">QQ客服</div></a></li>
            <li><a href="javascript:void(0);" ><div class="sidebox"><img src="style/common/img/side_icon03.png">新浪微博</div></a></li>
            <li style="border:none;display: none;" id="sidetop"><a href="javascript:goTop();" class="sidetop"><img src="style/common/img/side_icon05.png"></a></li>
        </ul>
    </div>


</div>

<!-- 登录的model -->
<%@ include file="login.jsp" %>

</body>
</html>
