package com.pt.domain;

import com.pt.base.BaseDomain;

/**
 * 群组跟单位没有关系，不然就不能跨单位进行
 * 群组只跟管理员的主键和组成员的主键有关系
 * @author sq
 *
 */
public class CorpGroup extends BaseDomain{

	private String pk_corpgroup;
	/** 群组名称 */
	private String name;
	/** 组成员 */
	private String groupUsers;
	/** 所属管理员 */
	private String pk_users;
	/** 组描述信息 */
	private String comment;
	
	public CorpGroup() {
		setPk_corpgroup(basedbo.genPk());
	}

	public String getPk_corpgroup() {
		return pk_corpgroup;
	}

	public void setPk_corpgroup(String pk_corpgroup) {
		this.pk_corpgroup = pk_corpgroup;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGroupUsers() {
		return groupUsers;
	}

	public void setGroupUsers(String groupUsers) {
		this.groupUsers = groupUsers;
	}

	public String getPk_users() {
		return pk_users;
	}

	public void setPk_users(String pk_users) {
		this.pk_users = pk_users;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
	
	
	
}
