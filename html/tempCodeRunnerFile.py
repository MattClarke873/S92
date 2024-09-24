for x in range(0, 51, 1):
    if x % 5 == 0:
        ax.axhline(x=x, color='black', linewidth=2)  # Thicker line every 5th unit
    else:
        ax.axhline(x=x, color='gray', linewidth=0.5)  # Thinner lines in between

