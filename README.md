# 🚀 Cutz Video Module - Angular Library

Welcome to **Cutz Video Module**, an Angular library designed to create an interactive video comparator component. This library leverages the latest features of Angular and TypeScript, providing a reusable and customizable video comparator for Angular applications. 🎬

## 📦 Features

- **Interactive Video Comparator**: Allows users to compare two videos side by side with a draggable handle.
- **Fully Customizable**: Configure video sources, poster images, and styles via `@Input` properties.
- **Responsive Design**: The component is fully responsive and adaptable to different screen sizes.
- **Touch and Mouse Support**: Works seamlessly on both touch devices and desktop.
- **Angular 17 Compatible**: Built using the latest Angular features and standards.

## 📂 File Structure

```bash
cutz-video-module/
  └── src/
    ├── lib/
    │   ├── cutz-video-module.component.html
    │   ├── cutz-video-module.component.scss
    │   ├── cutz-video-module.component.spec.ts
    │   ├── cutz-video-module.component.ts
    │   ├── cutz-video-module.service.spec.ts
    │   └── cutz-video-module.service.ts
    ├── styles/
    │   └── variables.scss
    └── public-api.ts
```

- **`cutz-video-module.component.ts`**: The main logic for the video comparator component.
- **`cutz-video-module.component.html`**: The HTML template for the video comparator.
- **`cutz-video-module.component.scss`**: Styles for the video comparator component, with imported global variables.
- **`variables.scss`**: Contains global SCSS variables for consistent theming and styling.
- **`public-api.ts`**: The entry point to export the library's public API.

## 🧩 Installation

To install the **Cutz Video Module** in your Angular project, use the following command:

```bash
npm install @uvesilva/cutz-video-module
```

Alternatively, you can install the dependency locally at your external Angular application by installing the .tgz on dist folder

```bash
cd another_angular_project
npm install <path-to-tgz-file>
```

Then, import the module into your application:

```typescript
import { CutzVideoModuleModule } from 'cutz-video-module';

@NgModule({
  declarations: [...],
  imports: [
    CutzVideoModuleModule,
    ...
  ],
  bootstrap: [...]
})
export class AppModule { }
```

## 🎮 Usage

After importing the module, you can use the video comparator component in your templates:

```html
<cutz-video-module [videoLeftSrc]="'/assets/video1.mp4'" [videoRightSrc]="'/assets/video2.mp4'" [posterImg]="'/assets/poster.jpg'"></cutz-video-module>
```

### `@Input` Properties:

- **`videoLeftSrc`**: The source URL for the left video.
- **`videoRightSrc`**: The source URL for the right video.
- **`posterImg`**: The poster image for both videos.

## 📂 File Structure (Demo App)

If you are testing the library with a demo application, the file structure could look like this:

```bash
demo-app/
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.module.ts
└── assets/
    └── media/
      └── sample_960_540_60fps.mp4
      └── sample_1920_1080_60fps.mp4
      └── poster.jpg
```

## 🛠️ Development

To develop and test the library, you can use Angular's development tools:

1. **Build the library**:

   ```bash
   ng build cutz-video-module
   ```

2. **Pack the library**

   ```bash
   npm run build-library
   ```

   After, create the .tgz file

   ```bash
   npm run pack-lib
   ```

3. **Serve the demo application**:

   ```bash
   ng serve demo-app
   ```

## 🧩 Dependencies

- **Angular 17+**: The library is built for Angular 17 or later.
- **TypeScript 5.0+**
- **Node.js** 16+
- **SCSS** for custom styles.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by [Víctor Silva](https://uvesilva.online)

```

```
