import shlex, subprocess, json

from flask import Flask
from flask import render_template

START_CMD = 'sudo /etc/init.d/motion start'
STOP_CMD = 'sudo /etc/init.d/motion stop'

app = Flask(__name__)


@app.route('/start')
def start():
    try:
        args = shlex.split(START_CMD)
        subprocess.Popen(args)
    except Exception as e:
        return json.dumps({'message': 'failed to start motion service'})

    return json.dumps({'message': 'started motion service'})


@app.route('/stop')
def stop():
    try:
        args = shlex.split(STOP_CMD)
        subprocess.Popen(args)
    except Exception as e:
        return json.dumps({'message': 'failed to stop motion service'})

    return json.dumps({'message': 'stopped motion service'})


@app.route('/')
def main():
    return render_template('index.html')
