from flask import Flask
from flask import render_template

START_CMD = 'sudo /etc/init.d/motion start'
STOP_CMD = 'sudo /etc/init.d/motion stop'

app = Flask(__name__)


@app.route('/start')
def start():
    return '/start'


@app.route('/stop')
def stop():
    return '/stop'


@app.route('/')
def main():
    return render_template('index.html')
