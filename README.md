# qrcodelogin

## How to use qrcodelogin

Browse to the login page of the site you want to login to.

Press the addons action-button.

Allow the use of your camera.

Present a qrcode to the camera.
The text content of the qrcode needs to be ["username","password"].

The addon reads the qrcode using the camera (getUserMedia) and inserts username and password into the first form that contains a password field. This form is then submitted.
If the site does not do any fancy stuff to prevent this you are then logged-in.


