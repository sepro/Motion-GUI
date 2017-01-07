# Motion-GUI
Web based GUI for motion (linux camera surveillance package)

## Preparations

You will need to install a few packages and configure your system to use this software. 

### Install and Configure Motion

    sudo apt-get install motion
    
    sudo vim /etc/motion/motion.conf
    
Make sure the control panel and stream are available from the network

    # Restrict stream connections to localhost only (default: on)
    stream_localhost off
    # Restrict control connections to localhost only (default: on)
    webcontrol_localhost off
    
*NOTE: In my case the webcontrol still couldn't be accessed so I used lighttpd to create a reverse proxy to it*

