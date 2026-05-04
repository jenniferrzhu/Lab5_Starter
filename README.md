# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

**Members**: Jennifer Zhu

## Links
- Expose: https://jenniferrzhu.github.io/Lab5_Starter/expose.html
- Explore: https://jenniferrzhu.github.io/Lab5_Starter/explore.html 

## Check Your Understanding
1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, because sending a message isn't a single, isolated function. It’s a complex system that involves multiple components and interactions.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, because the "max message length" is a single function that checks if the length of a message is 80 characters or less, so it doesn't involve other components and interactions. Therefore, this feature can be tested in isolation.