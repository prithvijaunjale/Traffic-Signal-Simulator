from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def hello():
    rt = at = gt = 0
    rt = int(request.form['red_time'])
    at = int(request.form['amber_time'])
    gt = int(request.form['green_time']) 
    summ = rt + at + gt
    return render_template('index.html', rt=rt, at=at, gt=gt, summ=summ)


if __name__ == '__main__':
    app.run(debug=True)