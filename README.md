
# Design Patterns and Smart Office Facility Management System

## Table of Contents
- [Assignment 1: Design Patterns](#assignment-1-design-patterns)
  - [Introduction](#introduction)
  - [Design Patterns Covered](#design-patterns-covered)
  - [Folder Structure](#folder-structure)
  - [Setup and Run](#setup-and-run)
- [Assignment 2: Smart Office Facility Management System](#assignment-2-smart-office-facility-management-system)
  - [Introduction](#introduction-1)
  - [Features](#features)
  - [Design Patterns Used](#design-patterns-used)
  - [Code Organization](#code-organization)
  - [Installation and Setup](#installation-and-setup)
  - [How to Use](#how-to-use)
  - [Design Principles and Patterns](#design-principles-and-patterns)



---

## Assignment 1: Design Patterns

### Introduction

This assignment demonstrates the implementation of various software design patterns using TypeScript. The aim was to creatively implement behavioral, creational, and structural design patterns, with two unique use cases for each category.

### Design Patterns Covered

- **Behavioral Design Patterns**:
  1. **Observer Pattern**: A news subscription service.
  2. **Strategy Pattern**: A text formatter that applies different formatting strategies.

- **Creational Design Patterns**:
  1. **Builder Pattern**: Building a computer with different configurations.
  2. **Factory Method Pattern**: Creating different types of vehicles.

- **Structural Design Patterns**:
  1. **Decorator Pattern**: Adding features to a notification system.
  2. **Adapter Pattern**: Integrating a third-party payment gateway.

### Folder Structure

The project is organized into multiple directories, each representing a different design pattern:

```
DesignPatterns/
├── Behavioral/
│   ├── ObserverPattern/
│   │   ├── Observer.ts
│   │   ├── Subject.ts
│   │   ├── NewsChannel.ts
│   │   ├── User.ts
│   │   └── index.ts
│   └── StrategyPattern/
│       ├── TextFormatter.ts
│       ├── UpperCaseFormatter.ts
│       ├── LowerCaseFormatter.ts
│       ├── TitleCaseFormatter.ts
│       ├── TextEditor.ts
│       └── index.ts
├── Creational/
│   ├── BuilderPattern/
│   │   ├── Computer.ts
│   │   ├── ComputerBuilder.ts
│   │   ├── GamingComputerBuilder.ts
│   │   ├── OfficeComputerBuilder.ts
│   │   ├── Director.ts
│   │   └── index.ts
│   └── FactoryMethodPattern/
│       ├── Vehicle.ts
│       ├── Car.ts
│       ├── Bike.ts
│       ├── VehicleFactory.ts
│       ├── CarFactory.ts
│       ├── BikeFactory.ts
│       └── index.ts
└── Structural/
    ├── DecoratorPattern/
    │   ├── Notification.ts
    │   ├── BasicNotification.ts
    │   ├── NotificationDecorator.ts
    │   ├── EmailNotification.ts
    │   ├── SMSNotification.ts
    │   └── index.ts
    └── AdapterPattern/
        ├── PaymentProcessor.ts
        ├── ThirdPartyPaymentGateway.ts
        ├── PaymentGatewayAdapter.ts
        └── index.ts
```

### Setup and Run

#### Prerequisites

- **Node.js** (>= 12.x)
- **npm** (>= 6.x)

#### Setup Steps

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd DesignPatterns
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run Individual Patterns**:
   - Navigate to the pattern directory and run its corresponding `index.ts` file using `ts-node`. For example, to run the Observer Pattern:
     ```bash
     npx ts-node Behavioral/ObserverPattern/index.ts
     ```

### Design Patterns Overview

- **Observer Pattern**: Implements a publish-subscribe mechanism where users can subscribe to a news channel and be notified of new articles.
- **Strategy Pattern**: Demonstrates a text formatting strategy where the formatting logic can be swapped at runtime.
- **Builder Pattern**: Shows how to create complex computer objects with different configurations (e.g., gaming or office setups).
- **Factory Method Pattern**: Allows the creation of different types of vehicles (car or bike) without specifying their exact classes.
- **Decorator Pattern**: Adds functionalities to a notification system, such as email and SMS notifications.
- **Adapter Pattern**: Adapts a third-party payment gateway to match the application's payment interface.

## Assignment 2: Smart Office Facility Management System

### Introduction

The Smart Office Facility Management System is a console-based application to manage various aspects of a smart office. This system includes conference room booking, occupancy detection, and automation of air conditioning and lighting based on room occupancy. It focuses on using design patterns and best practices to ensure maintainable and scalable code.

### Features

- Configure office facility with the number of meeting rooms.
- Book and cancel bookings for rooms.
- Detect room occupancy and release unoccupied bookings after 5 minutes.
- Control air conditioning and lighting based on occupancy.

### Design Patterns Used

- **Singleton Pattern** for `OfficeConfig` and `RoomBookingSystem` to ensure only one instance is used.
- **Observer Pattern** to allow `LightSystem`, `AirConditioner`, and `OccupancySensor` to react to changes in room occupancy.
- **Command Pattern** to encapsulate the commands for booking and cancelling rooms.

### Code Organization

The project is organized into the following directories:

```
SmartOffice/
├── commands/
│   ├── BookRoomCommand.ts
│   ├── CancelBookingCommand.ts
│   ├── Command.ts
│   └── index.ts
├── config/
│   └── OfficeConfig.ts
├── observers/
│   ├── Observer.ts
│   ├── AirConditioner.ts
│   ├── LightSystem.ts
│   ├── OccupancySensor.ts
│   └── index.ts
├── rooms/
│   ├── MeetingRoom.ts
│   ├── RoomBookingSystem.ts
│   └── index.ts
├── main.ts
└── package.json
```

### Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd SmartOffice
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npx ts-node main.ts
   ```

### How to Use

The system provides a console-based interface. Available options:

- **List Rooms**: Shows room availability and booking status.
- **Book Room**: Books a room for a specified time.
- **Cancel Booking**: Cancels an existing booking.
- **Add Occupant**: Adds occupants to a room.
- **Vacate Room**: Marks the room as unoccupied.
- **Set Room Capacity**: Adjusts the room's maximum capacity.

### Design Principles and Patterns

1. **Singleton Pattern**:
   - Used for `OfficeConfig` and `RoomBookingSystem` to ensure global state consistency.
2. **Observer Pattern**:
   - Used to control `LightSystem`, `AirConditioner`, and `OccupancySensor` based on room occupancy.
3. **Command Pattern**:
   - Commands like booking and cancellation are encapsulated, allowing flexible addition and modification of operations.

### Future Improvements

1. **User Authentication**: Restrict access to booking and configuration.
2. **Notifications**: Email/SMS alerts for users about booking status.
3. **GUI Development**: A web or mobile UI for a better user experience.
4. **Usage Statistics**: Store and summarize room usage data.

### Example Run

```plaintext
Smart Office Management System
1. List Rooms
2. Book Room
3. Cancel Booking
4. Add Occupant to Room
5. Vacate Room
6. Set Room Capacity
7. Exit
Enter your choice: 1

Room 1 - Available
Room 2 - Available
Room 3 - Available
Enter your choice: 2
Enter Room ID, Start Time (HH:MM), Duration (minutes): 1 09:00 60
Room 1 booked from 09:00 for 60 minutes.
Enter your choice: 4
Enter Room ID and Occupant Count: 1 3
Room 1 is now occupied by 3 persons. AC and lights turned on.
Enter your choice: 5
Enter Room ID to Vacate: 1
Room 1 is now unoccupied. AC and lights turned off.
```
---
