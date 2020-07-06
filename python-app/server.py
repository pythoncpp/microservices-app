from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World from python'


app.run(port=4000, host='0.0.0.0')
