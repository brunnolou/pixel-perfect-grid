## The perfect grid layout tool

### The concept
Don't design using an "X" number of columns grid. (Like the traditional bootstrap grid)
Use these instead:
- Containers
- Divisions
- Spacing

### The Problem
* There is a mismatch between the chosen **grid** and the app **spacings**.
* When you are designing a mobile or tablet version you generally need to define different gutters and number of columns and using a column count different than 12 or 6 cannot be divided by the most common division count (2, 3, and 4).
* Using the space outside the of a grid in the traditional method it's hard, but easily solved by a max width container.

### The solution
- Use the defined spacings to separate the divided section instead of one fixed gutter.
- Aim to use containers width that results into rounded divisions
- Use containers instead of offset columns
- Make everything aligned (or at least look good in the design system)
- Simplify development and design process
