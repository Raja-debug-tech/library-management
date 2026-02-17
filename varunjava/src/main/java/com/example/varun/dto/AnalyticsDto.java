package com.example.varun.dto;

public class AnalyticsDto {

	private String name;
	private String groupname;
	private long pendingnumber;
	private long compltednumber;
	private double compltedratio;
	private long total_task;

	public long getTotal_task() {
		return total_task;
	}

	public void setTotal_task(long total_task) {
		this.total_task = total_task;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGroupname() {
		return groupname;
	}

	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}

	public long getPendingnumber() {
		return pendingnumber;
	}

	public void setPendingnumber(long pendingnumber) {
		this.pendingnumber = pendingnumber;
	}

	public long getCompltednumber() {
		return compltednumber;
	}

	public void setCompltednumber(long compltednumber) {
		this.compltednumber = compltednumber;
	}

	public double getCompltedratio() {
		return compltedratio;
	}

	public void setCompltedratio(double compltedratio) {
		this.compltedratio = compltedratio;
	}

}
