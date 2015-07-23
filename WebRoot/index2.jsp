<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
	<link rel="stylesheet" href="style/other/bootstrap/bootstrap.min.css">
	
	<script type="text/javascript" src="style/other/jquery-1.11.2.min.js"></script>
   	<script type="text/javascript" src="style/other/bootstrap/bootstrap.min.js"></script> 
   	<script type="text/javascript" src="style/common/userjs/index2.js"></script>
  </head>
  <body>
  
  
  
	<div>
		<!-- 最上方黑条 -->
	  	<div class="black_bar">
	 		<div class="black_bar_left" >
		  		<ul class="fl">
		  			<li  class="userSet"><a id="collect" href="javascript:;">加入收藏</a>
		  			</li>
		  			<li class="userSet"><a id="setIndex" href="javascript:void(0);">设为首页</a>
		  			</li>
		  			<li class="userSet"><a id="creDesktop" href="javascript:void(0);">创建桌面快捷</a>
		  			</li>
		  		</ul>
	 		</div>
	 		<!-- 退出系统 -->
	 		<div class="black_bar_right" >
	 			<!-- 如果session存在则显示用户名，鼠标划过，下方显示链接；不存在则显示登录 -->
	 			<div id="userInfo" style="display:none;">
		 			<ul class="fl" >
		 				<li ><span id="userName">${userName }</span>  </li>
		 			</ul>
	 			</div>
	 			<!-- 个人设置 -->
	 			<div id="userSet" style="display:none;">
	 				个人中心
	 				消息中心
	 				<a id="logout" href="javascript:;" title="退出系统">退出</a>
	 			</div>
	 		</div>
 		</div>
		
		
		
		<!-- 单位logo -->
		<div id="logo" class="logo"></div>
		
		<!-- 导航栏 -->
		<div id="menuBar" class="menuBar">
			<ul>
				<li>我的消息</li>
				<li>我的企业</li>
				<li>我的应用</li>
				<li>我的社区</li>
				<li>帮助中心</li>
			</ul>
		</div>
		
		
		<!-- 用户信息 -->
		<!-- 未登录 -->
		<div id="userLogin" style="display:none;"> <a id="login" href="javascript:void(0);">登录</a></div>
		
		
		<!-- 百度导航 -->
		<div id="baidu" class="baidu"> 
			
		</div>
		
		<div id="funcMenu">
			<!-- 后台生成，此处先写出来 -->
			<ul>
				<li>系统推荐（暂时）</li>
				<li>爱常用</li>
				<li>爱工作</li>
				<li>爱生活</li>
				<li>平通云</li>
			</ul>
		</div>
		
		<!-- 主要内容展示区 -->
		<div id="mainContent" >
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
	</div>
  
    <!-- 登录模态框（Modal） -->
		<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="modalTitle">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
						<h4 class="modal-title" id="myModalLabel">登录</h4>
					</div>
					<div class="modal-body">
						<span id="msg"></span>
						${msg }
					    <form action="userLogin.do" method="post">
					    	手机/邮箱:<input type="text" id="username" name="username" /><br/>
					    	密码:<input type="password" id="password" name="password" /><br/>
							<input type="checkbox" id="remeber" name="remeber" checked /> 7日内免登录
						<div class="modal-footer">
							<button id="loginButton" type="button" class="btn btn-primary">登录</button>
						</div>
						<!-- 社交工具登录 -->
						<div id="otherLogin">
							
						</div>
						</form>
					   
					</div>
				</div><!-- /.modal-content -->
			</div><!-- /.modal-dialog -->
		</div><!-- /.modal -->
  
  </body>
</html>
