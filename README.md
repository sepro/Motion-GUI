# Motion-GUI
Web based GUI for motion (linux camera surveillance package)

## Preparations

You will need to install a few packages and configure your system to use this software. 

### Install and Configure Motion

    sudo apt-get install motion
    
    sudo vim /etc/motion/motion.conf
    
Make sure the stream is available from the network

    # Restrict stream connections to localhost only (default: on)
    stream_localhost off

### Set permissions for www-data to start the service

    sudo visudo -f /etc/sudoers

add the line below and save.    
    
    www-data ALL = (root) NOPASSWD: /etc/init.d/motion
    
This will allow the user www-data (used by the app) to start and stop without a password.

## Installation

clone the repo

    git clone https://github.com/sepro/Motion-GUI

setup virtualenv and install requirements

    cd Motion-GUI
    virtualenv --python=python3 venv
    source env/bin/activate
    pip install -r requirements.txt
    
