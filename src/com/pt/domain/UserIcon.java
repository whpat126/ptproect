package com.pt.domain;

import com.pt.base.BaseDomain;

public class UserIcon extends BaseDomain{

	private String pk_userIcon; // 图标的主键
	private String name; // icon name
	private String param_id; // icon 位置，需要根据此属性做排序
	private String param_title; // a标签的title属性
	private String param_href; // a标签的href属性
	private String param_dragableBox; //icon dragableBox param,use drag
	private String icon_path; // 图标在文档中的路径
	private String type; // 图标的属性：0表示公共的图标  1表示用户私有的图标
	private String pk_users; // 用户的主键
	
	public UserIcon() {
		setPk_userIcon(basedbo.genPk());
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getParam_id() {
		return param_id;
	}
	public void setParam_id(String param_id) {
		this.param_id = param_id;
	}
	public String getParam_title() {
		return param_title;
	}
	public void setParam_title(String param_title) {
		this.param_title = param_title;
	}
	public String getParam_href() {
		return param_href;
	}
	public void setParam_href(String param_href) {
		this.param_href = param_href;
	}
	public String getParam_dragableBox() {
		return param_dragableBox;
	}
	public void setParam_dragableBox(String param_dragableBox) {
		this.param_dragableBox = param_dragableBox;
	}
	public String getIcon_path() {
		return icon_path;
	}
	public void setIcon_path(String icon_path) {
		this.icon_path = icon_path;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}

	public String getPk_userIcon() {
		return pk_userIcon;
	}

	public void setPk_userIcon(String pk_userIcon) {
		this.pk_userIcon = pk_userIcon;
	}

	public String getPk_users() {
		return pk_users;
	}

	public void setPk_users(String pk_users) {
		this.pk_users = pk_users;
	}
	
}
