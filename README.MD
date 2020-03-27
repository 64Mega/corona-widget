# Corona Virus Info Panel/Widget

## About

A simple overlay widget that displays a link allowing users to get information on the Corona Virus.

## Why are you doing this?

The South African Department of Telecommunications has, in a gazette published on
the 26th of March 2020 (Vol. 657, No. 43164), has made it mandatory for all .za
TLDs to display a link to the [official government Corona Virus information portal](https://sacoronavirus.co.za/).

I'm a South African developer, and I'm in charge of or responsible for maintenance on a number of .ZA TLDs at this point in time and, by the principles of DRY,
am creating a semi-configurable overlay that can be quickly deployed on all of them, work on mobile and desktop devices,
and be quickly positioned around as necessary to avoid conflict with other such information overlays.

## Using this with your own site

### Static Version

The `dist` directory contains a prebuilt version of the widget with baked-in options to display the widget at the bottom-right of the screen (Or on the lower part of the screen on mobile devices), with a link to the South African Corona Virus portal.

This version is suitable for South African websites needing to comply with the new requirements.

### Building from source

If you want to quickly repurpose the styling, message or other parts of the widget, you'll need a decently recent version of Node (With `npx`) and `yarn`.
The build step is done via Parcel-CLI.

`yarn start` runs a live dev-server at `localhost:1234` with a simple dummy site as a backdrop for testing the widget.

`yarn build` outputs `app.js` and `app.css` to the `dist` directory.

### Stay safe!
