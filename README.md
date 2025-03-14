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

---

## **Tasks**

# Task 1: Generate Dummy Records using AI

I have generated 3 sample records from the given column using AI and here's the result:

```
[
    {
        "CompanyReference": "COMP-7803",
        "PolicyNumber": "POL-779835",
        "PartnerRef": "PART-7194",
        "IncidentDate": "2022-06-07",
        "AccidentCircumstances": "Rear-end collision",
        "DamageToVehicle": "Moderate",
        "Pre-Existing_Damage": "None",
        "RegistrationNumber": "REG-1520",
        "MAKE": "Ford",
        "MODEL": "X5",
        "EngineSize": "3.0L",
        "RegistrationDate": "2021-02-21",
        "ThirdPartyInsurer": "XYZ Insurance",
        "ThirdPartyRef": "TP-1677",
        "ThirdPartyClient": "John Doe",
        "ThirdPartyRegistration": "TPREG-6434",
        "Driver_FirstName": "Michael",
        "Driver_LastName": "Smith",
        "Driver_TitleLU": "Mr.",
        "Driver_Address_AddressLine1": "123 Main St",
        "Driver_Address_Postcode": "AB12 3CD",
        "Driver_Contact_HomeTelephone": "01234567890",
        "Driver_Contact_WorkTelephone": "09876543210",
        "Driver_Contact_MobileTelephone": "07123456789",
        "Driver_Contact_Fax": "01234567891",
        "Driver_Contact_Email": "michael.smith@example.com",
        "RepairerName": "AutoFix Garage",
        "Repairer_Contact_Telephone": "01234567892",
        "Repairer_Contact_MobileTelephone": "07123456780",
        "Repairer_Contact_Email": "repair@example.com",
        "BookingInDate": "2023-08-06",
        "RepairCompletionDate": "2022-12-22",
        "Status": "Pending",
        "VehicleStatus": "Total Loss",
        "Repair Cost Net": 2447.88,
        "Repair Cost Vat": 464.99,
        "Repair Cost Gross": 3502.68
    },
    {
        "CompanyReference": "COMP-5564",
        "PolicyNumber": "POL-140420",
        "PartnerRef": "PART-2761",
        "IncidentDate": "2024-08-28",
        "AccidentCircumstances": "Rear-end collision",
        "DamageToVehicle": "Moderate",
        "Pre-Existing_Damage": "None",
        "RegistrationNumber": "REG-8026",
        "MAKE": "Toyota",
        "MODEL": "Corolla",
        "EngineSize": "1.5L",
        "RegistrationDate": "2015-10-20",
        "ThirdPartyInsurer": "XYZ Insurance",
        "ThirdPartyRef": "TP-9230",
        "ThirdPartyClient": "John Doe",
        "ThirdPartyRegistration": "TPREG-7857",
        "Driver_FirstName": "Michael",
        "Driver_LastName": "Smith",
        "Driver_TitleLU": "Mr.",
        "Driver_Address_AddressLine1": "123 Main St",
        "Driver_Address_Postcode": "AB12 3CD",
        "Driver_Contact_HomeTelephone": "01234567890",
        "Driver_Contact_WorkTelephone": "09876543210",
        "Driver_Contact_MobileTelephone": "07123456789",
        "Driver_Contact_Fax": "01234567891",
        "Driver_Contact_Email": "michael.smith@example.com",
        "RepairerName": "AutoFix Garage",
        "Repairer_Contact_Telephone": "01234567892",
        "Repairer_Contact_MobileTelephone": "07123456780",
        "Repairer_Contact_Email": "repair@example.com",
        "BookingInDate": "2023-05-20",
        "RepairCompletionDate": "2023-11-24",
        "Status": "Completed",
        "VehicleStatus": "Repairable",
        "Repair Cost Net": 2033.98,
        "Repair Cost Vat": 495.29,
        "Repair Cost Gross": 2498.49
    },
    {
        "CompanyReference": "COMP-7887",
        "PolicyNumber": "POL-951064",
        "PartnerRef": "PART-3486",
        "IncidentDate": "2023-11-06",
        "AccidentCircumstances": "Rear-end collision",
        "DamageToVehicle": "Moderate",
        "Pre-Existing_Damage": "None",
        "RegistrationNumber": "REG-3431",
        "MAKE": "Ford",
        "MODEL": "Civic",
        "EngineSize": "3.0L",
        "RegistrationDate": "2019-02-01",
        "ThirdPartyInsurer": "XYZ Insurance",
        "ThirdPartyRef": "TP-7763",
        "ThirdPartyClient": "John Doe",
        "ThirdPartyRegistration": "TPREG-5078",
        "Driver_FirstName": "Michael",
        "Driver_LastName": "Smith",
        "Driver_TitleLU": "Mr.",
        "Driver_Address_AddressLine1": "123 Main St",
        "Driver_Address_Postcode": "AB12 3CD",
        "Driver_Contact_HomeTelephone": "01234567890",
        "Driver_Contact_WorkTelephone": "09876543210",
        "Driver_Contact_MobileTelephone": "07123456789",
        "Driver_Contact_Fax": "01234567891",
        "Driver_Contact_Email": "michael.smith@example.com",
        "RepairerName": "AutoFix Garage",
        "Repairer_Contact_Telephone": "01234567892",
        "Repairer_Contact_MobileTelephone": "07123456780",
        "Repairer_Contact_Email": "repair@example.com",
        "BookingInDate": "2024-09-30",
        "RepairCompletionDate": "2022-08-12",
        "Status": "Completed",
        "VehicleStatus": "Total Loss",
        "Repair Cost Net": 3907.38,
        "Repair Cost Vat": 142.44,
        "Repair Cost Gross": 4957.99
    }
]

```

