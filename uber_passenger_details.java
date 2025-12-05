package project;

enum cab {
	CabEconomy, CabPremium
}

public class uber_passenger_details {

	private Integer passid;
	private String name;
	private cab perfCab;
	private cab allocatedCab;
	private String status;
	private int distance;
	private int fare;
	private String pickupTime;
	private String dropTime;

	public uber_passenger_details(Integer passid, String name, cab perfCab) {
		this.passid = passid;
		this.name = name;
		this.perfCab = perfCab;
		this.status = "PENDING";
	}

	public Integer getPassid() {
		return passid;
	}

	public String getName() {
		return name;
	}

	public cab getPerfCab() {
		return perfCab;
	}

	public cab getAllocatedcab() {
		return allocatedCab;
	}

	public void setAllocatedcab(cab allocatedCab) {
		this.allocatedCab = allocatedCab;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getDistance() {
		return distance;
	}

	public void setDistance(int distance) {
		this.distance = distance;
	}

	public int getFare() {
		return fare;
	}

	public void setFare(int fare) {
		this.fare = fare;
	}

	public String getPickupTime() {
		return pickupTime;
	}

	public void setPickupTime(String pickupTime) {
		this.pickupTime = pickupTime;
	}

	public String getDropTime() {
		return dropTime;
	}

	public void setDropTime(String dropTime) {
		this.dropTime = dropTime;
	}

	@Override
	public String toString() {
		return "Passenger [ID=" + passid + ", Name=" + name + ", CabType=" + perfCab + ", Allocated=" + allocatedCab
				+ ", Distance=" + distance + " km, Fare=Rs " + fare + ", Status=" + status + ", PickupTime="
				+ pickupTime + ", DropTime=" + dropTime + "]";
	}
}
