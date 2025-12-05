package project;

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.stream.Collectors;

public class uber {

	static int crossbooking = 1; // waiting list limit
	static List<uber_passenger_details> bookedList = new ArrayList<>();
	static List<uber_passenger_details> waitingList = new ArrayList<>();
	static List<CabInfo> cabPool = new ArrayList<>();

	public static void main(String[] args) throws InterruptedException {
		Scanner sc = new Scanner(System.in);
		String input = "YES";

		for (int i = 1; i <= 5; i++) {
			cab type = i <= 2 ? cab.CabEconomy : cab.CabPremium;
			cabPool.add(new CabInfo(i, type, 'A'));
		}

		while (input.equalsIgnoreCase("YES")) {
			System.out.println("\n---- UBER CAB SYSTEM ----");
			System.out.println("1. Book Cab");
			System.out.println("2. Cancel Booking");
			System.out.println("3. Current Status");
			System.out.println("4. View Passenger Details");
			System.out.println("5. Exit");
			System.out.print("Enter your choice: ");
			int choice = sc.nextInt();
			sc.nextLine();

			switch (choice) {
			case 1 -> bookCab(sc);
			case 2 -> cancelBooking(sc);
			case 3 -> showStatus();
			case 4 -> viewPassenger(sc);
			case 5 -> {
				System.out.println("Thank you for using Uber!");
				return;
			}
			default -> System.out.println("Invalid choice!");
			}

			System.out.print("\nDo you want to continue (YES/NO)? ");
			input = sc.nextLine();
		}
	}

	// ---------------- Book Cab ----------------
	private static void bookCab(Scanner sc) {
		System.out.print("Enter Passenger ID: ");
		int id = sc.nextInt();
		sc.nextLine();

		System.out.print("Enter Passenger Name: ");
		String name = sc.nextLine();

		System.out.print("Enter Cab Type (CabEconomy/CabPremium): ");
		String cabType = sc.nextLine();

		System.out.print("Enter Pickup Location (A-F): ");
		char start = sc.next().toUpperCase().charAt(0);

		System.out.print("Enter Drop Location (A-F): ");
		char drop = sc.next().toUpperCase().charAt(0);
		sc.nextLine();

		if (start == drop) {
			System.out.println("Pickup and drop location cannot be the same!");
			return;
		}

		// Distance-Based Fare
		int distance = Math.abs(drop - start) * 15;
		int rate = cabType.equals("CabEconomy") ? 5 : 8;
		int fare = distance * rate;

		System.out.println("Distance: " + distance + " km");
		System.out.println("Travel Fare: Rs " + fare);
		System.out.println("Processing Payment... Done!");

		uber_passenger_details passenger = new uber_passenger_details(id, name, cab.valueOf(cabType));
		passenger.setDistance(distance);
		passenger.setFare(fare);

		allocateCab(passenger, start, drop);

		if (passenger.getStatus().equals("BOOKED")) {
			bookedList.add(passenger);
			System.out.println("Cab Booked Successfully for " + name + "!");
			System.out.println("Pickup Time: " + passenger.getPickupTime());
			System.out.println("Drop Time: " + passenger.getDropTime());
		} else if (waitingList.size() < crossbooking) {
			waitingList.add(passenger);
			passenger.setStatus("WAITING");
			System.out.println("All cabs full. You are added to waiting list.");
		} else {
			passenger.setStatus("REJECTED");
			System.out.println("Sorry, no cabs or waiting slots available.");
		}
	}

