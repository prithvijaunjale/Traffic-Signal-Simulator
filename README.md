# Traffic Signal Simulator
Web interface & back-end of an I.O.T based application for a Traffic Management System.

## About the Traffic Management System
The aim is to build a traffic management system using I.O.T devices such as [Raspberry Pi](https://www.raspberrypi.org) and [SENSEnuts](https://www.eigen.in/pdf/sensenutsuniversity.pdf).
The system will track the number of vehicles at a signal using live cameras and calculate the signal timer values.

## About the Interface
- The interface is a simulation of the traffic signal, where the algorithm provides timer values on the basis of the number of cars at the signal.
- The webpage is built using HTML5 & [Bootstrap](https://getbootstrap.com).
- The [Flask](https://github.com/pallets/flask) framework is currently used to accept user input values. (Later it will be used to integrate the algorithm with the webpage.)