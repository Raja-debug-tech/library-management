package project;

public class CabInfo {
	private int cabId;
	private cab type;
	private char currentLocation;
	private int totalEarnings;
	private boolean isAvailable;

	public CabInfo(int cabId, cab type, char currentLocation) {
		this.cabId = cabId;
		this.type = type;
		this.currentLocation = currentLocation;
		this.totalEarnings = 0;
		this.isAvailable = true;
	}

	public int getCabId() {
		return cabId;
	}

	public cab getType() {
		return type;
	}

	public char getCurrentLocation() {
		return currentLocation;
	}

	public void setCurrentLocation(char loc) {
		this.currentLocation = loc;
	}

	public int getTotalEarnings() {
		return totalEarnings;
	}

	public void addEarnings(int fare) {
		this.totalEarnings += fare;
	}

	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean available) {
		this.isAvailable = available;
	}
}
