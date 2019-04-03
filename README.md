# Whac-A-Mole


## Domain model
This project uses mobx-state-tree to define the domain model.
The domain model is defined in models/whac.js. It contains the states of the application.

One state is `timingHandle`, which is the handle returned by a call to the `setInterval` function when user starts a new game. We need to keep track of the handle so that we can call `clearInterval` to close the handle when the game stops.

It's nice that all of that logic is outside of UI.

## Observe changes in domain model
This projects uses mobx-react-lite to make UI components observe changes in the domain model (observable). 

For example, in components/Dashboard.js, we wrap the UI component with a call to `observer`. That's all we need to do to make the UI component observe changes in the observables.

Here's one thing important to note about observer and observables. If a parent component does not render any part of an observable but merely passes the observable to a child component, then the parent's render will not be called if the observable changes.

So if the parent is an observer but its child components are not, then UI will not be updated.

## Animation
This project uses react-spring for animation.

## css styles
The UI has a dashboard and an area of moles.

The dashboard has a title, a button for starting a game, a timer and a score. I use a flex layout to arrange those elements in a row like this:

```
.dashboard {
  display: flex;
  margin-bottom: 40px;
}
```

I put in 40px of margin at the bottom of the dashboard so that there's some space between the dashboard and the moles area.

Inside the dashboard, I want the title to take up the majority of the space of the dashboard. I use `flex-grow: 6` to achieve that like this:

```
.dashboard h2 {
  flex-grow: 6;
  text-align: center;
}
```

The timer itself contains some elements for showing the two numeric digits. So I decide to give it a flex layout of its own for arranging those elements like this: 

```
.timer {
  display: flex;
  justify-content: center;
  margin: 7px 10px;
}
```

At first, I specify the margin like this `margin: auto 10px;`. That leads to a much larger margin in the top than in the bottom. So I specify the top and bottom margin explicitly to be 7px.

The mole area contains 5 moles in two rows.
I use a grid layout to arrange those moles like this:

```
.molesArea {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 100px;
  width: 70%;
  margin: auto;
}
```

Using a percentage for the width makes sure that the UI is responsive. As I resize the browser window, the actual width taken up by the moles will resize accordingly.

The widths of moles and mounds are also in percentage so that they are also responsive.

I don't specify the height of the mole area so that it will take up as much height as needed.

I don't want the two rows of moles to be too close, so I use grid-row-gap to put a 100px in between the two rows.

