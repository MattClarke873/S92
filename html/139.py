import matplotlib.pyplot as plt
import numpy as np

# Generate X values between 0 and 15 for the lines
x_values = np.linspace(0, 15, 100)

# Slope and intercept calculation for the -1000 ft line
slope_negative_1000 = (8.1 - 1) / (15 - 0)
intercept_negative_1000 = 1

# Slope and intercept calculation for the 0 ft line
slope_0ft = (10 - 2.6) / (15 - 0)
intercept_0ft = 2.6

# Slope and intercept calculation for the 1000 ft line
slope_1000ft = (11.9 - 4.2) / (15 - 0)
intercept_1000ft = 4.2

# Slope and intercept calculation for the 2000 ft line
slope_2000ft = (13.9 - 6) / (15 - 0)
intercept_2000ft = 6

# Slope and intercept calculation for the 2000 ft line
slope_3000ft = (16.1 - 7.8) / (15 - 0)
intercept_3000ft = 7.8

# Slope and intercept calculation for the 2000 ft line
slope_4000ft = (18.2 - 9.6) / (15 - 0)
intercept_4000ft = 9.6

# Slope and intercept calculation for the 2000 ft line
slope_5000ft = (20.6 - 11.7) / (15 - 0)
intercept_5000ft = 11.7

# Slope and intercept calculation for the 2000 ft line
slope_6000ft = (22.9 - 13.8) / (15 - 0)
intercept_6000ft = 13.8

# Slope and intercept calculation for the 2000 ft line
slope_7000ft = (25.5 - 15.9) / (15 - 0)
intercept_7000ft = 15.9

# Slope and intercept calculation for the 2000 ft line
slope_8000ft = (28.2 - 18.1) / (15 - 0)
intercept_8000ft = 18.1

# Slope and intercept calculation for the 2000 ft line
slope_9000ft = (31 - 20.5) / (15 - 0)
intercept_9000ft = 20.5

# Slope and intercept calculation for the 2000 ft line
slope_10000ft = (33.8 - 23) / (15 - 0)
intercept_10000ft = 23

# Slope and intercept calculation for the 2000 ft line
slope_11000ft = (36.9 - 25.6) / (15 - 0)
intercept_11000ft = 25.6

# Slope and intercept calculation for the 2000 ft line
slope_12000ft = (40.05 - 28.3) / (15 - 0)
intercept_12000ft = 28.3

# Slope and intercept calculation for the 2000 ft line
slope_13000ft = (43.4 - 31) / (15 - 0)
intercept_13000ft = 31

# Slope and intercept calculation for the 2000 ft line
slope_14000ft = (46.9 - 34.1) / (15 - 0)
intercept_14000ft = 34.1




# Calculate the Y values for each line using y = mx + b
y_values_negative_1000 = slope_negative_1000 * x_values + intercept_negative_1000
y_values_0ft = slope_0ft * x_values + intercept_0ft
y_values_1000ft = slope_1000ft * x_values + intercept_1000ft
y_values_2000ft = slope_2000ft * x_values + intercept_2000ft
y_values_3000ft = slope_3000ft * x_values + intercept_3000ft
y_values_4000ft = slope_4000ft * x_values + intercept_4000ft
y_values_5000ft = slope_5000ft * x_values + intercept_5000ft
y_values_6000ft = slope_6000ft * x_values + intercept_6000ft
y_values_7000ft = slope_7000ft * x_values + intercept_7000ft
y_values_8000ft = slope_8000ft * x_values + intercept_8000ft
y_values_9000ft = slope_9000ft * x_values + intercept_9000ft
y_values_10000ft = slope_10000ft * x_values + intercept_10000ft
y_values_11000ft = slope_11000ft * x_values + intercept_11000ft
y_values_12000ft = slope_12000ft * x_values + intercept_12000ft
y_values_13000ft = slope_13000ft * x_values + intercept_13000ft
y_values_14000ft = slope_14000ft * x_values + intercept_14000ft
# Adjusting the figure size to make columns narrower and rows taller
fig, ax = plt.subplots(figsize=(8, 8))  # Square figure

# Set the x and y limits for the graph
ax.set_xlim(0, 40)
ax.set_ylim(0, 50)

# Define the X-axis ticks and their labels for Top


# Define the X-axis ticks and their labels for Bottom
ax.set_xticks([0, 5, 10, 15])
ax.set_xticklabels([90, 95, 100, 105])
ax.tick_params(top=False, labeltop=False, bottom=True, labelbottom=True)

ax_t = ax.secondary_xaxis('top')
ax_t.tick_params(axis='x', direction='inout')
ax_t.set_xticks([5, 10, 15, 20, 25, 30, 35])
ax_t.set_xticklabels([500, '' ,600, '', 700,'', 800])
ax_t.tick_params(top=True, labeltop=True, bottom=False, labelbottom=False)
# Define the Y-axis ticks and their labels
ax.set_yticks([1, 2.6, 4.2,6,7.8,9.6,11.7, 13.8,15.9,18.1,20.5,23,25.6,28.3,31,34.1])
ax.set_yticklabels([-1000, 0, 1000, 2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000])

# Drawing grid lines along the Y-axis with every 5th line thicker
for y in range(0, 51, 1):
    if y % 5 == 0:
        ax.axhline(y=y, color='black', linewidth=2)  # Thicker line every 5th unit
    else:
        ax.axhline(y=y, color='gray', linewidth=0.5)  # Thinner lines in between

# Adding grid to X axis only
ax.grid(True, axis='x')

# Adding labels to the X and Y axes
ax.set_xlabel('Torque')
ax.set_ylabel('Pressure Alt')

altColor = 'blue'
# Plot the -1000 ft line
ax.plot(x_values, y_values_negative_1000, color=altColor, label='-1000 ft Line')

# Plot the 0 ft line
ax.plot(x_values, y_values_0ft, color=altColor, label='0 ft Line')

# Plot the 1000 ft line
ax.plot(x_values, y_values_1000ft, color=altColor, label='1000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_2000ft, color=altColor, label='2000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_3000ft, color=altColor, label='3000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_4000ft, color=altColor, label='4000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_5000ft, color=altColor, label='5000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_6000ft, color=altColor, label='6000 ft Line')

# Plot the 7000 ft line
ax.plot(x_values, y_values_7000ft, color=altColor, label='7000 ft Line')

# Plot the 0 ft line
ax.plot(x_values, y_values_8000ft, color=altColor, label='8000 ft Line')

# Plot the 1000 ft line
ax.plot(x_values, y_values_9000ft, color=altColor, label='9000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_10000ft, color=altColor, label='10000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_11000ft, color=altColor, label='11000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_12000ft, color=altColor, label='12000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_13000ft, color=altColor, label='13000 ft Line')

# Plot the 2000 ft line
ax.plot(x_values, y_values_14000ft, color=altColor, label='14000 ft Line')

# Adding legend to indicate the lines
# ax.legend()

# Display the plot
plt.show()