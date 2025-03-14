## 📥 Install Django Template Helper  
[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/Exhil95.django-template-helper)](https://marketplace.visualstudio.com/items?itemName=Exhil95.django-template-helper)

🔗 **[Download from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Exhil95.django-template-helper)**



# Django Template Helper - VS Code Extension

Django Template Helper is a Visual Studio Code extension that improves syntax highlighting, auto-closing tags, and Emmet support for Django Templates. This extension ensures a smoother development experience when working with `.html` files in Django projects.

## 🚀 Features
- ✅ Enables **Emmet support** for Django Templates
- ✅ Adds **auto-closing tags** for Django `.html` files
- ✅ Maintains **syntax highlighting** for `{% ... %}` and `{{ ... }}` tags
- ✅ Applies best **formatting settings** for Django Templates
- ✅ Provides a **one-click fix** to apply recommended settings

---

## 📥 Installation
### **From VS Code Marketplace**
1. Open **Visual Studio Code**
2. Go to **Extensions** (`Ctrl + Shift + X` or `Cmd + Shift + X` on macOS)
3. Search for `Django Template Helper`
4. Click **Install**

### **Manual Installation**
1. Download the `.vsix` package from the [Releases](https://github.com/Exhil95/django-template-helper/releases)
2. Open VS Code and go to `Extensions` (`Ctrl + Shift + X`)
3. Click the `...` menu in the top right and select `Install from VSIX`
4. Select the downloaded `.vsix` file

---

## ⚙️ Usage
### **Automatic Fix**
1. Open a Django `.html` template file
2. Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS)
3. Search for `Django Template Fix – Apply Recommended Settings`
4. Press `Enter`

### **What It Does**
- Associates `.html` files with Django syntax (`django-html`)
- Enables Emmet for Django templates
- Ensures auto-closing tags work correctly
- Formats Django templates properly

---

## 🛠️ Configuration
If you want to manually tweak settings, add this to your `settings.json`:

```json
{
    "files.associations": {
        "*.html": "django-html"
    },
    "emmet.includeLanguages": {
        "django-html": "html"
    },
    "auto-close-tag.activationOnLanguage": [
        "django-html"
    ],
    "editor.defaultFormatter": "vscode.html-language-features"
}
```

---

## 🛠 Development
### **Setup**
1. Clone the repository:
   ```sh
   git clone https://github.com/Exhil95/django-template-helper.git
   cd django-template-helper
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Compile TypeScript:
   ```sh
   npx tsc
   ```
4. Run the extension in VS Code:
   ```sh
   code .
   ```

### **Build & Publish**
To package the extension:
```sh
npx vsce package
```

To publish (replace `YOUR_PUBLISHER` with your VS Code Marketplace publisher ID):
```sh
npx vsce publish --pat YOUR_PERSONAL_ACCESS_TOKEN
```

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing
We welcome contributions! Feel free to **fork the repo**, submit a **pull request**, or report **issues**.

---

## ⭐ Support
If you find this extension helpful, **star the repository** on GitHub!

🔗 [GitHub Repository](https://github.com/Exhil95/django-template-helper)

