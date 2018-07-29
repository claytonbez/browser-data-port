## browser-data-port
This was an experiment that turned out to work wonderfully. 

The problem: Accessing low level operations at endpoint where you use a broswer to devliver the platform.

The Fix: Make two seperate connections via socket.io to the remote server where the page is being hosted and to another socket.io server running on the local machine. 

The browser acts as a port between the two servers and basically enables a NodeJS developer to now send commands that can affect the low level operations of the underlying OS on the user end.

### Installation

Run `npm install` in the local and remote directories seperately. Launch the servers using `npm start`. 

### How to test?

lauch the remote server on one pc on your network. Take the local server and install and run using `npm start` in on a different machine on the same network. From that machine open chrome or firefox and enter http://your_remote_ip:3000.

You will see a textarea that monitors the dataflow from the main server and the local server. 

Both the remote and local servers uses the readline interface from NodeJS core to accept and send data. So go to the localserver and type in some data.

Then go back to where the remote script is running to see the local data you entered on the end users machine now appear there. Coms work both ways. 

Let me know if you are having a hard time with the concept or install