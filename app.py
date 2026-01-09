import dash
from dash import html, dcc
import plotly.express as px

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

app = dash.Dash(__name__, title="Daniel Joseph - Dashboard")
server = app.server

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
    # Run on the default Dash development server and port 8050
    app.run_server(host="127.0.0.1", port=8050, debug=True)
