-- There are 3 types of xss

1️⃣ Stored XSS (Most Dangerous)
2️⃣ Reflected XSS
3️⃣ DOM-based XSS

# How to prevent it?

1️⃣ Output Escaping (MOST IMPORTANT)
-- Modern frameworks auto-escape:
    React
    Angular
    Vue
 but avoid using dangerouslySetInnerHTML

2️⃣ Sanitize User Input that came from client side
DOMPurify
sanitize-html
are some popular libraries

3️⃣ Use HTTP-only Cookies (Very Important)

4️⃣ Content Security Policy (CSP)
-- Content-Security-Policy: default-src 'self';

6️⃣ Validate and Encode on Backend
