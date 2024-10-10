🏏 Cricket Auction App
The Cricket Auction App is an online platform for managing a cricket auction system. It allows Admins to register Captains, Players to register themselves, and facilitates an auction where Captains can buy or skip players. Unsold players remain available for future rounds. The app ensures efficient team formation, real-time auction management, and provides user-friendly features for captains and players to view auction results and profiles.

📋 Features
🧑‍💻 User Management
User Roles:
SUPERADMIN: Overall system management.
ADMIN: Registers Captains and manages the auction process.
CAPTAIN: Participates in auctions and forms teams.
PLAYER: Registers for auctions and can view auction status.
Authentication:
Email-based authentication for all users.
Players can self-register, while Admins register Captains.
👨‍⚖️ Admin Features
Register Captains:

Admins can register captains and assign them to teams.
Each team will have a starting balance to buy players in the auction.
Auction Management:

Admins can oversee the auction process, monitor bidding, and manage captain or player details.
🏏 Captain Features
Auction Participation:

Captains can view available players during the auction and choose to either:
Buy: Add the player to their team and deduct the player cost from the team's balance.
Skip: Leave the player unsold, allowing them to remain available for future rounds.
View Team:

Captains can view their team members, including player details, cost, and remaining balance.
After the auction, captains can see a final summary of their teams.
👨‍🎤 Player Features
Self-Registration:

Players can register themselves by providing personal information such as name, age, skill level, and contact information.
Profile Management:

Players can edit their profile and upload player images.
Auction Status:

Players can check whether they are available or sold in the auction.
Players can see which captain bought them and view the team they belong to (if sold).
⚙️ Auction System
Auction Rounds:

Players are presented one by one to captains in rounds.
Captains can either buy or skip players.
Unsold players remain in the auction list and are available in later rounds.
Real-Time Updates:

The auction system provides real-time updates, reflecting player status (available or sold) and team assignments instantly.
🛡️ Team Management
Team Formation:
Teams are automatically created when a captain registers.
Captains can view their teams and manage player details.
Budgeting:
Each captain starts with a predefined balance.
Player purchases reduce the available balance, ensuring teams stay within the budget.
🔍 Player Profile & Auction Viewing
Player Profiles:

Players and captains can view detailed player profiles, including name, age, skills, and auction status.
Team & Captain Profiles:

Players can see which team they belong to and who their captain is.
Teams and captains are publicly viewable, allowing players to check other teams and auction outcomes.
📊 Database Schema
The application uses Prisma ORM with MongoDB, and the database structure reflects relationships between Users, Players, Captains, and Teams.

User: Stores user details such as email, password, role, and relations to Admin, Captain, or Player models.
Admin: Contains admin information and controls registration of captains.
Captain: Stores captain details and team information.
Player: Holds player details such as name, age, skills, auction status, and assigned team.
Team: Represents a captain’s team and lists the players purchased during the auction.
🛠️ Tech Stack
Backend: Express.js
Database: MongoDB (with Prisma ORM)
ORM: Prisma
Authentication: JWT-based authentication for all user roles.
Deployment: Dockerized application with options for hosting on platforms like Heroku or Railway.
