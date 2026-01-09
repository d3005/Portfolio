import os
import dash
from dash import html, dcc
import plotly.express as px
from pathlib import Path
from flask import send_from_directory

# Sample dataset for a quick demo chart
iris = px.data.iris()
fig = px.scatter(
    iris,
    x="sepal_width",
    y="sepal_length",
    color="species",
    title="Iris Sepal Dimensions",
    labels={"sepal_width": "Sepal Width", "sepal_length": "Sepal Length"},
    height=500,
)

BASE_PATH = os.getenv("DASH_BASE_PATHNAME", "/dashboard/")
if not BASE_PATH.endswith("/"):
    BASE_PATH = BASE_PATH + "/"

app = dash.Dash(
    __name__,
    title="Daniel Joseph - Dashboard",
    requests_pathname_prefix=BASE_PATH,
    routes_pathname_prefix=BASE_PATH,
)
server = app.server

BASE_DIR = Path(__file__).resolve().parent

@server.route("/")
def serve_root():
    return send_from_directory(str(BASE_DIR), "index.html")

@server.route("/styles.css")
def serve_styles():
    return send_from_directory(str(BASE_DIR), "styles.css")

@server.route("/script.js")
def serve_script():
    return send_from_directory(str(BASE_DIR), "script.js")

@server.route("/assets/<path:filename>")
def serve_assets(filename):
    return send_from_directory(str(BASE_DIR / "assets"), filename)

@server.route("/favicon.png")
def serve_favicon():
    return send_from_directory(str(BASE_DIR), "favicon.png")

app.layout = html.Div(
    [
        html.H1("Interactive Data Dashboard", style={"textAlign": "center"}),
        html.P(
            "This demo chart is powered by Dash and Plotly. Replace it with your own visualizations.",
            style={"textAlign": "center", "color": "#555"},
        ),
        dcc.Graph(figure=fig),
    ],
    style={"maxWidth": "1000px", "margin": "0 auto", "padding": "20px"},
)

if __name__ == "__main__":
    app.run_server(host="0.0.0.0", port=8000, debug=True)
