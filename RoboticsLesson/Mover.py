#!/usr/bin/env python
import rospy
import geometry_msgs.msg
import turtlesim.srv
import turtlesim.msg

pos = None

def cb(data):
	global pos
	pos = data
	rospy.loginfo("x:" + str(data.x) + " y:" + str(data.y))

if __name__ == '__main__':
	rospy.init_node('mover')
	rospy.wait_for_service('spawn')
	spawner = rospy.ServiceProxy('spawn', turtlesim.srv.Spawn)
	spawner(4,2,0,'turtle2')
	turtle_vel = rospy.Publisher('turtle2/cmd_vel', geometry_msgs.msg.Twist, queue_size=10)
	rospy.Subscriber('turtle2/pose', turtlesim.msg.Pose, cb)
	
	rate = rospy.Rate(10.0)
	
	pos = rospy.wait_for_message('turtle2/pose', turtlesim.msg.Pose)

	angular = 1
	linear = -1
	
	cmd = geometry_msgs.msg.Twist()
	cmd.linear.x = linear
	cmd.angular.z = angular

	while not rospy.is_shutdown() and pos.x <= 4:
		turtle_vel.publish(cmd)
		rate.sleep()

	angular = -1
	linear = -1

	cmd.linear.x = linear
	cmd.angular.z = angular

	while not rospy.is_shutdown() and pos.x >= 4:
		turtle_vel.publish(cmd)
		rate.sleep()
	
	rate.sleep()