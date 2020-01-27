from flask import Flask, render_template, request
import time

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def signal():
	if request.method == 'POST':
		i = 0
		redTimer = 1
		amberTimer = 1
		greenTimer = 1
		if 'redtimer' in request.form:
			redTimer = int(request.form['redtimer'])
		if 'ambertimer' in request.form:
			amberTimer = int(request.form['ambertimer'])
		if 'greentimer' in request.form:
			greenTimer = int(request.form['greentimer'])
		return render_template('index.html', redT=redTimer, amberT=amberTimer, greenT=greenTimer, i=i)
	return render_template('index.html')


if __name__ == '__main__':
	app.run(debug=True)