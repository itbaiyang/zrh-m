<template>
	<nav class="clear">
		<div class="nav-left fl">
			<div class="nav-logo"></div>
		</div>
		<div class="nav-right fl">
			<span class="nav-common nav-title">直融号企业管理平台</span>
			<ul class="fr">
	            <li class="dropdown nav-common nav-list" style="color: #ffffff">
	                <a style="color: #ffffff" class="dropdown-toggle" data-toggle="dropdown" role="button"
	                   aria-haspopup="true" aria-expanded="false"><span class="caret"></span></a>
	                <ul class="dropdown-menu">
	                    <li><a>退出</a></li>
	                </ul>
	            </li>
	        </ul>
		</div>
	</nav>
</template>
<style>
.nav-left {
	display: inline-block;
	background: #45539c;
	width: 66px;
	height: 50px;
}
.nav-right {
	display: inline-block;
	background: #6b7acb;
	width: calc(100% - 66px);
	height: 50px;
	line-height: 50px;
	color: #ffffff;
}
.nav-logo {
	margin: 10px;
	width: 46px;
	height: 30px;
	background-image: url("/static/img/logo.png");
	background-size: 100%;
}
.nav-common {
    display: inline-block;
    padding-left: 20px;
    line-height: 50px;
    color: #ffffff;
    cursor: pointer;
}

.nav-title {
    font-size: 18px;
}
.nav-message {
    padding-right: 20px;
    border-left: 1px solid #6371bd;
}
</style>