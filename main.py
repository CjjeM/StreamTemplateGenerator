import json
from flask import Flask, render_template, request

with open('static/easy-font.json') as f:
    json_content = json.load(f)

fontsValue = [font for font in json_content]
fontsDisplay = [font.replace('-', ' ').capitalize() for font in json_content]

app = Flask(__name__)

@app.route('/', methods = ['GET'])
def main_app():
    return render_template("main.html", fontsDisplay=fontsDisplay, fontsValue=fontsValue)

@app.route('/preview', methods = ['POST'])
def preview():
    output = request.form.to_dict()
    return render_template("preview.html", data=output)


if __name__ == '__main__':    
    app.run(host='0.0.0.0',port=8080)