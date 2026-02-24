#Setup the serverer

Open a Termnial and cd into the project directory
```
cd PATH/Coding/Pizza-Legends
```
To run the server:
```
python -m SimpleHTTPServer
```
It starts a web server at port 8000
```
Serving HTTP on 0.0.0.0 port 8000 
```

On the browser, visit:
```
localhost:8000
```

# Pixel Art editing

He used a pixel art editor that is called "ASprite" I think.

I tried https://www.pixilart.com. Here I had some problems with resizing the grid but was ok.

# To keep in mind

- In the gameloop we will just work with step, however, we should take into account that on slower/faster pcs this will show the game running faste/slower. Fixed by a time tracking function.