# Task 2: Design Mongo DB Collection - How do you ensure your collection is efficient

Here is the MongoDB schema design:

```

const claimSchema = new mongoose.Schema({
    companyReference: { type: String, required: true },
    policyNumber: { type: String, required: true },
    partnerRef: { type: String, required: true },
    incidentDate: { type: Date, required: true },
    accidentCircumstances: { type: String, required: true },
    damageToVehicle: { type: String, required: true },
    preExistingDamage: { type: String },
    registrationNumber: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    engineSize: { type: Number },
    registrationDate: { type: Date },
    thirdPartyInsurer: { type: String },
    thirdPartyRef: { type: String },
    thirdPartyClient: { type: String },
    thirdPartyRegistration: { type: String },
    driver: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        title: { type: String },
        address: {
            addressLine1: { type: String },
            postcode: { type: String }
        },
        contact: {
            homeTelephone: { type: String },
            workTelephone: { type: String },
            mobileTelephone: { type: String },
            fax: { type: String },
            email: { type: String }
        }
    },
    repairer: {
        name: { type: String },
        contact: {
            telephone: { type: String },
            mobileTelephone: { type: String },
            email: { type: String },
            fax: { type: String }
        }
    },
    bookingInDate: { type: Date },
    estimateReceivedDate: { type: Date },
    authorisedDate: { type: Date },
    authorisedAmounts: { type: Number },
    supplementaryAuthorisedDate: { type: Date },
    supplementaryAuthorisedAmounts: { type: Number },
    calculatedRepairDays: { type: Number },
    estimatedCompletionDate: { type: Date },
    revisedEstimatedCompletionDate: { type: Date },
    repairCompletionDate: { type: Date },
    invoiceReceivedDate: { type: Date },
    invoiceApprovedDate: { type: Date },
    status: { type: String, required: true, enum: ['Pending', 'Approved', 'Rejected', 'Completed'] },
    repairCost: {
        net: { type: Number },
        vat: { type: Number },
        gross: { type: Number }
    },
    totalLossFee: {
        net: { type: Number },
        vat: { type: Number },
        gross: { type: Number }
    },
    storageAndRecovery: {
        net: { type: Number },
        vat: { type: Number },
        gross: { type: Number }
    },
    notificationDate: { type: Date },
    fault: { type: Boolean },
    authorisedPartsAmount: { type: Number },
    authorisedLabourAmount: { type: Number },
    authorisedPaintAndMaterialsAmount: { type: Number },
    authorisedSpecialistAmount: { type: Number }
});


```

