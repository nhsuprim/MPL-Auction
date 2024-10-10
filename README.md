Requirements for Cricket Auction App
Overview:
This app will be a Cricket Auction Management System built using Express.js, Prisma, and MongoDB. It allows an admin to register captains, and players can register themselves. The auction system presents players one by one, giving captains the ability to either skip or buy players, with unsold players staying in the auction list. Players can also view profiles of other players, captains, and teams, and monitor their auction status.

Functional Requirements:
1. User Management
User Roles:
SUPERADMIN: Has overall system control.
ADMIN: Manages captain registrations and auction oversight.
CAPTAIN: Can buy players during auctions, view teams, and manage team details.
PLAYER: Registers themselves for the auction and can view their auction status.
User Authentication:
Each user will have unique email-based authentication.
Admin and captain registrations will be managed through admin actions.
Players can self-register and update their profiles.
2. Admin Features
Register Captains:
Admins can create and assign captains to teams.
Each captain will have a team automatically created with a predefined balance to spend during the auction.
Manage Auction:
Admins have control over the auction, where they can monitor player bids and oversee the system's health.
Ability to edit player or captain details (e.g., update contact information).
3. Captain Features
View Players:
Captains can view a list of available players in the auction.
They can access detailed player profiles (e.g., name, skills, auction status).
Auction Participation:
In each auction round, a player is displayed one at a time.
Captains have two options:
Buy: The player is assigned to the captain's team, and the player's cost is deducted from the captain's remaining balance.
Skip: The player remains unsold and is kept in the auction pool for later rounds.
Captains can view their team at the end of the auction, including total player costs and remaining balance.
4. Player Features
Self-Registration:
Players can register themselves by providing basic details such as name, email, age, skills, and contact information.
Profile Management:
Players can edit their profiles and upload images (e.g., player photos, skill showcase).
Auction Status:
Players can view their auction status (available or sold) after the auction.
Players can also see the captain who bought them (if sold) and view their assigned team.
5. Team Management
Team Details:
Captains can manage their team, viewing details such as player names, costs, and skills.
Teams will have a starting balance that is adjusted as players are bought during the auction.
At the end of the auction, captains can view a summary of their team, including the total number of players and remaining balance.
Player Team Assignment:
When a captain buys a player, that player is automatically assigned to the captain's team.
Unsold players will not be part of any team and will remain available for future auctions.
6. Auction Module
Auction Process:
The auction will proceed in rounds, where a list of players is displayed one by one.
Unsold players will stay in the auction list and reappear until sold or the auction ends.
Bid Handling:
Captains can select a player and deduct the player's cost from their team's balance.
If the captain skips the player, they remain in the auction list.
Player Status:
Players will have an auctionStatus that can either be available (unsold) or sold.
7. Viewing Profiles
Player Profiles:
Players can view profiles of other players, including their name, age, skill level, and auction status.
Captain and Team Profiles:
Players and captains can view captain profiles and the list of players assigned to specific teams.
Captains can view auction details for each player in their team, including auction price and contact details.
Non-Functional Requirements:
1. Security
Ensure secure handling of user passwords using hashing (e.g., bcrypt).
Role-based access control to restrict actions based on user roles (e.g., only ADMIN can register captains).
2. Performance
Efficient handling of auctions and real-time player updates to avoid delays during bidding rounds.
3. Data Consistency
Ensure the integrity of captain-player relations during auctions.
Consistent database schema with proper relations between User, Captain, Player, and Team models using Prisma.
4. Scalability
Design the system to handle multiple auctions simultaneously if required in the future.
5. Error Handling
Implement proper error handling for user actions (e.g., auction failures, invalid bids, or player registration issues).
6. Responsive Design
Create a responsive user interface to allow easy participation in auctions and team management on mobile and desktop devices.
Technical Stack
Backend: Express.js
Database: MongoDB (with Prisma ORM)
Authentication: JWT-based user authentication
ORM: Prisma (with MongoDB)
Deployment: Dockerized app, deployable on platforms like Heroku or Railway
