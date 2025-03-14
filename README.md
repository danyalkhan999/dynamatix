# Node.js Experience & Problem Solving

## Q: Can you describe your experience with Node.js and share an example of a complex project where you overcame significant technical challenges?

I have over a year of experience working with Node.js, primarily using both Express and NestJS frameworks. One of the most complex projects I worked on involved an Angular frontend and a NestJS backend structured around a microservices architecture.

### **Challenge: UAE Pass Authentication Issues**

UAE Pass is an OAuth-based authentication system where users log in using their UAE Pass credentials, receive an OTP on their registered email or phone, and, upon successful verification, obtain an access token along with their user data.

#### **Problems Encountered**

1. If a deleted or unregistered user attempted to log in again using UAE Pass, an error was thrown stating that the user was already active. This happened due to an unresolved session.
2. A conflict arose when a user initially signed up with email-password authentication but later tried to log in via UAE Pass with the same email, causing authentication failures.

#### **Solution Implemented**

- **Database Fix:** Updated the schema to enforce unique email constraints.
- **Data Analysis & Authentication Flow:** Identified a unique key differentiating UAE Pass users from email-password users and routed authentication requests accordingly.
- **Session Management Fix:**
  - Analyzed UAE Pass API documentation and discovered a logout endpoint.
  - Implemented this logout API in both the logout function and account deletion process to clear stale sessions.
- **Extensive Testing:** Covered multiple test cases to ensure a seamless authentication flow.

Through this, I gained hands-on experience with OAuth authentication beyond traditional social logins, improved debugging skills, and reinforced the importance of comprehensive testing.

---

### **Challenge: Upgrading Node.js from v10 to v20 & GridFS Deprecation**

Upgrading our Node.js project from version 10 to 20 introduced breaking changes, particularly in dependencies relying on callbacks. The most significant issue was the deprecation of **GridFS Bucket**, which was used for storing large files in MongoDB by chunking them.

#### **Problems Encountered**

1. Several dependencies no longer supported callbacks and required a migration to Promises/async-await.
2. GridFS Bucket was deprecated, and there was no direct replacement that fit our use case.

#### **Solution Implemented**

- **Dependency Upgrade Strategy:**

  - Reviewed documentation and case studies on major Node.js version upgrades.
  - Migrated callbacks to Promises/async-await.

- **GridFS Alternative Implementation:**

  - After extensive research and discussions, no direct alternative was found.
  - Studied GridFS’s underlying dependencies and wrote a custom function to handle file chunking and retrieval manually.

  - [Grid FS Bucket (my custom function)](https://github.com/danyalkhan999/gridfs-bucket)

This challenge pushed me to explore file storage solutions deeply and reinforced the importance of structured problem-solving when third-party solutions are unavailable.

---

# Node.js Failure Analysis Implementation in Product Development

## Q: How would you implement a failure analysis methodology (such as FMEA) when developing a product?

When developing a product with Node.js, implementing a **Failure Analysis Methodology** (like FMEA – Failure Modes and Effects Analysis) helps identify potential issues early and improve reliability.

## **1. Identify Potential Failure Points**

Breaking the system into key components and analyzing failure scenarios:

- **API Failures** – Server crashes, high response times
- **Database Issues** – Connection failures, slow queries, data inconsistency
- **Authentication Problems** – Invalid sessions, security loopholes
- **Third-Party Service Failures** – OAuth authentication issues, payment gateway downtime

## **2. Evaluate Impact & Severity**

Each failure mode is assessed based on:

- **Severity:** How badly does it impact users? (Minor vs. Critical failure)
- **Frequency:** How often could it happen? (Rare vs. Frequent)
- **Detection:** How easily can it be detected and fixed? (Immediate vs. Hidden issue)

## **3. Prioritize & Plan Fixes**

Failures with **high severity and high frequency** are prioritized. Solutions include:

- **Preventive Measures:** Rate limiting, database indexing, API retries
- **Monitoring & Alerts:** Logging errors, setting up failure alerts
- **Redundancy & Failover:** Backup databases, load balancing, caching mechanisms

## **4. Test & Iterate**

Failure simulations (e.g., service shutdowns, incorrect requests) help verify if fixes work. Based on results, the system is further refined for better resilience.

This approach ensures critical failures are caught and resolved early, leading to a more stable and reliable Node.js application.

# Example: Preventing Downtime in a Real-Time Chat Application

## **Project Overview**

In my previous project i didn't apply FMEA approach to mitigate risks. So I'm taking an example and then try to apply FMEA approach to mitigate risks.
This project was a **real-time chat application** built with **Node.js, Express, and Socket.io**. The app supported private chats, group messaging, and online status updates.

## **Applying the FMEA Approach**

| **Step**                          | **Application in the Chat App**                                                                                                                                                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Identify Failure Points**    | - WebSocket connections dropping frequently. <br> - High memory usage causing server crashes. <br> - Message loss when the server restarts.                                                                                                                   |
| **2. Evaluate Impact & Severity** | - **WebSocket Drops:** Users experience random disconnections. <br> - **High Memory Usage:** Could crash the server, causing downtime. <br> - **Message Loss:** Critical failure as users lose chat history.                                                  |
| **3. Prioritize & Plan Fixes**    | - **WebSocket Drops:** Implemented automatic reconnection and heartbeat pings. <br> - **Memory Issues:** Optimized event listeners and introduced memory monitoring. <br> - **Message Loss:** Used Redis as a temporary store before writing to the database. |
| **4. Test & Iterate**             | - Simulated high traffic to check server performance. <br> - Introduced error logging to track WebSocket disconnections. <br> - Verified Redis buffer storage during server restarts.                                                                         |

## **Outcome**

By following this structured approach, we **prevented random disconnects, reduced server crashes, and ensured message reliability**, making the chat app more stable and user-friendly.
