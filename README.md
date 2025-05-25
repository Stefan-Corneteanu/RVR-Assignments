# Robotics and VR Lab assignments
The collection of reworks of my submissions for the Robotics and VR laboratories, based on which, as unofficial voluntary lab assistant, I guided my colleagues to fix their errors in their implementations.

# How to open the VRLessons
1) Recommended
    1.1) Run a local server inside of the root folder or any of the "VRLesson" folders. For example, if you have Python downloaded on your computer, you can run
    ```shell
    python -m http.server
    ```
    1.2) Open your prefered browser and type "localhost:<server_port>" (in the example above, server_port is 8000)

2) Open any .html file with your preferred browser. THIS METHOD WILL NOT WORK for VRLesson2 or VRLesson5 due to the following error:
"A-Frame:error This HTML file is currently being served via the file:// protocol. Assets, textures, and models WILL NOT WORK due to cross-origin policy! Please use a local or hosted server: https://aframe.io/docs/1.4.0/introduction/installation.html#use-a-local-server."
Attempting to open the .html files as such will lead to textures being rendered fully black, and, if there are any objects in the scene, it will not be loaded.

# Usage (VRLessons)
Explore the rendered virtual environment using WASD and the mouse

# Usage (RoboticsLesson)

See RoboticsLesson/README.md

# Special thanks to Prof. Alexandru Dumitrache, whose lab assistant I was at Robotics and Virtual Reality