**How to ensure collection efficiency?**

1. **Proper Indexing**

   - Indexing fields like policyNumber, registrationNumber, status, and incidentDate improves query performance.
   - Example:

   ```js
   claimSchema.index({ policyNumber: 1 });
   claimSchema.index({ registrationNumber: 1 });
   ```

2. **Schema Normalization & Embedding**

   - Embedded objects like driver and repairer avoid unnecessary joins and improve performance.
   - Avoid deep nesting (limit embedding to 2-3 levels).

3. **Optimized Data Types**

   - Use Number for numerical fields instead of String.
   - Use Boolean instead of String for fault to save space.

4. **Field Selection for Queries**

   - Always fetch only required fields using **.select()**.
   - Example:

   ```
   Claim.find({ status: 'Pending' }).select('policyNumber incidentDate status');
   ```

5. **TTL (Time-To-Live) Index for Old Records**

   - Automatically delete old claims after a certain period.
   - Example (Expire after 2 years):

   ```
   claimSchema.index({ notificationDate: 1 }, { expireAfterSeconds: 63072000 });
   ```

6. **Data Validation with Mongoose**

   - Required fields prevent incomplete records.
   - Enum validation for **status** ensures only valid values.

7. **Use Aggregations for Analytics** - Aggregation pipelines optimize bulk operations like calculating total repair costs. - Example:

   ```
   Claim.aggregate([
   { $match: { status: 'Completed' } },
   { $group: { _id: null, totalRepairCost: { $sum: "$repairCost.gross" } } }
   ]);
   ```

With these optimizations, the collection will remain efficient in both storage and query performance.

---

## Task 3: Create API in Node.JS - Write plantuml and Tell me the steps you took to write clean code, and code documentation

We'll build a REST API in Node.js with Express for managing claims. This API will have the following endpoints:

1. Create a Claim → POST /claims
2. Get All Claims → GET /claims
3. Get a Single Claim → GET /claims/:id
4. Update a Claim → PUT /claims/:id
5. Delete a Claim → DELETE /claims/:id

# API Design - PlantUML Diagram

```
@startuml
title Claim Management API

actor User
participant "Express Server" as Server
database "MongoDB" as DB

User -> Server: POST /claims (Create a claim)
Server -> DB: Insert claim data
Server -> User: 201 Created

User -> Server: GET /claims (Fetch all claims)
Server -> DB: Retrieve claims
Server -> User: 200 OK (List of claims)

User -> Server: GET /claims/{id} (Fetch claim by ID)
Server -> DB: Retrieve claim
Server -> User: 200 OK (Claim data)

User -> Server: PUT /claims/{id} (Update claim)
Server -> DB: Update claim data
Server -> User: 200 OK (Updated claim)

User -> Server: DELETE /claims/{id} (Delete claim)
Server -> DB: Remove claim record
Server -> User: 200 OK (Deleted)

@enduml
```

# Steps used for Writing Clean Code & Documentation

1. Use MVC Architecture: Separate concerns into models, controllers, and routes.
2. Follow RESTful API Conventions: Use proper HTTP methods (GET, POST, PUT, DELETE).
3. Data Validation: Use express-validator to validate request data.
4. Error Handling: Implement a global error handler.
5. JSDoc for API Documentation: Write proper documentation for each function.

# JSDoc Documentation

To generate documentation from JSDoc comments, install jsdoc and run:

```
npm install -g jsdoc
jsdoc -r .
```
