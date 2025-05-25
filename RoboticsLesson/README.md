# RoboticsLesson
The only robotics lesson in which we had the opportunity to write scripts to automate the movement of a robot (simulated by turtlesim). This lesson focuses on building a ros project using catkin, a cmake based build system, scripting with python and ROS packages like rospy and geometry_msgs, and the pub/sub communication between nodes.

# Usage
1) Download Oracle VirtualBox
2) Create a new VM using the .ova file here (https://drive.google.com/file/d/0B_ULD8CBaw26TEpqUG1McGs5aVU/edit?resourcekey=0-rlmHZJ1bun4gx3m40560vA)
3) Run the following commands:
```shell
mkdir -p ˜/catkin_ws/src
cd ˜/catkin_ws/
catkin_make
cd src
catkin_create_pkg rospy
catkin_create_pkg roscpp
catkin_create_pkg std_msgs
catkin_create_pkg geometry_msgs
cd ..
catkin_make
source ./devel/setup.bash
```
4) Download inside the VM the Mover.py script and place it inside the src folder
5) Open 3 terminals (T1, T2, T3) and run the following commands:
T1:
```shell
roscore &
```
T2:
```shell
rosrun turtlesim turtlesim_node
```
T3:
```shell
cd path/to/Mover.py
./Mover.py
```
One should see a 2nd Turtle spawn on the screen and move in an S shape like in the image attached