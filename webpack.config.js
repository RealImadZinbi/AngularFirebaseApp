"devServer": {
    "historyApiFallback": true,
    "proxy": {
      "/api": {
        "target" : "http://165a5bb7.ngrok.io/diagnosis",
        "secure": false
      }
    }
  }