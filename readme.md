# In Scale Isomorphic Keyboard for Launchpad + Logic

![Launchpad Layout](layout.png | width=150)

Combining this Logic Pro X Scripter script with a Custom Mode for Novation Launchpad gives you an isomorphic in-scale keyboard as popularized by Ableton Push.

**The Custom Mode**: The custom mode creates an in-scale layout for the C Major scale. This has some utility without the plugin as well.

**The Plugin**: The scripter plugin takes in notes from a C Major scale and shifts them to the selected scale, root note and octave. As well as working with the Launchpad layout, you can also use this to play any keyboard on "Easy Mode", where the white keys can play any scale.

## Installation

### Scripter Script

Copy the file `in-scale.pst` to `~/Music/Audio Music Apps/Plug-In Settings/Scripter`.

Alternatively, you can copy the code contained in `in-scale.js` into a new Scripter instance and save as a preset. If you don't use other scripts, you can also select "Save as Default" from the presets dropdown for quick access.

![Screenshot of Logic Pro Scripter plugin](scripter.png | width=300)

### Custom Mode

Launch [Novation Components](https://components.novation.com) and connect to your Launchpad.
Click `New Custom Mode` in the top left and then `Upload Custom Mode` then select the file `in-scale-custom-mode.syx`.
In the top right, click `Send to Launchpad` and select the slot you want.

I have only tested the custom mode with Launchpad Mini Mk3, because that's what I have. It is possible to import the custom mode to a Launchpad Pro Mk3 or Launchpad X so I expect they would work as well. I appreciate feedback on that.

## Usage

On any Software Instrument track, add the `Scripter` MIDI Plugin in the channel strip and load the `in-scale` preset. Select the choosen custom mode slot on your Launchpad.

In the Scripter window, configure major/minor, root note and octave offset to match your project and instrument. The scales match the available project scales in Logic.

### On Parameters and Recording

When recording parts with this keyboard, Logic will write the keys pressed on the Launchpad (C Major) to the MIDI track, not the notes shifted by the plugin. That means that you cannot change any setting, like octave range or fixed velocity, without also shifting the recorded notes.

### Fixed Velocity

Because the Launchpad Mini doesn't have velocity this allows you to set a fixed value. However different notes cannot have different velocites, unless you automate this parameter. Set to `0` to leave velocity alone.

### MIDI Channel

By default, the plugin only processes notes on MIDI channel 3 and the custom mode sends notes on channel 3. This allows you to freely play and record other parts with another keyboard like the Keys custom mode or the piano roll.
You can change the channel (to 1) if you want to use the plugin for "Easy Mode" on a normal keyboard.
