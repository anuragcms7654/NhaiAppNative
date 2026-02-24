# CSRF (Cross-Site Request Forgery) is an attack where:
-- A malicious website tricks a logged-in user into performing unwanted actions on another trusted website.

# How to prevent it!!!
1️⃣ CSRF Token (Synchronizer Token Pattern)

# Most common solution.
How it works:

i. Server generates random token.
ii. Token sent to client.
iii. Client must send token in request body or header.
iv. Server validates token