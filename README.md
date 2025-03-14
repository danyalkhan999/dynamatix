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

- [Grid FS Bucket (my custom function)](https://github.com/danyalkhan999/dynamatix)

This challenge pushed me to explore file storage solutions deeply and reinforced the importance of structured problem-solving when third-party solutions are unavailable.
