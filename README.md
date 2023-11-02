# Etch-A-Sketch Project

This repository contains an interactive Etch-A-Sketch simulation built using JavaScript, CSS and HTML.

## Try it
[Playground](https://arecabarren.github.io/etch-A-Sketch/)

## Introduction

The Etch-A-Sketch project is a fun exercise to demonstrate and improve DOM manipulation skills. The final output is a versatile web-based game, a blend of a sketchpad and an Etch-A-Sketch toy. Users can draw pixelated images by moving their mouse over a grid, creating a trail like a pen would do. Accessibility, making the most of HTML, CSS and JavaScript, and frequent lookups for the best methods and practices are integral to this project. 

## Project Structure

The project involves creating a webpage with a 16x16 grid of square divs. These divs are dynamically created using JavaScript, housed in a container div. The appearance is achieved using CSS Flexbox for grid layout. A "hover" event listener is set on these divs to change their color as the mouse moves over them, simulating the drawing action.

## Features

1. **Interactive Drawing Grid** – Users can draw by simply moving their mouse over the grid. The respective grid sections change color, creating a trail.

2. **Custom Grid Size** – A button allows users to reset the size of the grid. Upon clicking, users can input the number of squares per side they want for their new grid, up to a maximum of 100 for performance reasons. The existing grid is removed, and a new one is created in the same total space as before.


## Instructions

1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser.
3. Pass the mouse over the grid to start drawing. A trail is left as the mouse moves, changing the color of the grid divs.
4. To change the size of the grid, press the "Reset Grid" button and enter the desired new grid size (up to 100 squares per side).

## Extra Features (For Future Development)

1. **Randomized Color Implementation** – Instead of a simple static color change, the future implementation would randomize the square's RGB value entirely with each interaction.
2. **Progressive Darkening Effect** – An interactive darkening effect that would increase the black or color on the square by 10% with each interaction, achieving a completely black square only after ten interactions.
