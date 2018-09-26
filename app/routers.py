from flask import request, redirect, render_template, url_for
from app import app
from flask_socketio import SocketIO,send

app.config['SECRET_KEY']='inwen4787@3#@|asops2018'
socket=SocketIO(app)

@app.route('/')
def index():
    return render_template('/home/home.html',title="WebSoft")

@socket.on('message')
def handle_message(msg):
    """ print('received message: ' + msg)"""
    send(msg,broadcast=True)
    
if __name__== '__main__':
    socket.run(app)