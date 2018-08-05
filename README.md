# require-math
require-math is a project I've embarked upon while learning how to use the require in Node.js; Specifically, using the require keyword to require files within a project to use their functions by way of module exports. This repository has been published to npm.
## Install
```
npm i require-math
```
## Start
```javascript
// Load all categories 
const require_math = require("require-math");

// Load methods for basic-math
const basic_math    = require("require-math/basic-math");

// Load methods for formulas
const math_formulas = require("require-math/formulas");

// Load methods for 2D-shapes
const shapes_2D     = require("require-math/2D-shapes");
```
## Methods
### **basic-math**
#### .Add()
```javascript
require_math.Add(1, 2); // 3
```
#### .Divide()
```javascript
require_math.Divide(1, 2);  // 0.5
```
#### .Modulus()
```javascript
require_math.Modulus(1, 2); // 1
```
#### .Multiply()
```javascript
require_math.Multiply(1, 2);  // 2
```
#### .Subtract()
```javascript
require_math.Subtract(1, 2);  // -1
```
### **formulas**
### *.Area = {}* 
#### .Annulus: {}
##### .inner_outer_radius_defined(inner radius, outer radius)
```javascript
require_math.Annulus.Area.inner_outer_radius_defined(34, 6); // -3518.583772020568
```
##### .average_radius_width_defined(average radius, width)
```javascript
require_math.Annulus.Area.average_radius_width_defined(45, 5); // 1413.7166941154069
```
#### .Circle(radius)
```javascript
require_math.Area.Circle(25); // 1963.4954084936207
```
#### .Ellipse(semimajor axis 1, semimajor axis 2)
```javascript
require_math.Area.Ellipse(2, 5);  // 31.41592653589793
```
#### .Parallelogram(base, height)
```javascript
require_math.Area.Parallelogram(2, 5); // 10
```
#### .Rectangle(length, width)
```javascript
require_math.Area.Rectangle(2, 5); // 10
```
#### .Square(side)
```javascript
require_math.Area.Square(25);  // 625
```
#### .Trapezoid(base 1, base 2, height)
```javascript
require_math.Area.Trapezoid(2, 5, 3);  // 10.5
```
#### .Triangle(base, height)
```javascript
require_math.Area.Triangle(2, 5); //5
```

### *.Volume = {}* 
#### .Cube(side)
```javascript
require_math.Volume.Cube(3);  // 27
```
#### .Cylinder(radius, height)
```javascript
require_math.Volume.Cylinder(3, 4);  // 113.09733552923255
```
#### .Pyramid(base, height)
```javascript
require_math.Volume.Pyramid(3, 4); // 4
```
#### .Rectangular_Prism(length, width, height)
```javascript
require_math.Volume.Rectangular_Prism(3, 4, 5);  // 60
```
#### .Sphere(radius)
```javascript
require_math.Volume.Sphere(2); // 33.510321638291124
```

### **2D-shapes**
### *.Annulus = {}*
#### .Area: {*average_radius_width_defined*, *inner_outer_radius_defined*}
##### .average_radius_width_defined(average radius, width)
```javascript
require_math.Annulus.Area.average_radius_width_defined(45, 5); // 1413.7166941154069
```
##### .inner_outer_radius_defined(inner radius, outer radius)
```javascript
require_math.Annulus.Area.inner_outer_radius_defined(34, 6); // -3518.583772020568
```
#### .Average_Radius(inner radius, outer radius)
```javascript
require_math.Annulus.Average_Radius(5, 6); // 5.5
```
#### .Width(inner radius, outer radius)
```javascript
require_math.Annulus.Width(25, 4); // -21
```
### *.Circle = {}*
#### .Area(radius)
```javascript
require_math.Circle.Area(3);    // 28.274333882308138
```
#### .Circumference: {*diameter_defined*, *radius_defined*}
##### .diameter_defined(diameter)
```javascript
require_math.Circle.Circumference.diameter_defined(68);    // 213.62830044410595
```
##### .radius_defined(radius)
```javascript
require_math.Circle.Circumference.radius_defined(67);  // 420.97341558103227
```
#### .Diameter(radius)
```javascript
require_math.Circle.Diameter(29);  // 58
```