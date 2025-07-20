# Copilot Cam

A 3D model viewer that brings GitHub Copilot to life with interactive webcam reflections and video textures.

This is vibe coding experiment with GitHub Copilot, Claude Sonnet 4.0, and lots of caffeine and Red Bull. 

Built for GitHub's [For the Love of Code](https://gh.io/ftloc) hackathon.

![Screenshot](https://github.com/user-attachments/assets/0560da18-b5ea-4cf9-9dab-f4ea705183e0)

## Features

- **Interactive 3D Model**: View and rotate a detailed 3D model of GitHub Copilot
- **Webcam Integration**: Your webcam feed is applied as texture to the left lens
- **Video Playback**: MP4 video plays on the right lens
- **Synthwave Eyes**: Animated glowing eyes with pulsing colors
- **Reflection Mode**: Webcam provides environmental reflections on metallic surfaces
- **Responsive Design**: Works across different screen sizes and devices

## How It Works

The application uses Three.js to render a 3D scene with:
- GLB model loading for the Copilot 3D model
- Real-time webcam capture and texture mapping
- Video texture application to specific mesh components
- Dynamic lighting and material effects
- Orbital camera controls for interactive viewing

## Technical Details

- **Framework**: Three.js for 3D rendering
- **Model Format**: GLB (binary glTF)
- **Video Input**: WebRTC getUserMedia API for webcam access
- **Rendering**: WebGL with shadow mapping and tone mapping
- **Materials**: PBR (Physically Based Rendering) materials with custom shaders

## Usage

1. Open `index.html` in a modern web browser
2. Allow webcam access when prompted
3. Use mouse to rotate the model, scroll to zoom
4. Your webcam feed will appear on the left lens
5. Watch the synthwave-style animated eyes glow

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

**Note**: Requires HTTPS or localhost for webcam access in most browsers.

## Files

- `index.html` - Main application with 3D viewer
- `share-modal.js` - Share functionality (Web Share API)
- `copilot.glb` - 3D model file
- `vid.mp4` - Video asset for right lens
- `LICENSE` - MIT license

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note**: The MIT License applies to all files in this repository except for the `copilot.glb` 3D model file, which is used without explicit permission and is not covered by this license.