	// ---------------- Allocate Cab ----------------
	private static void allocateCab(uber_passenger_details passenger, char start, char drop) {
		// Step 1: Free cabs at pickup
		List<CabInfo> freeCabs = cabPool.stream().filter(
				c -> c.isAvailable() && c.getType() == passenger.getPerfCab() && c.getCurrentLocation() == start)
				.sorted((c1, c2) -> c1.getTotalEarnings() - c2.getTotalEarnings()).toList();

		if (!freeCabs.isEmpty()) {
			bookCabToPassenger(passenger, freeCabs.get(0), drop);
			return;
		}

		// Step 2: Nearest free cab
		List<CabInfo> availableCabs = cabPool.stream()
				.filter(c -> c.isAvailable() && c.getType() == passenger.getPerfCab()).sorted((c1, c2) -> {
					int d1 = Math.abs(c1.getCurrentLocation() - start);
					int d2 = Math.abs(c2.getCurrentLocation() - start);
					if (d1 != d2)
						return d1 - d2;
					return c1.getTotalEarnings() - c2.getTotalEarnings();
				}).toList();

		if (!availableCabs.isEmpty()) {
			bookCabToPassenger(passenger, availableCabs.get(0), drop);
			return;
		}

		// Step 3: No cab available
		passenger.setStatus("REJECTED");
		System.out.println("Sorry, no cabs available for passenger: " + passenger.getName());
	}

	private static void bookCabToPassenger(uber_passenger_details passenger, CabInfo cab, char drop) {
		passenger.setAllocatedcab(cab.getType());
		passenger.setStatus("BOOKED");
		cab.setAvailable(false);
		cab.addEarnings(passenger.getFare());
		cab.setCurrentLocation(drop); // update cab location to drop

		// Pickup time
		LocalTime pickupTime = LocalTime.now();
		passenger.setPickupTime(pickupTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));

		// Drop time = pickup time + 1 hour
		LocalTime dropTime = pickupTime.plusHours(1);
		passenger.setDropTime(dropTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
	}

	// ---------------- Cancel Booking ----------------
	private static void cancelBooking(Scanner sc) {
		System.out.print("Enter Passenger ID to cancel: ");
		int id = sc.nextInt();

		List<uber_passenger_details> found = bookedList.stream().filter(p -> p.getPassid() == id)
				.collect(Collectors.toList());

		if (!found.isEmpty()) {
			uber_passenger_details cancelled = found.get(0);
			bookedList.remove(cancelled);
			cancelled.setStatus("CANCELLED");

			// Free allocated cab
			cabPool.stream().filter(c -> c.getType() == cancelled.getAllocatedcab() && !c.isAvailable()).findFirst()
					.ifPresent(c -> c.setAvailable(true));

			System.out.println("Booking cancelled for passenger: " + cancelled.getName());

			// Allocate waiting passenger if any
			if (!waitingList.isEmpty()) {
				uber_passenger_details next = waitingList.remove(0);
				allocateCab(next, 'A', 'F'); // default locations for demo
				if (next.getStatus().equals("BOOKED")) {
					bookedList.add(next);
					System.out.println("Waiting passenger " + next.getName() + " is now BOOKED!");
				}
			}

		} else {
			System.out.println("No active booking found for Passenger ID: " + id);
		}
	}

	// ---------------- Show Status ----------------
	private static void showStatus() {
		System.out.println("\n--- CURRENT STATUS ---");
		System.out.println("Total Cabs: " + cabPool.size());
		long availableEconomy = cabPool.stream().filter(c -> c.isAvailable() && c.getType() == cab.CabEconomy).count();
		long availablePremium = cabPool.stream().filter(c -> c.isAvailable() && c.getType() == cab.CabPremium).count();
		System.out.println("Available Economy: " + availableEconomy);
		System.out.println("Available Premium: " + availablePremium);
		System.out.println("Waiting List: " + waitingList.size());
	}

	// ---------------- View Passenger Details ----------------
	private static void viewPassenger(Scanner sc) {
		System.out.print("Enter Passenger ID: ");
		int id = sc.nextInt();

		Optional<uber_passenger_details> booked = bookedList.stream().filter(p -> p.getPassid() == id).findFirst();
		Optional<uber_passenger_details> waiting = waitingList.stream().filter(p -> p.getPassid() == id).findFirst();

		if (booked.isPresent()) {
			System.out.println(booked.get());
		} else if (waiting.isPresent()) {
			System.out.println(waiting.get());
		} else {
			System.out.println("No record found for this passenger ID.");
		}
	}
}
